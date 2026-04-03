'use client'

import { useActionState } from 'react'
import { subscriberAction } from '@/app/actions'
import styles from './NotifyForm.module.css'

export default function NotifyForm() {
  const [state, action, pending] = useActionState(subscriberAction, null)

  if (state?.ok) {
    return (
      <div className={styles.successBox}>
        <p className={styles.successTitle}>Cadastrado!</p>
        <p className={styles.successSub}>Você vai receber um e-mail em breve. Para não perder:</p>
        <div className={styles.successLinks}>
          <div className={styles.successLink}>
            <span className={styles.successLinkNum}>01</span>
            <span>Abra seu e-mail e procure uma mensagem do Connect</span>
          </div>
          <div className={styles.successLink}>
            <span className={styles.successLinkNum}>02</span>
            <span>Se não estiver na caixa principal, confira a aba <strong>Promoções</strong> ou <strong>Spam</strong></span>
          </div>
          <div className={styles.successLink}>
            <span className={styles.successLinkNum}>03</span>
            <span>Marque como <strong>Não é spam</strong> ou mova para a caixa principal para não perder os próximos avisos</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form action={action} className={styles.form}>
      <div className={styles.row}>
        <input
          className={styles.input}
          type="text"
          name="nome"
          placeholder="Seu nome"
          required
          autoComplete="name"
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Seu melhor e-mail"
          required
          autoComplete="email"
        />
      </div>
      <div className={styles.row}>
        <input
          className={styles.input}
          type="text"
          name="curso"
          placeholder="Curso (opcional)"
        />
        <input
          className={styles.input}
          type="text"
          name="universidade"
          placeholder="Universidade (opcional)"
        />
      </div>
      {state?.message && (
        <p className={styles.error}>{state.message}</p>
      )}
      <button className={styles.btn} type="submit" disabled={pending}>
        {pending ? 'Cadastrando...' : 'Avise-me quando abrir'}
      </button>
    </form>
  )
}
