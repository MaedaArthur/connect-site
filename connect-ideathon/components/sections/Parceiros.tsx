import { siteConfig } from '@/config/site'
import Button from '@/components/ui/Button'
import styles from './Parceiros.module.css'

export default function Parceiros() {
  const { parceiros, peteel } = siteConfig
  const hasRealizadores = parceiros.realizadores && parceiros.realizadores.length > 0

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

          {hasRealizadores ? (
            <div className={styles.grid}>
              {parceiros.realizadores.map((name) => (
                <div key={name} className={styles.chip}>{name}</div>
              ))}
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

      {/* Peteel Band */}
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
