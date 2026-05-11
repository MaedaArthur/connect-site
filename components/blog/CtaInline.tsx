import Link from "next/link"
import { siteConfig } from "@/config/site"
import styles from "./CtaInline.module.css"

type Props = {
  texto: string
  cta?: string
  href?: string
}

export default function CtaInline({ texto, cta, href }: Props) {
  const open = siteConfig.event.registrationsOpen

  const resolvedHref = href ?? (open ? "/inscricoes" : "/#inscricoes")
  const resolvedCta = cta ?? (open ? "Quero me inscrever" : "Avise-me quando abrir")

  return (
    <aside className={styles.cta}>
      <p className={styles.texto}>{texto}</p>
      <Link href={resolvedHref} className={styles.botao}>
        {resolvedCta}
      </Link>
    </aside>
  )
}
