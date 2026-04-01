import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { theme } from '@/config/theme'
import styles from './Footer.module.css'

function LogoMark() {
  if (theme.logo.textMode) {
    return (
      <div className={styles.logoMark}>
        <div className={styles.logoAnt} aria-hidden="true">
          <span className={styles.dot1}></span>
          <span className={styles.dot2}></span>
          <span className={styles.dot3}></span>
        </div>
        {theme.logo.text}
      </div>
    )
  }
  return (
    <div className={styles.logoMark}>
      {/* Logo sem fundo — funciona sobre azul-escuro do footer */}
      <Image
        src={theme.logo.white}
        alt={theme.logo.text}
        width={160}
        height={56}
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
}

export default function Footer() {
  const { footer, peteel } = siteConfig

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>

          <div className={styles.logoBlock}>
            <LogoMark />
            <div className={styles.peteel}>
              Uma realização {peteel.name} · {footer.realizacao.split('PETEEL · ')[1]}
            </div>
          </div>

          <ul className={styles.links}>
            {footer.links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className={styles.info}>{footer.info}</div>

        </div>
      </div>
    </footer>
  )
}
