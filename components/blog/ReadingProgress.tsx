"use client"

import { useEffect, useState } from "react"
import styles from "./ReadingProgress.module.css"

export default function ReadingProgress() {
  const [progresso, setProgresso] = useState(0)

  useEffect(() => {
    function onScroll() {
      const total =
        document.documentElement.scrollHeight - window.innerHeight
      const pct = total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0
      setProgresso(pct)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <div
      className={styles.barra}
      style={{ width: `${progresso}%` }}
      aria-hidden="true"
    />
  )
}
