import type { Metadata } from 'next'
import InscricaoForm from './InscricaoForm'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Inscrições · Connect Ideathon 2026',
  description: 'Inscreva-se no Connect Ideathon 2026. 48 horas de imersão, mentoria e colaboração em Florianópolis.',
}

export default function InscricoesPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>Inscrições abertas · Agosto 2026</p>
          <h1 className={styles.title}>
            Preencha o formulário
            <em> com atenção.</em>
          </h1>
          <p className={styles.subtitle}>
            As inscrições passam por uma análise interna. O retorno será enviado por e-mail em até 4 dias após o encerramento das inscrições, em 7 de agosto.
          </p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container">
          <InscricaoForm />
        </div>
      </section>
    </main>
  )
}