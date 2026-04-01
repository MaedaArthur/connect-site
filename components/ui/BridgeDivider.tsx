interface BridgeDividerProps {
  fromColor: string
  toColor: string
  showFigure?: boolean
  showAntTrail?: boolean
}

/* SVG de ponte suspensa com cabos catenários.
   Estrutura: deck, trilhos, torres (postes), cabos principais (catenários),
   cabos secundários (hangers), figura humana, trilha de pontos (AntTrail no deck).
*/
export default function BridgeDivider({
  fromColor,
  toColor,
  showFigure = true,
  showAntTrail = false,
}: BridgeDividerProps) {
  return (
    <div style={{ background: fromColor, overflow: 'hidden', lineHeight: 0 }} aria-hidden="true">

      {/* Camadas de onda em transição (azul-escuro → claro) */}
      <svg
        viewBox="0 0 1440 160"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        width="100%"
        style={{ display: 'block' }}
      >
        {/* Camada 4 — mais profunda */}
        <path
          d="M0,160 L0,90 C200,55 400,105 720,75 C1040,45 1260,90 1440,65 L1440,160 Z"
          fill="#1a0055"
          opacity="0.9"
        />
        {/* Camada 3 — roxo médio */}
        <path
          d="M0,160 L0,105 C180,70 420,120 700,88 C980,56 1220,105 1440,80 L1440,160 Z"
          fill="#2F0099"
          opacity="0.85"
        />
        {/* Camada 2 — magenta-escuro */}
        <path
          d="M0,160 L0,118 C240,85 460,130 750,105 C1040,80 1250,122 1440,100 L1440,160 Z"
          fill="#621C75"
          opacity="0.7"
        />
        {/* Camada 1 — claro-escuro (base) */}
        <path
          d="M0,160 L0,135 C280,105 520,148 800,128 C1080,108 1290,140 1440,122 L1440,160 Z"
          fill="#DBD0C4"
          opacity="0.5"
        />
        {/* Fundo claro sólido no rodapé */}
        <rect x="0" y="148" width="1440" height="12" fill={toColor} />
      </svg>

      {/* Silhueta de ponte ghost */}
      <svg
        viewBox="0 0 900 70"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        style={{ display: 'block', background: toColor }}
      >
        {/* Deck */}
        <rect x="0" y="46" width="900" height="5"   fill="rgba(251,244,233,0.15)"/>

        {/* Trilhos */}
        <rect x="0" y="37" width="900" height="2"   fill="rgba(251,244,233,0.1)"/>
        <rect x="0" y="42" width="900" height="1.5" fill="rgba(251,244,233,0.08)"/>

        {/* Postes (hangers verticais) */}
        {[100,200,300,400,500,600,700,800].map((x) => (
          <line
            key={x}
            x1={x} y1="33" x2={x} y2="51"
            stroke="rgba(251,244,233,0.1)"
            strokeWidth="2"
          />
        ))}

        {/* Cabo catenário principal */}
        <path
          d="M0 51 Q225 18 450 12 Q675 18 900 51"
          fill="none"
          stroke="rgba(251,244,233,0.08)"
          strokeWidth="1.5"
        />

        {/* Figura humana apoiada no trilho */}
        {showFigure && (
          <>
            {/* Cabeça */}
            <ellipse cx="552" cy="35" rx="4" ry="5" fill="rgba(251,244,233,0.18)"/>
            {/* Corpo */}
            <rect x="549" y="40" width="6" height="12" rx="2" fill="rgba(251,244,233,0.18)"/>
            {/* Braço apoiado no trilho */}
            <path
              d="M549 44 Q540 47 534 48"
              stroke="rgba(251,244,233,0.15)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </>
        )}

        {/* AntTrail no deck da ponte */}
        {showAntTrail && (
          <>
            <circle cx="200" cy="44" r="1.8" fill="rgba(251,244,233,0.3)"/>
            <circle cx="220" cy="43" r="1.5" fill="rgba(251,244,233,0.25)"/>
            <circle cx="240" cy="44" r="1.3" fill="rgba(251,244,233,0.2)"/>
            <circle cx="258" cy="43" r="1.1" fill="rgba(251,244,233,0.17)"/>
            <circle cx="274" cy="44" r="0.9" fill="rgba(251,244,233,0.14)"/>
          </>
        )}
      </svg>
    </div>
  )
}
