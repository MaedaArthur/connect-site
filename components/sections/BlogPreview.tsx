import Link from "next/link"
import { getAllPostMeta, getFeaturedPost } from "@/lib/posts"
import { formatarData } from "@/lib/post-utils"
import styles from "./BlogPreview.module.css"

export default async function BlogPreview() {
  const [posts, destaque] = await Promise.all([
    getAllPostMeta(),
    getFeaturedPost(),
  ])

  const recentes = posts
    .filter((p) => p.slug !== destaque?.slug)
    .slice(0, 2)

  const tags = Array.from(new Set(posts.map((p) => p.tag).filter(Boolean))).sort()

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Blog</p>
            <h2 className={styles.titulo}>Do evento para o mundo real</h2>
          </div>
          <Link href="/blog" className={styles.verTodos}>
            Ver todos os artigos →
          </Link>
        </div>

        <div className={styles.grid}>
          {destaque && (
            <Link href={`/blog/${destaque.slug}`} className={styles.destaque}>
              <span className={styles.destaqueTag}>{destaque.tag}</span>
              <h3 className={styles.destaqueTitulo}>{destaque.titulo}</h3>
              <p className={styles.destaqueExcerpt}>{destaque.excerpt}</p>
              <span className={styles.destaqueMeta}>
                {destaque.tempoLeitura} min de leitura →
              </span>
            </Link>
          )}

          <div className={styles.recentes}>
            {recentes.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={styles.card}
              >
                <span className={styles.cardTag}>{post.tag}</span>
                <h3 className={styles.cardTitulo}>{post.titulo}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <span className={styles.cardMeta}>
                  {post.tempoLeitura} min de leitura →
                </span>
              </Link>
            ))}
          </div>
        </div>

        {tags.length > 0 && (
          <div className={styles.tags}>
            <span className={styles.tagsLabel}>Ver por tema:</span>
            {tags.map((tag) => (
              <Link key={tag} href="/blog" className={styles.tagPill}>
                {tag}
              </Link>
            ))}
            <Link href="/blog" className={styles.tagPillAll}>
              Todos os temas →
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
