import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import Button from '@/components/ui/Button'
import styles from './Parceiros.module.css'

export default function Parceiros() {
  const { parceiros, peteel } = siteConfig
  const hasRealizadores = parceiros.realizadores && parceiros.realizadores.length > 0
  const hasPatrocinadores = parceiros.patrocinadores && parceiros.patrocinadores.length > 0
  const hasAny = hasRealizadores || hasPatrocinadores

  return (
    <>
      <section className={styles.section} id="parceiros">
        <div className="container">
          <div className={styles.header}>
            <div>
              <p className={styles.eyebrow}>{parceiros.label}</p>
              <h2 className={styles.title}>
                {parceiros.titulo}<br />
                <em>{parceiros.tituloItalico}</em>
              </h2>
            </div>
            <p className={styles.headerDesc}>{parceiros.descricao}</p>
          </div>

          {hasAny ? (
            <div className={styles.grupos}>
              {hasRealizadores && (
                <div className={styles.grupo}>
                  <p className={styles.grupoLabel}>Realizadores</p>
                  <div className={styles.logosGrid}>
                    {parceiros.realizadores.map((p) => (
                      <Link key={p.slug} href={`/parceiros/${p.slug}`} className={styles.logoCard}>
                        <Image src={p.logo} alt={p.nome} width={220} height={110} style={{ objectFit: 'contain' }} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {hasPatrocinadores && (
                <div className={styles.grupo}>
                  <p className={styles.grupoLabel}>Patrocinadores</p>
                  <div className={styles.logosGrid}>
                    {parceiros.patrocinadores.map((p) => (
                      <Link key={p.slug} href={`/parceiros/${p.slug}`} className={styles.logoCard}>
                        <Image src={p.logo} alt={p.nome} width={220} height={110} style={{ objectFit: 'contain' }} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className={styles.coming}>
              <div className={styles.comingLabel}>Parceiros e realizadores</div>
              <div className={styles.comingTitle}>Em breve</div>
              <p>{parceiros.emBreveTexto}</p>
              <Button variant="primary" href="/empresas" className={styles.comingCta}>
                Quero ser parceiro
              </Button>
            </div>
          )}
        </div>
      </section>

      <div className={styles.peteelBand} aria-label="Realização">
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <span className={styles.peteelLabel}>Uma realização</span>
          <span className={styles.peteelSep} aria-hidden="true"></span>
          <span className={styles.peteelName}>{peteel.name}</span>
          <span className={styles.peteelDesc}>{peteel.description}</span>
        </div>
      </div>
    </>
  )
}