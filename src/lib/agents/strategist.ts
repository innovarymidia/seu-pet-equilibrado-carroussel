import { GenerationInput } from '../types';

export interface StrategyBrief {
  corePain: string;
  culprit: string;
  solutionAngle: string;
  hookConcept: string;
  ctaGoal: string;
}

export class StrategistAgent {
  name = 'Max Thorne';
  title = 'Estrategista Mestre de Psicologia & Adestramento Canino Equilibrado';
  avatar = '🐕';

  analyze(input: GenerationInput): StrategyBrief {
    const topic = input.topic || 'Como fazer o cão parar de puxar a guia no passeio';
    const lower = topic.toLowerCase();

    // 1. Passeio, guia, puxar, rua
    if (lower.includes('pux') || lower.includes('guia') || lower.includes('passei') || lower.includes('rua') || lower.includes('coleira')) {
      return {
        corePain: 'O passeio virou uma batalha de braço esticado, estresse contínuo e frustração toda vez que sai de casa.',
        culprit: 'Achar que o passeio começa na rua e depender de petiscos quando o cão já atingiu pico de superestimulação.',
        solutionAngle: 'Protocolo de Passeio Estruturado do Seu Pet Equilibrado: ensinar o cão a ceder à pressão da guia antes de sair da porta, com limites claros e recompensas sinceras por calma voluntária.',
        hookConcept: 'O passeio não é para o seu cão te rebocar. Se você não lidera a caminhada, ele assume a responsabilidade e surta.',
        ctaGoal: 'Envie um direct no @seupetequilibrado para receber o checklist de passeio calmo e equilibrado.',
      };
    }

    // 2. Reatividade, latidos, portão, outros cães, agressividade
    if (lower.includes('reativ') || lower.includes('lat') || lower.includes('port') || lower.includes('agress') || lower.includes('visita')) {
      return {
        corePain: 'Vergonha e tensão extrema ao cruzar com outros cães ou pessoas, com o cão latindo, pulando e reagindo de forma descontrolada.',
        culprit: 'Insegurança combinada com ausência de liderança e limites consistentes. O cão sente que precisa resolver as ameaças sozinho.',
        solutionAngle: 'Manejo de Reatividade Equilibrada: dessensibilização com distância segura, comunicação bidirecional com reforço de calma e correção justa de comportamentos inaceitáveis.',
        hookConcept: 'Tentar acalmar um cão reativo oferecendo petisco no meio do surto só ensina que o surto é recompensado.',
        ctaGoal: 'Mande uma mensagem direta no @seupetequilibrado com o caso do seu pet para uma avaliação personalizada.',
      };
    }

    // 3. Ansiedade de separação, destruição, choro, sozinho
    if (lower.includes('ansied') || lower.includes('separ') || lower.includes('destr') || lower.includes('sozinh') || lower.includes('chora')) {
      return {
        corePain: 'Chegar em casa e encontrar sapatos roídos, portas arranhadas, xixi de desespero e queixas dos vizinhos sobre uivos.',
        culprit: 'Hiperapego emocional estimulado sem querer pelo tutor, falta de comando "place" (lugar) e excesso de liberdade precoce sem treino de autonomia.',
        solutionAngle: 'Construção de Autonomia & Descanso Estruturado: rotina de independência diária, limites espaciais claros e dessensibilização dos gatilhos de saída.',
        hookConcept: 'Amor de verdade não é dependência. Ensinar seu cão a ficar calmo sozinho é um ato de respeito à saúde mental dele.',
        ctaGoal: 'Chame no direct do @seupetequilibrado para entender a rotina de descanso estruturado.',
      };
    }

    // 4. Metodologia, positivo, punição, limites, regras, educação
    if (lower.includes('positiv') || lower.includes('puni') || lower.includes('metod') || lower.includes('limit') || lower.includes('regra') || lower.includes('não')) {
      return {
        corePain: 'Tutores confusos entre o extremismo do "100% positivo" (que não resolve problemas reais de limites) e o "punitivismo medieval" (que quebra a confiança).',
        culprit: 'Acreditar que educar é só dar biscoito ou, no outro extremo, achar que precisa de força bruta para obter respeito.',
        solutionAngle: 'A Filosofia do Adestramento Equilibrado: Clareza Absoluta. Recompensa abundante pelo acerto e limite justo, firme e calmo para impedir o erro.',
        hookConcept: 'Dizer NÃO com justiça não traumatiza seu cão: o que traumatiza é a inconsistência e a falta de direção.',
        ctaGoal: 'Compartilhe esse carrossel com quem ama cães mas precisa entender a importância de limites justos.',
      };
    }

    // 5. Default: Obediência no mundo real e liderança calma
    return {
      corePain: 'Cão que só obedece dentro de casa quando vê comida na mão, mas fica completamente surdo no mundo real.',
      culprit: 'Transformar a recompensa em suborno e nunca ter ensinado o cão a respeitar critérios e tolerar frustração.',
      solutionAngle: 'Sistema de Adestramento Equilibrado do Seu Pet Equilibrado: desenvolvendo foco voluntário, engajamento genuíno e confiabilidade em qualquer ambiente.',
      hookConcept: 'O seu cão não precisa de um tutor perfeito. Ele precisa de um líder calmo, previsível e justo.',
      ctaGoal: 'Mande uma mensagem direta no @seupetequilibrado para transformar a convivência com o seu cão.',
    };
  }
}
