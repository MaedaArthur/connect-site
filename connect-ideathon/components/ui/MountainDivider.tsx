interface MountainDividerProps {
  fromColor: string
  toColor: string
  flip?: boolean
  variant?: 'A' | 'B' | 'C'
}

/* Três path distintos extraídos do HTML de referência:
   A — silhueta suave (usado após Hero: claro → branco)
   B — ondas largas (usado após Metodologia e Parceiros: branco → azul-escuro)
   C — picos orgânicos (usado após ComoFunciona: claro → branco)
*/

const paths: Record<'A' | 'B' | 'C', { viewBox: string; d: string; height: number }> = {
  A: {
    viewBox: '0 0 1440 90',
    height: 90,
    // Pico esquerdo suave, vale central, pico direito
    d: 'M0,90 L0,45 C120,20 200,70 360,40 C480,18 560,65 720,35 C880,5 960,60 1080,38 C1200,16 1320,55 1440,30 L1440,90 Z',
  },
  B: {
    viewBox: '0 0 1440 80',
    height: 80,
    // Ondas largas — usado em modo "invertido" (fill = cor de cima)
    d: 'M0,0 L0,50 C320,20 480,70 720,45 C960,20 1120,65 1440,38 L1440,0 Z',
  },
  C: {
    viewBox: '0 0 1440 80',
    height: 80,
    // Picos orgânicos com muitos detalhes
    d: `M0,80 L0,50
      C 50,44 90,34 120,20 C 135,13 144,6 150,1 C 154,-2 157,-1 160,4
      C 163,9 165,17 168,26 C 171,35 174,43 178,50 C 185,60 195,67 208,70
      C 221,73 238,71 252,65 C 266,59 278,48 286,36 C 294,24 298,12 301,4
      C 304,-1 307,-2 311,3 C 315,8 317,17 320,28 C 323,39 326,50 330,59
      C 337,70 348,76 361,77 C 374,78 389,73 401,64 C 413,55 421,42 426,29
      C 431,16 433,5 436,0 C 439,-3 443,-2 447,4 C 451,10 453,20 456,31
      C 459,42 462,53 466,62 C 473,73 483,79 496,80
      C 527,80 570,75 610,68 C 650,61 690,52 730,46 C 770,40 810,36 850,34
      C 890,32 930,32 970,33 C 1010,34 1050,37 1090,41 C 1130,45 1170,50 1210,54
      C 1260,59 1310,63 1360,65 C 1390,66 1415,66 1440,64
      L 1440,80 Z`,
  },
}

export default function MountainDivider({
  fromColor,
  toColor,
  flip = false,
  variant = 'A',
}: MountainDividerProps) {
  const { viewBox, d, height } = paths[variant]
  const transform = flip ? 'scaleY(-1)' : undefined

  /* Variante B é especial: o SVG tem background = toColor e o path = fromColor */
  if (variant === 'B') {
    return (
      <div style={{ background: fromColor, overflow: 'hidden', lineHeight: 0 }} aria-hidden="true">
        <svg
          viewBox={viewBox}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          width="100%"
          style={{ display: 'block', background: toColor, transform }}
        >
          <path d={d} fill={fromColor} />
        </svg>
      </div>
    )
  }

  return (
    <div
      className="mountain-divider"
      aria-hidden="true"
      style={{ background: fromColor, transform }}
    >
      <svg
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        width="100%"
        style={{ display: 'block', background: toColor, height }}
      >
        <path d={d} fill={toColor} />
      </svg>
    </div>
  )
}
