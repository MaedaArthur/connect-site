import Link from "next/link"
import type { PostMeta } from "@/lib/posts"
import { formatarData } from "@/lib/post-utils"
import styles from "./RelatedPosts.module.css"

export default function RelatedPosts({ posts }: { posts: PostMeta[] }) {
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
