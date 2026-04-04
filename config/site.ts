export const siteConfig = {
  event: {
    nome: 'Connect Ideathon',
    edicao: '2026',
    cidade: 'Florianópolis',
    data: 'Agosto 2026',
    registrationsOpen: false,
    registrationsUrl: '/inscricoes',
    instagram: 'https://www.instagram.com/connect.ideathon/',
    email: 'peteel@gmail.com',
  },

  hero: {
    eyebrow: 'PETEEL · UFSC · Florianópolis',
    titulo: 'O evento que transforma',
    acento: 'em soluções reais.',
    tituloItalico: 'ideias',
    descricao:
      '48 horas de imersão, mentoria e colaboração para estudantes universitários que querem resolver desafios reais propostos por empresas de Florianópolis.',
    ctaPrimary: 'Avise-me quando abrir',
    ctaSecondary: 'Como funciona',
    ctaSecondaryHref: '#metodologia',
    stats: [
      { value: '48h', label: 'de imersão' },
      { value: '12+', label: 'times' },
      { value: '60+', label: 'participantes' },
      { value: 'Fpolis', label: 'SC · Brasil' },
    ],
  },

  metodologia: {
    label: 'Metodologia',
    titulo: 'Mirror-Problem-',
    tituloItalico: 'First',
    subtitulo:
      'Antes de propor qualquer solução, você precisa encontrar o problema. Uma narrativa fictícia, fiel à realidade de uma empresa, cheia de sinais que só os mais atentos enxergam.',
    cards: [
      {
        num: '01',
        accent: 'var(--azul)',
        title: 'A Narrativa',
        text: 'Você recebe uma <span class="highlight">história fictícia</span> inspirada no cotidiano real de uma empresa. Todo documento citado na história é entregue fisicamente: relatórios, planilhas, e-mails. Você investiga direto na fonte.',
      },
      {
        num: '02',
        accent: 'var(--magenta)',
        title: 'A Investigação',
        text: 'A equipe conta com dois guias: um <span class="highlight">mentor humano</span> da empresa, que conduz com perguntas socráticas sem entregar respostas, e um <span class="highlight">mentor de IA</span> para aprofundar análises e testar raciocínios. O pensamento crítico é de vocês.',
      },
      {
        num: '03',
        accent: 'var(--laranja)',
        title: 'A Defesa',
        text: 'A equipe apresenta sua hipótese de problema ao mentor da empresa e precisa <span class="highlight">defender e comprovar</span> com evidências dos documentos. A banca questiona, a equipe sustenta. Não basta intuição: quem convence com dados, avança.',
      },
      {
        num: '04',
        accent: 'var(--roxo)',
        title: 'A Avaliação',
        text: 'A solução final é avaliada pela <span class="highlight">Matriz RPU</span>, metodologia criada por uma pesquisadora da UFSC para medir o grau de inovação de uma proposta. Relevância, Proposta de Valor e Unicidade: três dimensões que separam uma boa ideia de algo que realmente transforma.',
      },
    ],
  },

  empresas: {
    label: 'Para empresas',
    titulo: 'Mais que patrocínio.',
    tituloItalico: 'Imersão real.',
    subtitulo:
      'O Connect funciona como um processo seletivo disfarçado de competição. Você observa raciocínio analítico, comunicação e resiliência em ação. Sem roteiro.',
    cta: 'Quero ser parceiro',
    beneficios: [
      'Processo seletivo imersivo: observe os candidatos trabalhando, não sendo entrevistados',
      'Soluções aplicáveis geradas para os seus processos internos reais',
      'Employer branding junto a jovens de alto potencial de Florianópolis',
      'Possibilidade de oferecer vaga de estágio ao vencedor do seu escopo',
      'Mentor dedicado representando sua empresa dentro do evento',
      'Banca avaliadora com peso dobrado para a empresa-dona do caso',
    ],
  },

  comoFunciona: {
    label: 'Passo a passo',
    titulo: 'Do problema',
    tituloItalico: 'à solução',
    subtitulo:
      'Cinco etapas que separam o participante comum do talento que as empresas estão procurando.',
    steps: [
      {
        num: '01',
        title: 'Narrativa',
        text: 'Sua equipe recebe a história fictícia e os dados da empresa. O problema está escondido. Começa a caçada.',
      },
      {
        num: '02',
        title: 'Investigação',
        text: 'Com ajuda do mentor da empresa e do ConnectAI, você valida hipóteses e constrói seu diagnóstico.',
      },
      {
        num: '03',
        title: 'Defesa',
        text: 'Você apresenta o problema identificado aos mentores. Aprovado o diagnóstico, sua equipe avança.',
      },
      {
        num: '04',
        title: 'Solução',
        text: 'Com o problema validado, o grupo constrói a solução no modelo ideathon: colaborativo e iterativo.',
      },
      {
        num: '05',
        title: 'Pitch Final',
        text: 'A solução é apresentada à banca híbrida. Clareza e lógica valem mais que slides bonitos.',
      },
    ],
  },

  parceiros: {
    label: 'Ecossistema',
    titulo: 'Quem está',
    tituloItalico: 'junto',
    descricao:
      'Um evento construído em parceria com instituições e empresas do ecossistema de inovação de Florianópolis.',
    emBreve: true,
    emBreveTexto:
      'Empresas e instituições parceiras estão sendo confirmadas. Se sua organização quer fazer parte do Connect 2026, entre em contato.',
    realizadores: [] as string[],
    patrocinadores: [] as string[],
  },

  cta: {
    tag: 'Inscrições em breve · Agosto 2026',
    titulo: 'Pronto para',
    tituloItalico: 'encontrar o problema?',
    subtitulo:
      '60 vagas. Times de 5 pessoas. Empresas reais de Florianópolis. Um único evento que pode mudar o rumo da sua carreira.',
    ctaPrimary: 'Avise-me quando abrir',
    ctaSecondary: 'Seguir no Instagram',
  },

  footer: {
    realizacao: 'Uma realização PETEEL · Florianópolis 2026',
    links: [
      { label: 'Metodologia', href: '/metodologia' },
      { label: 'Empresas', href: '#empresas' },
      { label: 'Parceiros', href: '#parceiros' },
      { label: 'Instagram', href: 'https://www.instagram.com/connect.ideathon/' },
    ],
    info: 'Agosto 2026',
  },

  socialProof: {
    label: 'Sobre o projeto',
    titulo: 'Construído com',
    tituloItalico: 'base real.',
    descricao:
      'O Connect é um evento piloto desenvolvido dentro da UFSC pelo PET Engenharia Elétrica, em colaboração com empresas de Florianópolis. A primeira edição nasce com o objetivo de testar um novo formato de resolução de problemas reais, mais próximo do que o mercado realmente exige.',
    bullets: [
      {
        accent: 'var(--azul)',
        text: 'Desenvolvido por estudantes da UFSC com experiência em projetos reais',
      },
      {
        accent: 'var(--magenta)',
        text: 'Metodologia própria focada em identificação de problemas antes da solução',
      },
      {
        accent: 'var(--ciano)',
        text: 'Construído em diálogo com empresas do ecossistema de Florianópolis',
      },
      {
        accent: 'var(--laranja)',
        text: 'Primeira edição com vagas limitadas para manter a qualidade da experiência',
      },
    ],
  },

  peteel: {
    name: 'PETEEL',
    description: 'Grupo PET · Engenharia Elétrica · UFSC',
  },
}
