import { siteConfig } from '@/config/site'
import styles from './Empresas.module.css'

export default function Empresas() {
  const { empresas } = siteConfig

  return (
    <section className={styles.section} id="empresas">
      <div className="container">
        <div className={styles.grid}>

          {/* Coluna esquerda: texto + CTA */}
          <div>
            <p className={styles.eyebrow}>{empresas.label}</p>
            <h2 className={styles.title}>
              {empresas.titulo}<br />
              <em>{empresas.tituloItalico}</em>
            </h2>
            <p className={styles.subtitle}>{empresas.subtitulo}</p>
            <a href="/empresas" className={styles.cta}>{empresas.cta}</a>
          </div>

          {/* Coluna direita: lista de benefícios */}
          <div>
            <ul className={styles.benefitList}>
              {empresas.beneficios.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {/* Mini mountain silhouette decorativa */}
            <svg
              width="100%"
              viewBox="0 0 400 60"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block', opacity: 0.25 }}
              aria-hidden="true"
            >
              <path
                d="M0,60 L0,42 C 30,35 55,26 75,14 C 82,9 87,4 92,1 C 96,-1 99,0 102,4
                   C 105,8 107,14 110,21 C 113,28 116,34 121,39 C 126,44 132,47 140,48
                   C 148,49 157,47 165,42 C 173,37 179,29 183,21 C 187,13 189,6 192,2
                   C 195,-1 198,-1 201,3 C 204,7 206,14 209,22 C 212,30 215,37 220,43
                   C 225,49 232,52 241,52 C 250,52 259,49 267,43 C 275,37 281,28 285,19
                   C 289,10 291,3 294,0 C 297,-2 300,-1 303,3 C 306,7 308,14 311,23
                   C 314,32 317,40 322,46 C 327,52 334,55 343,55 C 360,55 385,50 400,44
                   L 400,60 Z"
                fill="rgba(251,244,233,1)"
              />
              {/* Trilha de pontos na silhueta */}
              <circle cx="60"  cy="52" r="2.5" fill="rgba(251,244,233,0.8)"/>
              <circle cx="80"  cy="46" r="2.2" fill="rgba(251,244,233,0.8)"/>
              <circle cx="102" cy="40" r="1.9" fill="rgba(251,244,233,0.7)"/>
              <circle cx="125" cy="34" r="1.6" fill="rgba(251,244,233,0.65)"/>
              <circle cx="148" cy="28" r="1.3" fill="rgba(251,244,233,0.6)"/>
              <circle cx="170" cy="22" r="1.1" fill="rgba(251,244,233,0.55)"/>
            </svg>
          </div>

        </div>
      </div>
    </section>
  )
}
