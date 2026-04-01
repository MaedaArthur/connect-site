import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { theme } from '@/config/theme'
import { getCtaProps } from '@/lib/utils'
import AntTrail from '@/components/ui/AntTrail'
import Button from '@/components/ui/Button'
import styles from './Hero.module.css'

export default function Hero() {
  const { hero, event } = siteConfig
  const cta = getCtaProps()

  return (
    <section className={styles.hero} id="inicio">
      <div className="container">
        <div className={styles.inner}>

          {/* Coluna de texto */}
          <div className={styles.content}>
            <p className={`${styles.eyebrow} fade-up delay-1`}>
              <span className={styles.eyebrowDot}></span>
              {hero.eyebrow}
            </p>

            <h1 className={`${styles.title} fade-up delay-2`}>
              {hero.titulo}
              <span className={styles.serif}>{hero.tituloItalico}</span>
              <span className={styles.accent}>{hero.acento}</span>
            </h1>

            <p className={`${styles.desc} fade-up delay-3`}>{hero.descricao}</p>

            <div className={`${styles.ctas} fade-up delay-4`}>
              {cta.href ? (
                <Button variant="primary" href={cta.href}>{cta.label}</Button>
              ) : (
                <Button variant="primary">{cta.label}</Button>
              )}
              <Button variant="secondary" href={hero.ctaSecondaryHref}>
                {hero.ctaSecondary}
              </Button>
            </div>

            <div className={`${styles.stats} fade-up delay-5`}>
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna visual */}
          <div className={`${styles.visual} fade-up delay-3`}>
            {/* AntTrail ascending */}
            <div className={styles.antTrailWrap} aria-hidden="true">
              <AntTrail direction="ascending" color="var(--azul)" opacity={0.5} />
            </div>

            <div className={styles.badge}>
              {/* Logo sem fundo — fundo branco do badge, sem problema */}
              <Image
                src={theme.logo.badge}
                alt="Connect Ideathon"
                width={96}
                height={96}
                style={{ objectFit: 'contain', display: 'block', margin: '0 auto 12px' }}
                priority
              />
              <div className={styles.badgeEvent}>Ideathon</div>
              <div className={styles.badgeName}>Connect</div>
              <div className={styles.badgeYear}>{event.edicao}</div>
              <div className={styles.badgeCity}>
                <strong>{event.cidade}</strong> · Santa Catarina
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
