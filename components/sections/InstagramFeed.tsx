'use client'

import { useEffect } from 'react'
import styles from './InstagramFeed.module.css'

export default function InstagramFeed() {
  useEffect(() => {
    const d = document
    const s = d.createElement('script')
    s.type = 'module'
    s.src = 'https://w.behold.so/widget.js'
    d.head.append(s)
  }, [])

  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}>Instagram</p>
        <h2 className={styles.title}>
          Acompanhe o <em>Connect</em>
        </h2>
        <div data-behold-id="g0YZk3WJoA9BY7zaZQfE"></div>
      </div>
    </section>
  )
}
