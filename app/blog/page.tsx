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
