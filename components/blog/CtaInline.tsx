import Link from "next/link"
import styles from "./CtaInline.module.css"

type Props = {
  texto: string
  cta?: string
  href?: string
}

export default function CtaInline({
  texto,
  cta = "Quero participar",
  href = "/inscricoes",
}: Props) {
  return (
    <aside className={styles.cta}>
      <p className={styles.texto}>{texto}</p>
      <Link href={href} className={styles.botao}>
        {cta}
      </Link>
    </aside>
  )
}
