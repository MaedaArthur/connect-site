import styles from './page.module.css'

export const metadata = {
  title: 'Para Empresas · Connect Ideathon 2026',
  description: 'Seja parceiro do Connect Ideathon 2026 em Florianópolis.',
}

export default function EmpresasPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Para empresas</p>
          <h1 className={styles.title}>Quero ser<br /><em>parceiro</em></h1>
          <p className={styles.desc}>
            Preencha o formulário abaixo e entraremos em contato para apresentar
            as modalidades de parceria disponíveis.
          </p>

          <form className={styles.form}>
            {/* TODO: plugar backend — mailto:, Netlify Forms ou API */}

            <div className={styles.field}>
              <label htmlFor="empresa">Nome da empresa</label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                required
                placeholder="Ex: Empresa S.A."
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="responsavel">Nome do responsável</label>
              <input
                id="responsavel"
                name="responsavel"
                type="text"
                required
                placeholder="Ex: Ana Souza"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Ex: ana@empresa.com.br"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="mensagem">Mensagem (opcional)</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                placeholder="Conte-nos mais sobre sua empresa e interesse..."
              />
            </div>

            <button type="submit" className={styles.submit}>Enviar</button>
          </form>
        </div>
      </div>
    </main>
  )
}
