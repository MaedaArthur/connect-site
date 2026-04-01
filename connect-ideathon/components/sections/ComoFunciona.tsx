import { siteConfig } from '@/config/site'
import styles from './ComoFunciona.module.css'

const stepColors = ['var(--azul)', 'var(--magenta)', 'var(--ciano)', 'var(--laranja)', 'var(--roxo)']

export default function ComoFunciona() {
  const { comoFunciona } = siteConfig

  return (
    <section className={styles.section} id="como-funciona">
      <div className="container">
        <p className={styles.eyebrow}>{comoFunciona.label}</p>
        <h2 className={styles.title}>
          {comoFunciona.titulo}{' '}
          <em>{comoFunciona.tituloItalico}</em>
        </h2>
        <p className={styles.subtitle}>{comoFunciona.subtitulo}</p>

        <div className={styles.stepsGrid}>
          {comoFunciona.steps.map((step, i) => (
            <div key={step.num} className={styles.step}>
              <span className={styles.stepNum} style={{ color: stepColors[i] }}>
                {step.num}
              </span>
              <div className={styles.stepTitle}>{step.title}</div>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
