'use client'

import { useActionState, useState } from 'react'
import { inscricaoAction } from './actions'
import styles from './InscricaoForm.module.css'

const periodos = ['1º', '2º', '3º', '4º', '5º', '6º', '7º', '8º', '9º', '10º']
const interesses = ['Tecnologia', 'Gestão', 'Marketing', 'Vendas']

export default function InscricaoForm() {
  const [state, action, pending] = useActionState(inscricaoAction, null)
  const [solicitaBolsa, setSolicitaBolsa] = useState(false)

  if (state?.ok) {
    return (
      <div className={styles.success}>
        <p className={styles.successEyebrow}>Inscrição recebida</p>
        <h2 className={styles.successTitle}>Formulário enviado com sucesso.</h2>
        <p className={styles.successText}>
          O retorno será enviado para o seu e-mail até 11 de agosto. Fique de olho na caixa de entrada e na aba de Promoções.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className={styles.form}>

      {/* Dados pessoais */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Dados pessoais</legend>
        <div className={styles.grid2}>
          <div className={styles.field}>
            <label className={styles.label}>Nome completo *</label>
            <input className={styles.input} type="text" name="nome" required />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>E-mail *</label>
            <input className={styles.input} type="email" name="email" required />
          </div>
        </div>
        <div className={styles.grid2}>
          <div className={styles.field}>
            <label className={styles.label}>WhatsApp <span className={styles.optional}>(opcional)</span></label>
            <input className={styles.input} type="tel" name="whatsapp" placeholder="(48) 99999-9999" />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Área de interesse *</label>
            <select className={styles.select} name="interesse" required defaultValue="">
              <option value="" disabled>Selecione</option>
              {interesses.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
        </div>
      </fieldset>

      {/* Dados acadêmicos */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Dados acadêmicos</legend>
        <div className={styles.grid2}>
          <div className={styles.field}>
            <label className={styles.label}>Curso *</label>
            <input className={styles.input} type="text" name="curso" required />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Universidade *</label>
            <input className={styles.input} type="text" name="universidade" required />
          </div>
        </div>
        <div className={styles.grid2}>
          <div className={styles.field}>
            <label className={styles.label}>Período *</label>
            <select className={styles.select} name="periodo" required defaultValue="">
              <option value="" disabled>Selecione</option>
              {periodos.map(p => <option key={p} value={p}>{p} período</option>)}
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Localização *</label>
            <div className={styles.checkboxField}>
              <input className={styles.checkbox} type="checkbox" name="florianopolis" id="florianopolis" required />
              <label htmlFor="florianopolis" className={styles.checkboxLabel}>
                Estou em Florianópolis durante o evento (agosto de 2026)
              </label>
            </div>
          </div>
        </div>
      </fieldset>

      {/* Perguntas abertas */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Sobre você</legend>
        <div className={styles.field}>
          <label className={styles.label}>Por que você quer participar do Connect? * <span className={styles.optional}>(máx. 300 caracteres)</span></label>
          <textarea className={styles.textarea} name="motivacao" maxLength={300} rows={4} required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Descreva uma situação em que você precisou analisar um problema complexo e como abordou isso. * <span className={styles.optional}>(máx. 500 caracteres)</span></label>
          <textarea className={styles.textarea} name="analise" maxLength={500} rows={5} required />
        </div>
      </fieldset>

      {/* Logística e bolsa */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Logística e acessibilidade</legend>

        <div className={styles.field}>
          <label className={styles.label}>Precisa de transporte da UFSC até o local do evento? *</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input type="radio" name="transporte" value="sim" required /> Sim
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="transporte" value="nao" /> Não
            </label>
          </div>
        </div>

        <div className={styles.field}>
          <div className={styles.checkboxField}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="bolsa"
              name="bolsa"
              checked={solicitaBolsa}
              onChange={e => setSolicitaBolsa(e.target.checked)}
            />
            <label htmlFor="bolsa" className={styles.checkboxLabel}>
              Solicito bolsa de participação (isenção da taxa de R$80)
            </label>
          </div>
        </div>

        {solicitaBolsa && (
          <div className={styles.field}>
            <label className={styles.label}>Por que você solicita a bolsa? <span className={styles.optional}>(máx. 300 caracteres)</span></label>
            <textarea className={styles.textarea} name="motivoBolsa" maxLength={300} rows={3} />
          </div>
        )}
      </fieldset>

      {/* Autorização */}
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Compartilhamento de dados</legend>
        <div className={styles.authBox}>
          <div className={styles.checkboxField}>
            <input className={styles.checkbox} type="checkbox" id="autorizacao" name="autorizacao" />
            <label htmlFor="autorizacao" className={styles.checkboxLabel}>
              Autorizo o compartilhamento do meu perfil com as empresas parceiras do Connect. Isso permite que elas entrem em contato para oportunidades de estágio e emprego.
            </label>
          </div>
          <p className={styles.authNote}>Opcional. Quem não autorizar participa normalmente do evento.</p>
        </div>
      </fieldset>

      {state?.message && (
        <p className={styles.error}>{state.message}</p>
      )}

      <button className={styles.btn} type="submit" disabled={pending}>
        {pending ? 'Enviando...' : 'Enviar inscrição'}
      </button>

    </form>
  )
}