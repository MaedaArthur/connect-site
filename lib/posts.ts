import fs from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"
import { slugify, extractTOC, formatarData } from "./post-utils"

export { slugify, extractTOC, formatarData }

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

