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
    const topic = sanitizeText(input.topic) || 'Como fazer seu cão parar de puxar a guia no passeio';
    const slides: SlideData[] = [];

    // SLIDE 1: HOOK MAGNÉTICO (Capa com proporção e impacto perfeito)
    slides.push({
      id: 'slide-1',
      slideNumber: 1,
      totalSlides: slideCount,
      type: 'hook',
      badge: 'ADESTRAMENTO E COMPORTAMENTO CANINO',
      headline: this.generateHeadline(topic, brief),
      highlightWord: 'equilíbrio',
      subtitle: 'Entenda o que está por trás do comportamento do seu cão e como resolver sem brigas.',
      ctaButtonText: 'Arraste para o lado ➔',
    });

    // SLIDE 2: IDENTIFICAÇÃO DA DOR DO TUTOR (Cenário real vivido na rotina)
    slides.push({
      id: 'slide-2',
      slideNumber: 2,
      totalSlides: slideCount,
      type: 'problem',
      badge: 'O QUE VOCÊ VIVE HOJE',
      headline: 'A sensação de que você e seu cão não estão se entendendo.',
      subtitle: sanitizeText(brief.corePain),
      points: [
        'Frustração constante por repetir comandos sem ser ouvido',
        'Estresse nos momentos que deveriam ser prazerosos',
        'Culpa e cansaço de tentar de tudo sem ver melhora real',
      ],
    });

    // SLIDE 3: O ERRO COMUM / A ARMADILHA
    slides.push({
      id: 'slide-3',
      slideNumber: 3,
      totalSlides: slideCount,
      type: 'problem',
      badge: 'O ERRO MAIS COMUM',
      headline: 'Achar que broncas ou força física vão resolver o problema.',
      subtitle: sanitizeText(brief.culprit),
      bodyText: [
        'O cão não aprende pelo medo. Punições apenas suprimem o sintoma temporariamente e geram mais ansiedade.',
        'Quando a comunicação é confusa, o cão fica inseguro e o comportamento indesejado se intensifica.',
      ],
      customNote: 'Educar um cão é sobre clareza de critérios e previsibilidade, nunca sobre intimidação.',
    });

    // SLIDE 4: O MÉTODO SEU PET EQUILIBRADO (Solução científica e positiva)
    slides.push({
      id: 'slide-4',
      slideNumber: 4,
      totalSlides: slideCount,
      type: 'solution',
      badge: 'MÉTODO SEU PET EQUILIBRADO',
      headline: 'Comunicação Clara, Reforço Positivo e Adequação de Rotina.',
      subtitle: sanitizeText(brief.solutionAngle),
      points: [
        'Recompensa imediata quando o cão escolhe a calma voluntária',
        'Ajuste das necessidades biológicas e mentais do seu pet',
        'Construção de vínculo de confiança mútua e cooperação',
      ],
    });

    // SLIDES ADICIONAIS CONFORME A QUANTIDADE SOLICITADA
    if (slideCount >= 6) {
      // SLIDE 5: PASSO A PASSO PRÁTICO PARA APLICAR HOJE
      slides.push({
        id: 'slide-5',
        slideNumber: 5,
        totalSlides: slideCount,
        type: 'proof',
        badge: 'PLANO PRÁTICO EM CASA',
        headline: '3 atitudes simples para começar a mudar o jogo hoje:',
        bodyText: [
          '1. Pare de recompensar comportamentos agitados com carinho ou petisco.',
          '2. Ofereça atividades cognitivas e enriquecimento ambiental diariamente.',
        ],
        metricNumber: '100%',
        metricLabel: 'Baseado em ciência comportamental e respeito ao bem-estar do cão',
      });
    }

    if (slideCount === 7) {
      // SLIDE 6: A TRANSFORMAÇÃO NA ROTINA DA FAMÍLIA
      slides.push({
        id: 'slide-6',
        slideNumber: 6,
        totalSlides: slideCount,
        type: 'content',
        badge: 'ROTINA HARMONIOSA',
        headline: 'Como fica a sua vida quando o cão aprende a ser equilibrado:',
        points: [
          'Passeios tranquilos e prazerosos com guia frouxa',
          'Casa em paz sem destruição de móveis nem latidos desesperados',
          'Segurança ao receber amigos e visitas na sua casa',
          'Um companheiro confiável, calmo e feliz ao seu lado',
        ],
      });
    }

    // ÚLTIMO SLIDE: CALL TO ACTION PROFISSIONAL
    slides.push({
      id: `slide-${slideCount}`,
      slideNumber: slideCount,
      totalSlides: slideCount,
      type: 'cta',
      badge: 'CONVERSE COM NOSSOS ESPECIALISTAS',
      headline: 'Quer ajuda profissional para transformar a rotina com o seu cão?',
      subtitle: 'Presencial em Cuiabá e Várzea Grande com João Eduardo | Online para todo o Brasil com Nicolle.',
      bodyText: [
        'Avaliamos a rotina da sua família e criamos um plano comportamental individualizado para o seu caso.',
      ],
      ctaButtonText: 'Mande uma mensagem na DM do @seupetequilibrado',
      customNote: 'Salve este post para consultar sempre que precisar e compartilhe com outro tutor!',
    });

    const caption = this.generateCaption(topic, brief);
    const hashtags = [
      '#seupetequilibrado',
      '#adestramentocanino',
      '#comportamentocanino',
      '#adestramentopositivo',
      '#tutoresdecaes',
      '#adestradorcuiaba',
      '#consultoriacomportamental',
      '#passeiocomcachorro',
      '#bemestaranimal',
    ];

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

  private generateHeadline(topic: string, brief: StrategyBrief): string {
    const cleanTopic = sanitizeText(topic);
    if (cleanTopic.length > 10 && cleanTopic.length < 80) {
      return cleanTopic;
    }
    return 'Por que seu cão continua com comportamentos difíceis mesmo com as suas tentativas?';
  }

  private generateCaption(topic: string, brief: StrategyBrief): string {
    const rawCaption = `Se você convive com um cão e já sentiu frustração ao tentar corrigir um comportamento indesejado, leia com atenção:

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

Mande uma mensagem direta no nosso perfil (@seupetequilibrado) ou chame nossa equipe no WhatsApp!

Salve esse carrossel para consultar na sua rotina e compartilhe com outro tutor que precisa dessa ajuda!`;

    return sanitizeText(rawCaption);
  }
}
