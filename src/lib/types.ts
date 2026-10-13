export type ThemeStyle = 
  | 'rose_editorial'   // 1. Assinatura Oficial: Obsidian Deep (#0C0E12), Cards (#14171C), Rose Pastel (#F5BAC9)
  | 'clean_cream'      // 2. Clean Editorial Pastel: Fundo claro (#FAF6F7), tipografia elegante, acento rose
  | 'dark_luxury'      // 3. Obsidian & Champagne: Autoridade máxima em comportamento canino
  | 'alert_behavior'   // 4. Alerta Comportamental: Alto impacto para erros comuns que pioram o cão
  | 'natural_harmony'  // 5. Equilíbrio & Natureza: Verde sálvia e rose, foco em rotina e passeios
  | 'chat_consultoria' // 6. Consultoria Tutor: Formato conversa direta com conselhos práticos
  // Compatibilidade retroativa
  | 'dark_fire'
  | 'clean_authority'
  | 'alert_loss'
  | 'data_growth'
  | 'thread_social'
  | 'sunset_gradient';

export type SlideType = 'hook' | 'problem' | 'solution' | 'proof' | 'cta' | 'content';

export interface SlideData {
  id: string;
  slideNumber: number;
  totalSlides: number;
  type: SlideType;
  badge?: string;
  headline: string;
  highlightWord?: string;
  subtitle?: string;
  bodyText?: string[];
  points?: string[];
  metricNumber?: string;
  metricLabel?: string;
  ctaButtonText?: string;
  quoteAuthor?: string;
  customNote?: string;
}

export interface CarouselProject {
  id: string;
  createdAt: string;
  updatedAt: string;
  topic: string;
  targetAudience: string;
  niche: string;
  slideCount: number;
  themeStyle: ThemeStyle;
  caption: string;
  hashtags: string[];
  slides: SlideData[];
  status: 'draft' | 'reviewed' | 'downloaded' | 'published';
  authorHandle: string;
  qaReport?: any;
}

export type AgentRole = 
  | 'strategist'  // Estrategista de Comportamento Canino & Psicologia Canina
  | 'copywriter'  // Roteirista Especialista em Conteúdo para Tutores
  | 'designer'    // Diretor de Arte do Seu Pet Equilibrado
  | 'qa'          // Auditor de Safe Zones & Clareza Educativa
  | 'publisher';  // Empacotador & Exportador de Alta Definição

export interface AgentStatus {
  role: AgentRole;
  name: string;
  title: string;
  avatar: string;
  status: 'idle' | 'running' | 'completed' | 'error';
  message: string;
  details?: string;
}

export interface GenerationInput {
  topic?: string;
  targetCategory?: string; // Tutores de Filhotes, Cães Reativos, Cães Ansiosos, Passeio Estressante, etc.
  slideCount: number; // 5, 6 ou 7
  themeStyle: ThemeStyle;
  tone?: 'educativo' | 'alerta' | 'passo_a_passo' | 'autoridade';
  apiKey?: string;
}
