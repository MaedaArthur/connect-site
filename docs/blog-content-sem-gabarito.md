# Conteúdo do Blog — Série Sem Gabarito

> **O que é isso:** este documento contém os 5 primeiros artigos do blog do Connect, prontos para serem migrados como arquivos `.mdx` quando a aba `/blog` estiver implementada (ver `docs/superpowers/plans/2026-05-10-blog-implementation.md`).
>
> **Como usar:** quando o blog estiver pronto, criar um arquivo `content/posts/<slug>.mdx` para cada artigo abaixo. O conteúdo entre os marcadores `<!-- BEGIN ARTICLE -->` e `<!-- END ARTICLE -->` pode ser copiado direto — o frontmatter já está no formato YAML esperado e o corpo já está em MDX-compatível.
>
> **Não editar este arquivo casualmente:** o conteúdo já foi revisado e aprovado. Mudanças de conteúdo devem refletir mudanças nos reels correspondentes em `Contexto/` para preservar a coerência da campanha de maio/junho de 2026.

---

## Calendário de publicação

| Ordem | Slug | Título | Data | Papel | Reel relacionado |
|---|---|---|---|---|---|
| 1 | `o-que-a-faculdade-nao-te-ensina` | O que a faculdade não te ensina (e o mercado cobra no primeiro dia) | 2026-05-05 | Pilar (porta de entrada da série) | — |
| 2 | `decidir-quando-falta-dado` | Como decidir quando falta dado (sem travar e sem chutar) | 2026-05-12 | Série Sem Gabarito #01 | Reel 14/05 |
| 3 | `os-5-porques` | Os 5 porquês: por que seu problema sempre volta | 2026-05-19 | Série Sem Gabarito #02 | Reel 21/05 |
| 4 | `prep-em-30-segundos` | PREP em 30 segundos: a fórmula que faz você parecer sênior em entrevista | 2026-05-26 | Série Sem Gabarito #03 | Reel 28/05 |
| 5 | `caso-real-tres-tecnicas` | Sexta, 17h, um pedido impossível: como atravessar um problema com as três técnicas juntas | 2026-06-02 | Ponte prática (fechamento) | — |

---

## Convenções

- **CTA padrão:** o componente `<CtaInline />` (ver plano do blog) deve renderizar o botão "Quero ser avisado quando as inscrições abrirem" apontando para `/#inscricao`.
- **Links internos da série:** os links entre artigos usam slugs relativos (`/blog/<slug>`). Resolver no momento da migração.
- **Imagens:** nenhum artigo exige imagem para publicar. Se for adicionar, sugestão: capa única da série em `public/blog/sem-gabarito/<slug>.jpg`.
- **Tom:** direto, anti-bullshit, sem jargão de coaching. Abertura sempre com cena concreta. Fechamento sempre com CTA + rodapé de série.

---

<!-- BEGIN ARTICLE 1 -->

## Artigo 1 — Pilar

**Arquivo destino:** `content/posts/o-que-a-faculdade-nao-te-ensina.mdx`

```yaml
---
title: "O que a faculdade não te ensina (e o mercado cobra no primeiro dia)"
slug: "o-que-a-faculdade-nao-te-ensina"
date: 2026-05-05
serie: "Sem Gabarito"
serieNumero: 0
tempoLeitura: 8
descricao: "Toda faculdade entrega ferramentas. Quase nenhuma entrega o raciocínio que decide quando usar qual. A diferença custa os primeiros 2 anos de carreira."
tags: ["carreira", "universitário", "sem-gabarito", "mercado-de-trabalho"]
ctaEvento: true
---
```

### Corpo do artigo

Conheço três engenheiros recém-formados que tiraram nota máxima em cálculo, programação e estatística. Os três foram demitidos do primeiro estágio em menos de 6 meses.

Não por incompetência técnica — pelo contrário. Foram demitidos porque, no dia em que o chefe perguntou *"o que a gente faz com isso?"*, os três responderam variações de: *"depende dos dados"*, *"preciso estudar"*, *"posso pesquisar e te volto?"*.

Eles estavam certos. E estavam errados ao mesmo tempo.

## O contrato implícito da faculdade

Toda faculdade boa funciona assim: você recebe um enunciado bem definido, aplica uma ferramenta apropriada, e entrega uma resposta verificável. O enunciado é completo de propósito. A ferramenta é ensinada antes. A resposta tem gabarito.

Esse modelo treina uma coisa muito bem: **profundidade técnica**. E falha em treinar três coisas que o mercado pede em todo dia de trabalho:

1. Decidir sem enunciado completo.
2. Achar o problema real antes de aplicar ferramenta.
3. Comunicar a conclusão antes do raciocínio.

Não é que faculdade seja ruim. É que ela treina o jogo do laboratório, e o mercado é o jogo da rua. A bola é a mesma, as regras são outras.

## Por que isso não é "soft skill"

Tem uma armadilha que precisa ser desfeita logo: essas habilidades costumam ser jogadas no balaio de "soft skills" — junto com "trabalho em equipe" e "boa comunicação". Não é.

Soft skill é traço — você tem ou desenvolve com tempo. As três habilidades acima são **técnica**: têm método, têm passo a passo, são treináveis em semanas. A faculdade chama de soft skill porque não sabe ensinar. Mas dá pra ensinar — e dá pra praticar.

A diferença entre o estagiário que estagna e o estagiário que vira júnior em 12 meses quase nunca é técnica. É essas três.

## As três habilidades

Essa série existe pra dar nome, técnica e prática pra cada uma. São três posts — um por habilidade — saindo nas próximas três semanas.

### #1 — Decidir quando falta dado *(publica 12/05)*

Como avançar quando o enunciado vem pela metade. Dois filtros (crítico vs. inferível), uma frase que te protege, e por que pedir mais dado antes de pensar te marca como dependente.

[→ Ler o artigo](/blog/decidir-quando-falta-dado)

### #2 — Os 5 porquês *(publica 19/05)*

Por que quase todo problema "resolvido" volta. Como achar a causa real em vez de tapar o sintoma. Um método criado pela Toyota nos anos 50 que cabe na sua próxima reunião de TCC.

[→ Ler o artigo](/blog/os-5-porques)

### #3 — PREP em 30 segundos *(publica 26/05)*

A fórmula que faz você parecer sênior em entrevista, banca e reunião. Quatro blocos. Trinta segundos. O contrário do que seu instinto universitário manda fazer.

[→ Ler o artigo](/blog/prep-em-30-segundos)

## Por que tratamos disso no Connect

Connect Ideathon não compete com faculdade — complementa. A faculdade entrega ferramenta; o Connect entrega o raciocínio que decide qual ferramenta, quando, e como apresentar.

Durante 4 dias, você atravessa um problema real de uma empresa parceira: ambíguo, com dados faltando, sem gabarito. O ConnectAI conversa com você como mentor — faz perguntas, nunca entrega resposta. No fim, você defende a solução pra banca e pra empresa.

Quem sai do evento entrou com habilidade técnica e saiu com algo que faculdade nenhuma te dá: **a experiência de ter atravessado um problema do tipo que você vai ver no primeiro dia de trabalho**.

<CtaInline>
**Quero ser avisado quando as inscrições abrirem →**
Inscrições em junho. Evento em agosto de 2026, em Florianópolis.
</CtaInline>

---

*Esse é o post de abertura da série Sem Gabarito. Três habilidades, três artigos, três reels — toda terça e quinta no Instagram do Connect.*

<!-- END ARTICLE 1 -->

---

<!-- BEGIN ARTICLE 2 -->

## Artigo 2 — Série Sem Gabarito #01

**Arquivo destino:** `content/posts/decidir-quando-falta-dado.mdx`

```yaml
---
title: "Como decidir quando falta dado (sem travar e sem chutar)"
slug: "decidir-quando-falta-dado"
date: 2026-05-12
serie: "Sem Gabarito"
serieNumero: 1
tempoLeitura: 7
descricao: "A faculdade te dá enunciado completo. O mercado te dá metade. Duas técnicas pra decidir sem ter todos os dados — e parecer sênior antes da hora."
tags: ["carreira", "tomada-de-decisão", "universitário", "sem-gabarito"]
ctaEvento: true
---
```

### Corpo do artigo

Sexta-feira, 16h30. Seu chefe de estágio te manda no Slack:

> *"preciso de um diagnóstico do drop nos cadastros até segunda. obrigado!"*

Você abre o painel e percebe: não tem dado de retenção segmentado, não sabe se a mudança no formulário entrou semana passada ou retrasada, e a pessoa que sabe disso está de férias.

Você tem três opções: travar, chutar, ou decidir direito.

Esse artigo é sobre a terceira.

## Por que a faculdade não te prepara pra isso

A faculdade tem um contrato implícito: o enunciado é completo. Se a questão diz "considere um plano inclinado sem atrito", você pode confiar que não tem atrito. O dado que falta foi omitido de propósito, e o resto está lá.

No mercado o contrato é invertido. Ninguém te entrega o problema bem definido — porque quem te entrega o problema *também não sabe direito qual é*. O pedido vem pela metade não porque querem te testar, mas porque é assim que o problema chega na mesa de qualquer um. Inclusive do seu chefe.

Quem entende isso para de esperar o enunciado e começa a *construir* o enunciado.

## Os 3 erros mais comuns

**Erro 1 — Pedir mais dado antes de pensar.**
O reflexo universitário: "preciso de mais informação". Mas pedir antes de pensar te marca como dependente. Quase sempre dá pra avançar com o que se tem.

**Erro 2 — Travar e procrastinar a decisão.**
Parece cuidado. É medo. E custa caro: enquanto você espera o dado perfeito, o prazo passa e alguém decide por você — quase sempre pior.

**Erro 3 — Chutar e fingir que era certeza.**
O oposto do trava: decide rápido e apresenta como se tivesse certeza. Quando dá errado, ninguém entende por quê — porque você nunca explicitou o que assumiu.

Os três erros têm a mesma raiz: tratar "falta de dado" como bloqueio em vez de tratar como condição normal do trabalho.

## A técnica: dois filtros

Antes de fazer qualquer coisa, passa o dado que falta por dois filtros — nessa ordem.

### Filtro 1: Esse dado é crítico?

Crítico = sem ele, qualquer decisão é chute puro. Se o dado é crítico, **você pede**. Mas pede com hipótese, não com pergunta vazia.

> ❌ "Qual foi o impacto da mudança do formulário?"
>
> ✅ "Minha hipótese é que a mudança do formulário derrubou cadastros porque adicionou um campo opcional que parece obrigatório. Preciso do dado de cadastro por dia desde 1º de abril pra confirmar. Tem como?"

A diferença não é só de educação. A pergunta com hipótese te coloca como alguém que já pensou. A pergunta vazia te coloca como alguém esperando ser pensado por.

### Filtro 2: Dá pra inferir?

Se não é crítico, ou se você tem dado parecido / contexto / um caso anterior — você assume e segue. Mas assume *em voz alta*.

A frase mágica é:

> *"Estou supondo X. Se for diferente, me avisa que eu refaço."*

Essa frase faz três coisas ao mesmo tempo:

1. Mostra que você não chutou — escolheu.
2. Dá a quem te ouve o poder de corrigir sem te humilhar.
3. Te protege se a suposição estiver errada — você foi explícito, não está fingindo onisciência.

## Voltando à cena do começo

Sexta, 16h30, drop nos cadastros. Você não tem dado segmentado, não sabe a data exata da mudança, a pessoa-chave tá de férias.

- **Filtro 1 (crítico?):** A data da mudança é crítica — sem ela, não dá pra correlacionar nada. Você manda mensagem pra quem está de férias com a pergunta direta + sua hipótese (*"minha hipótese é que entrou dia 28; me confirma se for outro dia"*).
- **Filtro 2 (dá pra inferir?):** O resto você infere. Não tem segmentação, mas tem total. Não tem causal, mas tem temporal. Você escreve o diagnóstico assumindo que a queda começou junto com a mudança e marca **três suposições explícitas** no documento.

Segunda de manhã, você entrega. No final do diagnóstico tem uma seção "Premissas — me avise se alguma estiver errada". Seu chefe lê, corrige duas, valida uma, e em 20 minutos vocês fecham o problema.

Antes de pedir o impossível: você usou o que tinha.

## O que isso vale lá fora

Quem trava esperando o dado perfeito parece cuidadoso de longe. De perto, parece travado.

Quem decide com hipótese explícita e suposições marcadas — esse é quem é promovido. Não porque acerta sempre. Porque quando erra, o erro é rastreável, e quando acerta, todo mundo sabe por quê.

A diferença entre estagiário e júnior não é "saber mais". É decidir com menos.

## Como praticar essa semana

Três micro-exercícios — escolhe um:

1. **Na próxima reunião de TCC ou trabalho de grupo:** quando alguém disser "precisamos descobrir X", responde com uma hipótese antes de virar pesquisa: *"acho que é Y, porque Z. Pode ser que não, mas começa por aí?"*
2. **No próximo e-mail que você ia mandar com uma pergunta:** reescreve transformando a pergunta em hipótese a confirmar.
3. **No próximo trabalho com prazo apertado:** entrega com uma seção de "premissas". Mesmo se ninguém pedir.

<CtaInline>
**Quero ser avisado quando as inscrições abrirem →**
Essa habilidade é uma das três que treinamos no Connect Ideathon — a habilidade que separa quem entrega de quem espera.
</CtaInline>

---

*#1 da série Sem Gabarito — três habilidades que faculdade nenhuma ensina, e mercado nenhum perdoa.*

*Próximo: [#2 — Os 5 porquês](/blog/os-5-porques) (publica 19/05).*

<!-- END ARTICLE 2 -->

---

<!-- BEGIN ARTICLE 3 -->

## Artigo 3 — Série Sem Gabarito #02

**Arquivo destino:** `content/posts/os-5-porques.mdx`

```yaml
---
title: "Os 5 porquês: por que seu problema sempre volta"
slug: "os-5-porques"
date: 2026-05-19
serie: "Sem Gabarito"
serieNumero: 2
tempoLeitura: 7
descricao: "A maioria das pessoas para no primeiro porquê — e por isso o problema sempre volta na semana seguinte. A técnica que a Toyota usa há 70 anos cabe na sua próxima reunião de TCC."
tags: ["carreira", "resolução-de-problemas", "universitário", "sem-gabarito"]
ctaEvento: true
---
```

### Corpo do artigo

Quarta de manhã, reunião do TCC. Vocês cinco estão de novo discutindo a mesma coisa que discutiram semana passada: a pesquisa está atrasada. A líder do grupo diz: *"a gente precisa trabalhar mais rápido"*. Todo mundo concorda, sai da reunião, e ninguém trabalha mais rápido.

Na quarta que vem, mesma reunião. Mesma frase. Mesmo nada.

Não é falta de vontade. É que ninguém atacou o problema real. Atacaram o sintoma — três semanas seguidas.

## Por que paramos no primeiro porquê

Quando alguém pergunta "por que isso aconteceu?", seu cérebro entrega *a resposta mais plausível disponível* — e desliga. Plausível ≠ verdadeiro. Plausível só significa "não contradiz nada que eu já sei".

O problema é que a resposta plausível quase sempre é um **sintoma**, não a **causa**. Tratar sintoma alivia por uma semana. A causa volta, com outro sintoma.

A diferença entre quem resolve problema e quem fica resolvendo o mesmo problema toda semana é uma decisão simples: **não aceitar a primeira resposta**. Pergunta de novo. E de novo. Até a resposta parar de ser ação humana e começar a ser estrutura.

## A técnica — origem e mecânica

Sakichi Toyoda inventou os 5 porquês na Toyota nos anos 50. A regra é literalmente: quando aparece um problema, pergunta "por quê?" cinco vezes seguidas — cada porquê em cima da resposta anterior.

Cinco é arbitrário. Pode ser 4, pode ser 7. O número importa menos que o princípio:

> **Continue perguntando até a resposta ser uma causa estrutural, não um comportamento individual.**

Causa estrutural = algo no processo, na ferramenta, no fluxo, na decisão de design.
Causa individual = "fulano não fez", "esquecemos", "não tivemos tempo".

Se você parou numa causa individual, parou cedo demais. Pergunta por quê de novo.

> **Pegadinha comum:** os 5 porquês não servem pra distribuir culpa. Servem pra encontrar o ponto do processo onde uma mudança barata resolve um problema caro. Se a sua resposta final é "porque o Pedro é desorganizado", você fez errado.

## O caso do TCC, destrinchado

Volta pra cena da abertura. Aplica:

**Problema:** o time não entrega a pesquisa no prazo.

**Por quê 1?** Porque sempre atrasamos a parte de levantamento de fontes.
*(Resposta plausível: "vamos trabalhar mais rápido". Errado. Continua.)*

**Por quê 2?** Porque a gente começa o levantamento sem saber direito o que está procurando.

**Por quê 3?** Porque o escopo do trabalho nunca é alinhado antes — cada um interpretou o tema de um jeito.

**Por quê 4?** Porque a primeira reunião sempre vira divisão de tarefa direto: "você faz isso, eu faço aquilo".

**Por quê 5?** Porque ninguém marca uma reunião só de alinhamento antes — parece improdutivo.

**Causa real:** a primeira reunião do grupo pula a etapa de alinhamento e vai direto pra divisão de tarefa.

**Solução barata:** marcar uma reunião de 30 minutos *só* pra alinhar escopo, antes de qualquer divisão.

Repara que a solução **não é "trabalhar mais rápido"**. É um ajuste de 30 minutos no início que economiza 3 semanas no fim. Você só consegue ver essa solução depois de ter feito o trajeto inteiro.

## Quando os 5 porquês falham

A técnica é poderosa, mas tem dois modos de falhar:

1. **Quando o problema tem múltiplas causas.** Aí 1 cadeia de porquês não basta — você precisa abrir uma cadeia pra cada causa possível. Outras técnicas (diagrama de Ishikawa, árvore de causa) funcionam melhor.
2. **Quando você responde sozinho.** Os 5 porquês é melhor em dupla ou trio — porque sozinho você responde com seus próprios pontos cegos. Com outra pessoa, ela te força a defender cada resposta.

Use os 5 porquês como **primeiro passo**, não como verdade final. Quase sempre ele te leva 80% do caminho.

## O que isso vale lá fora

Quem aceita a primeira resposta é quem fica resolvendo o mesmo problema todo mês.
Quem pergunta de novo é quem desbloqueia o time.

Em estágio, em emprego, em trabalho de grupo — a pergunta "por quê?" feita uma vez a mais do que parece confortável é o que separa quem entrega trabalho de quem entrega progresso.

## Como praticar essa semana

Três micro-exercícios:

1. **Na próxima vez que você reclamar de alguma coisa** ("ai, sempre atraso na faculdade"), faz os 5 porquês com você mesmo. Anota num caderno.
2. **Na próxima reunião de grupo:** quando alguém propor uma solução, pergunta — sem ironia — "qual é o problema que isso resolve, exatamente?". Você vai surpreender.
3. **Olha pro último problema que você "resolveu" e voltou.** Roda os 5 porquês retroativos.

<CtaInline>
**Quero ser avisado quando as inscrições abrirem →**
Achar problema antes de propor solução é a habilidade central do Connect Ideathon — o que separa "resolver caso" de "resolver caso de verdade".
</CtaInline>

---

*#2 da série Sem Gabarito.*

*Anterior: [#1 — Decisão com dado faltando](/blog/decidir-quando-falta-dado).*
*Próximo: [#3 — PREP em 30 segundos](/blog/prep-em-30-segundos) (publica 26/05).*

<!-- END ARTICLE 3 -->

---

<!-- BEGIN ARTICLE 4 -->

## Artigo 4 — Série Sem Gabarito #03

**Arquivo destino:** `content/posts/prep-em-30-segundos.mdx`

```yaml
---
title: "PREP em 30 segundos: a fórmula que faz você parecer sênior em entrevista"
slug: "prep-em-30-segundos"
date: 2026-05-26
serie: "Sem Gabarito"
serieNumero: 3
tempoLeitura: 7
descricao: "Em entrevista, banca e reunião, estrutura vale mais que conteúdo. A fórmula que força você a começar pela conclusão — o contrário do que seu instinto universitário manda fazer."
tags: ["carreira", "comunicação", "entrevista", "sem-gabarito"]
ctaEvento: true
---
```

### Corpo do artigo

Entrevista pra estágio. A recrutadora abre com a clássica:

> *"Me conta sobre você."*

Você respira fundo e começa: *"então… eu nasci em Floripa, fiz ensino médio no…"* — três minutos depois, você ainda está em 2019. A recrutadora sorri educadamente. Você sente que perdeu, mas não sabe exatamente onde.

Você perdeu no segundo 8. Não pelo conteúdo — pela estrutura. Quem te ouve precisa entender em 30 segundos *aonde você está indo*. Se não entende, desliga internamente. E você fala pra alguém que já desligou.

A boa notícia: tem fórmula.

## Por que improviso parece estagiário

Tem uma assimetria que ninguém te conta: quando você fala, **você sabe aonde quer chegar**. Quem te ouve, **não**. Você sente o caminho fazendo sentido — porque você está no carro. Quem ouve está numa van na sua cola, sem saber pra onde a viagem vai.

O instinto universitário é construir o argumento como prova matemática: premissa, premissa, premissa, *conclusão*. Faz sentido na sala de aula, onde o professor está obrigado a ouvir até o fim. Não faz sentido na vida real, onde quem ouve está decidindo, no segundo 5, se vale a pena continuar prestando atenção.

A pessoa sênior faz o contrário: **entrega a conclusão primeiro**, e usa o resto pra defender. Quem ouve sabe pra onde a viagem vai desde o início — e isso, sozinho, te faz parecer 3 anos mais experiente.

## A fórmula PREP

PREP é uma sigla em inglês: **Point — Reason — Example — Point**. Quatro blocos, nessa ordem.

### P (Point) — a conclusão primeiro

Uma frase. Direta.

> *"Escolhi engenharia porque gosto de resolver problema com restrição."*

### R (Reason) — o porquê

Uma ou duas frases.

> *"Problema sem restrição é arte; problema com restrição é engenharia. E é onde eu funciono bem."*

### E (Example) — um exemplo concreto

Curto, específico, com nome de coisa.

> *"No segundo ano do ensino médio passei dois meses tentando montar uma bicicleta com peças de sucata da garagem do meu avô. Não dava pra comprar nada."*

### P (Point) — fecha repetindo a conclusão

Ligeiramente reformulada.

> *"Por isso engenharia: é o mesmo tipo de prazer, em escala maior."*

Quatro blocos. Trinta segundos. Cabe em qualquer pergunta de entrevista.

## Aplicado a 3 perguntas reais

### Pergunta 1: "Qual seu maior defeito?"

- **P:** Demoro pra pedir ajuda quando travo.
- **R:** Tendo a achar que pedir é entregar fraqueza, e gasto tempo demais sozinho antes de admitir que precisava de outra cabeça.
- **E:** No último trabalho de grupo do semestre passado, fiquei 4 dias num código sem rodar, sozinho. Quando finalmente mostrei pro grupo, resolveram em 20 minutos.
- **P:** É algo que tô treinando ativamente — agora marco no calendário um "ponto de pedir ajuda" depois de 2h travado.

### Pergunta 2: "Por que você quer trabalhar aqui?"

- **P:** Porque vocês são uma das poucas empresas em Floripa fazendo X com Y restrição.
- **R:** Eu não quero trabalhar em qualquer empresa que faz X — quero trabalhar com a restrição específica que vocês têm, que é onde a engenharia fica interessante.
- **E:** Vi a apresentação que o seu CTO fez no evento Z sobre como vocês resolveram o problema W. Estudei.
- **P:** É exatamente o tipo de problema em que eu quero passar os próximos 2 anos.

### Pergunta 3: "Onde você se vê em 5 anos?"

- **P:** Liderando um time pequeno num problema que ainda não sei qual é.
- **R:** Não tenho ainda definição do domínio, mas tenho clareza do papel — quero estar fazendo decisão técnica, não só executando.
- **E:** O perfil de carreira que eu admiro são pessoas como [nome real, que você admira] — que em 5 anos saíram de júnior pra lead técnico de área.
- **P:** Em 5 anos quero estar nesse nível, independente da empresa.

## Quando NÃO usar PREP

PREP é fórmula de **resposta direta a pergunta direta**. Não use:

- **Em apresentação longa (10+ minutos):** PREP é micro-estrutura. Em apresentação longa, você usa outras estruturas (SCQA, Pyramid Principle).
- **Em conversa informal:** PREP fica robótico em papo de corredor. Use quando o ambiente pede resposta estruturada — entrevista, reunião, banca.
- **Quando a pergunta é genuinamente exploratória:** Se alguém te pergunta *"o que você acha disso aqui?"* e quer pensar junto com você, PREP fecha o papo cedo demais.

## Volta à cena

> *"Me conta sobre você."*

- **P:** Sou estudante de engenharia de produção em Floripa, focada em otimização de processos.
- **R:** Escolhi otimização porque é a parte da engenharia onde dado vira decisão de negócio.
- **E:** No estágio atual implementei um modelo que reduziu o tempo de setup de uma linha em 22%.
- **P:** É esse tipo de problema que eu quero resolver nos próximos anos — e por isso estou aqui.

15 segundos. A recrutadora se inclina pra frente.

## Como praticar essa semana

Três micro-exercícios:

1. **Pega 5 perguntas comuns de entrevista** (Google "perguntas mais comuns entrevista estágio") e responde cada uma em PREP. Escreve, não improvisa.
2. **Na próxima reunião** — quando te perguntarem qualquer coisa — força-se a começar pela conclusão. Vai ser desconfortável. É o ponto.
3. **Grava você se apresentando em vídeo, 1x sem PREP e 1x com.** Reassiste. Você não vai acreditar na diferença.

<CtaInline>
**Quero ser avisado quando as inscrições abrirem →**
Defender uma ideia sob pressão, com clareza, é exatamente o que treinamos no último dia do Connect Ideathon — você apresenta sua solução pra empresa real e responde perguntas. Sem segunda chance.
</CtaInline>

---

*#3 e último da série Sem Gabarito.*

*Anteriores: [#1 — Decisão com dado faltando](/blog/decidir-quando-falta-dado) · [#2 — Os 5 porquês](/blog/os-5-porques).*

*Bônus: como as três habilidades funcionam juntas num caso real → [Sexta, 17h, um pedido impossível](/blog/caso-real-tres-tecnicas).*

<!-- END ARTICLE 4 -->

---

<!-- BEGIN ARTICLE 5 -->

## Artigo 5 — Ponte prática

**Arquivo destino:** `content/posts/caso-real-tres-tecnicas.mdx`

```yaml
---
title: "Sexta, 17h, um pedido impossível: como atravessar um problema com as três técnicas juntas"
slug: "caso-real-tres-tecnicas"
date: 2026-06-02
serie: "Sem Gabarito"
serieNumero: 4
tempoLeitura: 9
descricao: "Na vida real, as habilidades não aparecem isoladas. Você usa as três no mesmo problema — e a ordem importa. Um caso real, do pedido à apresentação, com as três técnicas operando em sequência."
tags: ["carreira", "estudo-de-caso", "universitário", "sem-gabarito"]
ctaEvento: true
---
```

### Corpo do artigo

Sexta, 17h12. Você é estagiária num e-commerce de Floripa há 4 meses. Slack pisca. É o seu chefe:

> *"Marina, preciso de uma análise rápida pra reunião de segunda 9h. Nossas vendas caíram 18% em abril e ninguém tá entendendo por quê. Vou apresentar pro CEO. Me ajuda?"*

Você lê três vezes. **18% é grande.** Reunião com o CEO é grande. "Análise rápida" significa que você tem o fim de semana — e ele não vai aceitar "não consegui".

Você abre o painel de vendas. Confirma a queda. E percebe: você não tem ideia de por onde começar.

Esse artigo é o passo a passo do que fazer entre 17h12 da sexta e 9h da segunda, usando as três técnicas da série Sem Gabarito — na ordem certa.

## Etapa 1 — Achar o problema real (5 porquês)

Antes de coletar dado, antes de fazer planilha, antes de qualquer coisa: você precisa achar a hipótese mais provável de causa. Senão você vai gastar o fim de semana minerando dado aleatório.

Você abre o caderno. Roda os 5 porquês com o que sabe:

**Problema:** vendas caíram 18% em abril.

**Por quê 1?** Porque o tráfego no site caiu *(você confere no Analytics — caiu 12%)*.

**Por quê 2?** Porque a campanha do Google Ads gastou metade do mês passado *(você abre o Ads — confirma)*.

**Por quê 3?** Porque o orçamento foi cortado em março.

**Por quê 4?** Porque o financeiro travou gastos não-essenciais antes do fechamento do trimestre.

**Por quê 5?** Porque a empresa não tem regra clara separando marketing como "essencial" ou "não-essencial" no congelamento.

**Causa real candidata:** o congelamento sazonal de gastos engoliu o orçamento de mídia porque marketing não está protegido como "essencial".

Mas você não para aí. Roda os 5 porquês de uma cadeia alternativa, porque **não é tudo tráfego — 12% de queda em tráfego não explica 18% em vendas**. Tem 6 pontos percentuais sobrando.

**Hipótese alternativa:** taxa de conversão também caiu.

**Por quê 1?** Porque o checkout tá mais lento?
*(Você abre o monitoramento. Sim — tempo médio de checkout subiu 40%.)*

**Por quê 2?** Por causa de uma feature nova de "frete inteligente" que entrou dia 8 de abril.

**Você agora tem duas causas candidatas, não uma.** Isso é normal. Anota as duas.

> **Por que isso importou:** se você tivesse parado no primeiro porquê ("o tráfego caiu"), teria entregue um diagnóstico parcial. Sua proposta seria "aumentar Ads" — e o CEO aprovaria. Três meses depois, com Ads restaurado, as vendas continuariam baixas, e ninguém saberia explicar.

## Etapa 2 — Decidir o que entregar (decisão com dado faltando)

Você olha o relógio. 19h. Você tem o fim de semana.

Pra confirmar a causa #1 (congelamento), você precisa de dado do financeiro — só na segunda. Pra confirmar a #2 (checkout lento), você precisa de log do produto — também só na segunda.

**Filtro 1: o dado é crítico?** Sim — sem confirmação, suas duas causas são hipóteses.

**Filtro 2: dá pra inferir?** Parcialmente. Você tem:

- Tráfego (-12%) ✓
- Gasto de Ads (-50%) ✓
- Tempo de checkout (+40%) ✓
- Data exata da feature (8 de abril) ✓
- Taxa de conversão (queda confirmada em 6 pontos) ✓

Você tem **evidência forte das duas hipóteses**. O que falta é a *causa-raiz* de cada uma — não a evidência do efeito.

**Decisão:** você escreve a análise com as duas causas, marcando explicitamente o que assumiu.

Você manda um e-mail curto pro chefe sábado de manhã:

> *"Já tenho duas hipóteses fortes pra queda — congelamento de orçamento de Ads e feature de frete que aumentou tempo de checkout. Estou assumindo que (1) o orçamento foi cortado pelo trigger sazonal de fim de trimestre e (2) a feature de frete entrou no dia 8 sem teste A/B. Se você souber que alguma dessas duas suposições está errada, me avisa que eu refaço. Senão, sigo com elas."*

Ele responde em 10 minutos:

> *"primeira tá certa, segunda confirmo segunda cedo"*.

Você economizou um fim de semana inteiro de mineração de dado **porque pediu com hipótese, não com pergunta vazia**.

## Etapa 3 — Apresentar (PREP)

Domingo à noite, você tem a análise pronta. Resta o mais importante: **como entregar pro chefe em formato que ele consegue defender pro CEO**.

Você sabe que seu chefe tem 90 segundos com o CEO antes de ele cortar a conversa. Então sua análise precisa caber em 90 segundos — e a primeira frase precisa carregar 80% do peso.

Você abre o documento e escreve a abertura em PREP:

> **(P) — Point**
> A queda de 18% nas vendas em abril vem de duas causas independentes que se somaram: o congelamento sazonal de Ads e o impacto da nova feature de frete no checkout.
>
> **(R) — Reason**
> Ads cortado em 50% explica 12% de queda em tráfego. A feature de frete aumentou o tempo de checkout em 40% e derrubou conversão em 6 pontos. Juntas, fecham os 18%.
>
> **(E) — Example**
> O ponto mais claro é o dia 8 de abril: nesse dia entram a campanha cortada *e* a feature nova. Conversão cai abruptamente nesse dia exato — não foi um declínio gradual.
>
> **(P) — Point**
> Duas causas, duas correções diferentes: reverter a regra de congelamento pra marketing essencial, e fazer rollback da feature de frete pra teste A/B.

Você manda pro chefe domingo às 22h com o assunto: *"análise + recomendação · 90s"*.

Segunda 7h30 ele responde:

> *"Marina, isso é exatamente o que eu precisava. Vou apresentar assim. Obrigado."*

Segunda 11h ele te chama no Slack:

> *"o CEO aceitou as duas correções. Boa."*

## O que aconteceu, em uma linha

Você atravessou um problema completo — do pedido na sexta à decisão do CEO na segunda — usando as três técnicas em ordem:

1. **5 porquês** te deu a *causa real* (não o sintoma).
2. **Decisão com dado faltando** te deu o *avanço* (sem travar esperando o impossível).
3. **PREP** te deu a *transmissão* (sem perder a conclusão no meio do raciocínio).

Tirar qualquer uma das três, e o domingo da Marina vira pesadelo.

## O que isso tem a ver com o Connect

Esse caso é fictício, mas os movimentos não são. É exatamente o tipo de fim de semana que acontece com estagiários e juniores toda semana em Florianópolis — e em qualquer cidade.

A diferença entre quem atravessa o problema e quem afoga não é talento. É **ter praticado as três habilidades antes do problema chegar**.

É exatamente isso que o Connect Ideathon foi desenhado pra treinar: 4 dias atravessando um problema real, com mentor (ConnectAI) que faz pergunta em vez de dar resposta, e banca final onde você defende a solução em PREP — sob pressão, com dados faltando, sem gabarito.

Quando o pedido vier no Slack na sexta às 17h, você já vai ter atravessado um igual.

<CtaInline>
**Quero ser avisado quando as inscrições abrirem →**
Inscrições em junho · Evento em agosto · Florianópolis · Vagas limitadas.
</CtaInline>

---

*Esse é o artigo de fechamento da série Sem Gabarito.*

*Releia a série: [Pilar](/blog/o-que-a-faculdade-nao-te-ensina) · [#1 Dado faltando](/blog/decidir-quando-falta-dado) · [#2 Os 5 porquês](/blog/os-5-porques) · [#3 PREP](/blog/prep-em-30-segundos).*

<!-- END ARTICLE 5 -->

---

## Checklist de migração (quando o blog estiver pronto)

- [ ] Para cada artigo, criar `content/posts/<slug>.mdx`
- [ ] Copiar o bloco YAML do artigo (entre as crases) como frontmatter
- [ ] Copiar o "Corpo do artigo" (sem o título h3 "### Corpo do artigo") como conteúdo do `.mdx`
- [ ] Confirmar que `<CtaInline>` está implementado (ver plano do blog) e renderiza o botão correto
- [ ] Confirmar que os links internos `(/blog/<slug>)` resolvem corretamente
- [ ] Validar o tempo de leitura calculado vs. o declarado no frontmatter (ajustar se a fórmula automática divergir)
- [ ] Adicionar capa única da série em `public/blog/sem-gabarito/` (opcional)
- [ ] Publicar artigo 1 (pilar) com ~1 semana antes do reel do dia 14/05
- [ ] Conferir que cada reel da série tem "link na bio" apontando pro artigo correto
