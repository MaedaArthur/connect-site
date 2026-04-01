# Prompt — Connect Ideathon Website

## Contexto

Crie um site completo em **Next.js 14 (App Router)** para o Connect Ideathon, um evento universitário em Florianópolis. O HTML de referência (`connect.html`) define com precisão o design visual — preserva-o fielmente. O objetivo deste projeto é ter uma base organizada onde qualquer pessoa da equipe consiga alterar textos, cores, logo e conteúdo sem precisar mexer em código de componente.

---

## Stack

- **Next.js 14** com App Router
- **TypeScript**
- **Tailwind CSS** (apenas para utilitários de layout/espaçamento — não use classes de cor do Tailwind, as cores vêm do design token)
- **CSS Modules** para estilos específicos de componente quando necessário
- Sem bibliotecas de UI externas (sem shadcn, MUI, etc.)

---

## Estrutura de arquivos esperada

```
connect-site/
├── README.md
├── package.json
├── next.config.ts
├── tailwind.config.ts
│
├── config/
│   ├── site.ts          ← FONTE ÚNICA DE VERDADE: todos os textos, dados e configurações do evento
│   └── theme.ts         ← FONTE ÚNICA DE VERDADE: todas as cores, fontes e tokens visuais
│
├── public/
│   ├── logo.svg         ← Logo do evento (substituível)
│   ├── logo-white.svg   ← Versão branca da logo (substituível)
│   └── fonts/           ← Century Gothic local se disponível
│
├── app/
│   ├── layout.tsx       ← Root layout (fonte, metadata, nav, footer)
│   ├── page.tsx         ← Landing page (importa e ordena as seções)
│   ├── globals.css      ← CSS variables geradas a partir de theme.ts + reset
│   └── empresas/
│       └── page.tsx     ← Página de interesse para parceiros (formulário simples)
│
├── components/
│   ├── layout/
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Metodologia.tsx
│   │   ├── Empresas.tsx
│   │   ├── ComoFunciona.tsx
│   │   ├── Parceiros.tsx
│   │   └── CTA.tsx
│   │
│   └── ui/
│       ├── MountainDivider.tsx   ← SVG de montanha reutilizável com props
│       ├── BridgeDivider.tsx     ← SVG de ponte reutilizável com props
│       ├── AntTrail.tsx          ← Trilha de pontos conceitual com props
│       └── Button.tsx
│
└── lib/
    └── utils.ts
```

---

## O arquivo `config/site.ts` — CRÍTICO

Este é o arquivo que a equipe vai editar para atualizar o site. Deve exportar um objeto `siteConfig` com **todo o conteúdo textual e dados do evento**. Exemplo da estrutura esperada:

```typescript
// config/site.ts
export const siteConfig = {
  event: {
    name: "Connect",
    fullName: "Connect Ideathon",
    edition: "2026",
    city: "Florianópolis",
    date: "Agosto 2026",
    registrationsOpen: false,          // muda para true quando abrir inscrições
    registrationsUrl: "",              // URL do formulário quando abrir
    instagramUrl: "https://instagram.com/connect",
    contactEmail: "contato@connect.com",
  },

  hero: {
    eyebrow: "Florianópolis · Agosto 2026",
    titleLine1: "O problema é",
    titleLine2: "sua primeira",         // renderizado em itálico
    accent: "missão.",
    description: "Um ideathon universitário onde você não recebe o problema pronto. Você investiga, identifica e valida o desafio real de empresas de Florianópolis — antes de propor qualquer solução.",
    ctaPrimary: "Quero participar",
    ctaSecondary: "Como funciona",
    stats: [
      { value: "75",  label: "Participantes" },
      { value: "4–5", label: "Por equipe" },
      { value: "1",   label: "Metodologia única" },
    ],
  },

  metodologia: {
    label: "Metodologia",
    title: "Mirror-Problem-",
    titleItalic: "First",
    subtitle: "Antes de propor qualquer solução, você precisa encontrar o problema. Uma narrativa fictícia, fiel à realidade de uma empresa — cheia de sinais que só os mais atentos enxergam.",
    cards: [
      {
        num: "01",
        title: "A Narrativa",
        accent: "história fictícia",
        text: "Você recebe uma {accent} inspirada no cotidiano real de uma empresa. Dados, documentos, métricas — tudo propositalmente cheio de inconsistências sutis.",
      },
      {
        num: "02",
        title: "A Investigação",
        accent: "mentor dedicado",
        text: "Sua equipe investiga e constrói hipóteses. Um {accent} da empresa guia com perguntas socráticas — nunca com respostas. O raciocínio é seu.",
      },
      {
        num: "03",
        title: "A Defesa",
        accent: "defende o problema",
        text: "Antes da solução, você {accent} diante de uma banca híbrida. Representantes da empresa e avaliadores externos. Quem identifica melhor, lidera.",
      },
    ],
  },

  empresas: {
    label: "Para empresas",
    title: "Mais que patrocínio.",
    titleItalic: "Imersão real.",
    subtitle: "O Connect funciona como um processo seletivo disfarçado de competição. Você observa raciocínio analítico, comunicação e resiliência em ação — sem roteiro.",
    cta: "Quero ser parceiro",
    benefits: [
      "Processo seletivo imersivo — observe os candidatos trabalhando, não sendo entrevistados",
      "Soluções aplicáveis geradas para os seus processos internos reais",
      "Employer branding junto a jovens de alto potencial de Florianópolis",
      "Possibilidade de oferecer vaga de estágio ao vencedor do seu escopo",
      "Mentor dedicado representando sua empresa dentro do evento",
      "Banca avaliadora com peso dobrado para a empresa-dona do caso",
    ],
  },

  comoFunciona: {
    label: "Passo a passo",
    title: "Do problema",
    titleItalic: "à solução",
    subtitle: "Quatro etapas que separam o participante comum do talento que as empresas estão procurando.",
    steps: [
      {
        num: "01",
        title: "Narrativa",
        text: "Sua equipe recebe a história fictícia e os dados da empresa. O problema está escondido. Começa a caçada.",
      },
      {
        num: "02",
        title: "Investigação",
        text: "Com ajuda do mentor e do ConnectAI, você valida hipóteses, acessa dados reais e defende seu raciocínio.",
      },
      {
        num: "03",
        title: "Defesa do Problema",
        text: "Antes da solução, você apresenta o problema identificado. Clareza e lógica valem mais que slides bonitos.",
      },
      {
        num: "04",
        title: "Pitch Final",
        text: "Com o problema validado, vem a solução. Banca híbrida — peso dobrado para a empresa do seu caso.",
      },
    ],
  },

  parceiros: {
    label: "Ecossistema",
    title: "Quem está",
    titleItalic: "junto",
    description: "Um evento construído em parceria com instituições e empresas do ecossistema de inovação de Florianópolis.",
    comingSoonTitle: "Em breve",
    comingSoonText: "Empresas e instituições parceiras estão sendo confirmadas. Se sua organização quer fazer parte do Connect 2026, entre em contato.",
    comingSoonCta: "Quero ser parceiro",
    // Quando tiver parceiros confirmados, adicione aqui:
    // realizadores: [{ name: "CREA", type: "realizador" }, ...],
    // patrocinadores: [{ name: "Softplan", logo: "/logos/softplan.svg" }, ...],
  },

  cta: {
    tag: "Inscrições em breve · Agosto 2026",
    title: "Pronto para",
    titleItalic: "encontrar o problema?",
    subtitle: "75 vagas. Times de 4 a 5 pessoas. Empresas reais de Florianópolis. Um único evento que pode mudar o rumo da sua carreira.",
    ctaPrimary: "Avise-me quando abrir",
    ctaSecondary: "Seguir no Instagram",
  },

  footer: {
    realizacao: "Uma realização PETEEL",
    links: [
      { label: "Metodologia", href: "#metodo" },
      { label: "Empresas",    href: "#empresas" },
      { label: "Parceiros",   href: "#parceiros" },
      { label: "Instagram",   href: "https://instagram.com/connect" },
    ],
    info: "Agosto 2026",
  },

  peteel: {
    name: "PETEEL",
    description: "Grupo PET · Engenharia Elétrica · UFSC",
  },
}
```

---

## O arquivo `config/theme.ts` — CRÍTICO

Centraliza todos os tokens visuais. O `globals.css` deve ser gerado a partir deste arquivo (ou importá-lo via CSS-in-JS).

```typescript
// config/theme.ts
export const theme = {
  colors: {
    azul:          "#003399",
    magenta:       "#9E14A6",
    magentaEscuro: "#621C75",
    laranja:       "#E17230",
    laranjaEscuro: "#B64221",
    roxo:          "#2F0099",
    azulEscuro:    "#040E69",
    azulDetalhe:   "#006399",
    ciano:         "#009499",
    claro:         "#FBF4E9",
    claroEscuro:   "#DBD0C4",
    textDark:      "#0a1240",
    textMuted:     "#5a6a9a",
  },

  fonts: {
    sans:      "'Century Gothic', 'CenturyGothic', 'AppleGothic', sans-serif",
    serif:     "'Constantia', 'Georgia', serif",
    condensed: "'Tw Cen MT Condensed', 'Century Gothic', sans-serif",
  },

  logo: {
    // Troque o caminho abaixo para mudar a logo em todo o site de uma vez
    default: "/logo.svg",
    white:   "/logo-white.svg",
    // Se quiser usar texto em vez de imagem, defina textMode: true
    textMode: true,
    text:     "Connect",
  },
}
```

---

## Componentes SVG — instruções precisas

### `MountainDivider.tsx`

Props:
- `fromColor: string` — cor do fundo de onde a montanha "nasce"
- `toColor: string` — cor do fundo para onde a montanha "desce"
- `flip?: boolean` — inverte verticalmente (para dividir de baixo para cima)
- `variant?: "A" | "B" | "C"` — três formas diferentes de silhueta (extraia do HTML de referência)

O SVG usa curvas Bézier orgânicas, **não linhas retas em zigue-zague**. Preserve os `path d=""` exatamente como estão no HTML de referência. O componente apenas troca as cores via props.

### `BridgeDivider.tsx`

Props:
- `fromColor: string`
- `toColor: string`
- `showFigure?: boolean` — exibe ou oculta a silhueta humana apoiada na grade
- `showAntTrail?: boolean` — exibe ou oculta a trilha de pontos na ponte

### `AntTrail.tsx`

Props:
- `direction?: "horizontal" | "ascending"` — horizontal para separadores de seção, ascending para o hero
- `color?: string` — cor dos pontos (padrão: `--azul`)
- `opacity?: number`

Os pontos diminuem em perspectiva (maior perto, menor longe). **Não são representações da formiga** — são a trilha/rastro.

---

## Comportamentos importantes

1. **Logo**: Se `theme.logo.textMode === true`, renderiza o texto `theme.logo.text` com o `.ant-trail-mark` (três pontos em diagonal). Se `false`, renderiza `<Image src={theme.logo.default} />`. Trocar `textMode` para `false` e colocar o arquivo em `/public/logo.svg` é tudo que a equipe precisa fazer para ter uma logo gráfica.

2. **Inscrições**: Quando `siteConfig.event.registrationsOpen === true`, o botão "Avise-me" vira "Inscrever agora" e aponta para `siteConfig.event.registrationsUrl`. Isso deve funcionar automaticamente nos componentes Hero e CTA.

3. **Parceiros**: Quando `siteConfig.parceiros.realizadores` existir e tiver itens, renderiza a grade de chips. Enquanto for `undefined`, renderiza o estado "Em breve". Sem `if` espalhado — a lógica fica no componente `Parceiros.tsx`.

4. **Animações**: As animações de entrada do hero (`fadeUp` com `animation-delay` escalonado) devem ser preservadas em CSS puro, sem Framer Motion.

---

## Página `/empresas`

Formulário simples com:
- Nome da empresa
- Nome do responsável
- Email
- Mensagem (opcional)
- Botão de envio

Envio via `mailto:` ou Netlify Forms (adicionar `netlify` attribute no form). Visual idêntico ao restante do site.

---

## README.md

Deve conter:

```markdown
## Como personalizar

### Trocar a logo
1. Coloque seu arquivo em `public/logo.svg` (versão escura) e `public/logo-white.svg` (versão clara)
2. Em `config/theme.ts`, mude `logo.textMode` para `false`

### Mudar textos e conteúdo
Edite `config/site.ts`. Cada campo está comentado e mapeado para a seção do site.

### Mudar cores
Edite os valores em `config/theme.ts` → `colors`. Todos os componentes usam as variáveis CSS geradas a partir desse arquivo.

### Adicionar parceiros
Em `config/site.ts`, adicione o array `parceiros.realizadores` ou `parceiros.patrocinadores`.
A seção de parceiros automaticamente sai do estado "Em breve".

### Abrir inscrições
Em `config/site.ts`, mude `event.registrationsOpen` para `true` e preencha `event.registrationsUrl`.
```

---

## HTML de referência

O arquivo `connect.html` em anexo é a fonte visual definitiva. Preserve:
- Todos os gradientes SVG (`linearGradient` com `id`)
- O `preserveAspectRatio` de cada SVG
- As curvas Bézier das silhuetas de montanha (os `path d=""` longos)
- A trilha de pontos com perspectiva (raio e opacidade decrescentes)
- As variáveis CSS no `:root`
- As animações `@keyframes fadeUp` com delays escalonados no hero
- A silhueta de ponte com cabos catenários e a figura humana

Não simplifique os SVGs. Eles são o diferencial visual do projeto.

---

## Para rodar

```bash
npx create-next-app@latest connect-site --typescript --tailwind --app --no-src-dir
cd connect-site
# copie os arquivos conforme a estrutura acima
npm run dev
```
