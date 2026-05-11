"use client"

import { useEffect, useState } from "react"
import styles from "./CopyLinkButton.module.css"

type Props = {
  titulo: string
}

export default function CopyLinkButton({ titulo }: Props) {
  const [copiado, setCopiado] = useState(false)
  const [whatsappHref, setWhatsappHref] = useState<string | null>(null)

  useEffect(() => {
    const texto = encodeURIComponent(`${titulo} ${window.location.href}`)
    setWhatsappHref(`https://wa.me/?text=${texto}`)
  }, [titulo])

  async function copiar() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      // clipboard API not available — silent fail
    }
  }

  return (
    <div className={styles.bloco}>
      <h4 className={styles.titulo}>Compartilhar</h4>
      <div className={styles.botoes}>
        <button type="button" className={styles.botao} onClick={copiar}>
          {copiado ? "Link copiado!" : "Copiar link"}
        </button>
        {whatsappHref && (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={`${styles.botao} ${styles.whatsapp}`}
          >
            WhatsApp
          </a>
        )}
      </div>
    </div>
  )
}
