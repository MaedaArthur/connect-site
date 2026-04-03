import { siteConfig } from '@/config/site'
import AntTrail from '@/components/ui/AntTrail'
import styles from './Metodologia.module.css'

export default function Metodologia() {
  const { metodologia } = siteConfig

  return (
    <section className={styles.section} id="metodologia">
      <div className="container">
        <p className={styles.eyebrow}>{metodologia.label}</p>
        <h2 className={styles.title}>
          {metodologia.titulo}
          <em>{metodologia.tituloItalico}</em>
        </h2>
        <p className={styles.subtitle}>{metodologia.subtitulo}</p>

        <div className={styles.grid}>
          {metodologia.cards.map((card) => (
            <div key={card.num} className={styles.card}>
              <span className={styles.cardNum}>{card.num}</span>
              <div className={styles.cardBar} style={{ background: card.accent }}></div>
              <div className={styles.cardTitle}>{card.title}</div>
              <p dangerouslySetInnerHTML={{ __html: card.text }} />
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="/metodologia" className={styles.ctaLink}>
            Ver metodologia completa →
          </a>
        </div>

        {/* AntTrail horizontal como divisor inferior */}
        <div className={styles.trailDivider}>
          <AntTrail direction="horizontal" color="#003399" />
        </div>
      </div>
    </section>
  )
}
