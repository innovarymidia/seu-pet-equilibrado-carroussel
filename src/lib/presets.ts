import { ThemeStyle } from './types';

export interface TopicPreset {
  id: string;
  category: 
    | 'Passeio Estruturado' 
    | 'Latidos & Campainha' 
    | 'Higiene & Necessidades' 
    | 'Reatividade & Foco' 
    | 'Ansiedade & Destruição' 
    | 'Filhotes & Limites' 
    | 'Rotina & Convivência';
  title: string;
  targetCategory: string;
  painHook: string;
  recommendedTheme: ThemeStyle;
}

export const TOPIC_PRESETS: TopicPreset[] = [
  {
    id: 'passeio-sem-puxar',
    category: 'Passeio Estruturado',
    title: 'Passeio Sem Puxar: O método passo a passo para caminhar com guia frouxa',
    targetCategory: 'Tutores com braço doendo e passeios caóticos',
    painHook: 'Voltar da caminhada com o ombro doendo, estressado e frustrado virou a sua rotina diária.',
    recommendedTheme: 'rose_editorial',
  },
  {
    id: 'latidos-campainha-place',
    category: 'Latidos & Campainha',
    title: 'Latidos na Campainha: Como ensinar seu cão a ir para o Place em vez de surtar no portão',
    targetCategory: 'Cães que surtam com visitas e barulhos na porta',
    painHook: 'Toda vez que a campainha toca ou alguém passa na calçada, a sua casa vira um campo de guerra.',
    recommendedTheme: 'rose_editorial',
  },
  {
    id: 'xixi-coco-lugar-certo',
    category: 'Higiene & Necessidades',
    title: 'Xixi e Cocô no Lugar Certo: Os 3 erros que fazem o cão errar o tapete higiênico',
    targetCategory: 'Tutores limpando tapetes, camas e sofás todos os dias',
    painHook: 'Você coloca o tapete, mostra o lugar, mas ele faz exatamente ao lado ou no tapete da sala.',
    recommendedTheme: 'clean_cream',
  },
  {
    id: 'reatividade-guia',
    category: 'Reatividade & Foco',
    title: 'Reatividade na Guia: Por que puxar e gritar só piora o desespero do seu cão com outros pets',
    targetCategory: 'Cães que latem, pulam e avançam ao cruzar com outros cães',
    painHook: 'Passar por outro cão na rua virou um teste para os seus nervos com latidos histéricos e vergonha pública.',
    recommendedTheme: 'alert_behavior',
  },
  {
    id: 'ansiedade-separacao',
    category: 'Ansiedade & Destruição',
    title: 'Ansiedade de Separação: O que fazer para seu cão ficar sozinho calmo sem destruir a casa',
    targetCategory: 'Cães que uivam, choram e roem móveis quando o tutor sai',
    painHook: 'Você não consegue sair de casa sem peso na consciência e medo de receber reclamações de vizinhos.',
    recommendedTheme: 'chat_consultoria',
  },
  {
    id: 'mordidas-filhote',
    category: 'Filhotes & Limites',
    title: 'Mordidas de Filhote: Pare de ser um brinquedo de morder para o seu pet',
    targetCategory: 'Famílias com mãos, pés e roupas rasgadas por filhotes',
    painHook: 'A brincadeira com o filhote sempre termina com dentes afiados na sua mão e ninguém mais aguenta.',
    recommendedTheme: 'clean_cream',
  },
  {
    id: 'pular-visitas',
    category: 'Rotina & Convivência',
    title: 'Pular nas Visitas: Como ensinar calma e autocontrole na recepção de convidados',
    targetCategory: 'Cães ultraexcitados que pulam nas pessoas ao chegar em casa',
    painHook: 'Receber visitas em casa virou motivo de constrangimento com o cão pulando com patas sujas em todo mundo.',
    recommendedTheme: 'rose_editorial',
  },
  {
    id: 'protecao-recursos',
    category: 'Reatividade & Foco',
    title: 'Proteção de Recursos: O que fazer quando o cão rosna perto da comida ou do osso',
    targetCategory: 'Tutores com medo de se aproximar da tigela ou brinquedo do cão',
    painHook: 'Chegar perto do cão quando ele está com um brinquedo ou comida virou um perigo real de mordida.',
    recommendedTheme: 'alert_behavior',
  },
  {
    id: 'mito-petisco-magico',
    category: 'Rotina & Convivência',
    title: 'O Mito do Petisco Mágico: Por que seu cão te obedece na cozinha mas te ignora na rua',
    targetCategory: 'Tutores reféns de comida que perdem o controle no mundo real',
    painHook: 'Dentro de casa ele senta e dá a pata por ração. Na rua, ele te ignora e late desesperado.',
    recommendedTheme: 'dark_luxury',
  },
  {
    id: 'enriquecimento-ambiental',
    category: 'Rotina & Convivência',
    title: 'Enriquecimento Ambiental: 4 atividades que cansam a mente do cão muito mais que caminhar 5km',
    targetCategory: 'Cães cheios de energia acumulada que não conseguem relaxar',
    painHook: 'Você anda quilômetros com o cão e ele chega em casa ainda querendo brincar e destruir coisas.',
    recommendedTheme: 'natural_harmony',
  },
  {
    id: 'comandos-seguranca',
    category: 'Passeio Estruturado',
    title: 'Comandos Essenciais de Segurança: Os 4 comandos vitais que todo tutor precisa dominar',
    targetCategory: 'Cães sem controle em situações de emergência (porta aberta, comida no chão)',
    painHook: 'Se o portão abrir ou uma comida perigosa cair no chão, você tem certeza de que ele vai te obedecer?',
    recommendedTheme: 'rose_editorial',
  },
  {
    id: 'consultoria-presencial-online',
    category: 'Rotina & Convivência',
    title: 'Atendimento Presencial ou Online? Como funciona a consultoria da Seu Pet Equilibrado',
    targetCategory: 'Tutores que querem resolver o comportamento do cão na prática',
    painHook: 'Você já tentou vídeos do YouTube e dicas de internet, mas o comportamento do seu cão só piora.',
    recommendedTheme: 'rose_editorial',
  },
];

export interface ThemeConfigItem {
  id: ThemeStyle;
  name: string;
  tag: string;
  bg: string;
  cardBg: string;
  cardBorder: string;
  accent: string;
  accentGradient: string;
  textColor: string;
  textMuted: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  description: string;
}

export const THEME_CONFIGS: Record<ThemeStyle, ThemeConfigItem> = {
  rose_editorial: {
    id: 'rose_editorial',
    name: 'Seu Pet Equilibrado (Assinatura Oficial)',
    tag: 'Oficial',
    bg: '#0C0E12',
    cardBg: '#14171C',
    cardBorder: 'rgba(245, 186, 201, 0.28)',
    accent: '#F5BAC9',
    accentGradient: 'linear-gradient(135deg, #F5BAC9 0%, #F8CAD6 100%)',
    textColor: '#FFFFFF',
    textMuted: '#9DA3B4',
    badgeBg: '#2B181E',
    badgeBorder: 'rgba(245, 186, 201, 0.45)',
    badgeText: '#F5BAC9',
    description: 'Paleta oficial do site: Obsidian Deep com Rose Pastel. Estética editorial premium de altíssima autoridade.',
  },
  clean_cream: {
    id: 'clean_cream',
    name: 'Clean Editorial Pastel',
    tag: 'Didático & Claro',
    bg: '#FAF6F7',
    cardBg: '#FFFFFF',
    cardBorder: '#EEDCE1',
    accent: '#D47A90',
    accentGradient: 'linear-gradient(135deg, #D47A90 0%, #B85970 100%)',
    textColor: '#1A181C',
    textMuted: '#6E6773',
    badgeBg: '#FCE8EE',
    badgeBorder: '#F5BAC9',
    badgeText: '#873449',
    description: 'Fundo claro com rosa suave e tipografia nítida. Ideal para guias práticos, passo a passo e leitura diurna.',
  },
  dark_luxury: {
    id: 'dark_luxury',
    name: 'Obsidian & Champagne',
    tag: 'Alta Autoridade',
    bg: '#090B0E',
    cardBg: '#13171F',
    cardBorder: 'rgba(245, 186, 201, 0.22)',
    accent: '#E5BAC6',
    accentGradient: 'linear-gradient(135deg, #F5BAC9 0%, #E0C097 100%)',
    textColor: '#FFFFFF',
    textMuted: '#94A3B8',
    badgeBg: 'rgba(224, 192, 151, 0.15)',
    badgeBorder: 'rgba(224, 192, 151, 0.4)',
    badgeText: '#E0C097',
    description: 'Preto profundo com toques de champagne e rose. Transmite ciência comportamental e psicologia avançada.',
  },
  alert_behavior: {
    id: 'alert_behavior',
    name: 'Alerta Comportamental',
    tag: 'Choque & Consciência',
    bg: '#0D0B0D',
    cardBg: '#1C1316',
    cardBorder: 'rgba(255, 107, 139, 0.35)',
    accent: '#FF6B8B',
    accentGradient: 'linear-gradient(135deg, #FF6B8B 0%, #E63956 100%)',
    textColor: '#FFFFFF',
    textMuted: '#D1C4C7',
    badgeBg: 'rgba(255, 107, 139, 0.18)',
    badgeBorder: 'rgba(255, 107, 139, 0.45)',
    badgeText: '#FF8DA6',
    description: 'Destaque visual para alertar tutores sobre erros cotidianos graves que pioram a ansiedade e a reatividade.',
  },
  natural_harmony: {
    id: 'natural_harmony',
    name: 'Equilíbrio & Natureza',
    tag: 'Rotina & Passeio',
    bg: '#0B0F0E',
    cardBg: '#131A17',
    cardBorder: 'rgba(164, 203, 191, 0.25)',
    accent: '#A4CBBF',
    accentGradient: 'linear-gradient(135deg, #A4CBBF 0%, #7FA99B 100%)',
    textColor: '#F5FAF8',
    textMuted: '#8E9E98',
    badgeBg: 'rgba(164, 203, 191, 0.15)',
    badgeBorder: 'rgba(164, 203, 191, 0.35)',
    badgeText: '#A4CBBF',
    description: 'Tons de sálvia natural e rose. Harmonia perfeita para temas de passeios tranquilos, saúde mental e enriquecimento.',
  },
  chat_consultoria: {
    id: 'chat_consultoria',
    name: 'Consultoria & Acolhimento',
    tag: 'Bate-papo Tutor',
    bg: '#0E0D12',
    cardBg: '#181622',
    cardBorder: 'rgba(226, 180, 205, 0.25)',
    accent: '#E2B4CD',
    accentGradient: 'linear-gradient(135deg, #E2B4CD 0%, #C491AF 100%)',
    textColor: '#FFFFFF',
    textMuted: '#A7A1B2',
    badgeBg: 'rgba(226, 180, 205, 0.15)',
    badgeBorder: 'rgba(226, 180, 205, 0.35)',
    badgeText: '#F5BAC9',
    description: 'Estilo acolhedor de conversa próxima entre os adestradores (João e Nicolle) e o tutor.',
  },

  // Aliases para compatibilidade com carrosséis salvos anteriormente
  dark_fire: {
    id: 'dark_fire',
    name: 'Seu Pet Equilibrado (Assinatura Oficial)',
    tag: 'Oficial',
    bg: '#0C0E12',
    cardBg: '#14171C',
    cardBorder: 'rgba(245, 186, 201, 0.28)',
    accent: '#F5BAC9',
    accentGradient: 'linear-gradient(135deg, #F5BAC9 0%, #F8CAD6 100%)',
    textColor: '#FFFFFF',
    textMuted: '#9DA3B4',
    badgeBg: '#2B181E',
    badgeBorder: 'rgba(245, 186, 201, 0.45)',
    badgeText: '#F5BAC9',
    description: 'Paleta oficial do site: Obsidian Deep com Rose Pastel.',
  },
  clean_authority: {
    id: 'clean_authority',
    name: 'Clean Editorial Pastel',
    tag: 'Didático & Claro',
    bg: '#FAF6F7',
    cardBg: '#FFFFFF',
    cardBorder: '#EEDCE1',
    accent: '#D47A90',
    accentGradient: 'linear-gradient(135deg, #D47A90 0%, #B85970 100%)',
    textColor: '#1A181C',
    textMuted: '#6E6773',
    badgeBg: '#FCE8EE',
    badgeBorder: '#F5BAC9',
    badgeText: '#873449',
    description: 'Fundo claro com rosa suave e tipografia nítida.',
  },
  alert_loss: {
    id: 'alert_loss',
    name: 'Alerta Comportamental',
    tag: 'Choque & Consciência',
    bg: '#0D0B0D',
    cardBg: '#1C1316',
    cardBorder: 'rgba(255, 107, 139, 0.35)',
    accent: '#FF6B8B',
    accentGradient: 'linear-gradient(135deg, #FF6B8B 0%, #E63956 100%)',
    textColor: '#FFFFFF',
    textMuted: '#D1C4C7',
    badgeBg: 'rgba(255, 107, 139, 0.18)',
    badgeBorder: 'rgba(255, 107, 139, 0.45)',
    badgeText: '#FF8DA6',
    description: 'Destaque visual para alertar tutores sobre erros cotidianos.',
  },
  data_growth: {
    id: 'data_growth',
    name: 'Equilíbrio & Natureza',
    tag: 'Rotina & Passeio',
    bg: '#0B0F0E',
    cardBg: '#131A17',
    cardBorder: 'rgba(164, 203, 191, 0.25)',
    accent: '#A4CBBF',
    accentGradient: 'linear-gradient(135deg, #A4CBBF 0%, #7FA99B 100%)',
    textColor: '#F5FAF8',
    textMuted: '#8E9E98',
    badgeBg: 'rgba(164, 203, 191, 0.15)',
    badgeBorder: 'rgba(164, 203, 191, 0.35)',
    badgeText: '#A4CBBF',
    description: 'Tons de sálvia natural e rose.',
  },
  thread_social: {
    id: 'thread_social',
    name: 'Consultoria & Acolhimento',
    tag: 'Bate-papo Tutor',
    bg: '#0E0D12',
    cardBg: '#181622',
    cardBorder: 'rgba(226, 180, 205, 0.25)',
    accent: '#E2B4CD',
    accentGradient: 'linear-gradient(135deg, #E2B4CD 0%, #C491AF 100%)',
    textColor: '#FFFFFF',
    textMuted: '#A7A1B2',
    badgeBg: 'rgba(226, 180, 205, 0.15)',
    badgeBorder: 'rgba(226, 180, 205, 0.35)',
    badgeText: '#F5BAC9',
    description: 'Estilo acolhedor de conversa próxima.',
  },
  sunset_gradient: {
    id: 'sunset_gradient',
    name: 'Obsidian & Champagne',
    tag: 'Alta Autoridade',
    bg: '#090B0E',
    cardBg: '#13171F',
    cardBorder: 'rgba(245, 186, 201, 0.22)',
    accent: '#E5BAC6',
    accentGradient: 'linear-gradient(135deg, #F5BAC9 0%, #E0C097 100%)',
    textColor: '#FFFFFF',
    textMuted: '#94A3B8',
    badgeBg: 'rgba(224, 192, 151, 0.15)',
    badgeBorder: 'rgba(224, 192, 151, 0.4)',
    badgeText: '#E0C097',
    description: 'Preto profundo com toques de champagne e rose.',
  },
};
