import { GenerationInput } from '../types';

export interface StrategyBrief {
  category: string;
  corePain: string;
  culprit: string;
  solutionAngle: string;
  hookConcept: string;
  ctaGoal: string;
}

export class StrategistAgent {
  name = 'João Eduardo';
  title = 'Especialista em Adestramento & Comportamento Canino';
  avatar = '🐕';

  analyze(input: GenerationInput): StrategyBrief {
    const topic = input.topic || 'Passeio Sem Puxar: O método passo a passo para caminhar com guia frouxa';
    const lower = topic.toLowerCase();

    // 1. PASSEIO, GUIA, PUXAR, ENFORCADOR, CAMINHADA
    if (lower.includes('pux') || lower.includes('guia') || lower.includes('passei') || lower.includes('caminh') || lower.includes('coleira') || lower.includes('peitoral')) {
      return {
        category: 'Passeio Estruturado',
        corePain: 'Voltar do passeio com o ombro doendo, exausto e estressado, sentindo que o cão te reboca e não te escuta na rua.',
        culprit: 'Achar que o passeio começa na calçada e deixar o cão sair de casa superestimulado, puxando para cheirar tudo sem foco no tutor.',
        solutionAngle: 'Protocolo de Passeio Equilibrado: treinar a saída calma de casa, ensinar o cão a ceder à leve tensão da guia e premiar o foco voluntário com reforço positivo.',
        hookConcept: 'O passeio não é para o seu cão te arrastar pela rua. Se ele não aprende a caminhar calmo com você, cada caminhada vira um pico de estresse.',
        ctaGoal: 'Envie um direct no @seupetequilibrado para agendar uma consultoria e transformar os passeios com seu cão.',
      };
    }

    // 2. LATIDOS, CAMPAINHA, PORTÃO, BARULHOS
    if (lower.includes('latid') || lower.includes('lat') || lower.includes('campainh') || lower.includes('port') || lower.includes('barulho') || lower.includes('surt')) {
      return {
        category: 'Latidos & Campainha',
        corePain: 'A campainha toca ou alguém passa na calçada e a casa vira um caos de latidos estridentes e descontrole total.',
        culprit: 'Tentar calar o cão gritando (o que ele interpreta como você latindo junto) ou dar petisco no meio do surto, recompensando o alarme.',
        solutionAngle: 'Comando Place & Redirecionamento de Alarme: ensinar o cão a ir para um local específico de descanso ao ouvir a campainha e premiar o silêncio.',
        hookConcept: 'Gritar "PARA DE LATIR" só ensina seu cão que você também está latindo. O segredo é dar uma função clara para ele fazer.',
        ctaGoal: 'Mande uma mensagem na DM do @seupetequilibrado e descubra como aplicar o comando Place na sua casa.',
      };
    }

    // 3. XIXI E COCÔ NO LUGAR CERTO, TAPETE HIGIÊNICO
    if (lower.includes('xixi') || lower.includes('coc') || lower.includes('tapet') || lower.includes('higi') || lower.includes('necessidad') || lower.includes('limp')) {
      return {
        category: 'Higiene & Necessidades',
        corePain: 'Chegar em casa ou acordar e encontrar fezes e urina no sofá, tapete da sala e cantos da casa, mesmo tendo comprado tapete higiênico.',
        culprit: 'Dar broncas atrasadas, esfregar o focinho do cão no erro ou não alinhar os horários de alimentação e água à rotina sanitária biológica do cão.',
        solutionAngle: 'Manejo Sanitário & Reforço Imediato: delimitação correta de espaço, premiação com festa e petisco nos exatos 2 segundos após acertar e rotina alimentar previsível.',
        hookConcept: 'Esfregar o focinho do cão no xixi não ensina onde fazer: só ensina o cão a ter medo de você e fazer escondido atrás do sofá.',
        ctaGoal: 'Quer resolver o xixi e cocô do seu cão? Chame a equipe do @seupetequilibrado no direct para um plano sob medida.',
      };
    }

    // 4. REATIVIDADE, OUTROS CÃES, AGRESSIVIDADE, AVANÇAR
    if (lower.includes('reativ') || lower.includes('agress') || lower.includes('avanç') || lower.includes('rosn') || lower.includes('outro c') || lower.includes('mord')) {
      return {
        category: 'Reatividade & Foco',
        corePain: 'Vergonha pública e desespero ao ver outro cão se aproximar, com seu pet se jogando na guia, rosnando e latindo descontroladamente.',
        culprit: 'Tensionar a guia por antecipação do tutor, falta de distância de segurança para o cão processar o estímulo e punições que aumentam o medo.',
        solutionAngle: 'Dessensibilização Sistemática & Contracondicionamento: trabalhar abaixo do limiar de reatividade, mudando a emoção do cão de ameaça para oportunidade de foco no tutor.',
        hookConcept: 'Puxar a guia com força e brigar quando seu cão vê outro animal só confirma o medo dele: "Realmente aquilo é perigoso, até meu tutor ficou tenso".',
        ctaGoal: 'Se o seu cão é reativo, não espere um acidente acontecer. Mande uma DM no @seupetequilibrado para avaliarmos o caso.',
      };
    }

    // 5. ANSIEDADE DE SEPARAÇÃO, DESTRUIÇÃO, SOZINHO, CHORO, UIVO
    if (lower.includes('ansied') || lower.includes('separ') || lower.includes('sozinh') || lower.includes('destru') || lower.includes('chor') || lower.includes('uiv')) {
      return {
        category: 'Ansiedade & Destruição',
        corePain: 'Não conseguir sair para trabalhar ou jantar fora sem o coração na mão, sabendo que o cão vai uivar, rasgar móveis e sofrer horrores sozinho.',
        culprit: 'Hiperapego sem treino de independência, despedidas e recepções efusivas e falta de enriquecimento ambiental para gastar energia mental.',
        solutionAngle: 'Construção de Autonomia Gradual: rotina de desapego saudável dentro de casa, saídas simuladas sem estresse e brinquedos recheáveis com comida para ocupar a mente.',
        hookConcept: 'Amor não é dependência. Ensinar seu cão a ficar calmo e seguro quando você sai é um dos maiores atos de amor e respeito à saúde dele.',
        ctaGoal: 'Seu cão sofre ao ficar sozinho? Envie um direct no @seupetequilibrado para iniciarmos o protocolo de autonomia.',
      };
    }

    // 6. FILHOTES, MORDIDAS, ROER, BRINCADEIRA BRUTA
    if (lower.includes('filhot') || lower.includes('mordid') || lower.includes('dente') || lower.includes('roer') || lower.includes('brincad')) {
      return {
        category: 'Filhotes & Limites',
        corePain: 'Mãos, pernas e chinelos cheios de marcas de dentes afiados, e a sensação de que o filhote é incontrolável e não para de morder.',
        culprit: 'Permitir que o filhote brinque com as mãos humanas, gritar ou puxar a mão rápido (estimulando o instinto de caça) e pouca variedade de texturas adequadas.',
        solutionAngle: 'Redirecionamento de Mordida & Manejo de Excitação: congelar o movimento, oferecer o mordedor correto e premiar o momento em que o cão solta ou lambe.',
        hookConcept: 'Toda vez que você puxa a mão gritando quando o filhote morde, para ele você acabou de virar um brinquedo que se mexe e faz barulho.',
        ctaGoal: 'Tem um filhote em casa e quer educar certo desde o início? Fale com a equipe do @seupetequilibrado na DM!',
      };
    }

    // 7. PULAR NAS VISITAS, RECEPÇÃO, EXCITADO
    if (lower.includes('pul') || lower.includes('visit') || lower.includes('excit') || lower.includes('chegar em casa') || lower.includes('porta')) {
      return {
        category: 'Rotina & Convivência',
        corePain: 'Constrangimento quando alguém chega em casa e o cão pula com patas no peito, rasga roupas ou assusta crianças e idosos.',
        culprit: 'Fazer festa e acariciar o cão quando ele está com as patas apoiadas nas pessoas, premiando exatamente a excitação e o salto.',
        solutionAngle: 'Comando de Quatro Patas no Chão: ignorar totalmente enquanto houver patas no ar e só liberar afeto, petisco e atenção com o cão sentado e calmo.',
        hookConcept: 'Acariciar o cão para "acalmar" enquanto ele pula na visita só ensina uma coisa: quanto mais alto ele pular, mais atenção ele ganha.',
        ctaGoal: 'Quer ensinar seu cão a receber visitas com calma e educação? Mande uma mensagem no @seupetequilibrado.',
      };
    }

    // 8. ENRIQUECIMENTO AMBIENTAL, ENERGIA, TÉDIO
    if (lower.includes('enriquec') || lower.includes('energi') || lower.includes('tédi') || lower.includes('brinqued') || lower.includes('atividad') || lower.includes('cans')) {
      return {
        category: 'Rotina & Convivência',
        corePain: 'Cão inquieto, que não para de andar pela casa, cava o jardim, roe rodapés e parece ter energia infinita mesmo após passear.',
        culprit: 'Cansaço apenas físico sem nenhum gasto de energia cognitiva, sensorial e instintiva (farejar, resolver problemas e roer).',
        solutionAngle: 'Pilares de Enriquecimento Ambiental: alimentação interativa, tapete de fuçar, mordedores naturais desidratados e treinos curtos de obediência.',
        hookConcept: 'Cão cansado só no físico vira atleta de alta resistência. Cão com a mente estimulada vira um pet relaxado e equilibrado dentro de casa.',
        ctaGoal: 'Salva esse guia e compartilhe com quem precisa entender o poder do enriquecimento ambiental canino!',
      };
    }

    // 9. METODOLOGIA, POSITIVO, BRONCA, PUNIÇÃO, MITOS
    if (lower.includes('positiv') || lower.includes('puni') || lower.includes('metod') || lower.includes('estud') || lower.includes('ciênci') || lower.includes('mito') || lower.includes('força')) {
      return {
        category: 'Rotina & Convivência',
        corePain: 'Tutores frustrados que tentaram técnicas punitivas e pioraram o medo do cão, ou acham que adestramento positivo é só dar petisco sem critérios.',
        culprit: 'Acreditar em mitos ultrapassados de dominância e força bruta, ignorando a ciência do comportamento animal e o reforço positivo moderno.',
        solutionAngle: 'Método Científico do Seu Pet Equilibrado: reforço positivo, clareza de comunicação, adequação de rotina e bem-estar integral sem medo nem aversivos.',
        hookConcept: 'Adestrar com respeito e reforço positivo não é passar a mão na cabeça: é ensinar ao cão exatamente o que você espera dele com clareza.',
        ctaGoal: 'Conheça o método do Seu Pet Equilibrado com atendimento presencial em Cuiabá e VG e online para todo o Brasil.',
      };
    }

    // 10. DEFAULT: COMUNICAÇÃO CLARA E ROTINA EQUILIBRADA
    return {
      category: 'Rotina & Convivência',
      corePain: 'A sensação de que você e seu cão falam línguas completamente diferentes, gerando estresse, desobediência e frustração diária.',
      culprit: 'Comunicação humana inconsistente, falta de rotina previsível e esperar que o cão adivinhe as regras humanas sem ser ensinado.',
      solutionAngle: 'Adequação de Rotina & Conexão: alinhar os pilares de sono, alimentação, gasto de energia e reforço das condutas desejadas no dia a dia.',
      hookConcept: 'O seu cão não é teimoso nem desobediente de propósito. Ele só precisa que você aprenda a se comunicar com clareza com ele.',
      ctaGoal: 'Mande uma mensagem direta no @seupetequilibrado para conversar sobre o caso do seu cão com os nossos especialistas.',
    };
  }
}
