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
