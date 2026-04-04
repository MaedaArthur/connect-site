import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Metodologia from '@/components/sections/Metodologia'
import Empresas from '@/components/sections/Empresas'
import ComoFunciona from '@/components/sections/ComoFunciona'
import Parceiros from '@/components/sections/Parceiros'
import CTA from '@/components/sections/CTA'
import MountainDivider from '@/components/ui/MountainDivider'
import BridgeDivider from '@/components/ui/BridgeDivider'

export default function Home() {
  return (
    <main>
      {/* 1. Hero — fundo claro */}
      <Hero />

      {/* 2. SocialProof — fundo claro (mesmo fundo do Hero) */}
      <SocialProof />

      {/* Divider A: claro → branco */}
      <MountainDivider variant="A" fromColor="var(--claro)" toColor="#ffffff" />

      {/* 3. Metodologia — fundo branco */}
      <Metodologia />

      {/* Divider B: branco → azul-escuro */}
      <MountainDivider variant="B" fromColor="#ffffff" toColor="var(--azul-escuro)" />

      {/* 3. Empresas — fundo azul-escuro */}
      <Empresas />

      {/* BridgeDivider: azul-escuro → claro, com figura + trilha */}
      <BridgeDivider
        fromColor="var(--azul-escuro)"
        toColor="var(--claro)"
        showFigure
        showAntTrail
      />

      {/* 4. ComoFunciona — fundo claro */}
      <ComoFunciona />

      {/* Divider C: claro → branco */}
      <MountainDivider variant="C" fromColor="var(--claro)" toColor="#ffffff" />

      {/* 5. Parceiros + Peteel Band — fundo branco */}
      <Parceiros />

      {/* Divider B: branco → azul-escuro */}
      <MountainDivider variant="B" fromColor="#ffffff" toColor="var(--azul-escuro)" />

      {/* 6. CTA — fundo azul-escuro */}
      <CTA />
    </main>
  )
}
