import { siteConfig } from '@/config/site'
import { getCtaProps } from '@/lib/utils'
import Button from '@/components/ui/Button'
import styles from './CTA.module.css'

export default function CTA() {
  const { cta, event } = siteConfig
  const ctaProps = getCtaProps()

  return (
    <section className={styles.section} id="inscricoes">
      <div className="container">
        <div className={styles.inner}>

          {/* AntTrail ghost acima do título */}
          <div className={styles.antRow} aria-hidden="true">
            <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8"  cy="14" r="4.5" fill="rgba(251,244,233,0.35)"/>
              <circle cx="26" cy="10" r="5.5" fill="rgba(251,244,233,0.4)"/>
              <circle cx="46" cy="13" r="4.8" fill="rgba(251,244,233,0.35)"/>
              <circle cx="64" cy="8"  r="3.8" fill="rgba(251,244,233,0.28)"/>
            </svg>
          </div>

          <div className={styles.tag}>{cta.tag}</div>

          <h2 className={styles.title}>
            {cta.titulo}<br />
            <em>{cta.tituloItalico}</em>
          </h2>

          <p className={styles.subtitle}>{cta.subtitulo}</p>

          <div className={styles.buttons}>
            {ctaProps.href ? (
              <Button variant="primary" href={ctaProps.href}>{ctaProps.label}</Button>
            ) : (
              <Button variant="white">{ctaProps.label}</Button>
            )}
            <Button variant="outline-white" href={event.instagram}>
              {cta.ctaSecondary}
            </Button>
          </div>

        </div>

        {/* Silhueta de ponte ghost no rodapé da seção */}
        <div className={styles.bridge} aria-hidden="true">
          <svg viewBox="0 0 900 70" xmlns="http://www.w3.org/2000/svg" width="100%" style={{ display: 'block' }}>
            {/* Deck */}
            <rect x="0" y="46" width="900" height="5"   fill="rgba(251,244,233,0.15)"/>
            {/* Trilhos */}
            <rect x="0" y="37" width="900" height="2"   fill="rgba(251,244,233,0.1)"/>
            <rect x="0" y="42" width="900" height="1.5" fill="rgba(251,244,233,0.08)"/>
            {/* Postes */}
            {[100,200,300,400,500,600,700,800].map((x) => (
              <line key={x} x1={x} y1="33" x2={x} y2="51" stroke="rgba(251,244,233,0.1)" strokeWidth="2"/>
            ))}
            {/* Cabo catenário */}
            <path d="M0 51 Q225 18 450 12 Q675 18 900 51" fill="none" stroke="rgba(251,244,233,0.08)" strokeWidth="1.5"/>
            {/* Figura humana */}
            <ellipse cx="552" cy="35" rx="4" ry="5" fill="rgba(251,244,233,0.18)"/>
            <rect x="549" y="40" width="6" height="12" rx="2" fill="rgba(251,244,233,0.18)"/>
            <path d="M549 44 Q540 47 534 48" stroke="rgba(251,244,233,0.15)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
