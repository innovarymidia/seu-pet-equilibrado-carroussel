import { SlideData, CarouselProject } from './types';

/**
 * Sanitiza rigorosamente qualquer texto, eliminando & e travessões
 */
export function sanitizeText(text?: string | null): string {
  if (!text) return '';

  return (
    text
      // 1. Bloqueia e substitui todas as variações de & e entidades HTML por 'e'
      .replace(/&amp;/gi, ' e ')
      .replace(/&#38;/g, ' e ')
      .replace(/&/g, ' e ')
      // 2. Bloqueia e substitui travessões unicode (em-dash, en-dash, figure dash, horizontal bar)
      .replace(/[—–‒―˗⁃‐‑]/g, ', ')
      // 3. Bloqueia traços repetidos (-- ou ---) frequentemente usados como travessão
      .replace(/-{2,}/g, ', ')
      // 4. Substitui hífen isolado com espaços antes ou depois (usado como travessão)
      .replace(/\s+-\s+/g, ', ')
      .replace(/\s+-/g, ', ')
      .replace(/-\s+/g, ', ')
      // 5. Expurgar qualquer menção a teorias ultrapassadas de liderança, matilha ou alfa
      .replace(/l[ií]der\s+da\s+matilha/gi, 'referência de segurança')
      .replace(/l[ií]deres\s+da\s+matilha/gi, 'referências de segurança')
      .replace(/lideran[cç]a\s+da\s+matilha/gi, 'vínculo de confiança')
      .replace(/lideran[cç]a\s+justa/gi, 'parceria e previsibilidade')
      .replace(/lideran[cç]a\s+calma/gi, 'postura calma e segura')
      .replace(/lideran[cç]as?/gi, 'parceria e previsibilidade')
      .replace(/l[ií]deres/gi, 'tutores')
      .replace(/l[ií]der/gi, 'tutor de referência')
      .replace(/matilhas?/gi, 'família')
      .replace(/macho\s+alfa|alfa\s+da\s+matilha/gi, 'cão seguro')
      // 6. Limpa pontuações duplicadas resultantes de substituições
      .replace(/,\s*,/g, ',')
      .replace(/\.\s*\./g, '.')
      .replace(/,\s*\./g, '.')
      .replace(/\.\s*,/g, '.')
      .replace(/,\s*:/g, ':')
      // 7. Remove espaços em excesso e espaços antes de pontuação
      .replace(/\s+([,.:;?!])/g, '$1')
      .replace(/\s{2,}/g, ' ')
      .trim()
  );
}

/**
 * Sanitiza uma lâmina completa
 */
export function sanitizeSlide(slide: SlideData): SlideData {
  return {
    ...slide,
    headline: sanitizeText(slide.headline),
    subtitle: slide.subtitle ? sanitizeText(slide.subtitle) : undefined,
    badge: slide.badge ? sanitizeText(slide.badge) : undefined,
    bodyText: slide.bodyText?.map((t) => sanitizeText(t)).filter(Boolean),
    points: slide.points?.map((p) => sanitizeText(p)).filter(Boolean),
    metricLabel: slide.metricLabel ? sanitizeText(slide.metricLabel) : undefined,
    ctaButtonText: slide.ctaButtonText ? sanitizeText(slide.ctaButtonText) : undefined,
    customNote: slide.customNote ? sanitizeText(slide.customNote) : undefined,
    highlightWord: slide.highlightWord ? sanitizeText(slide.highlightWord) : undefined,
  };
}

/**
 * Sanitiza o projeto de carrossel inteiro
 */
export function sanitizeProject(project: CarouselProject): CarouselProject {
  return {
    ...project,
    topic: sanitizeText(project.topic),
    targetAudience: sanitizeText(project.targetAudience),
    niche: sanitizeText(project.niche),
    caption: sanitizeText(project.caption),
    hashtags: project.hashtags.map((h) => sanitizeText(h).replace(/\s+/g, '')),
    slides: project.slides.map((s) => sanitizeSlide(s)),
  };
}
