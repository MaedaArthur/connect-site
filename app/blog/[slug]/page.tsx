import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import {
  getAllPostMeta,
  getPostMeta,
  getPostSource,
} from "@/lib/posts"
import { extractTOC, formatarData } from "@/lib/post-utils"
import TocNav from "@/components/blog/TocNav"
import ReadingProgress from "@/components/blog/ReadingProgress"
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
    <>
      <ReadingProgress />
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
    </>
  )
}
