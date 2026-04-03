import type { Metadata } from 'next'
import { Nunito, Source_Serif_4 } from 'next/font/google'
import { theme } from '@/config/theme'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--google-nunito',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--google-serif',
})

function toKebab(str: string) {
  return str.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`)
}

const colorVars = Object.entries(theme.colors)
  .map(([key, val]) => `--${toKebab(key)}: ${val};`)
  .join('\n  ')

const cssVars = `
:root {
  ${colorVars}
  --font-sans: ${theme.fonts.sans};
  --font-serif: ${theme.fonts.serif};
  --font-condensed: ${theme.fonts.condensed};
}
`

export const metadata: Metadata = {
  title: 'Connect Ideathon 2026 · Florianópolis',
  description:
    '48 horas de imersão, mentoria e colaboração para estudantes universitários que querem resolver desafios reais.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${nunito.variable} ${sourceSerif.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
