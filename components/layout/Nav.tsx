'use client'

import { useState } from 'react'
import Image from 'next/image'
import { theme } from '@/config/theme'
import { getCtaProps } from '@/lib/utils'
import styles from './Nav.module.css'

function LogoMark() {
  if (theme.logo.textMode) {
    return (
      <a href="/" className={styles.logo}>
        <div className={styles.logoAnt} aria-hidden="true">
          <span className={styles.dot1}></span>
          <span className={styles.dot2}></span>
          <span className={styles.dot3}></span>
        </div>
        {theme.logo.text}
      </a>
    )
  }
  return (
    <a href="/" className={styles.logoImg}>
      <Image
        src={theme.logo.default}
        alt={theme.logo.text}
        width={160}
        height={56}
        style={{ objectFit: 'contain' }}
        priority
      />
    </a>
  )
}

export default function Nav() {
  const cta = getCtaProps()
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <LogoMark />

        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <span className={open ? styles.barOpen1 : ''} />
          <span className={open ? styles.barOpen2 : ''} />
          <span className={open ? styles.barOpen3 : ''} />
        </button>

        <nav>
          <ul className={`${styles.links}${open ? ` ${styles.linksOpen}` : ''}`}>
            <li><a href="/metodologia" onClick={() => setOpen(false)}>Metodologia</a></li>
            <li><a href="/#empresas" onClick={() => setOpen(false)}>Para Empresas</a></li>
            <li><a href="/#parceiros" onClick={() => setOpen(false)}>Parceiros</a></li>
            <li><a href="/blog" onClick={() => setOpen(false)}>Blog</a></li>
            <li>
              {cta.href ? (
                <a href={cta.href} className={styles.ctaLink} onClick={() => setOpen(false)}>{cta.label}</a>
              ) : (
                <a href="/#inscricoes" className={styles.ctaLink} onClick={() => setOpen(false)}>{cta.label}</a>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
