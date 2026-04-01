interface AntTrailProps {
  direction?: 'horizontal' | 'ascending'
  color?: string
  opacity?: number
}

export default function AntTrail({
  direction = 'horizontal',
  color = 'var(--azul)',
  opacity = 1,
}: AntTrailProps) {
  if (direction === 'ascending') {
    return (
      <svg
        style={{ opacity }}
        width="200"
        height="260"
        viewBox="0 0 200 260"
        fill="none"
        aria-hidden="true"
      >
        {/* Pontos em perspectiva diagonal — maiores/mais opacos na base */}
        <circle cx="180" cy="240" r="10"  fill={color} opacity="0.9"/>
        <circle cx="155" cy="205" r="8.5" fill={color} opacity="0.75"/>
        <circle cx="130" cy="172" r="7"   fill={color} opacity="0.6"/>
        <circle cx="108" cy="142" r="5.5" fill={color} opacity="0.48"/>
        <circle cx="88"  cy="115" r="4.2" fill={color} opacity="0.37"/>
        <circle cx="70"  cy="91"  r="3.2" fill={color} opacity="0.28"/>
        <circle cx="54"  cy="69"  r="2.4" fill={color} opacity="0.2"/>
        <circle cx="40"  cy="50"  r="1.7" fill={color} opacity="0.14"/>
        <circle cx="28"  cy="33"  r="1.2" fill={color} opacity="0.09"/>
        <circle cx="18"  cy="18"  r="0.8" fill={color} opacity="0.06"/>
      </svg>
    )
  }

  /* horizontal — separador de seção */
  return (
    <svg
      width="420"
      height="28"
      viewBox="0 0 420 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity }}
    >
      {/* Pontos que diminuem da esquerda para a direita (perspectiva) */}
      <circle cx="12"  cy="20" r="4.5" fill={color} opacity="0.18"/>
      <circle cx="30"  cy="16" r="4.0" fill={color} opacity="0.19"/>
      <circle cx="50"  cy="20" r="4.5" fill={color} opacity="0.18"/>
      <circle cx="74"  cy="15" r="3.8" fill={color} opacity="0.2"/>
      <circle cx="93"  cy="19" r="4.2" fill={color} opacity="0.19"/>
      <circle cx="113" cy="14" r="3.8" fill={color} opacity="0.2"/>
      <circle cx="138" cy="19" r="3.5" fill={color} opacity="0.21"/>
      <circle cx="156" cy="13" r="3.0" fill={color} opacity="0.22"/>
      <circle cx="174" cy="18" r="3.5" fill={color} opacity="0.21"/>
      <circle cx="197" cy="12" r="3.0" fill={color} opacity="0.23"/>
      <circle cx="214" cy="17" r="3.3" fill={color} opacity="0.22"/>
      <circle cx="231" cy="11" r="2.8" fill={color} opacity="0.24"/>
      <circle cx="252" cy="16" r="2.5" fill={color} opacity="0.25"/>
      <circle cx="268" cy="10" r="2.2" fill={color} opacity="0.26"/>
      <circle cx="284" cy="15" r="2.5" fill={color} opacity="0.25"/>
      <circle cx="303" cy="9"  r="2.0" fill={color} opacity="0.27"/>
      <circle cx="318" cy="14" r="2.2" fill={color} opacity="0.26"/>
      <circle cx="333" cy="8"  r="1.8" fill={color} opacity="0.28"/>
      <circle cx="350" cy="13" r="1.6" fill={color} opacity="0.27"/>
      <circle cx="364" cy="7"  r="1.4" fill={color} opacity="0.26"/>
      <circle cx="378" cy="12" r="1.6" fill={color} opacity="0.25"/>
      <circle cx="394" cy="6"  r="1.2" fill={color} opacity="0.22"/>
      <circle cx="407" cy="11" r="1.0" fill={color} opacity="0.2"/>
    </svg>
  )
}
