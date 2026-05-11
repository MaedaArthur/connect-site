"use client"

import { useEffect, useState } from "react"
import styles from "./TocNav.module.css"

type Item = { id: string; text: string }

export default function TocNav({ items }: { items: Item[] }) {
  const [ativo, setAtivo] = useState<string | null>(null)

  useEffect(() => {
    if (items.length === 0) return
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
    return () => observer.disconnect()
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
