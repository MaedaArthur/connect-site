import { siteConfig } from '@/config/site'
import styles from './SocialProof.module.css'

export default function SocialProof() {
  const { socialProof } = siteConfig

  return (
    <section className={styles.section} id="sobre">
      <div className="container">
        <div className={styles.inner}>

          <div className={styles.header}>
            <p className={styles.eyebrow}>{socialProof.label}</p>
            <h2 className={styles.title}>
              {socialProof.titulo}{' '}
              <em>{socialProof.tituloItalico}</em>
            </h2>
            <p className={styles.descricao}>{socialProof.descricao}</p>
          </div>

          <ul className={styles.bullets}>
            {socialProof.bullets.map((bullet, i) => (
              <li key={i} className={styles.bullet}>
                <span className={styles.bulletDot} style={{ background: bullet.accent }} />
                <span className={styles.bulletText}>{bullet.text}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  )
}
