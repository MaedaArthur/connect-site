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
