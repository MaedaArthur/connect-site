"use client"

import { useState } from "react"
import styles from "./CopyLinkButton.module.css"

type Props = {
  titulo: string
}

export default function CopyLinkButton({ titulo }: Props) {
  const [copiado, setCopiado] = useState(false)

  async function copiar() {
    if (typeof window === "undefined") return
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      // clipboard API not available — silent fail
    }
  }

  function whatsappUrl(): string {
    if (typeof window === "undefined") return "#"
    const texto = encodeURIComponent(`${titulo} ${window.location.href}`)
    return `https://wa.me/?text=${texto}`
  }

  return (
    <div className={styles.bloco}>
      <h4 className={styles.titulo}>Compartilhar</h4>
      <div className={styles.botoes}>
        <button type="button" className={styles.botao} onClick={copiar}>
          {copiado ? "Link copiado!" : "Copiar link"}
        </button>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer"
          className={`${styles.botao} ${styles.whatsapp}`}
        >
          WhatsApp
        </a>
      </div>
    </div>
  )
}
