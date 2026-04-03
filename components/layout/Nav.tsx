import Image from 'next/image'
import { theme } from '@/config/theme'
import { getCtaProps } from '@/lib/utils'
import styles from './Nav.module.css'

/* LogoMark — renderiza imagem (sem fundo) ou texto+dots como fallback */
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

  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <LogoMark />

        <nav>
          <ul className={styles.links}>
            <li><a href="/metodologia">Metodologia</a></li>
            <li><a href="/#empresas">Para Empresas</a></li>
            <li><a href="/#parceiros">Parceiros</a></li>
            <li>
              {cta.href ? (
                <a href={cta.href} className={styles.ctaLink}>{cta.label}</a>
              ) : (
                <a href="/#inscricoes" className={styles.ctaLink}>{cta.label}</a>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
