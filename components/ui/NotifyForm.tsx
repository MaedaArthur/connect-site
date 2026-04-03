'use client'

import { useActionState } from 'react'
import { subscriberAction } from '@/app/actions'
import styles from './NotifyForm.module.css'

export default function NotifyForm() {
  const [state, action, pending] = useActionState(subscriberAction, null)

  if (state?.ok) {
    return (
      <p className={styles.success}>{state.message}</p>
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
