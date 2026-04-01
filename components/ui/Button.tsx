import React from 'react'
import styles from './Button.module.css'

type Variant = 'primary' | 'secondary' | 'white' | 'outline-white'

interface ButtonProps {
  variant?: Variant
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  onClick,
}: ButtonProps) {
  const cls = `${styles.btn} ${styles[`btn--${variant}`]} ${className}`

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <span className={cls} onClick={onClick} role={onClick ? 'button' : undefined}>
      {children}
    </span>
  )
}
