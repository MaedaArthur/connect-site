# Blog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar um blog em `/blog` no site Connect com a mesma arquitetura e features do blog da Revisa, mas usando `@next/mdx` (oficial Next.js 16) em vez de `next-mdx-remote`, e respeitando o sistema de design do Connect (Tailwind v4 + CSS Modules).

**Architecture:**
- Posts em arquivos `.mdx` em `content/posts/[slug].mdx` com frontmatter YAML
- Listagem (`/blog`) e artigo (`/blog/[slug]`) renderizados no App Router via dynamic import (`await import()`) com `generateStaticParams`
- `gray-matter` lê apenas frontmatter para listagem (sem compilar MDX); `@next/mdx` compila MDX em build para a página individual
- ToC extraído por regex no source string (mesmo método da Revisa); `rehype-slug` adiciona IDs em headings
- Componentes interativos (filtros, ToC nav, reading progress, share) são Client Components; tudo o mais é Server Component

**Tech Stack:**
- Next.js 16.2.2 (App Router, Turbopack default), React 19, TypeScript
- `@next/mdx` + `@mdx-js/loader` + `@mdx-js/react` + `@types/mdx`
- `gray-matter` (parsing frontmatter), `rehype-slug` (IDs em headings)
- Tailwind v4 + CSS Modules (padrão do projeto)
- Sem framework de testes — verificação visual manual via dev server

**Convenções importantes:**
- Next 16 exige `params: Promise<{ slug: string }>` em rotas dinâmicas
- `mdx-components.tsx` na raiz é OBRIGATÓRIO no App Router
- Plugins remark/rehype devem ser passados como string para compatibilidade Turbopack
- Conteúdo segue padrão data-driven do Connect (frontmatter → tipos TypeScript)

**Modo de execução:** Subagent-driven, uma tarefa por vez. Após cada tarefa, o agente para, apresenta instruções de verificação visual ao usuário, e só prossegue após "OK" explícito.

---

## File Structure

**Novos arquivos:**
- `next.config.ts` — modificar para envolver com `withMDX` e adicionar `pageExtensions`
- `mdx-components.tsx` — raiz, mapeamento global de elementos MDX
- `lib/posts.ts` — leitura de frontmatter, listagem, related posts, slugify, ToC
- `content/posts/post-de-teste.mdx` — post dummy para validar pipeline (será removido no final)
- `app/blog/page.tsx` — Server Component, fetch de posts e render da listagem
- `app/blog/page.module.css` — estilos da página de listagem (hero, layout)
- `app/blog/BlogListagem.tsx` — Client Component com filtros + post destaque
- `app/blog/BlogListagem.module.css`
- `app/blog/[slug]/page.tsx` — Server Component, render de artigo individual
- `app/blog/[slug]/page.module.css` — estilos do artigo (header, layout, sidebar)
- `components/blog/TocNav.tsx` — Client, ToC com IntersectionObserver
- `components/blog/TocNav.module.css`
- `components/blog/ReadingProgress.tsx` — Client, barra de progresso de scroll
- `components/blog/ReadingProgress.module.css`
- `components/blog/CopyLinkButton.tsx` — Client, share clipboard com feedback
- `components/blog/CopyLinkButton.module.css`
- `components/blog/CtaInline.tsx` — Server, CTA embedável em MDX
- `components/blog/CtaInline.module.css`
- `components/blog/RelatedPosts.tsx` — Server, lista de artigos relacionados
- `components/blog/RelatedPosts.module.css`

**Arquivos modificados:**
- `package.json` — adicionar dependências MDX
- `next.config.ts` — wrap com `withMDX` e adicionar `pageExtensions`
- `components/layout/Nav.tsx` — adicionar link "Blog" na navegação

---

## Task 1: Instalar pacotes MDX e configurar Next.js

**Goal:** Adicionar suporte a MDX no Next 16 com `@next/mdx`, configurar `next.config.ts`, criar `mdx-components.tsx`. Após esta tarefa o dev server deve continuar bootando sem erros e nada deve mudar visualmente no site.

**Files:**
- Modify: `/home/arthur/dev/connect-site/package.json`
- Modify: `/home/arthur/dev/connect-site/next.config.ts`
- Create: `/home/arthur/dev/connect-site/mdx-components.tsx`

- [ ] **Step 1: Instalar dependências**

```bash
cd /home/arthur/dev/connect-site
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx gray-matter rehype-slug
```

Expected: `package.json` atualizado, sem erros de instalação.

- [ ] **Step 2: Substituir conteúdo de `next.config.ts`**

Conteúdo atual:
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

Substituir por:
```ts
import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: ["rehype-slug"],
  },
})

export default withMDX(nextConfig)
```

Notas:
- `pageExtensions` é necessário mesmo que não usemos `.mdx` como rota (sem isso o loader não é registrado).
- `rehype-slug` passado como string (não import) para compatibilidade com Turbopack (default em Next 16).

- [ ] **Step 3: Criar `mdx-components.tsx` na raiz do projeto**

```tsx
import type { MDXComponents } from "mdx/types"

const components: MDXComponents = {}

export function useMDXComponents(
  inherited: MDXComponents
): MDXComponents {
  return { ...inherited, ...components }
}
```

Notas:
- Arquivo OBRIGATÓRIO no App Router segundo a doc do Next 16. Sem ele, o build falha.
- Mantemos vazio por enquanto; estilização vem por CSS no wrapper do artigo (`.artigoCorpo`), não por overrides aqui.

- [ ] **Step 4: Bootar dev server e validar**

```bash
cd /home/arthur/dev/connect-site
npm run dev
```

Expected: servidor sobe em http://localhost:3000 sem erros. Página inicial carrega como antes.

- [ ] **Step 5: Commit**

```bash
cd /home/arthur/dev/connect-site
git add package.json package-lock.json next.config.ts mdx-components.tsx
git commit -m "chore: configurar @next/mdx para suporte a blog"
```

### Verificação manual (usuário)

Após o agente completar esta task, parar e pedir ao usuário:

1. Rodar `npm run dev` em outro terminal
2. Abrir `http://localhost:3000`
3. Confirmar: a home carrega normalmente, sem nenhuma mudança visual
4. Confirmar no terminal do dev server: nenhum erro vermelho relacionado a MDX
5. Responder "OK" para prosseguir

---

## Task 2: Criar camada de dados (`lib/posts.ts`) e post dummy

**Goal:** Implementar função para listar posts e ler frontmatter via `gray-matter`. Criar 1 post `.mdx` dummy para validar o pipeline. Não há UI ainda — verificação será via página debug temporária.

**Files:**
- Create: `/home/arthur/dev/connect-site/lib/posts.ts`
- Create: `/home/arthur/dev/connect-site/content/posts/post-de-teste.mdx`
- Create temporário: `/home/arthur/dev/connect-site/app/blog-debug/page.tsx` (será deletado na Task 11)

- [ ] **Step 1: Criar `/home/arthur/dev/connect-site/lib/posts.ts`**

```ts
import fs from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"

export type PostMeta = {
  slug: string
  titulo: string
  excerpt: string
  tag: string
  categorias: string[]
  tempoLeitura: number
  destaque: boolean
  dataPublicacao: string
}

const POSTS_DIR = path.join(process.cwd(), "content/posts")

export async function getAllPostMeta(): Promise<PostMeta[]> {
  const files = await fs.readdir(POSTS_DIR)
  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (f) => {
        const slug = f.replace(/\.mdx$/, "")
        const source = await fs.readFile(path.join(POSTS_DIR, f), "utf-8")
        const { data } = matter(source)
        return {
          slug,
          titulo: data.titulo ?? "",
          excerpt: data.excerpt ?? "",
          tag: data.tag ?? "",
          categorias: data.categorias ?? [],
          tempoLeitura: data.tempoLeitura ?? 0,
          destaque: data.destaque ?? false,
          dataPublicacao: data.dataPublicacao ?? "",
        } satisfies PostMeta
      })
  )
  return posts.sort((a, b) =>
    b.dataPublicacao.localeCompare(a.dataPublicacao)
  )
}

export async function getPostMeta(slug: string): Promise<PostMeta | null> {
  const all = await getAllPostMeta()
  return all.find((p) => p.slug === slug) ?? null
}

export async function getPostSource(slug: string): Promise<string> {
  return fs.readFile(path.join(POSTS_DIR, `${slug}.mdx`), "utf-8")
}

export async function getRelatedPosts(
  post: PostMeta,
  limit = 3
): Promise<PostMeta[]> {
  const all = await getAllPostMeta()
  return all
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.tag === post.tag ||
          p.categorias.some((c) => post.categorias.includes(c)))
    )
    .slice(0, limit)
}

export async function getFeaturedPost(): Promise<PostMeta | null> {
  const all = await getAllPostMeta()
  return all.find((p) => p.destaque) ?? all[0] ?? null
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function extractTOC(
  source: string
): Array<{ id: string; text: string }> {
  const body = source.replace(/^---[\s\S]*?---\r?\n/, "")
  return body
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => {
      const text = l.replace(/^## /, "").trim()
      return { id: slugify(text), text }
    })
}

export function formatarData(iso: string): string {
  if (!iso) return ""
  const [y, m, d] = iso.split("-")
  const meses = [
    "jan", "fev", "mar", "abr", "mai", "jun",
    "jul", "ago", "set", "out", "nov", "dez",
  ]
  return `${parseInt(d, 10)} de ${meses[parseInt(m, 10) - 1]} de ${y}`
}
```

Notas:
- `categorias` é o equivalente ao `empresas` da Revisa — vocabulário a definir com o usuário quando trouxer os temas reais
- `getFeaturedPost` faz fallback para o post mais recente se nenhum for marcado destaque

- [ ] **Step 2: Criar diretório e primeiro post dummy**

Criar `/home/arthur/dev/connect-site/content/posts/post-de-teste.mdx`:

```mdx
---
titulo: "Post de teste do blog Connect"
excerpt: "Este post serve apenas para validar que o pipeline de MDX está funcionando. Será removido antes de ir para produção."
tag: "Teste"
categorias: ["pipeline"]
tempoLeitura: 3
destaque: true
dataPublicacao: "2026-05-10"
---

## Introdução

Este é o primeiro parágrafo do post. Está aqui para confirmar que o **markdown** está sendo renderizado corretamente, incluindo formatação como _itálico_ e [links](https://example.com).

## Como funciona

A pipeline lê o frontmatter via `gray-matter` na listagem e compila o MDX inteiro via `@next/mdx` na página individual.

- Item de lista 1
- Item de lista 2
- Item de lista 3

## Conclusão

Se você está vendo este post renderizado com headings, listas e links, a pipeline funciona.
```

- [ ] **Step 3: Criar página debug temporária**

Criar `/home/arthur/dev/connect-site/app/blog-debug/page.tsx`:

```tsx
import { getAllPostMeta, extractTOC, getPostSource } from "@/lib/posts"

export default async function BlogDebugPage() {
  const posts = await getAllPostMeta()
  const firstSource = posts[0]
    ? await getPostSource(posts[0].slug)
    : ""
  const toc = extractTOC(firstSource)

  return (
    <main style={{ padding: 40, fontFamily: "monospace" }}>
      <h1>Blog Debug</h1>
      <h2>Posts encontrados: {posts.length}</h2>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <h2>ToC do primeiro post</h2>
      <pre>{JSON.stringify(toc, null, 2)}</pre>
    </main>
  )
}
```

- [ ] **Step 4: Validar**

Com dev server rodando, abrir `http://localhost:3000/blog-debug`.

Expected:
- "Posts encontrados: 1"
- JSON com o frontmatter do `post-de-teste`
- ToC com 3 itens (`introducao`, `como-funciona`, `conclusao`)

- [ ] **Step 5: Commit**

```bash
cd /home/arthur/dev/connect-site
git add lib/posts.ts content/posts/post-de-teste.mdx app/blog-debug/
git commit -m "feat: adicionar camada de dados para posts do blog"
```

### Verificação manual (usuário)

1. Confirmar dev server ainda rodando (`npm run dev`)
2. Abrir `http://localhost:3000/blog-debug`
3. Confirmar:
   - "Posts encontrados: 1"
   - JSON exibe `titulo: "Post de teste do blog Connect"`, `tag: "Teste"`, `tempoLeitura: 3`, `destaque: true`
   - ToC mostra 3 itens com `id` e `text`
4. Responder "OK" para prosseguir

---

## Task 3: Página de listagem `/blog` (versão básica, sem filtros)

**Goal:** Criar `/blog` que lista todos os posts como cards simples (sem filtros, sem post destaque ainda). Verificação: navegar para `/blog` e ver o card do post dummy.

**Files:**
- Create: `/home/arthur/dev/connect-site/app/blog/page.tsx`
- Create: `/home/arthur/dev/connect-site/app/blog/page.module.css`

- [ ] **Step 1: Criar `/home/arthur/dev/connect-site/app/blog/page.tsx`**

```tsx
import Link from "next/link"
import type { Metadata } from "next"
import { getAllPostMeta, formatarData } from "@/lib/posts"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Blog · Connect",
  description: "Artigos sobre carreira, tecnologia e mentoria.",
}

export default async function BlogPage() {
  const posts = await getAllPostMeta()

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Blog</p>
        <h1 className={styles.title}>Conteúdo do Connect</h1>
        <p className={styles.subtitle}>
          Artigos, guias e reflexões sobre carreira, mentoria e o que
          construímos por aqui.
        </p>
      </section>

      <section className={styles.grid}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={styles.card}
          >
            <span className={styles.tag}>{post.tag}</span>
            <h2 className={styles.cardTitle}>{post.titulo}</h2>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.meta}>
              <span>{formatarData(post.dataPublicacao)}</span>
              <span>·</span>
              <span>{post.tempoLeitura} min de leitura</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
```

- [ ] **Step 2: Criar `/home/arthur/dev/connect-site/app/blog/page.module.css`**

```css
.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px 80px;
}

.hero {
  margin-bottom: 56px;
}

.eyebrow {
  font-family: var(--google-nunito);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ciano, #009499);
  margin: 0 0 16px;
}

.title {
  font-family: var(--google-serif);
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 400;
  line-height: 1.1;
  color: var(--text-dark, #0a1240);
  margin: 0 0 16px;
}

.subtitle {
  font-family: var(--google-nunito);
  font-size: 18px;
  line-height: 1.55;
  color: var(--text-muted, #5a6a9a);
  max-width: 640px;
  margin: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  border: 1px solid rgba(10, 18, 64, 0.1);
  border-radius: 8px;
  background: #fff;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s, transform 0.2s;
}

.card:hover {
  border-color: var(--azul, #003399);
  transform: translateY(-2px);
}

.tag {
  font-family: var(--google-nunito);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--azul, #003399);
}

.cardTitle {
  font-family: var(--google-serif);
  font-size: 22px;
  font-weight: 400;
  line-height: 1.25;
  color: var(--text-dark, #0a1240);
  margin: 0;
}

.excerpt {
  font-family: var(--google-nunito);
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-muted, #5a6a9a);
  margin: 0;
  flex: 1;
}

.meta {
  display: flex;
  gap: 8px;
  font-family: var(--google-nunito);
  font-size: 13px;
  color: var(--text-muted, #5a6a9a);
  margin-top: 8px;
}

@media (max-width: 768px) {
  .main {
    padding: 100px 20px 60px;
  }
}
```

- [ ] **Step 3: Validar visualmente**

Abrir `http://localhost:3000/blog`.

Expected: hero "Conteúdo do Connect" + 1 card "Post de teste do blog Connect" com tag, título, excerpt e meta.

- [ ] **Step 4: Commit**

```bash
cd /home/arthur/dev/connect-site
git add app/blog/page.tsx app/blog/page.module.css
git commit -m "feat: adicionar pagina de listagem do blog"
```

### Verificação manual (usuário)

1. Abrir `http://localhost:3000/blog`
2. Confirmar:
   - Hero com "Blog" em maiúsculas pequenas + título "Conteúdo do Connect" em serif + subtítulo
   - 1 card com tag "TESTE", título do post, excerpt, data formatada ("10 de mai de 2026"), tempo de leitura
   - Hover no card altera borda para azul e levanta levemente
3. Responder "OK" para prosseguir

---

## Task 4: Página de artigo `/blog/[slug]` (versão básica, sem sidebar)

**Goal:** Renderizar o conteúdo MDX do post via dynamic import. Sem sidebar, sem ToC, sem related — apenas o artigo. Verificação: clicar no card e ver o conteúdo do MDX renderizado.

**Files:**
- Create: `/home/arthur/dev/connect-site/app/blog/[slug]/page.tsx`
- Create: `/home/arthur/dev/connect-site/app/blog/[slug]/page.module.css`

- [ ] **Step 1: Criar `/home/arthur/dev/connect-site/app/blog/[slug]/page.tsx`**

```tsx
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import {
  getAllPostMeta,
  getPostMeta,
  formatarData,
} from "@/lib/posts"
import styles from "./page.module.css"

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getAllPostMeta()
  return posts.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostMeta(slug)
  if (!post) return {}
  return {
    title: `${post.titulo} · Connect`,
    description: post.excerpt,
  }
}

export default async function ArtigoPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = await getPostMeta(slug)
  if (!post) notFound()

  let Post: React.ComponentType
  try {
    const mod = await import(`@/content/posts/${slug}.mdx`)
    Post = mod.default
  } catch {
    notFound()
  }

  return (
    <main className={styles.main}>
      <nav className={styles.breadcrumb}>
        <Link href="/blog">← Blog</Link>
      </nav>

      <header className={styles.header}>
        <span className={styles.tag}>{post.tag}</span>
        <h1 className={styles.title}>{post.titulo}</h1>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.meta}>
          <span>{formatarData(post.dataPublicacao)}</span>
          <span>·</span>
          <span>{post.tempoLeitura} min de leitura</span>
        </div>
      </header>

      <article className={styles.corpo}>
        <Post />
      </article>
    </main>
  )
}
```

- [ ] **Step 2: Criar `/home/arthur/dev/connect-site/app/blog/[slug]/page.module.css`**

```css
.main {
  max-width: 760px;
  margin: 0 auto;
  padding: 120px 24px 80px;
}

.breadcrumb {
  margin-bottom: 32px;
  font-family: var(--google-nunito);
  font-size: 14px;
}

.breadcrumb a {
  color: var(--text-muted, #5a6a9a);
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb a:hover {
  color: var(--azul, #003399);
}

.header {
  margin-bottom: 56px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(10, 18, 64, 0.1);
}

.tag {
  display: inline-block;
  font-family: var(--google-nunito);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--azul, #003399);
  margin-bottom: 16px;
}

.title {
  font-family: var(--google-serif);
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 400;
  line-height: 1.15;
  color: var(--text-dark, #0a1240);
  margin: 0 0 20px;
}

.excerpt {
  font-family: var(--google-nunito);
  font-size: 19px;
  line-height: 1.5;
  color: var(--text-muted, #5a6a9a);
  margin: 0 0 24px;
}

.meta {
  display: flex;
  gap: 8px;
  font-family: var(--google-nunito);
  font-size: 14px;
  color: var(--text-muted, #5a6a9a);
}

.corpo {
  font-family: var(--google-nunito);
  font-size: 17px;
  line-height: 1.8;
  color: var(--text-dark, #0a1240);
}

.corpo :global(h2) {
  font-family: var(--google-serif);
  font-size: 28px;
  font-weight: 400;
  line-height: 1.25;
  color: var(--text-dark, #0a1240);
  margin: 56px 0 20px;
  scroll-margin-top: 100px;
}

.corpo :global(h3) {
  font-family: var(--google-serif);
  font-size: 22px;
  font-weight: 400;
  line-height: 1.3;
  color: var(--text-dark, #0a1240);
  margin: 36px 0 16px;
  scroll-margin-top: 100px;
}

.corpo :global(p) {
  margin: 0 0 24px;
}

.corpo :global(a) {
  color: var(--azul, #003399);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.corpo :global(ul),
.corpo :global(ol) {
  margin: 0 0 24px;
  padding-left: 24px;
}

.corpo :global(li) {
  margin-bottom: 8px;
}

.corpo :global(strong) {
  font-weight: 700;
}

.corpo :global(em) {
  font-style: italic;
}

@media (max-width: 768px) {
  .main {
    padding: 100px 20px 60px;
  }
}
```

Notas:
- `:global(...)` aplica os estilos aos elementos gerados pelo MDX (que ficam dentro do wrapper `.corpo` mas vêm sem className)
- `scroll-margin-top: 100px` garante que ao clicar no ToC, o heading não fica colado no topo

- [ ] **Step 3: Validar**

1. Abrir `http://localhost:3000/blog`
2. Clicar no card do post de teste
3. Confirmar artigo renderizado

- [ ] **Step 4: Commit**

```bash
cd /home/arthur/dev/connect-site
git add app/blog/\[slug\]/
git commit -m "feat: adicionar pagina de artigo do blog"
```

### Verificação manual (usuário)

1. Em `/blog`, clicar no card "Post de teste do blog Connect"
2. URL muda para `/blog/post-de-teste`
3. Confirmar:
   - Breadcrumb "← Blog" no topo
   - Tag "TESTE" + título em serif + excerpt + meta (data + tempo de leitura)
   - 3 seções com headings em serif (Introdução, Como funciona, Conclusão)
   - Formatação **negrito**, _itálico_ e [link](https://example.com) renderizados
   - Lista com 3 itens
4. Clicar em "← Blog" volta para listagem
5. Aba do navegador mostra título "Post de teste do blog Connect · Connect"
6. Responder "OK" para prosseguir

---

## Task 5: Componente `BlogListagem` (filtros + post destaque)

**Goal:** Substituir a listagem simples por um Client Component com post destaque + filtros por tag.

**Files:**
- Create: `/home/arthur/dev/connect-site/app/blog/BlogListagem.tsx`
- Create: `/home/arthur/dev/connect-site/app/blog/BlogListagem.module.css`
- Modify: `/home/arthur/dev/connect-site/app/blog/page.tsx`

- [ ] **Step 1: Criar `/home/arthur/dev/connect-site/app/blog/BlogListagem.tsx`**

```tsx
"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import type { PostMeta } from "@/lib/posts"
import { formatarData } from "@/lib/posts"
import styles from "./BlogListagem.module.css"

type Props = {
  posts: PostMeta[]
  destaque: PostMeta | null
}

export default function BlogListagem({ posts, destaque }: Props) {
  const [tagAtiva, setTagAtiva] = useState<string | null>(null)

  const tags = useMemo(() => {
    const set = new Set<string>()
    posts.forEach((p) => p.tag && set.add(p.tag))
    return Array.from(set).sort()
  }, [posts])

  const naoDestaque = posts.filter((p) => p.slug !== destaque?.slug)
  const filtrados = tagAtiva
    ? naoDestaque.filter((p) => p.tag === tagAtiva)
    : naoDestaque

  return (
    <div className={styles.layout}>
      <main className={styles.coluna}>
        {destaque && (
          <Link
            href={`/blog/${destaque.slug}`}
            className={styles.destaque}
          >
            <span className={styles.destaqueLabel}>Em destaque</span>
            <h2 className={styles.destaqueTitulo}>{destaque.titulo}</h2>
            <p className={styles.destaqueExcerpt}>{destaque.excerpt}</p>
            <div className={styles.meta}>
              <span className={styles.tag}>{destaque.tag}</span>
              <span>·</span>
              <span>{formatarData(destaque.dataPublicacao)}</span>
              <span>·</span>
              <span>{destaque.tempoLeitura} min</span>
            </div>
          </Link>
        )}

        <div className={styles.lista}>
          {filtrados.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={styles.card}
            >
              <span className={styles.tag}>{post.tag}</span>
              <h3 className={styles.cardTitle}>{post.titulo}</h3>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.meta}>
                <span>{formatarData(post.dataPublicacao)}</span>
                <span>·</span>
                <span>{post.tempoLeitura} min</span>
              </div>
            </Link>
          ))}

          {filtrados.length === 0 && (
            <p className={styles.vazio}>
              Nenhum artigo encontrado para esse filtro.
            </p>
          )}
        </div>
      </main>

      <aside className={styles.sidebar}>
        <div className={styles.bloco}>
          <h4 className={styles.blocoTitulo}>Filtrar por tema</h4>
          <div className={styles.pills}>
            <button
              type="button"
              className={`${styles.pill} ${
                tagAtiva === null ? styles.pillAtivo : ""
              }`}
              onClick={() => setTagAtiva(null)}
            >
              Todos
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`${styles.pill} ${
                  tagAtiva === tag ? styles.pillAtivo : ""
                }`}
                onClick={() => setTagAtiva(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}
```

- [ ] **Step 2: Criar `/home/arthur/dev/connect-site/app/blog/BlogListagem.module.css`**

```css
.layout {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 56px;
  align-items: start;
}

.coluna {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.destaque {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 36px;
  border: 1px solid var(--azul, #003399);
  border-radius: 8px;
  background: linear-gradient(
    135deg,
    rgba(0, 51, 153, 0.04),
    rgba(0, 148, 153, 0.04)
  );
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;
}

.destaque:hover {
  transform: translateY(-2px);
}

.destaqueLabel {
  font-family: var(--google-nunito);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--azul, #003399);
}

.destaqueTitulo {
  font-family: var(--google-serif);
  font-size: 32px;
  font-weight: 400;
  line-height: 1.2;
  color: var(--text-dark, #0a1240);
  margin: 0;
}

.destaqueExcerpt {
  font-family: var(--google-nunito);
  font-size: 17px;
  line-height: 1.6;
  color: var(--text-muted, #5a6a9a);
  margin: 0 0 8px;
}

.lista {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px;
  border: 1px solid rgba(10, 18, 64, 0.1);
  border-radius: 8px;
  background: #fff;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s, transform 0.2s;
}

.card:hover {
  border-color: var(--azul, #003399);
  transform: translateY(-2px);
}

.cardTitle {
  font-family: var(--google-serif);
  font-size: 22px;
  font-weight: 400;
  line-height: 1.25;
  color: var(--text-dark, #0a1240);
  margin: 0;
}

.excerpt {
  font-family: var(--google-nunito);
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-muted, #5a6a9a);
  margin: 0;
}

.tag {
  display: inline-block;
  font-family: var(--google-nunito);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--azul, #003399);
}

.meta {
  display: flex;
  gap: 8px;
  align-items: center;
  font-family: var(--google-nunito);
  font-size: 13px;
  color: var(--text-muted, #5a6a9a);
  flex-wrap: wrap;
}

.vazio {
  font-family: var(--google-nunito);
  color: var(--text-muted, #5a6a9a);
  text-align: center;
  padding: 48px;
}

.sidebar {
  position: sticky;
  top: 100px;
}

.bloco {
  padding: 24px;
  border: 1px solid rgba(10, 18, 64, 0.1);
  border-radius: 8px;
  background: #fff;
}

.blocoTitulo {
  font-family: var(--google-nunito);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted, #5a6a9a);
  margin: 0 0 16px;
}

.pills {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pill {
  font-family: var(--google-nunito);
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  padding: 10px 14px;
  border: 1px solid rgba(10, 18, 64, 0.12);
  border-radius: 6px;
  background: #fff;
  color: var(--text-dark, #0a1240);
  cursor: pointer;
  transition: all 0.15s;
}

.pill:hover {
  border-color: var(--azul, #003399);
}

.pillAtivo {
  background: var(--azul, #003399);
  border-color: var(--azul, #003399);
  color: #fff;
}

@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .sidebar {
    position: static;
  }
  .pills {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
```

- [ ] **Step 3: Modificar `/home/arthur/dev/connect-site/app/blog/page.tsx`**

Substituir conteúdo por:

```tsx
import type { Metadata } from "next"
import { getAllPostMeta, getFeaturedPost } from "@/lib/posts"
import BlogListagem from "./BlogListagem"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Blog · Connect",
  description: "Artigos sobre carreira, tecnologia e mentoria.",
}

export default async function BlogPage() {
  const [posts, destaque] = await Promise.all([
    getAllPostMeta(),
    getFeaturedPost(),
  ])

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Blog</p>
        <h1 className={styles.title}>Conteúdo do Connect</h1>
        <p className={styles.subtitle}>
          Artigos, guias e reflexões sobre carreira, mentoria e o que
          construímos por aqui.
        </p>
      </section>

      <BlogListagem posts={posts} destaque={destaque} />
    </main>
  )
}
```

- [ ] **Step 4: Modificar `/home/arthur/dev/connect-site/app/blog/page.module.css`**

Remover as classes `.grid`, `.card`, `.cardTitle`, `.excerpt`, `.tag`, `.meta` (foram movidas para `BlogListagem.module.css`). Manter apenas `.main`, `.hero`, `.eyebrow`, `.title`, `.subtitle` e o media query do `.main`.

Conteúdo final esperado:

```css
.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px 80px;
}

.hero {
  margin-bottom: 56px;
}

.eyebrow {
  font-family: var(--google-nunito);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ciano, #009499);
  margin: 0 0 16px;
}

.title {
  font-family: var(--google-serif);
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 400;
  line-height: 1.1;
  color: var(--text-dark, #0a1240);
  margin: 0 0 16px;
}

.subtitle {
  font-family: var(--google-nunito);
  font-size: 18px;
  line-height: 1.55;
  color: var(--text-muted, #5a6a9a);
  max-width: 640px;
  margin: 0;
}

@media (max-width: 768px) {
  .main {
    padding: 100px 20px 60px;
  }
}
```

- [ ] **Step 5: Adicionar segundo post dummy para validar filtros**

Criar `/home/arthur/dev/connect-site/content/posts/segundo-post-teste.mdx`:

```mdx
---
titulo: "Segundo post para testar filtros"
excerpt: "Este post tem uma tag diferente para confirmar que o filtro funciona corretamente."
tag: "Carreira"
categorias: ["filtros"]
tempoLeitura: 4
destaque: false
dataPublicacao: "2026-04-15"
---

## Sobre filtros

Este é o conteúdo do segundo post de teste. Existe apenas para verificar que a UI de filtros funciona com mais de uma tag.
```

- [ ] **Step 6: Validar**

Abrir `http://localhost:3000/blog` e testar interações.

- [ ] **Step 7: Commit**

```bash
cd /home/arthur/dev/connect-site
git add app/blog/BlogListagem.tsx app/blog/BlogListagem.module.css app/blog/page.tsx app/blog/page.module.css content/posts/segundo-post-teste.mdx
git commit -m "feat: adicionar post destaque e filtros na listagem do blog"
```

### Verificação manual (usuário)

1. Abrir `http://localhost:3000/blog`
2. Confirmar:
   - Card de DESTAQUE em cima (primeiro post, fundo gradiente azul/ciano sutil, label "Em destaque")
   - Card menor abaixo (segundo post)
   - Sidebar à direita com bloco "Filtrar por tema" e botões "Todos", "Carreira", "Teste"
   - "Todos" começa ativo (fundo azul, texto branco)
3. Clicar em "Carreira": destaque continua aparecendo, mas a lista abaixo só mostra "Segundo post"
4. Clicar em "Teste": destaque continua, lista vazia (post de destaque é o único com tag "Teste" e fica filtrado da lista)
5. Clicar em "Todos": tudo volta
6. Reduzir tela < 900px: sidebar desce, pills viram horizontal
7. Responder "OK" para prosseguir

---

## Task 6: Componente `TocNav` (índice no sidebar do artigo)

**Goal:** Adicionar sidebar com índice das seções no artigo, com highlight da seção ativa via IntersectionObserver. Reorganiza layout do `/blog/[slug]` para 2 colunas.

**Files:**
- Create: `/home/arthur/dev/connect-site/components/blog/TocNav.tsx`
- Create: `/home/arthur/dev/connect-site/components/blog/TocNav.module.css`
- Modify: `/home/arthur/dev/connect-site/app/blog/[slug]/page.tsx`
- Modify: `/home/arthur/dev/connect-site/app/blog/[slug]/page.module.css`

- [ ] **Step 1: Criar `/home/arthur/dev/connect-site/components/blog/TocNav.tsx`**

```tsx
"use client"

import { useEffect, useState } from "react"
import styles from "./TocNav.module.css"

type Item = { id: string; text: string }

export default function TocNav({ items }: { items: Item[] }) {
  const [ativo, setAtivo] = useState<string | null>(null)

  useEffect(() => {
    if (items.length === 0) return
    const observers: IntersectionObserver[] = []
    const elementos = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visiveis = entries.filter((e) => e.isIntersecting)
        if (visiveis.length > 0) {
          setAtivo(visiveis[0].target.id)
        }
      },
      { rootMargin: "-100px 0px -60% 0px" }
    )

    elementos.forEach((el) => observer.observe(el))
    observers.push(observer)

    return () => observers.forEach((o) => o.disconnect())
  }, [items])

  if (items.length === 0) return null

  return (
    <nav className={styles.toc} aria-label="Índice do artigo">
      <h4 className={styles.titulo}>Neste artigo</h4>
      <ul className={styles.lista}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`${styles.link} ${
                ativo === item.id ? styles.ativo : ""
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
```

- [ ] **Step 2: Criar `/home/arthur/dev/connect-site/components/blog/TocNav.module.css`**

```css
.toc {
  padding: 20px 0 0 20px;
  border-left: 1px solid rgba(10, 18, 64, 0.1);
}

.titulo {
  font-family: var(--google-nunito);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted, #5a6a9a);
  margin: 0 0 16px;
}

.lista {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.link {
  display: block;
  font-family: var(--google-nunito);
  font-size: 14px;
  line-height: 1.4;
  color: var(--text-muted, #5a6a9a);
  text-decoration: none;
  transition: color 0.15s;
}

.link:hover {
  color: var(--text-dark, #0a1240);
}

.ativo {
  color: var(--azul, #003399);
  font-weight: 600;
}
```

- [ ] **Step 3: Modificar `/home/arthur/dev/connect-site/app/blog/[slug]/page.tsx`**

Substituir conteúdo por:

```tsx
import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import {
  getAllPostMeta,
  getPostMeta,
  getPostSource,
  extractTOC,
  formatarData,
} from "@/lib/posts"
import TocNav from "@/components/blog/TocNav"
import styles from "./page.module.css"

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getAllPostMeta()
  return posts.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostMeta(slug)
  if (!post) return {}
  return {
    title: `${post.titulo} · Connect`,
    description: post.excerpt,
  }
}

export default async function ArtigoPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = await getPostMeta(slug)
  if (!post) notFound()

  const source = await getPostSource(slug)
  const toc = extractTOC(source)

  let Post: React.ComponentType
  try {
    const mod = await import(`@/content/posts/${slug}.mdx`)
    Post = mod.default
  } catch {
    notFound()
  }

  return (
    <main className={styles.main}>
      <nav className={styles.breadcrumb}>
        <Link href="/blog">← Blog</Link>
      </nav>

      <header className={styles.header}>
        <span className={styles.tag}>{post.tag}</span>
        <h1 className={styles.title}>{post.titulo}</h1>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.meta}>
          <span>{formatarData(post.dataPublicacao)}</span>
          <span>·</span>
          <span>{post.tempoLeitura} min de leitura</span>
        </div>
      </header>

      <div className={styles.layout}>
        <article className={styles.corpo}>
          <Post />
        </article>
        <aside className={styles.sidebar}>
          <TocNav items={toc} />
        </aside>
      </div>
    </main>
  )
}
```

- [ ] **Step 4: Modificar `/home/arthur/dev/connect-site/app/blog/[slug]/page.module.css`**

Mudar `.main` para `max-width: 1100px` e adicionar layout 2-col. Conteúdo atualizado:

```css
.main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 120px 24px 80px;
}

.breadcrumb {
  margin-bottom: 32px;
  font-family: var(--google-nunito);
  font-size: 14px;
}

.breadcrumb a {
  color: var(--text-muted, #5a6a9a);
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb a:hover {
  color: var(--azul, #003399);
}

.header {
  max-width: 760px;
  margin: 0 0 56px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(10, 18, 64, 0.1);
}

.tag {
  display: inline-block;
  font-family: var(--google-nunito);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--azul, #003399);
  margin-bottom: 16px;
}

.title {
  font-family: var(--google-serif);
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 400;
  line-height: 1.15;
  color: var(--text-dark, #0a1240);
  margin: 0 0 20px;
}

.excerpt {
  font-family: var(--google-nunito);
  font-size: 19px;
  line-height: 1.5;
  color: var(--text-muted, #5a6a9a);
  margin: 0 0 24px;
}

.meta {
  display: flex;
  gap: 8px;
  font-family: var(--google-nunito);
  font-size: 14px;
  color: var(--text-muted, #5a6a9a);
}

.layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 240px;
  gap: 48px;
  align-items: start;
}

.sidebar {
  position: sticky;
  top: 100px;
}

.corpo {
  font-family: var(--google-nunito);
  font-size: 17px;
  line-height: 1.8;
  color: var(--text-dark, #0a1240);
}

.corpo :global(h2) {
  font-family: var(--google-serif);
  font-size: 28px;
  font-weight: 400;
  line-height: 1.25;
  color: var(--text-dark, #0a1240);
  margin: 56px 0 20px;
  scroll-margin-top: 100px;
}

.corpo :global(h3) {
  font-family: var(--google-serif);
  font-size: 22px;
  font-weight: 400;
  line-height: 1.3;
  color: var(--text-dark, #0a1240);
  margin: 36px 0 16px;
  scroll-margin-top: 100px;
}

.corpo :global(p) {
  margin: 0 0 24px;
}

.corpo :global(a) {
  color: var(--azul, #003399);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.corpo :global(ul),
.corpo :global(ol) {
  margin: 0 0 24px;
  padding-left: 24px;
}

.corpo :global(li) {
  margin-bottom: 8px;
}

.corpo :global(strong) {
  font-weight: 700;
}

.corpo :global(em) {
  font-style: italic;
}

@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
  }
  .sidebar {
    position: static;
    border-left: none;
    border-top: 1px solid rgba(10, 18, 64, 0.1);
    padding-top: 32px;
    margin-top: 16px;
  }
}

@media (max-width: 768px) {
  .main {
    padding: 100px 20px 60px;
  }
}
```

- [ ] **Step 5: Validar**

Abrir um post e verificar sidebar com ToC.

- [ ] **Step 6: Commit**

```bash
cd /home/arthur/dev/connect-site
git add components/blog/TocNav.tsx components/blog/TocNav.module.css app/blog/\[slug\]/page.tsx app/blog/\[slug\]/page.module.css
git commit -m "feat: adicionar sidebar com indice de secoes no artigo"
```

### Verificação manual (usuário)

1. Abrir um post (`/blog/post-de-teste`)
2. Confirmar:
   - Layout em 2 colunas: artigo à esquerda, sidebar "Neste artigo" à direita
   - ToC lista "Introdução", "Como funciona", "Conclusão"
   - Clicar em um item rola até o heading correspondente (sem ficar colado no topo)
   - Ao rolar manualmente, o item ativo no ToC muda (azul + bold)
   - Sidebar fica sticky enquanto rola
3. Reduzir < 900px: sidebar vai para baixo do artigo, sem sticky
4. Responder "OK" para prosseguir

---

## Task 7: Componente `ReadingProgress` (barra de progresso)

**Goal:** Barra fina no topo da janela que enche conforme o usuário rola o artigo.

**Files:**
- Create: `/home/arthur/dev/connect-site/components/blog/ReadingProgress.tsx`
- Create: `/home/arthur/dev/connect-site/components/blog/ReadingProgress.module.css`
- Modify: `/home/arthur/dev/connect-site/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Criar `/home/arthur/dev/connect-site/components/blog/ReadingProgress.tsx`**

```tsx
"use client"

import { useEffect, useState } from "react"
import styles from "./ReadingProgress.module.css"

export default function ReadingProgress() {
  const [progresso, setProgresso] = useState(0)

  useEffect(() => {
    function onScroll() {
      const total =
        document.documentElement.scrollHeight - window.innerHeight
      const atual = window.scrollY
      const pct = total > 0 ? Math.min(100, (atual / total) * 100) : 0
      setProgresso(pct)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <div
      className={styles.barra}
      style={{ width: `${progresso}%` }}
      aria-hidden="true"
    />
  )
}
```

- [ ] **Step 2: Criar `/home/arthur/dev/connect-site/components/blog/ReadingProgress.module.css`**

```css
.barra {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--azul, #003399),
    var(--ciano, #009499)
  );
  z-index: 9999;
  transition: width 0.05s linear;
}
```

- [ ] **Step 3: Modificar `/home/arthur/dev/connect-site/app/blog/[slug]/page.tsx`**

Adicionar import e renderizar `<ReadingProgress />` no início do `<main>`:

```tsx
import ReadingProgress from "@/components/blog/ReadingProgress"
```

E dentro do return:

```tsx
return (
  <>
    <ReadingProgress />
    <main className={styles.main}>
      {/* ...resto igual... */}
    </main>
  </>
)
```

- [ ] **Step 4: Validar**

Abrir post e rolar.

- [ ] **Step 5: Commit**

```bash
cd /home/arthur/dev/connect-site
git add components/blog/ReadingProgress.tsx components/blog/ReadingProgress.module.css app/blog/\[slug\]/page.tsx
git commit -m "feat: adicionar barra de progresso de leitura no artigo"
```

### Verificação manual (usuário)

1. Abrir `/blog/post-de-teste`
2. Confirmar barra fina (3px) no topo da janela com gradiente azul → ciano
3. Rolar para baixo: barra enche
4. Rolar até o fim: barra preenche 100%
5. Responder "OK" para prosseguir

---

## Task 8: Componente `CopyLinkButton` + share WhatsApp

**Goal:** Botões na sidebar para copiar link do artigo e compartilhar via WhatsApp.

**Files:**
- Create: `/home/arthur/dev/connect-site/components/blog/CopyLinkButton.tsx`
- Create: `/home/arthur/dev/connect-site/components/blog/CopyLinkButton.module.css`
- Modify: `/home/arthur/dev/connect-site/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Criar `/home/arthur/dev/connect-site/components/blog/CopyLinkButton.tsx`**

```tsx
"use client"

import { useState } from "react"
import styles from "./CopyLinkButton.module.css"

type Props = {
  titulo: string
}

export default function CopyLinkButton({ titulo }: Props) {
  const [copiado, setCopiado] = useState(false)

  async function copiar() {
    if (typeof window === "undefined") return
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      // navegador sem clipboard API — silenciar
    }
  }

  function whatsappUrl(): string {
    if (typeof window === "undefined") return "#"
    const texto = encodeURIComponent(`${titulo} ${window.location.href}`)
    return `https://wa.me/?text=${texto}`
  }

  return (
    <div className={styles.bloco}>
      <h4 className={styles.titulo}>Compartilhar</h4>
      <div className={styles.botoes}>
        <button
          type="button"
          className={styles.botao}
          onClick={copiar}
        >
          {copiado ? "Link copiado!" : "Copiar link"}
        </button>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer"
          className={`${styles.botao} ${styles.whatsapp}`}
        >
          WhatsApp
        </a>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Criar `/home/arthur/dev/connect-site/components/blog/CopyLinkButton.module.css`**

```css
.bloco {
  margin-top: 24px;
  padding: 20px 0 0 20px;
  border-left: 1px solid rgba(10, 18, 64, 0.1);
}

.titulo {
  font-family: var(--google-nunito);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted, #5a6a9a);
  margin: 0 0 12px;
}

.botoes {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.botao {
  display: inline-block;
  font-family: var(--google-nunito);
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  padding: 10px 14px;
  border: 1px solid rgba(10, 18, 64, 0.12);
  border-radius: 6px;
  background: #fff;
  color: var(--text-dark, #0a1240);
  cursor: pointer;
  transition: all 0.15s;
}

.botao:hover {
  border-color: var(--azul, #003399);
}

.whatsapp {
  background: #25d366;
  border-color: #25d366;
  color: #fff;
}

.whatsapp:hover {
  background: #1ebe5a;
  border-color: #1ebe5a;
}
```

- [ ] **Step 3: Modificar `/home/arthur/dev/connect-site/app/blog/[slug]/page.tsx`**

Adicionar import:

```tsx
import CopyLinkButton from "@/components/blog/CopyLinkButton"
```

E na sidebar (depois do `<TocNav />`):

```tsx
<aside className={styles.sidebar}>
  <TocNav items={toc} />
  <CopyLinkButton titulo={post.titulo} />
</aside>
```

- [ ] **Step 4: Validar**

Abrir post e testar share.

- [ ] **Step 5: Commit**

```bash
cd /home/arthur/dev/connect-site
git add components/blog/CopyLinkButton.tsx components/blog/CopyLinkButton.module.css app/blog/\[slug\]/page.tsx
git commit -m "feat: adicionar botoes de compartilhamento no artigo"
```

### Verificação manual (usuário)

1. Abrir `/blog/post-de-teste`
2. Confirmar bloco "Compartilhar" abaixo do ToC na sidebar com 2 botões
3. Clicar em "Copiar link": texto muda para "Link copiado!" por 2s
4. Colar (Ctrl+V) em outro lugar — deve aparecer URL do post (ex.: `http://localhost:3000/blog/post-de-teste`)
5. Clicar em "WhatsApp": abre WhatsApp Web/app com mensagem pré-preenchida
6. Responder "OK" para prosseguir

---

## Task 9: Componente `RelatedPosts` (artigos relacionados)

**Goal:** Lista até 3 artigos relacionados (mesma tag ou categoria compartilhada) no fim do artigo.

**Files:**
- Create: `/home/arthur/dev/connect-site/components/blog/RelatedPosts.tsx`
- Create: `/home/arthur/dev/connect-site/components/blog/RelatedPosts.module.css`
- Modify: `/home/arthur/dev/connect-site/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Criar `/home/arthur/dev/connect-site/components/blog/RelatedPosts.tsx`**

```tsx
import Link from "next/link"
import type { PostMeta } from "@/lib/posts"
import { formatarData } from "@/lib/posts"
import styles from "./RelatedPosts.module.css"

export default function RelatedPosts({
  posts,
}: {
  posts: PostMeta[]
}) {
  if (posts.length === 0) return null

  return (
    <section className={styles.secao}>
      <h2 className={styles.titulo}>Continue lendo</h2>
      <div className={styles.grid}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={styles.card}
          >
            <span className={styles.tag}>{post.tag}</span>
            <h3 className={styles.cardTitle}>{post.titulo}</h3>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.meta}>
              <span>{formatarData(post.dataPublicacao)}</span>
              <span>·</span>
              <span>{post.tempoLeitura} min</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Criar `/home/arthur/dev/connect-site/components/blog/RelatedPosts.module.css`**

```css
.secao {
  margin-top: 80px;
  padding-top: 48px;
  border-top: 1px solid rgba(10, 18, 64, 0.1);
}

.titulo {
  font-family: var(--google-serif);
  font-size: 28px;
  font-weight: 400;
  color: var(--text-dark, #0a1240);
  margin: 0 0 32px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  border: 1px solid rgba(10, 18, 64, 0.1);
  border-radius: 8px;
  background: #fff;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s, transform 0.2s;
}

.card:hover {
  border-color: var(--azul, #003399);
  transform: translateY(-2px);
}

.tag {
  font-family: var(--google-nunito);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--azul, #003399);
}

.cardTitle {
  font-family: var(--google-serif);
  font-size: 19px;
  font-weight: 400;
  line-height: 1.25;
  color: var(--text-dark, #0a1240);
  margin: 0;
}

.excerpt {
  font-family: var(--google-nunito);
  font-size: 14px;
  line-height: 1.55;
  color: var(--text-muted, #5a6a9a);
  margin: 0;
  flex: 1;
}

.meta {
  display: flex;
  gap: 6px;
  font-family: var(--google-nunito);
  font-size: 12px;
  color: var(--text-muted, #5a6a9a);
}
```

- [ ] **Step 3: Modificar `/home/arthur/dev/connect-site/app/blog/[slug]/page.tsx`**

Adicionar imports:

```tsx
import { getRelatedPosts } from "@/lib/posts"
import RelatedPosts from "@/components/blog/RelatedPosts"
```

Adicionar fetch de related (depois de obter `post`):

```tsx
const relacionados = await getRelatedPosts(post)
```

E renderizar fora do `<div className={styles.layout}>`, dentro do `<main>`:

```tsx
<RelatedPosts posts={relacionados} />
```

Além disso, criar um terceiro post dummy com a mesma tag de um existente para forçar relacionados a aparecerem.

- [ ] **Step 4: Criar `/home/arthur/dev/connect-site/content/posts/terceiro-post-teste.mdx`**

```mdx
---
titulo: "Terceiro post para testar relacionados"
excerpt: "Compartilha tag 'Carreira' com o segundo post para validar a feature de artigos relacionados."
tag: "Carreira"
categorias: ["filtros"]
tempoLeitura: 3
destaque: false
dataPublicacao: "2026-04-20"
---

## Sobre relacionados

Conteúdo para garantir que o componente `RelatedPosts` mostre algo na página do segundo post.
```

- [ ] **Step 5: Validar**

- Abrir `/blog/segundo-post-teste`: deve mostrar "Terceiro post" como relacionado (mesma tag "Carreira")
- Abrir `/blog/post-de-teste`: como tem tag "Teste" única, sem relacionados → seção não aparece

- [ ] **Step 6: Commit**

```bash
cd /home/arthur/dev/connect-site
git add components/blog/RelatedPosts.tsx components/blog/RelatedPosts.module.css app/blog/\[slug\]/page.tsx content/posts/terceiro-post-teste.mdx
git commit -m "feat: adicionar artigos relacionados no fim do post"
```

### Verificação manual (usuário)

1. Abrir `/blog/segundo-post-teste`
2. Rolar até o fim do artigo
3. Confirmar seção "Continue lendo" com card do "Terceiro post"
4. Abrir `/blog/post-de-teste`: NÃO deve mostrar seção "Continue lendo" (tag "Teste" sem outros posts)
5. Responder "OK" para prosseguir

---

## Task 10: Componente `CtaInline` (CTA embedável em MDX)

**Goal:** Criar componente que pode ser usado dentro de qualquer post `.mdx` como `<CtaInline texto="..." cta="..." href="..." />`. Disponibilizar globalmente via `mdx-components.tsx`.

**Files:**
- Create: `/home/arthur/dev/connect-site/components/blog/CtaInline.tsx`
- Create: `/home/arthur/dev/connect-site/components/blog/CtaInline.module.css`
- Modify: `/home/arthur/dev/connect-site/mdx-components.tsx`
- Modify: `/home/arthur/dev/connect-site/content/posts/post-de-teste.mdx` (adicionar exemplo)

- [ ] **Step 1: Criar `/home/arthur/dev/connect-site/components/blog/CtaInline.tsx`**

```tsx
import Link from "next/link"
import styles from "./CtaInline.module.css"

type Props = {
  texto: string
  cta?: string
  href?: string
}

export default function CtaInline({
  texto,
  cta = "Quero participar",
  href = "/inscricoes",
}: Props) {
  return (
    <aside className={styles.cta}>
      <p className={styles.texto}>{texto}</p>
      <Link href={href} className={styles.botao}>
        {cta}
      </Link>
    </aside>
  )
}
```

- [ ] **Step 2: Criar `/home/arthur/dev/connect-site/components/blog/CtaInline.module.css`**

```css
.cta {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px;
  margin: 40px 0;
  background: var(--text-dark, #0a1240);
  border-radius: 8px;
  color: #fff;
}

.texto {
  font-family: var(--google-nunito);
  font-size: 17px;
  line-height: 1.55;
  margin: 0;
  color: #fff;
}

.botao {
  display: inline-block;
  align-self: flex-start;
  font-family: var(--google-nunito);
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  padding: 12px 20px;
  background: var(--laranja, #e17230);
  color: #fff;
  border-radius: 6px;
  transition: background 0.15s;
}

.botao:hover {
  background: var(--laranja-escuro, #b64221);
}
```

- [ ] **Step 3: Modificar `/home/arthur/dev/connect-site/mdx-components.tsx`**

```tsx
import type { MDXComponents } from "mdx/types"
import CtaInline from "@/components/blog/CtaInline"

const components: MDXComponents = {
  CtaInline: CtaInline as any,
}

export function useMDXComponents(
  inherited: MDXComponents
): MDXComponents {
  return { ...inherited, ...components }
}
```

Notas:
- `as any` necessário porque MDXComponents tipa elementos HTML mas não componentes custom — alternativa seria estender o tipo, mas isso é o padrão recomendado pela própria comunidade Next.

- [ ] **Step 4: Modificar `/home/arthur/dev/connect-site/content/posts/post-de-teste.mdx`**

Adicionar `<CtaInline ... />` entre seções (ex., depois de "Como funciona"):

```mdx
---
titulo: "Post de teste do blog Connect"
excerpt: "Este post serve apenas para validar que o pipeline de MDX está funcionando. Será removido antes de ir para produção."
tag: "Teste"
categorias: ["pipeline"]
tempoLeitura: 3
destaque: true
dataPublicacao: "2026-05-10"
---

## Introdução

Este é o primeiro parágrafo do post. Está aqui para confirmar que o **markdown** está sendo renderizado corretamente, incluindo formatação como _itálico_ e [links](https://example.com).

## Como funciona

A pipeline lê o frontmatter via `gray-matter` na listagem e compila o MDX inteiro via `@next/mdx` na página individual.

- Item de lista 1
- Item de lista 2
- Item de lista 3

<CtaInline texto="Quer fazer parte da próxima turma do Connect? As inscrições estão abertas." />

## Conclusão

Se você está vendo este post renderizado com headings, listas, links e o CTA escuro acima, a pipeline funciona.
```

- [ ] **Step 5: Validar**

Abrir `/blog/post-de-teste` e ver o CTA escuro entre as seções.

- [ ] **Step 6: Commit**

```bash
cd /home/arthur/dev/connect-site
git add components/blog/CtaInline.tsx components/blog/CtaInline.module.css mdx-components.tsx content/posts/post-de-teste.mdx
git commit -m "feat: adicionar componente CtaInline para uso dentro de posts MDX"
```

### Verificação manual (usuário)

1. Abrir `/blog/post-de-teste`
2. Confirmar caixa escura (fundo `#0a1240`) entre "Como funciona" e "Conclusão"
3. Caixa contém o texto + botão laranja "Quero participar"
4. Clicar no botão: redireciona para `/inscricoes`
5. Responder "OK" para prosseguir

---

## Task 11: Adicionar link "Blog" no Nav + remover dummy debug + cleanup

**Goal:** Expor o blog na navegação principal, remover a página debug temporária, e remover os 3 posts dummy. Esta task fecha a infraestrutura — o site fica pronto para receber os posts reais quando o usuário trouxer os temas.

**Files:**
- Modify: `/home/arthur/dev/connect-site/components/layout/Nav.tsx`
- Delete: `/home/arthur/dev/connect-site/app/blog-debug/`
- Modify: `/home/arthur/dev/connect-site/content/posts/post-de-teste.mdx` (manter um único exemplo placeholder OU deletar — decisão do usuário)
- Delete: `/home/arthur/dev/connect-site/content/posts/segundo-post-teste.mdx`
- Delete: `/home/arthur/dev/connect-site/content/posts/terceiro-post-teste.mdx`

- [ ] **Step 1: Inspecionar `Nav.tsx` para entender o padrão atual**

Ler `/home/arthur/dev/connect-site/components/layout/Nav.tsx` e identificar onde os links de navegação estão definidos. Provavelmente vêm de `config/site.ts`.

- [ ] **Step 2: Adicionar link "Blog" seguindo o padrão existente**

Se os links vierem de `config/site.ts`, adicionar entrada `{ label: "Blog", href: "/blog" }` no array de nav links. Se estão hardcoded em `Nav.tsx`, adicionar o `<Link href="/blog">Blog</Link>` no mesmo lugar dos outros.

(Subagent decide com base na estrutura encontrada — sem código pré-escrito porque depende do que está lá.)

- [ ] **Step 3: Remover página debug**

```bash
cd /home/arthur/dev/connect-site
rm -rf app/blog-debug
```

- [ ] **Step 4: Decidir destino dos posts dummy**

Perguntar ao usuário antes de deletar:

- Opção A: Manter apenas `post-de-teste.mdx` como referência/template para os posts reais
- Opção B: Deletar todos os 3 (sem nenhum post o `/blog` mostra hero + grid vazio)

Implementar conforme a escolha do usuário durante a verificação manual desta task.

- [ ] **Step 5: Validar build de produção**

```bash
cd /home/arthur/dev/connect-site
npm run build
```

Expected: build passa sem erros, `generateStaticParams` pré-renderiza as rotas dos posts restantes, sem warnings críticos.

- [ ] **Step 6: Commit**

```bash
cd /home/arthur/dev/connect-site
git add -A
git commit -m "feat: expor blog no nav e remover artefatos de teste"
```

### Verificação manual (usuário)

1. Abrir `http://localhost:3000` (home)
2. Confirmar "Blog" no menu de navegação
3. Clicar em "Blog" → vai para `/blog`
4. Verificar `/blog-debug` retorna 404
5. Decidir se quer manter o post-de-teste como template ou apagar tudo
6. Confirmar que `npm run build` rodou sem erros
7. Responder "OK" — infraestrutura do blog está pronta para receber os posts reais

---

## Self-Review

**Spec coverage:**
- Modelo MDX-only ✓ (Tasks 1, 2, 4)
- @next/mdx oficial ✓ (Task 1)
- Mesmo modelo de rotas da Revisa (`/blog`, `/blog/[slug]`) ✓ (Tasks 3, 4)
- Todas as features do blog Revisa:
  - Listagem com cards ✓ (Task 3)
  - Post destaque ✓ (Task 5)
  - Filtros por tag ✓ (Task 5)
  - Sidebar sticky ✓ (Task 5, Task 6)
  - Artigo individual ✓ (Task 4)
  - generateStaticParams + generateMetadata ✓ (Task 4)
  - ToC dinâmico com IntersectionObserver ✓ (Task 6)
  - Reading progress bar ✓ (Task 7)
  - Share (clipboard + WhatsApp) ✓ (Task 8)
  - Related posts ✓ (Task 9)
  - CtaInline embedável ✓ (Task 10)
- Adaptação ao design Connect (CSS Modules, Tailwind v4, paleta azul/magenta/laranja, Nunito + Source Serif 4) ✓
- Cada task tem critério de verificação manual antes de prosseguir ✓
- Subagent-driven com checkpoint humano ✓

**Placeholder scan:** Sem placeholders, todo código está completo. O único "decida com o usuário" é a escolha A/B na Task 11 (deletar dummies ou manter um), o que é apropriado.

**Type consistency:** `PostMeta` definido em `lib/posts.ts` e usado em todas as outras tasks. Funções `getAllPostMeta`, `getPostMeta`, `getPostSource`, `getRelatedPosts`, `getFeaturedPost`, `extractTOC`, `slugify`, `formatarData` consistentes do início ao fim. Props de componentes consistentes: `BlogListagem({ posts, destaque })`, `TocNav({ items })`, `CopyLinkButton({ titulo })`, `CtaInline({ texto, cta?, href? })`, `RelatedPosts({ posts })`.
