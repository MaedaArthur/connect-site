import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Metodologia · Mirror Problem-First · Connect Ideathon',
  description:
    'O Mirror Problem-First Innovation Framework: metodologia de inovação orientada por investigação de problemas reais, mediação por IA e avaliação estratégica RPU.',
}

const fases = [
  {
    num: '01',
    accent: 'var(--azul)',
    title: 'Curadoria de Problemas Empresariais',
    text: 'Empresas parceiras identificam e selecionam problemas reais existentes em suas organizações. Os problemas são priorizados de acordo com sua relevância estratégica, considerando impacto operacional, financeiro, organizacional e oportunidades de inovação.',
    destaque: 'Os problemas selecionados tornam-se a base para o desenvolvimento das narrativas investigativas utilizadas no evento.',
  },
  {
    num: '02',
    accent: 'var(--magenta)',
    title: 'Preparação do Caso Investigativo com IA',
    text: 'Um agente de IA estrutura o material investigativo. A partir da descrição do problema, contexto organizacional e setor de atuação, o agente realiza três funções: pesquisa de soluções existentes no mercado, geração da Narrativa Espelho (uma empresa fictícia onde o problema está implícito) e geração de uma base de dados simulada com indicadores, relatórios, feedbacks e registros internos.',
    destaque: 'O problema central não é explicitado. Os participantes precisam encontrá-lo.',
  },
  {
    num: '03',
    accent: 'var(--laranja)',
    title: 'Investigação e Descoberta do Problema',
    text: 'As equipes recebem a narrativa espelho e os dados organizacionais. O objetivo é analisar essas informações e identificar o problema central. O agente de IA atua como monitor investigativo: faz perguntas socráticas, estimula a análise de dados e a formulação de hipóteses, sem jamais entregar respostas diretas. Mentores especialistas auxiliam na validação das hipóteses e no refinamento do diagnóstico.',
    destaque: 'O pensamento crítico e a capacidade de leitura de evidências são testados aqui.',
  },
  {
    num: '04',
    accent: 'var(--roxo)',
    title: 'Desenvolvimento da Solução',
    text: 'Com o problema identificado e validado, as equipes desenvolvem propostas de solução considerando viabilidade de implementação, impacto organizacional, potencial de inovação e aplicabilidade no contexto empresarial.',
    destaque: 'As propostas são apresentadas em formato de pitch final para avaliação da banca.',
  },
  {
    num: '05',
    accent: 'var(--verde, #16a34a)',
    title: 'Avaliação com Matriz RPU',
    text: 'As soluções são avaliadas pela Matriz RPU, ferramenta estratégica para análise de valor de propostas inovadoras. Três dimensões guiam a avaliação: Relevância do problema identificado, Proposta de Valor da solução e Unicidade da abordagem.',
    destaque: 'A pontuação final identifica as soluções com maior potencial de impacto e inovação.',
  },
]

const rpu = [
  {
    letra: 'R',
    nome: 'Relevância',
    cor: 'var(--azul)',
    criterios: [
      'Impacto organizacional do problema',
      'Evidências utilizadas para fundamentar o diagnóstico',
      'Clareza na identificação da causa raiz',
    ],
  },
  {
    letra: 'P',
    nome: 'Proposta de Valor',
    cor: 'var(--magenta)',
    criterios: [
      'Capacidade da solução de resolver o problema',
      'Benefícios gerados para a organização',
      'Viabilidade de implementação',
    ],
  },
  {
    letra: 'U',
    nome: 'Unicidade',
    cor: 'var(--laranja)',
    criterios: [
      'Originalidade da proposta',
      'Diferenciação em relação a soluções existentes',
      'Potencial inovador da abordagem',
    ],
  },
]

const iaFuncoes = [
  {
    num: '01',
    title: 'Gerador de Casos Investigativos',
    text: 'Cria narrativas organizacionais fictícias e bases de dados simuladas a partir dos problemas reais das empresas parceiras.',
  },
  {
    num: '02',
    title: 'Monitor Investigativo',
    text: 'Durante o evento, conduz perguntas socráticas para orientar o raciocínio das equipes sem fornecer respostas diretas.',
  },
  {
    num: '03',
    title: 'Apoio ao Processo de Aprendizagem',
    text: 'Estimula o raciocínio analítico, a construção de hipóteses e a análise crítica das evidências presentes no material.',
  },
]

export default function MetodologiaPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.heroEyebrow}>Framework Metodológico</p>
          <h1 className={styles.heroTitle}>
            Mirror Problem-First
            <em> Innovation Framework</em>
          </h1>
          <p className={styles.heroSubtitle}>
            Uma metodologia de inovação orientada por investigação de problemas reais, desenvolvida para eventos de inovação, desafios empresariais e ambientes educacionais.
          </p>
          <div className={styles.heroPills}>
            <span className={styles.pill}>Problemas reais</span>
            <span className={styles.pill}>Narrativa Espelho</span>
            <span className={styles.pill}>Mediação por IA</span>
            <span className={styles.pill}>Matriz RPU</span>
          </div>
        </div>
      </section>

      {/* ── Diferencial ── */}
      <section className={styles.diferencialSection}>
        <div className="container">
          <p className={styles.eyebrow}>Problem-First</p>
          <h2 className={styles.sectionTitle}>
            O problema antes
            <em> da solução</em>
          </h2>
          <p className={styles.sectionSubtitle}>
            Diferentemente de hackathons e ideathons tradicionais, que partem diretamente da geração de soluções, este framework prioriza a identificação, análise e validação do problema. Soluções mais aderentes a desafios reais. Menos achismo, mais evidência.
          </p>

          <div className={styles.principiosGrid}>
            <div className={styles.principioCard}>
              <div className={styles.principioBar} style={{ background: 'var(--azul)' }} />
              <h3 className={styles.principioTitle}>Problema antes da solução</h3>
              <p className={styles.principioText}>
                O processo inicia pela investigação profunda do problema. Evita soluções superficiais e aumenta a aderência das propostas aos desafios reais das organizações.
              </p>
            </div>
            <div className={styles.principioCard}>
              <div className={styles.principioBar} style={{ background: 'var(--magenta)' }} />
              <h3 className={styles.principioTitle}>Aprendizagem investigativa</h3>
              <p className={styles.principioText}>
                Narrativas organizacionais simuladas e dados fictícios estruturados permitem que participantes analisem contextos complexos como investigadores, não como estudantes.
              </p>
            </div>
            <div className={styles.principioCard}>
              <div className={styles.principioBar} style={{ background: 'var(--laranja)' }} />
              <h3 className={styles.principioTitle}>Mediação cognitiva por IA</h3>
              <p className={styles.principioText}>
                Um agente de IA atua como facilitador socrático: faz perguntas, estimula reflexão e testa raciocínios. Não entrega respostas. O pensamento crítico é de quem participa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── As 5 Fases ── */}
      <section className={styles.fasesSection}>
        <div className="container">
          <p className={styles.eyebrow}>Estrutura</p>
          <h2 className={styles.sectionTitle}>
            As cinco
            <em> fases</em>
          </h2>
          <p className={styles.sectionSubtitle}>
            Do problema identificado pela empresa à solução avaliada pela banca: cinco etapas estruturadas que garantem rigor e inovação no processo.
          </p>

          <div className={styles.fasesList}>
            {fases.map((fase) => (
              <div key={fase.num} className={styles.faseItem}>
                <div className={styles.faseLeft}>
                  <span className={styles.faseNum}>{fase.num}</span>
                  <div className={styles.faseBar} style={{ background: fase.accent }} />
                </div>
                <div className={styles.faseContent}>
                  <h3 className={styles.faseTitle}>{fase.title}</h3>
                  <p className={styles.faseText}>{fase.text}</p>
                  <p className={styles.faseDestaque}>{fase.destaque}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Matriz RPU ── */}
      <section className={styles.rpuSection}>
        <div className="container">
          <p className={styles.eyebrowLight}>Avaliação</p>
          <h2 className={styles.sectionTitleLight}>
            Matriz RPU
          </h2>
          <p className={styles.sectionSubtitleLight}>
            Ferramenta estratégica para análise de valor de soluções inovadoras, desenvolvida para medir o grau de impacto de uma proposta em três dimensões.
          </p>

          <div className={styles.rpuGrid}>
            {rpu.map((dim) => (
              <div key={dim.letra} className={styles.rpuCard}>
                <span className={styles.rpuLetra} style={{ color: dim.cor }}>{dim.letra}</span>
                <h3 className={styles.rpuNome}>{dim.nome}</h3>
                <ul className={styles.rpuList}>
                  {dim.criterios.map((c) => (
                    <li key={c} className={styles.rpuItem}>
                      <span className={styles.rpuDot} style={{ background: dim.cor }} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Papel da IA ── */}
      <section className={styles.iaSection}>
        <div className="container">
          <p className={styles.eyebrow}>Inteligência Artificial</p>
          <h2 className={styles.sectionTitle}>
            A IA como
            <em> facilitadora</em>
          </h2>
          <p className={styles.sectionSubtitle}>
            A IA não substitui o processo humano de inovação. Ela atua como facilitadora cognitiva: estrutura desafios, media investigações e apoia o raciocínio analítico.
          </p>

          <div className={styles.iaGrid}>
            {iaFuncoes.map((f) => (
              <div key={f.num} className={styles.iaCard}>
                <span className={styles.iaNum}>{f.num}</span>
                <h3 className={styles.iaTitle}>{f.title}</h3>
                <p className={styles.iaText}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aplicações ── */}
      <section className={styles.aplicacoesSection}>
        <div className="container">
          <p className={styles.eyebrowLight}>Potencial de aplicação</p>
          <h2 className={styles.sectionTitleLight}>
            Onde o framework
            <em> pode ser aplicado</em>
          </h2>
          <div className={styles.aplicacoesGrid}>
            {[
              'Hackathons e ideathons corporativos',
              'Eventos de inovação aberta',
              'Programas educacionais de empreendedorismo',
              'Desafios empresariais',
              'Programas de formação em inovação',
            ].map((item) => (
              <div key={item} className={styles.aplicacaoItem}>
                <span className={styles.aplicacaoCheck}>→</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className={styles.ctaWrap}>
            <a href="/" className={styles.ctaBtn}>Conhecer o Connect Ideathon</a>
          </div>
        </div>
      </section>
    </main>
  )
}
