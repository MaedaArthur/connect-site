# Connect Ideathon — Site

Site institucional do Connect Ideathon 2026, desenvolvido pelo PETEEL/UFSC.

---

## Como editar o site

Todo o conteúdo do site pode ser alterado **sem mexer em código de componente**. Existem dois arquivos de configuração que controlam tudo:

| Arquivo | O que controla |
|---|---|
| `config/site.ts` | Textos, datas, links, listas de conteúdo |
| `config/theme.ts` | Cores, fontes e logos |

---

## Editando textos e conteúdo (`config/site.ts`)

Abra o arquivo `config/site.ts`. Cada seção do site tem um bloco correspondente.

### Informações gerais do evento
```ts
event: {
  nome: 'Connect Ideathon',
  edicao: '2026',
  cidade: 'Florianópolis',
  data: 'Agosto 2026',            // aparece no rodapé e na seção CTA
  registrationsOpen: false,        // mude para true quando abrir inscrições
  registrationsUrl: '',            // cole aqui o link do formulário de inscrição
  instagram: 'https://instagram.com/connectideathon',
  email: 'peteel@gmail.com',
}
```

### Abrindo as inscrições
Quando as inscrições abrirem, faça duas alterações em `event`:
1. Mude `registrationsOpen: false` para `registrationsOpen: true`
2. Coloque o link do formulário em `registrationsUrl: 'https://...'`

O botão do site vai mudar automaticamente de "Avise-me quando abrir" para "Inscreva-se agora".

### Adicionando parceiros e patrocinadores
No bloco `parceiros`, preencha as listas com os nomes:
```ts
parceiros: {
  emBreve: false,                          // mude para false quando tiver parceiros
  realizadores: ['PETEEL', 'UFSC'],        // organizadores do evento
  patrocinadores: ['Empresa A', 'Empresa B'],
}
```

---

## Editando cores (`config/theme.ts`)

Abra o arquivo `config/theme.ts`. As cores são definidas em hexadecimal:

```ts
colors: {
  azul: '#003399',       // cor primária — botões, destaques
  magenta: '#9E14A6',    // acento — cards, seções
  laranja: '#E17230',    // acento secundário
  claro: '#FBF4E9',      // fundo claro do site
  textDark: '#0a1240',   // cor principal do texto
  // ...
}
```

Para mudar uma cor, substitua o valor hexadecimal. Ferramentas úteis para escolher cores:
- [coolors.co](https://coolors.co) — gerador de paletas
- [Google "color picker"](https://www.google.com/search?q=color+picker) — seletor rápido

---

## Trocando as logos

As logos ficam na pasta `public/`. Cada arquivo tem um uso específico:

| Arquivo | Onde aparece |
|---|---|
| `public/logo-claro.png` | Navbar (topo da página) e hero badge |
| `public/logo-azul.png` | Rodapé (fundo azul escuro) |
| `public/logo-v1.png` | Badge colorido na seção hero |

Para trocar uma logo, **substitua o arquivo mantendo exatamente o mesmo nome**. Por exemplo, para trocar a logo da navbar, salve a nova imagem como `logo-claro.png` e coloque na pasta `public/`, sobrescrevendo o arquivo antigo.

O caminho de cada logo também pode ser alterado em `config/theme.ts`:
```ts
logo: {
  default: '/logo-claro.png',  // navbar e hero badge
  badge: '/logo-v1.png',       // badge colorido no hero
  white: '/logo-azul.png',     // rodapé
}
```

---

## Trocando SVGs

### SVGs de imagem (pasta `public/`)
Funcionam igual às logos: substitua o arquivo mantendo o mesmo nome.

| Arquivo | Uso |
|---|---|
| `public/logo.svg` | Logo vetorial padrão |
| `public/logo-white.svg` | Logo vetorial versão branca |

### SVGs decorativos (divisores entre seções)
Os divisores visuais entre seções são SVGs embutidos diretamente no código dos componentes abaixo. Para alterá-los é necessário editar o arquivo correspondente:

| Arquivo | Onde aparece |
|---|---|
| `components/ui/MountainDivider.tsx` | Divisor em forma de montanha |
| `components/ui/BridgeDivider.tsx` | Divisor em forma de ponte |
| `components/ui/AntTrail.tsx` | Trilha decorativa de formiga |

Dentro de cada arquivo, procure pela tag `<svg>` e edite os atributos `d=` dos caminhos (`<path>`) para mudar o formato. Ferramentas como o [Figma](https://figma.com) ou [Inkscape](https://inkscape.org) permitem desenhar a forma e exportar o código SVG para colar no componente.

---

## Estrutura de pastas

```
config/         → arquivos de configuração (textos e cores)
public/         → imagens e logos
app/            → páginas do site
components/     → componentes visuais (não precisa editar)
Contexto/       → documentos de referência do projeto
Logo/           → arquivos originais das logos em alta resolução
docs/           → especificação técnica do projeto
```

---

## Rodando o site localmente

Necessário: [Node.js](https://nodejs.org) instalado.

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.
