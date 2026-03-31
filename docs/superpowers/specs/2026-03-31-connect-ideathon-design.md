# Connect Ideathon — Design Spec
**Data:** 2026-03-31
**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · CSS Modules

---

## 1. Visão geral

Site institucional para o Connect Ideathon 2026, evento universitário em Florianópolis organizado pelo PETEEL/UFSC. O objetivo central é ter uma base onde qualquer membro da equipe consiga atualizar textos, cores, logo e conteúdo **sem mexer em código de componente** — apenas editando dois arquivos de configuração.

---

## 2. Localização do projeto

Scaffolding direto em `/home/arthur/dev/Connect/Site/` via:

```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
```

---

## 3. Sistema de configuração — fonte única de verdade

### `config/site.ts`
Exporta `siteConfig` com todo o conteúdo textual e dados do evento:
- `event`: nome, edição, cidade, data, `registrationsOpen` (boolean), `registrationsUrl`, Instagram, email
- `hero`: eyebrow, título, acento, descrição, CTAs, stats
- `metodologia`: label, título, cards (com `accent` inline)
- `empresas`: label, título, subtítulo, CTA, lista de benefícios
- `comoFunciona`: label, título, subtítulo, steps (num, title, text)
- `parceiros`: label, título, descrição, estado "em breve", `realizadores[]` e `patrocinadores[]` opcionais
- `cta`: tag, título, subtítulo, CTAs
- `footer`: realizacao, links, info
- `peteel`: name, description

### `config/theme.ts`
Exporta `theme` com todos os tokens visuais:
- `colors`: azul, magenta, magentaEscuro, laranja, laranjaEscuro, roxo, azulEscuro, azulDetalhe, ciano, claro, claroEscuro, textDark, textMuted
- `fonts`: sans (Century Gothic), serif (Constantia), condensed (Tw Cen MT Condensed)
- `logo`: `default`, `white`, `textMode` (boolean), `text`

---

## 4. Sistema de CSS (Abordagem C — injeção via layout)

`app/layout.tsx` importa `theme.ts` e injeta um `<style>` no `<head>` com as CSS variables:

```tsx
// app/layout.tsx
import { theme } from "@/config/theme"

const cssVars = Object.entries(theme.colors)
  .map(([key, val]) => `--${toKebab(key)}: ${val};`)
  .join('\n')

// <style>{`:root { ${cssVars} }`}</style>
```

Componentes usam `var(--azul)`, `var(--claro)` etc. via CSS Modules ou `globals.css`. Tailwind é usado apenas para utilitários de layout/espaçamento — nunca para cores.

`globals.css` contém: reset, `scroll-behavior: smooth`, `overflow-x: hidden`, `font-family` base, e utilitários de animação.

---

## 5. Estrutura de arquivos

```
connect-site/
├── config/
│   ├── site.ts
│   └── theme.ts
├── public/
│   ├── logo.svg          (placeholder — texto "C" em SVG)
│   └── logo-white.svg    (placeholder branco)
├── app/
│   ├── layout.tsx        (CSS vars + Nav + Footer + metadata)
│   ├── page.tsx          (composição das seções)
│   ├── globals.css       (reset + base)
│   └── empresas/
│       └── page.tsx      (formulário de parceiros)
├── components/
│   ├── layout/
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Metodologia.tsx
│   │   ├── Empresas.tsx
│   │   ├── ComoFunciona.tsx
│   │   ├── Parceiros.tsx
│   │   └── CTA.tsx
│   └── ui/
│       ├── MountainDivider.tsx
│       ├── BridgeDivider.tsx
│       ├── AntTrail.tsx
│       └── Button.tsx
├── docs/superpowers/specs/  (este arquivo)
└── lib/utils.ts
```

---

## 6. Componentes UI

### `Button`
Variantes: `primary | secondary | white | outline-white`.
Renderiza `<a href>` quando a prop `href` é passada, `<button>` caso contrário.
Estilos via CSS Module.

### `AntTrail`
SVG inline de pontos que diminuem em perspectiva (raio e opacidade decrescentes).
- `direction?: "horizontal" | "ascending"` — horizontal para separadores de seção, ascending para o Hero
- `color?: string` — padrão `var(--azul)`
- `opacity?: number`

Pontos extraídos diretamente do HTML de referência.

### `MountainDivider`
SVG de silhueta orgânica com curvas Bézier.
- `fromColor: string` — cor do fundo de onde a montanha nasce (background do SVG)
- `toColor: string` — cor do `<path fill>` (o preenchimento da montanha)
- `flip?: boolean` — inverte verticalmente via `transform: scaleY(-1)`
- `variant?: "A" | "B" | "C"` — três `path d=""` distintos extraídos do HTML

Comentários inline no componente identificam cada pico e curva para facilitar edição futura.

### `BridgeDivider`
SVG de ponte suspensa com cabos catenários.
- `fromColor: string`
- `toColor: string`
- `showFigure?: boolean` — silhueta humana apoiada na grade
- `showAntTrail?: boolean` — trilha de pontos no deck da ponte

Comentários inline identificam: deck, trilhos, torres, cabos principais, cabos secundários (hangers), figura.

---

## 7. Seções da landing page (ordem em `page.tsx`)

| Ordem | Componente | Fundo | Divisor após |
|-------|-----------|-------|--------------|
| 1 | `Hero` | `--claro` | `MountainDivider` variant A (claro → branco) |
| 2 | `Metodologia` | `#fff` | `MountainDivider` variant B (branco → azul-escuro) |
| 3 | `Empresas` | `--azul-escuro` | `BridgeDivider` (azul-escuro → claro, figura + trilha) |
| 4 | `ComoFunciona` | `--claro` | `MountainDivider` variant C (claro → branco) |
| 5 | `Parceiros` | `#fff` | Peteel Band + `MountainDivider` variant B (branco → azul-escuro) |
| 6 | `CTA` | `--azul-escuro` | — (último antes do footer) |

> **Nota:** `MountainDivider` variant B é usado duas vezes (após Metodologia e após Parceiros) — mesmo path, mesmas cores. As variantes A, B, C correspondem a três `path d=""` distintos extraídos do HTML de referência.

---

## 8. Comportamentos dinâmicos

### Inscrições
- `registrationsOpen === false` → botão exibe `cta.ctaPrimary` ("Avise-me quando abrir"), sem `href` ativo
- `registrationsOpen === true` → botão exibe "Inscrever agora" com `href={registrationsUrl}`
- Lógica centralizada em `lib/utils.ts` (função `getCtaProps`), consumida por `Hero` e `CTA`

### Parceiros
- `parceiros.realizadores` ausente ou vazio → renderiza bloco "Em breve"
- `parceiros.realizadores` com itens → renderiza grid de chips
- Lógica inteiramente em `Parceiros.tsx`, sem `if` espalhado em `page.tsx`

### Logo
- `theme.logo.textMode === true` → renderiza texto `theme.logo.text` + `AntTrail` mark (três pontos diagonais)
- `theme.logo.textMode === false` → renderiza `<Image src={theme.logo.default} />`
- Usado em `Nav` e `Footer` via componente `LogoMark` interno

---

## 9. Página `/empresas`

Formulário com:
- Nome da empresa (required)
- Nome do responsável (required)
- Email (required, type="email")
- Mensagem (opcional, textarea)
- Botão "Enviar"

**Action:** sem backend por enquanto — `<form>` sem `action`, com comentário `{/* TODO: plugar backend — mailto:, Netlify Forms ou API */}`. Visual idêntico ao restante do site.

---

## 10. Customização de SVGs

Para equipes que queiram alterar as silhuetas:

- **Montanha:** editar `path d=""` da variante correspondente em `MountainDivider.tsx`. Comentários inline identificam cada pico.
- **Ponte:** editar paths em `BridgeDivider.tsx`. Comentários identificam deck, torres, cabos principais, hangers.
- **Trilha:** ajustar `cx`, `cy`, `r`, `opacity` de cada `<circle>` em `AntTrail.tsx`.

O README documenta isso com exemplos.

---

## 11. Animações

`@keyframes fadeUp` com delays escalonados no Hero, em CSS puro em `globals.css`. Sem Framer Motion ou qualquer lib de animação.

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

Classes aplicadas diretamente nos elementos do `Hero.tsx` com `animation-delay` escalonado via CSS Module.

---

## 12. README

Seções:
- Como trocar a logo
- Como mudar textos e conteúdo
- Como mudar cores
- Como adicionar parceiros
- Como abrir inscrições
- Como customizar os SVGs (seção adicional — identifica arquivos e comentários inline)

---

## 13. O que está fora de escopo

- Backend/API de formulário
- Autenticação ou área restrita
- Internacionalização
- Analytics
- CMS headless
