import { GenerationInput, SlideData } from '../types';
import { StrategyBrief } from './strategist';
import { sanitizeText } from '../sanitizer';

export interface CopywriterOutput {
  slides: SlideData[];
  caption: string;
  hashtags: string[];
}

export class CopywriterAgent {
  name = 'Nicolle';
  title = 'Especialista em Comunicação Canina & Conteúdo para Tutores';
  avatar = '📝';

  generate(input: GenerationInput, brief: StrategyBrief): CopywriterOutput {
    const slideCount = Math.min(Math.max(input.slideCount || 6, 5), 7);
    const topic = sanitizeText(input.topic) || 'Passeio Sem Puxar: O método passo a passo para caminhar com guia frouxa';
    const lower = topic.toLowerCase();

    // Gerador customizado baseado na dor comportamental específica
    let slides: SlideData[];
    let caption: string;
    let hashtags: string[];

    if (lower.includes('pux') || lower.includes('guia') || lower.includes('passei') || lower.includes('coleira') || lower.includes('peitoral')) {
      const res = this.generateLeashWalkingScript(topic, slideCount, brief);
      slides = res.slides;
      caption = res.caption;
      hashtags = res.hashtags;
    } else if (lower.includes('latid') || lower.includes('lat') || lower.includes('campainh') || lower.includes('port')) {
      const res = this.generateBarkingScript(topic, slideCount, brief);
      slides = res.slides;
      caption = res.caption;
      hashtags = res.hashtags;
    } else if (lower.includes('xixi') || lower.includes('coc') || lower.includes('tapet') || lower.includes('higi') || lower.includes('necessidad')) {
      const res = this.generatePottyTrainingScript(topic, slideCount, brief);
      slides = res.slides;
      caption = res.caption;
      hashtags = res.hashtags;
    } else if (lower.includes('reativ') || lower.includes('agress') || lower.includes('avanç') || lower.includes('outro c')) {
      const res = this.generateReactivityScript(topic, slideCount, brief);
      slides = res.slides;
      caption = res.caption;
      hashtags = res.hashtags;
    } else if (lower.includes('ansied') || lower.includes('separ') || lower.includes('sozinh') || lower.includes('destru') || lower.includes('chor') || lower.includes('uiv')) {
      const res = this.generateSeparationAnxietyScript(topic, slideCount, brief);
      slides = res.slides;
      caption = res.caption;
      hashtags = res.hashtags;
    } else if (lower.includes('filhot') || lower.includes('mordid') || lower.includes('dente') || lower.includes('roer')) {
      const res = this.generatePuppyBitingScript(topic, slideCount, brief);
      slides = res.slides;
      caption = res.caption;
      hashtags = res.hashtags;
    } else if (lower.includes('pul') || lower.includes('visit') || lower.includes('porta')) {
      const res = this.generateJumpingScript(topic, slideCount, brief);
      slides = res.slides;
      caption = res.caption;
      hashtags = res.hashtags;
    } else if (lower.includes('enriquec') || lower.includes('energi') || lower.includes('tédi') || lower.includes('brinqued') || lower.includes('cans')) {
      const res = this.generateEnrichmentScript(topic, slideCount, brief);
      slides = res.slides;
      caption = res.caption;
      hashtags = res.hashtags;
    } else {
      const res = this.generateGeneralTrainingScript(topic, slideCount, brief);
      slides = res.slides;
      caption = res.caption;
      hashtags = res.hashtags;
    }

    // Sanitiza todas as lâminas e legenda para garantir ausência total de & e travessões
    const sanitizedSlides = slides.map((s) => ({
      ...s,
      headline: sanitizeText(s.headline),
      subtitle: s.subtitle ? sanitizeText(s.subtitle) : undefined,
      badge: s.badge ? sanitizeText(s.badge) : undefined,
      bodyText: s.bodyText?.map(sanitizeText).filter(Boolean),
      points: s.points?.map(sanitizeText).filter(Boolean),
      customNote: s.customNote ? sanitizeText(s.customNote) : undefined,
      ctaButtonText: s.ctaButtonText ? sanitizeText(s.ctaButtonText) : undefined,
    }));

    return { 
      slides: sanitizedSlides, 
      caption: sanitizeText(caption), 
      hashtags 
    };
  }

  // 1. PASSEIO SEM PUXAR / GUIA
  private generateLeashWalkingScript(topic: string, count: number, brief: StrategyBrief) {
    const slides: SlideData[] = [
      {
        id: 'slide-1',
        slideNumber: 1,
        totalSlides: count,
        type: 'hook',
        badge: 'PASSEIO ESTRUTURADO',
        headline: topic || 'Passeio Sem Puxar: O segredo para caminhar com guia frouxa',
        highlightWord: 'guia frouxa',
        subtitle: 'Se passear com seu cão virou uma luta de braço e estresse diário, arraste para o lado.',
        ctaButtonText: 'Arraste para entender ➔',
      },
      {
        id: 'slide-2',
        slideNumber: 2,
        totalSlides: count,
        type: 'problem',
        badge: 'O CICLO DE ESTRESSE',
        headline: 'O cão sai rebocando você e cada esquina vira uma batalha.',
        subtitle: 'Você volta para casa com dor no ombro, suado e frustrado porque o cão parece surdo na rua.',
        points: [
          'Cão hiperestimulado que puxa para cheirar absolutamente tudo',
          'Tensão contínua na guia que aumenta a ansiedade do animal',
          'Sensação de que o cão não tem conexão nenhuma com você na rua',
        ],
      },
      {
        id: 'slide-3',
        slideNumber: 3,
        totalSlides: count,
        type: 'problem',
        badge: 'O ERRO MAIS COMUM',
        headline: 'Achar que comprar outro peitoral ou puxar mais forte resolve.',
        subtitle: 'Dar trancos na guia ativa o reflexo de oposição: quanto mais você puxa, mais o cão puxa para a frente.',
        bodyText: [
          'Equipamentos milagrosos não ensinam comportamento. O cão precisa aprender o critério de caminhar junto.',
          'Quando você sai de casa com o cão agitado, o passeio já começou errado antes mesmo de pisar na calçada.',
        ],
        customNote: 'O passeio calmo é construído dentro de casa, antes da porta se abrir.',
      },
      {
        id: 'slide-4',
        slideNumber: 4,
        totalSlides: count,
        type: 'solution',
        badge: 'O MÉTODO PASSO A PASSO',
        headline: 'Protocolo de Guia Frouxa do Seu Pet Equilibrado:',
        subtitle: 'Treinamos o cão a entender que a guia esticada significa parada e a guia frouxa significa movimento.',
        points: [
          'Treinar a saída calma: esperar sentado antes da porta abrir',
          'Cedeu à pressão da guia: recompensa imediata ao lado da perna',
          'Mudança de direção: se o cão acelerar, mude o sentido da marcha',
        ],
      },
    ];

    if (count >= 6) {
      slides.push({
        id: 'slide-5',
        slideNumber: 5,
        totalSlides: count,
        type: 'proof',
        badge: 'RESULTADO COMPROVADO',
        headline: 'A transformação no passeio da sua família:',
        bodyText: [
          'Em poucos dias de consistência, o cão passa a olhar para você buscando orientação durante a caminhada.',
          'Caminhar passa a ser um momento de relaxamento e vínculo, não de sofrimento físico.',
        ],
        metricNumber: '100%',
        metricLabel: 'Baseado em reforço positivo e comunicação clara',
      });
    }

    if (count === 7) {
      slides.push({
        id: 'slide-6',
        slideNumber: 6,
        totalSlides: count,
        type: 'content',
        badge: 'CHECKLIST DO PASSEIO',
        headline: 'Regras de ouro para aplicar hoje:',
        points: [
          '1. Nunca avance enquanto a guia estiver tensionada',
          '2. Recompense todo momento em que o cão olhar nos seus olhos',
          '3. Permita momentos de farejamento como recompensa por caminhar calmo',
          '4. Mantenha os primeiros treinos curtos e em locais com pouca distração',
        ],
      });
    }

    slides.push(this.createFinalCtaSlide(count));

    const caption = `Passear com o seu cão deveria ser um dos momentos mais relaxantes do seu dia, mas para muitos tutores virou sinônimo de dor no braço e estresse.

A verdade é que os cães não nascem sabendo andar em linha reta ao lado de um humano. Eles andam mais rápido, querem cheirar tudo e, se sentem a guia puxar, ativam o reflexo natural de puxar ainda mais forte.

Aqui no Seu Pet Equilibrado, nós ensinamos o método do passeio estruturado:
1. O treino começa dentro de casa com a saída calma.
2. O cão aprende que a guia solta é o que permite continuar o caminho.
3. Recompensamos a atenção voluntária com reforço positivo e liberdade para farejar.

Atendimento presencial em Cuiabá e Várzea Grande com João Eduardo.
Consultoria comportamental online para todo o Brasil com Nicolle.

Quer transformar os passeios com o seu cão?
Mande uma mensagem na nossa DM (@seupetequilibrado) ou clique no link da bio!`;

    const hashtags = ['#passeiocomcachorro', '#passeiosempuxar', '#adestramentocanino', '#comportamentocanino', '#adestramentopositivo', '#tutoresdecaes', '#seupetequilibrado', '#adestradorcuiaba'];

    return { slides, caption, hashtags };
  }

  // 2. LATIDOS NA CAMPAINHA E PORTÃO
  private generateBarkingScript(topic: string, count: number, brief: StrategyBrief) {
    const slides: SlideData[] = [
      {
        id: 'slide-1',
        slideNumber: 1,
        totalSlides: count,
        type: 'hook',
        badge: 'COMPORTAMENTO CANINO',
        headline: topic || 'Latidos na Campainha: Como ensinar seu cão a ir para o Place',
        highlightWord: 'Place',
        subtitle: 'Toda vez que a campainha toca ou alguém passa na porta sua casa vira um caos?',
        ctaButtonText: 'Arraste para entender ➔',
      },
      {
        id: 'slide-2',
        slideNumber: 2,
        totalSlides: count,
        type: 'problem',
        badge: 'O CAOS DIÁRIO',
        headline: 'Um simples barulho na porta dispara uma crise incontrolável de latidos.',
        subtitle: 'O interfone toca, o carteiro chega ou uma visita entra e o cão corre latindo desesperado.',
        points: [
          'Constrangimento com entregadores e visitas assustadas',
          'Cão em estado de alerta permanente que não relaxa na própria casa',
          'Gritos dos tutores que só aumentam a excitação do animal',
        ],
      },
      {
        id: 'slide-3',
        slideNumber: 3,
        totalSlides: count,
        type: 'problem',
        badge: 'O ERRO CLÁSSICO',
        headline: 'Gritar "PARA DE LATIR" só faz o cão latir mais alto.',
        subtitle: 'Na cabeça do cão, quando você grita, você acabou de se juntar ao alarme dele.',
        bodyText: [
          'O cão pensa: "Meu tutor também está gritando, então realmente temos uma ameaça no portão!".',
          'Oferecer petisco durante o latido também não funciona: você acabou de premiar o surto.',
        ],
        customNote: 'Em vez de dizer ao cão o que NÃO fazer, ensine a ele uma tarefa alternativa incompatível.',
      },
      {
        id: 'slide-4',
        slideNumber: 4,
        totalSlides: count,
        type: 'solution',
        badge: 'A SOLUÇÃO DEFINITIVA',
        headline: 'O Comando Place: O seu melhor aliado contra o latido.',
        subtitle: 'Ensinamos o cão que o som da campainha é a deixa para ele ir deitar na caminha dele.',
        points: [
          'Associação positiva com a caminha (local de calma e petiscos)',
          'Tocar a campainha em volume baixo e direcionar para o Place',
          'Recompensa abundante apenas quando as quatro patas estiverem na cama em silêncio',
        ],
      },
    ];

    if (count >= 6) {
      slides.push({
        id: 'slide-5',
        slideNumber: 5,
        totalSlides: count,
        type: 'proof',
        badge: 'PAZ NA SUA CASA',
        headline: 'Como fica a rotina quando o cão tem autocontrole:',
        bodyText: [
          'As encomendas chegam e o cão vai automaticamente para a caminha esperar a liberação.',
          'A casa ganha tranquilidade e o cão deixa de viver em estado de alerta e estresse crônico.',
        ],
        metricNumber: '100%',
        metricLabel: 'Método científico sem sustos, broncas ou agressões',
      });
    }

    if (count === 7) {
      slides.push({
        id: 'slide-6',
        slideNumber: 6,
        totalSlides: count,
        type: 'content',
        badge: 'PASSO A PASSO PRÁTICO',
        headline: 'Como começar a treinar hoje:',
        points: [
          '1. Grave o som da campainha no celular',
          '2. Toque o som bem baixinho e dê um petisco no Place',
          '3. Aumente o volume gradualmente ao longo dos dias',
          '4. Mantenha o cão na caminha até o entregador ir embora',
        ],
      });
    }

    slides.push(this.createFinalCtaSlide(count));

    const caption = `Se o seu cão surta toda vez que a campainha toca ou alguém passa na calçada, saiba que gritar "Fica quieto!" não vai resolver.

Para o cão, o latido é uma comunicação natural de alarme. Se você grita junto, ele entende que a família inteira está protegendo o território.

A chave comportamental é o comando "Place":
Ensinar o cão que o barulho da campainha significa ir direto para o colchonete dele descansar e ganhar recompensas saborosas.

Atendimento presencial em Cuiabá e Várzea Grande com João Eduardo.
Consultoria comportamental online para todo o Brasil com Nicolle.

Quer resolver os latidos excessivos do seu cão?
Mande uma mensagem na nossa DM (@seupetequilibrado) ou no WhatsApp!`;

    const hashtags = ['#latidocanino', '#comandoplace', '#adestramentocanino', '#comportamentocanino', '#tutoresdecaes', '#seupetequilibrado', '#cuiaba'];

    return { slides, caption, hashtags };
  }

  // 3. XIXI E COCÔ NO LUGAR CERTO
  private generatePottyTrainingScript(topic: string, count: number, brief: StrategyBrief) {
    const slides: SlideData[] = [
      {
        id: 'slide-1',
        slideNumber: 1,
        totalSlides: count,
        type: 'hook',
        badge: 'HIGIENE CANINA',
        headline: topic || 'Xixi e Cocô no Lugar Certo: Os 3 erros que você precisa parar de cometer',
        highlightWord: 'Lugar Certo',
        subtitle: 'Cansado de limpar poças pela casa e encontrar tapetes e sofás estragados?',
        ctaButtonText: 'Arraste para o lado ➔',
      },
      {
        id: 'slide-2',
        slideNumber: 2,
        totalSlides: count,
        type: 'problem',
        badge: 'A ROTINA EXAUSTIVA',
        headline: 'A sensação de que a casa inteira virou um banheiro para o cão.',
        subtitle: 'Você compra tapete higiênico, grama sintética, atrativo sanitário e ele faz exatamente no piso da sala.',
        points: [
          'Gasto constante com produtos de limpeza e desespero diário',
          'Cheiro ruim pela casa e tapetes manchados',
          'Frustração de achar que o cão faz pirraça de propósito',
        ],
      },
      {
        id: 'slide-3',
        slideNumber: 3,
        totalSlides: count,
        type: 'problem',
        badge: 'O MAIOR ERRO DO TUTOR',
        headline: 'Dar bronca depois que o xixi já secou não ensina nada.',
        subtitle: 'O cão tem uma janela de associação de no máximo 2 segundos após a ação.',
        bodyText: [
          'Esfregar o focinho do cão no xixi ou gritar horas depois só ensina o cão a ter medo de você.',
          'O resultado? Ele passa a fazer xixi escondido atrás do sofá ou come as próprias fezes por pânico.',
        ],
        customNote: 'Cães não fazem necessidades por vingança. Eles fazem onde se sentem seguros e com superfície atrativa.',
      },
      {
        id: 'slide-4',
        slideNumber: 4,
        totalSlides: count,
        type: 'solution',
        badge: 'O MÉTODO CORRETO',
        headline: 'Os 3 pilares do treino higiênico sem brigas:',
        subtitle: 'Alinhe a rotina biológica do seu cão com a premiação certeira do acerto.',
        points: [
          '1. Delimitação temporária de espaço nos horários críticos (ao acordar e após comer)',
          '2. Superfície correta: longe da comida e da água',
          '3. Festa e recompensa de alto valor nos exatos 2 segundos em que ele terminar no tapete',
        ],
      },
    ];

    if (count >= 6) {
      slides.push({
        id: 'slide-5',
        slideNumber: 5,
        totalSlides: count,
        type: 'proof',
        badge: 'CASA LIMPA',
        headline: 'Consistência de 7 a 14 dias para mudar o hábito:',
        bodyText: [
          'Quando o acerto é recompensado com festa e petisco saboroso, o cão passa a escolher o tapete voluntariamente.',
          'A convivência melhora instantaneamente e o estresse da limpeza desaparece da sua casa.',
        ],
        metricNumber: '100%',
        metricLabel: 'Comprovado por estudos de condicionamento operante positivo',
      });
    }

    if (count === 7) {
      slides.push({
        id: 'slide-6',
        slideNumber: 6,
        totalSlides: count,
        type: 'content',
        badge: 'HORÁRIOS DE OURO',
        headline: 'Momentos obrigatórios para levar o cão ao tapete:',
        points: [
          'Logo ao acordar pela manhã',
          '15 a 30 minutos após cada refeição',
          'Logo após uma sessão de brincadeira agitada',
          'Antes de dormir à noite',
        ],
      });
    }

    slides.push(this.createFinalCtaSlide(count));

    const caption = `Você limpa o chão, coloca o tapete higiênico e minutos depois encontra um xixi no meio da sala?

Saiba de uma coisa: seu cão NÃO está fazendo isso para te irritar nem por vingança. Cães não têm esse sentimento.

O que acontece é que ele ainda não entendeu onde é o banheiro correto, ou a rotina alimentar não está alinhada com a fisiologia dele.

Dar bronca depois do ocorrido só faz o cão ficar com medo de fazer necessidades na sua frente.

A solução no Seu Pet Equilibrado:
Previsibilidade de horários, manejo do ambiente e recompensa imediata no momento exato em que ele acertar.

Atendimento presencial em Cuiabá e Várzea Grande com João Eduardo.
Consultoria comportamental online para todo o Brasil com Nicolle.

Quer ajuda para ensinar seu cão a fazer no lugar certo?
Mande uma mensagem na nossa DM (@seupetequilibrado)!`;

    const hashtags = ['#xixicachorro', '#tapetehigienico', '#educacaocanina', '#adestramentocanino', '#tutoresdecaes', '#seupetequilibrado', '#adestradorcuiaba'];

    return { slides, caption, hashtags };
  }

  // 4. REATIVIDADE NA GUIA
  private generateReactivityScript(topic: string, count: number, brief: StrategyBrief) {
    const slides: SlideData[] = [
      {
        id: 'slide-1',
        slideNumber: 1,
        totalSlides: count,
        type: 'hook',
        badge: 'REATIVIDADE CANINA',
        headline: topic || 'Reatividade na Guia: Por que repreender o latido piora o desespero do cão',
        highlightWord: 'Reatividade',
        subtitle: 'Seu cão se transforma em uma fera ao cruzar com outros animais na rua?',
        ctaButtonText: 'Arraste para o lado ➔',
      },
      {
        id: 'slide-2',
        slideNumber: 2,
        totalSlides: count,
        type: 'problem',
        badge: 'O MEDO E A VERGONHA',
        headline: 'Ver outro cão na calçada virou motivo de pânico e desespero.',
        subtitle: 'Seu cão trava, eriça os pelos, começa a latir histérico e avança na ponta da guia.',
        points: [
          'Vergonha pública e olhares de julgamento na vizinhança',
          'Medo real de um acidente ou briga de cães na rua',
          'Passeios restritos apenas a horários de madrugada para evitar encontros',
        ],
      },
      {
        id: 'slide-3',
        slideNumber: 3,
        totalSlides: count,
        type: 'problem',
        badge: 'O QUE VOCÊ ESTÁ FAZENDO DE ERRADO',
        headline: 'Tensionar a guia e gritar só confirma o perigo na mente do cão.',
        subtitle: 'Quando você vê outro cão e encurta a guia tenso, seu batimento sobe e você transmite o alarme.',
        bodyText: [
          'O cão reage não por valentia, mas por insegurança e medo acumulado.',
          'Puni-lo no momento do surto só faz ele associar o outro cão a uma experiência dolorosa e negativa.',
        ],
        customNote: 'A reatividade não se cura com broncas, mas mudando a emoção que o estímulo provoca no animal.',
      },
      {
        id: 'slide-4',
        slideNumber: 4,
        totalSlides: count,
        type: 'solution',
        badge: 'DESSENSIBILIZAÇÃO SISTEMÁTICA',
        headline: 'Como tratamos a reatividade no Seu Pet Equilibrado:',
        subtitle: 'Trabalhamos rigorosamente abaixo do limiar de estresse do seu cão.',
        points: [
          'Distância segura: identificar o ponto em que ele vê o outro cão sem entrar em pânico',
          'Contracondicionamento: olhar para o outro cão passa a ser sinal de petisco saboroso',
          'Comunicação bidirecional: ensinar o cão a buscar o seu olhar em vez de reagir',
        ],
      },
    ];

    if (count >= 6) {
      slides.push({
        id: 'slide-5',
        slideNumber: 5,
        totalSlides: count,
        type: 'proof',
        badge: 'SEGURANÇA E CALMA',
        headline: 'A liberdade de voltar a passear com tranquilidade:',
        bodyText: [
          'Com o protocolo correto, o cão deixa de enxergar outros pets como uma ameaça mortal.',
          'Você recupera a paz de caminhar em parques, praças e ruas movimentadas.',
        ],
        metricNumber: '100%',
        metricLabel: 'Abordagem baseada na neurociência do comportamento canino',
      });
    }

    if (count === 7) {
      slides.push({
        id: 'slide-6',
        slideNumber: 6,
        totalSlides: count,
        type: 'content',
        badge: 'DICAS DE OURO',
        headline: 'O que fazer no próximo passeio:',
        points: [
          '1. Mantenha a guia relaxada mesmo ao avistar outro animal',
          '2. Se o cão travar, aumente a distância suavemente antes do surto',
          '3. Tenha petiscos de altíssimo valor (frango desfiado, carne) no bolso',
          '4. Nunca force aproximações cara a cara com cães desconhecidos',
        ],
      });
    }

    slides.push(this.createFinalCtaSlide(count));

    const caption = `Passar por outro cão na rua não precisa ser um momento de pânico e vergonha.

A maioria das pessoas pensa que um cão reativo é um cão "bravo" ou "dominante". Na realidade científica, 90% dos casos de reatividade são causados por medo e insegurança.

Quando o cão está preso na guia e vê outro animal vindo de frente, ele sente que não tem rota de fuga. O latido e o avanço são a única forma que ele encontrou de tentar afastar a ameaça.

No Seu Pet Equilibrado, nós aplicamos dessensibilização sistemática com distância de segurança e reforço positivo para reprogramar essa emoção.

Atendimento presencial em Cuiabá e Várzea Grande com João Eduardo.
Consultoria comportamental online para todo o Brasil com Nicolle.

Seu cão é reativo? Mande uma mensagem direta no @seupetequilibrado para avaliarmos o caso!`;

    const hashtags = ['#caoreativo', '#reatividadecanina', '#adestramentocanino', '#comportamentocanino', '#passeioseguro', '#seupetequilibrado', '#adestradorcuiaba'];

    return { slides, caption, hashtags };
  }

  // 5. ANSIEDADE DE SEPARAÇÃO
  private generateSeparationAnxietyScript(topic: string, count: number, brief: StrategyBrief) {
    const slides: SlideData[] = [
      {
        id: 'slide-1',
        slideNumber: 1,
        totalSlides: count,
        type: 'hook',
        badge: 'SAÚDE EMOCIONAL CANINA',
        headline: topic || 'Ansiedade de Separação: O que fazer para seu cão ficar bem sozinho',
        highlightWord: 'Sozinho em Paz',
        subtitle: 'Você sai de casa e seu cão chora, uiva e destrói portas e móveis?',
        ctaButtonText: 'Arraste para o lado ➔',
      },
      {
        id: 'slide-2',
        slideNumber: 2,
        totalSlides: count,
        type: 'problem',
        badge: 'O SOFRIMENTO DO CÃO',
        headline: 'O peso no peito de sair para trabalhar sabendo que ele está em pânico.',
        subtitle: 'Uivos ouvidos no prédio inteiro, portas arranhadas, salivação excessiva e destruição.',
        points: [
          'Reclamações de vizinhos e ameaças de condomínio',
          'Móveis, sapatos e rodapés destruídos pelo desespero',
          'Sensação de que o cão sofre uma crise de pânico genuína',
        ],
      },
      {
        id: 'slide-3',
        slideNumber: 3,
        totalSlides: count,
        type: 'problem',
        badge: 'O ERRO COMUM',
        headline: 'Despedidas calorosas e recepções eufóricas aumentam o trauma.',
        subtitle: 'Abraçar, beijar e falar com voz fininha antes de sair só avisa ao cão que algo ruim vai acontecer.',
        bodyText: [
          'Ao fazer festa exagerada ao chegar, você confirma para o cão que o período sozinho foi um pesadelo que acabou.',
          'Dar bronca na volta pelos móveis destruídos só faz o cão temer ainda mais o seu retorno.',
        ],
        customNote: 'Amor de verdade é ensinar seu cão a ter autonomia e segurança emocional dentro de casa.',
      },
      {
        id: 'slide-4',
        slideNumber: 4,
        totalSlides: count,
        type: 'solution',
        badge: 'PROTOCOLO DE AUTONOMIA',
        headline: 'Como tratar a ansiedade de separação:',
        subtitle: 'Passo a passo com dessensibilização dos gatilhos de saída e enriquecimento alimentar.',
        points: [
          'Dessensibilizar chaves, sapatos e bolsa pegando os objetos sem sair de casa',
          'Enriquecimento de alto valor (Kong congelado com comida) entregue antes da saída',
          'Treinos de micro-saídas de 30 segundos, 2 minutos, aumentando progressivamente',
        ],
      },
    ];

    if (count >= 6) {
      slides.push({
        id: 'slide-5',
        slideNumber: 5,
        totalSlides: count,
        type: 'proof',
        badge: 'PAZ EMOCIONAL',
        headline: 'A tranquilidade de sair sabendo que seu pet está relaxado:',
        bodyText: [
          'Com treino consistente, o cão aprende que a sua ausência é o momento de saborear brinquedos recheados e dormir.',
          'A dependência doentia dá lugar a um cão confiante e autônomo.',
        ],
        metricNumber: '100%',
        metricLabel: 'Respeito à saúde mental e bem-estar do animal',
      });
    }

    if (count === 7) {
      slides.push({
        id: 'slide-6',
        slideNumber: 6,
        totalSlides: count,
        type: 'content',
        badge: 'PLANO PRÁTICO',
        headline: 'Regras de independência dentro de casa:',
        points: [
          '1. Não permita que o cão te siga como uma sombra o dia todo em todos os cômodos',
          '2. Incentive momentos de descanso no Place enquanto você está em outro cômodo',
          '3. Ignore o cão nos primeiros 3 minutos ao chegar em casa até que ele se acalme',
          '4. Ofereça alimentos desidratados para roer e liberar endorfina natural',
        ],
      });
    }

    slides.push(this.createFinalCtaSlide(count));

    const caption = `Você não consegue sair de casa para jantar ou trabalhar sem sentir culpa e medo de receber mensagens dos vizinhos sobre uivos?

A ansiedade de separação é uma crise de pânico real que atinge milhares de cães. Eles não destroem as coisas por raiva, mas por desespero para descarregar o estresse acumulado.

Para resolver, nós precisamos ensinar o cão a ter autonomia emocional e entender que ficar sozinho é seguro e previsível.

No Seu Pet Equilibrado, criamos protocolos individuais de independência gradual e enriquecimento ambiental para devolver a paz ao seu lar.

Atendimento presencial em Cuiabá e Várzea Grande com João Eduardo.
Consultoria comportamental online para todo o Brasil com Nicolle.

Seu cão sofre ao ficar sozinho?
Mande uma mensagem direta no @seupetequilibrado para conversarmos sobre o caso dele!`;

    const hashtags = ['#ansiedadepet', '#ansiedadedeseparacao', '#caosozinho', '#adestramentocanino', '#comportamentocanino', '#seupetequilibrado', '#cuiaba'];

    return { slides, caption, hashtags };
  }

  // 6. FILHOTES E MORDIDAS
  private generatePuppyBitingScript(topic: string, count: number, brief: StrategyBrief) {
    const slides: SlideData[] = [
      {
        id: 'slide-1',
        slideNumber: 1,
        totalSlides: count,
        type: 'hook',
        badge: 'FILHOTES & EDUCAÇÃO',
        headline: topic || 'Mordidas de Filhote: Como fazer seu cão parar de morder mãos e pés',
        highlightWord: 'Mordidas de Filhote',
        subtitle: 'Mãos arranhadas, calças rasgadas e a sensação de ter um pequeno jacaré em casa?',
        ctaButtonText: 'Arraste para entender ➔',
      },
      {
        id: 'slide-2',
        slideNumber: 2,
        totalSlides: count,
        type: 'problem',
        badge: 'O DILEMA DO FILHOTE',
        headline: 'Dentes de agulha que transformam qualquer carinho em um ataque.',
        subtitle: 'Você tenta fazer um agrado e o filhote morde seus dedos, calcanhares e chinelos com força.',
        points: [
          'Crianças assustadas e dor física na convivência familiar',
          'Medo de o filhote crescer e se tornar um cão agressivo',
          'A sensação de que nenhuma bronca faz ele parar',
        ],
      },
      {
        id: 'slide-3',
        slideNumber: 3,
        totalSlides: count,
        type: 'problem',
        badge: 'O ERRO MAIS COMUM',
        headline: 'Puxar a mão rápido e gritar "NÃO" só estimula o instinto de caça.',
        subtitle: 'Para o filhote, sua mão que se mexe rápido e faz barulho é o brinquedo mais divertido do mundo.',
        bodyText: [
          'Filhotes exploram o mundo pela boca e estão em fase de troca de dentição com gengiva inflamada.',
          'Bater no focinho ou prender a boca com a mão só ensina o filhote a morder com mais força para se defender.',
        ],
        customNote: 'O filhote precisa morder. O segredo é ensinar a ele ONDE morder com texturas adequadas.',
      },
      {
        id: 'slide-4',
        slideNumber: 4,
        totalSlides: count,
        type: 'solution',
        badge: 'REDIRECIONAMENTO CERTEIRO',
        headline: 'O protocolo para ensinar controle de mordida:',
        subtitle: 'Técnicas de manejo de excitação e substituição de objetos.',
        points: [
          '1. Congele o movimento: quando o dente tocar na pele, pare de se mexer e retire a atenção',
          '2. Tenha sempre um mordedor de borracha ou brinquedo por perto para oferecer imediatamente',
          '3. Mordedores naturais desidratados para aliviar o incômodo na gengiva',
        ],
      },
    ];

    if (count >= 6) {
      slides.push({
        id: 'slide-5',
        slideNumber: 5,
        totalSlides: count,
        type: 'proof',
        badge: 'CARINHO EM PAZ',
        headline: 'Em poucos dias de treino correto:',
        bodyText: [
          'O filhote aprende que dentes na pele humana significam fim da brincadeira, enquanto brinquedos trazem festa e diversão.',
          'As mãos voltam a ser sinônimo de carinho e calma.',
        ],
        metricNumber: '100%',
        metricLabel: 'Educação precoce que previne problemas graves na fase adulta',
      });
    }

    if (count === 7) {
      slides.push({
        id: 'slide-6',
        slideNumber: 6,
        totalSlides: count,
        type: 'content',
        badge: 'DICAS PRÁTICAS',
        headline: 'Brinquedos ideais para a fase de dentição:',
        points: [
          'Brinquedos de borracha recheados e congelados com comida úmida',
          'Cascos e chifres bovinos para roer com segurança',
          'Paninhos molhados e congelados para acalmar a gengiva',
          'Mordedores de corda para brincar de cabo de guerra estruturado',
        ],
      });
    }

    slides.push(this.createFinalCtaSlide(count));

    const caption = `Ter um filhote em casa é uma alegria, mas quando as mordidas com dentes afiados começam a machucar mãos e calcanhares, a convivência fica cansativa.

É normal filhotes morderem: é assim que eles exploram o ambiente e aliviam a coceira da dentição.

O erro é puxar a mão e gritar, o que ativa o instinto de perseguição do cão.

Com o manejo certo de congelar o movimento e redirecionar para brinquedos adequados, seu filhote aprende rápido o controle de mordida.

Atendimento presencial em Cuiabá e Várzea Grande com João Eduardo.
Consultoria comportamental online para todo o Brasil com Nicolle.

Tem um filhote em casa precisando de limites gentis e estrutura?
Mande uma mensagem direta no @seupetequilibrado!`;

    const hashtags = ['#filhotes', '#mordidadefilhote', '#adestramentocanino', '#comportamentocanino', '#educacaodefilhotes', '#seupetequilibrado', '#cuiaba'];

    return { slides, caption, hashtags };
  }

  // 7. PULAR NAS VISITAS
  private generateJumpingScript(topic: string, count: number, brief: StrategyBrief) {
    const slides: SlideData[] = [
      {
        id: 'slide-1',
        slideNumber: 1,
        totalSlides: count,
        type: 'hook',
        badge: 'BOAS MANEIRAS CANINAS',
        headline: topic || 'Pular nas Visitas: Como ensinar calma na hora de receber convidados',
        highlightWord: 'Quatro Patas no Chão',
        subtitle: 'Receber visitas em casa virou motivo de vergonha com o cão pulando em todo mundo?',
        ctaButtonText: 'Arraste para o lado ➔',
      },
      {
        id: 'slide-2',
        slideNumber: 2,
        totalSlides: count,
        type: 'problem',
        badge: 'O CONSTRANGIMENTO',
        headline: 'A porta abre e o cão vira um foguete descontrolado.',
        subtitle: 'Patas sujas na roupa limpa dos convidados, unhas arranhando peles e visitas assustadas.',
        points: [
          'Constrangimento com amigos, parentes, idosos e crianças',
          'Cão hiperestimulado que pula na cara das pessoas',
          'Frustração de ter que trancar o cão no quarto para ter paz',
        ],
      },
      {
        id: 'slide-3',
        slideNumber: 3,
        totalSlides: count,
        type: 'problem',
        badge: 'O ERRO MAIS COMUM',
        headline: 'Fazer festa de volta ensina o cão que pular é o comportamento esperado.',
        subtitle: 'Quando alguém empurra o cão com a mão ou diz "Oi bonitinho!" enquanto ele pula, está premiando o salto.',
        bodyText: [
          'Para o cão, qualquer toque ou fala enquanto ele pula é atenção valiosa.',
          'Pular é uma tentativa de alcançar o rosto humano, mas precisa de regras claras de convivência.',
        ],
        customNote: 'Atenção só é concedida com as quatro patas firmes no chão.',
      },
      {
        id: 'slide-4',
        slideNumber: 4,
        totalSlides: count,
        type: 'solution',
        badge: 'A REGRA DAS 4 PATAS',
        headline: 'O protocolo para ensinar recepção educada:',
        subtitle: 'Comunicação corporal clara e reforço da calma voluntária.',
        points: [
          '1. Cruza os braços e vire as costas toda vez que o cão subir nas patas traseiras',
          '2. Abaixe-se para acariciar e premiar no exato momento em que as 4 patas tocarem o chão',
          '3. Instrua as visitas a ignorar completamente o cão nos primeiros minutos',
        ],
      },
    ];

    if (count >= 6) {
      slides.push({
        id: 'slide-5',
        slideNumber: 5,
        totalSlides: count,
        type: 'proof',
        badge: 'RECEBER BEM',
        headline: 'A paz de abrir a porta da sua casa:',
        bodyText: [
          'O cão aprende que a melhor forma de ganhar carinho das visitas é sentar e esperar calmamente.',
          'Você recebe amigos com orgulho da educação do seu pet.',
        ],
        metricNumber: '100%',
        metricLabel: 'Educação baseada em critérios e calma',
      });
    }

    if (count === 7) {
      slides.push({
        id: 'slide-6',
        slideNumber: 6,
        totalSlides: count,
        type: 'content',
        badge: 'EXERCÍCIO DE PORTA',
        headline: 'Treino prático de porta:',
        points: [
          'Coloque o cão na guia durante as primeiras chegadas de visitas',
          'Peça para um familiar tocar o interfone para simular a chegada',
          'Recompense com petiscos no chão para manter o foco embaixo',
          'Só solte para saudar quando o estado emocional estiver calmo',
        ],
      });
    }

    slides.push(this.createFinalCtaSlide(count));

    const caption = `Receber amigos em casa não precisa ser um momento de tensão com seu cão pulando nas pessoas e sujando roupas.

O cão pula porque quer chegar perto do rosto humano e porque nós, sem perceber, fazemos festa enquanto ele está pulando.

A regra de ouro do adestramento positivo é "Quatro Patas no Chão":
Carinho, atenção e petisco só existem quando o cão está com as patas apoiadas no solo.

Atendimento presencial em Cuiabá e Várzea Grande com João Eduardo.
Consultoria comportamental online para todo o Brasil com Nicolle.

Quer ensinar seu cão a receber visitas com educação?
Mande uma mensagem na nossa DM (@seupetequilibrado)!`;

    const hashtags = ['#caocalmo', '#educacaocanina', '#pularnasvisitas', '#adestramentocanino', '#comportamentocanino', '#seupetequilibrado', '#cuiaba'];

    return { slides, caption, hashtags };
  }

  // 8. ENRIQUECIMENTO AMBIENTAL
  private generateEnrichmentScript(topic: string, count: number, brief: StrategyBrief) {
    const slides: SlideData[] = [
      {
        id: 'slide-1',
        slideNumber: 1,
        totalSlides: count,
        type: 'hook',
        badge: 'BEM-ESTAR CANINO',
        headline: topic || 'Enriquecimento Ambiental: Atividades que cansam a mente do cão',
        highlightWord: 'Enriquecimento',
        subtitle: 'Você passeia quilômetros e seu cão ainda chega em casa querendo destruir tudo?',
        ctaButtonText: 'Arraste para conferir ➔',
      },
      {
        id: 'slide-2',
        slideNumber: 2,
        totalSlides: count,
        type: 'problem',
        badge: 'O CÃO INQUIETO',
        headline: 'Cansaço apenas físico cria um cão atleta, não um cão relaxado.',
        subtitle: 'Andar na rua cansa os músculos, mas não satisfaz os instintos cognitivos e sensoriais da espécie canina.',
        points: [
          'Cão que anda de um lado para o outro sem conseguir relaxar',
          'Destruição de rodapés, tapetes e sapatos por tédio puro',
          'Latidos por demanda de atenção a cada minuto do dia',
        ],
      },
      {
        id: 'slide-3',
        slideNumber: 3,
        totalSlides: count,
        type: 'problem',
        badge: 'O ERRO COMUM',
        headline: 'Servir comida na tigela comum desperdiça o maior momento do dia.',
        subtitle: 'Na natureza, cães passam horas farejando, forrageando e resolvendo problemas para se alimentar.',
        bodyText: [
          'Dar a ração em 30 segundos numa tigela plástica deixa o cão com horas de energia ociosa acumulada.',
          'O cérebro canino precisa de desafios mentais diários para liberar dopamina e serotonina naturais.',
        ],
        customNote: '15 minutos de farejamento cansam a mente do cão muito mais que uma caminhada rápida de 1 hora.',
      },
      {
        id: 'slide-4',
        slideNumber: 4,
        totalSlides: count,
        type: 'solution',
        badge: 'OS 4 PILARES',
        headline: 'Como enriquecer a rotina do seu cão em casa:',
        subtitle: 'Atividades simples com itens que você já tem em casa:',
        points: [
          '1. Alimentar: use garrafas pet furadas, caixas de papelão ou tapetes de fuçar',
          '2. Farejar: esconda petiscos pela sala para ele procurar pelo olfato',
          '3. Roer: ofereça mordedores naturais desidratados próprios para pets',
          '4. Lamber: tapetes de lamber com iogurte natural e frutas congeladas',
        ],
      },
    ];

    if (count >= 6) {
      slides.push({
        id: 'slide-5',
        slideNumber: 5,
        totalSlides: count,
        type: 'proof',
        badge: 'CÃO EQUILIBRADO',
        headline: 'A transformação na mente do seu pet:',
        bodyText: [
          'Após uma sessão de enriquecimento ambiental, o cão deita voluntariamente e dorme profundamente com o cérebro relaxado.',
          'A destruição de móveis cessa porque a necessidade natural foi saciada.',
        ],
        metricNumber: '100%',
        metricLabel: 'Saúde mental e qualidade de vida para seu melhor amigo',
      });
    }

    if (count === 7) {
      slides.push({
        id: 'slide-6',
        slideNumber: 6,
        totalSlides: count,
        type: 'content',
        badge: 'RECEITA FÁCIL',
        headline: 'Kong ou brinquedo recheável caseiro:',
        points: [
          'Ração hidratada com água morna amassada com garfo',
          'Misture com um pouco de banana ou sachê úmido',
          'Coloque dentro do brinquedo e leve ao congelador por 4 horas',
          'Ofereça nos momentos em que você precisa de silêncio e foco',
        ],
      });
    }

    slides.push(this.createFinalCtaSlide(count));

    const caption = `Você sabia que apenas caminhar na rua não é suficiente para cansar a mente do seu cão?

Quando nós apenas exercitamos o corpo do animal, estamos criando um cão com preparo de maratonista: cada dia ele precisa de mais quilômetros para cansar.

O que realmente acalma o cérebro do cão é o enriquecimento ambiental: farejar, resolver desafios para comer, lamber e roer.

Essas atividades liberam neurotransmissores de calma e bem-estar, eliminando a destruição de móveis e a hiperatividade dentro de casa.

Atendimento presencial em Cuiabá e Várzea Grande com João Eduardo.
Consultoria comportamental online para todo o Brasil com Nicolle.

Quer montar uma rotina de enriquecimento sob medida para o seu cão?
Mande uma mensagem na nossa DM (@seupetequilibrado)!`;

    const hashtags = ['#enriquecimentoambiental', '#bemestaranimal', '#caofeliz', '#adestramentocanino', '#comportamentocanino', '#seupetequilibrado', '#cuiaba'];

    return { slides, caption, hashtags };
  }

  // 9. PADRÃO GERAL PARA QUALQUER TEMA DE ADESTRAMENTO
  private generateGeneralTrainingScript(topic: string, count: number, brief: StrategyBrief) {
    const slides: SlideData[] = [
      {
        id: 'slide-1',
        slideNumber: 1,
        totalSlides: count,
        type: 'hook',
        badge: 'ADESTRAMENTO E COMPORTAMENTO',
        headline: topic || 'Por que seu cão não te escuta e como resolver com clareza',
        highlightWord: 'Equilíbrio',
        subtitle: 'Entenda a causa comportamental por trás dos desafios diários com seu pet.',
        ctaButtonText: 'Arraste para entender ➔',
      },
      {
        id: 'slide-2',
        slideNumber: 2,
        totalSlides: count,
        type: 'problem',
        badge: 'O QUE VOCÊ VIVE HOJE',
        headline: 'A sensação de que você e seu cão falam línguas completamente diferentes.',
        subtitle: sanitizeText(brief.corePain),
        points: [
          'Repetir os mesmos comandos todos os dias sem ser respeitado',
          'Estresse nos momentos que deveriam ser prazerosos com a família',
          'Cansaço de tentar dicas soltas de internet que não funcionam',
        ],
      },
      {
        id: 'slide-3',
        slideNumber: 3,
        totalSlides: count,
        type: 'problem',
        badge: 'A CAUSA REAL',
        headline: 'Achar que broncas ou suborno com petisco vão educar o cão.',
        subtitle: sanitizeText(brief.culprit),
        bodyText: [
          'O cão não aprende pelo medo. Punições apenas quebram o vínculo de confiança e aumentam a ansiedade do animal.',
          'Por outro lado, ter que mostrar comida na mão para ele obedecer é suborno, não treino estruturado.',
        ],
        customNote: 'Educar um cão é sobre clareza de critérios, comunicação previsível e reforço positivo.',
      },
      {
        id: 'slide-4',
        slideNumber: 4,
        totalSlides: count,
        type: 'solution',
        badge: 'O MÉTODO SEU PET EQUILIBRADO',
        headline: 'Comunicação Clara, Reforço Positivo e Adequação de Rotina.',
        subtitle: sanitizeText(brief.solutionAngle),
        points: [
          'Recompensa imediata quando o cão escolhe a conduta correta',
          'Ajuste das necessidades biológicas e mentais da espécie',
          'Construção de uma liderança justa, calma e confiável',
        ],
      },
    ];

    if (count >= 6) {
      slides.push({
        id: 'slide-5',
        slideNumber: 5,
        totalSlides: count,
        type: 'proof',
        badge: 'PLANO PRÁTICO',
        headline: 'Atitudes para começar a mudança hoje:',
        bodyText: [
          '1. Pare de recompensar comportamentos eufóricos com atenção ou carinho.',
          '2. Garanta atividades cognitivas e enriquecimento ambiental diário.',
        ],
        metricNumber: '100%',
        metricLabel: 'Baseado em estudos científicos de comportamento animal',
      });
    }

    if (count === 7) {
      slides.push({
        id: 'slide-6',
        slideNumber: 6,
        totalSlides: count,
        type: 'content',
        badge: 'HARMONIA TOTAL',
        headline: 'Como fica a sua vida com um cão equilibrado:',
        points: [
          'Passeios tranquilos com guia frouxa sem dor no braço',
          'Casa em paz sem destruição de móveis nem latidos histéricos',
          'Segurança para receber convidados e amigos',
          'Um amigo fiel, calmo e seguro ao seu lado',
        ],
      });
    }

    slides.push(this.createFinalCtaSlide(count));

    const caption = `Se você convive com um cão e já sentiu frustração ao tentar corrigir um comportamento indesejado, leia com atenção:

Muitas vezes nós exigimos que o cão se comporte como um humano educado, sem antes ensinar a ele as regras do jogo com clareza.

O que acontece na maioria dos lares:
1. Broncas e gritos no calor do momento aumentam a ansiedade do cão e destroem a conexão.
2. Dar petiscos sem critério vira suborno em vez de aprendizado real.
3. Não adequar a rotina de gastos de energia faz o cão descarregar a frustração em latidos, puxões ou destruição de móveis.

Aqui no Seu Pet Equilibrado, nós acreditamos em um caminho diferente:
Métodos baseados em estudos científicos e reforço positivo.
Adequação de rotina respeitando as necessidades naturais de cada cão.
Clareza absoluta para você saber exatamente como agir em cada situação.

Atendimento presencial em Cuiabá e Várzea Grande com João Eduardo.
Atendimento online para todo o Brasil e exterior com Nicolle.

Quer entender o caso do seu cão e receber uma orientação profissional?
Mande uma mensagem direta no nosso perfil (@seupetequilibrado) ou no WhatsApp!`;

    const hashtags = ['#adestramentocanino', '#comportamentocanino', '#adestramentopositivo', '#tutoresdecaes', '#seupetequilibrado', '#adestradorcuiaba', '#bemestaranimal'];

    return { slides, caption, hashtags };
  }

  // Slide Final CTA Padronizado
  private createFinalCtaSlide(count: number): SlideData {
    return {
      id: `slide-${count}`,
      slideNumber: count,
      totalSlides: count,
      type: 'cta',
      badge: 'CONVERSE COM NOSSOS ESPECIALISTAS',
      headline: 'Quer ajuda profissional para transformar o comportamento do seu cão?',
      subtitle: 'Presencial em Cuiabá e Várzea Grande com João Eduardo | Online para todo o Brasil com Nicolle.',
      bodyText: [
        'Avaliamos a rotina da sua família e criamos um plano comportamental individualizado para o seu caso.',
      ],
      ctaButtonText: 'Mande uma mensagem na DM do @seupetequilibrado',
      customNote: 'Salve este post para consultar sempre que precisar e compartilhe com outro tutor!',
    };
  }
}
