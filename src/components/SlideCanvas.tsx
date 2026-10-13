import React, { forwardRef } from 'react';
import { SlideData, ThemeStyle } from '../lib/types';
import { THEME_CONFIGS } from '../lib/presets';
import { sanitizeText } from '../lib/sanitizer';
import { PET_LOGO_BASE64 } from '../lib/brandLogo';
import { 
  AlertTriangle, 
  TrendingUp, 
  CheckCircle2, 
  Bookmark, 
  Send, 
  ChevronRight,
  Sparkles,
  Heart
} from 'lucide-react';

interface SlideCanvasProps {
  slide: SlideData;
  themeStyle: ThemeStyle;
  authorHandle?: string;
  isExporting?: boolean;
}

export const SlideCanvas = forwardRef<HTMLDivElement, SlideCanvasProps>(
  ({ slide, themeStyle, authorHandle = '@seupetequilibrado', isExporting = false }, ref) => {
    const config = THEME_CONFIGS[themeStyle] || THEME_CONFIGS.rose_editorial;
    const isFirst = slide.slideNumber === 1;
    const isLast = slide.slideNumber === slide.totalSlides;

    // Sanitização em tempo de renderização
    const headline = sanitizeText(slide.headline);
    const subtitle = sanitizeText(slide.subtitle);
    const badge = sanitizeText(slide.badge);
    const customNote = sanitizeText(slide.customNote);
    const ctaButtonText = sanitizeText(slide.ctaButtonText);

    // Ajuste dinâmico do tamanho da fonte da headline para evitar estouro
    const getHeadlineFontSize = () => {
      if (isExporting) {
        if (isFirst) return '52px';
        if (headline.length > 70) return '40px';
        if (headline.length > 50) return '44px';
        return '48px';
      }
      if (isFirst) return 'clamp(1.3rem, 3.6vw, 1.8rem)';
      if (headline.length > 70) return 'clamp(1.05rem, 2.7vw, 1.3rem)';
      if (headline.length > 50) return 'clamp(1.15rem, 3vw, 1.45rem)';
      return 'clamp(1.22rem, 3.1vw, 1.55rem)';
    };

    return (
      <div
        ref={ref}
        data-slide-index={slide.slideNumber}
        className="relative select-none overflow-hidden flex flex-col justify-between"
        style={{
          width: isExporting ? '1080px' : '100%',
          height: isExporting ? '1350px' : '100%',
          aspectRatio: '4 / 5',
          background: config.bg,
          color: config.textColor,
          fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
          padding: isExporting ? '85px 80px' : '6% 6.5%',
        }}
      >
        {/* =================================================================== */}
        {/* ELEMENTOS DECORATIVOS DE FUNDO (SEU PET EQUILIBRADO)               */}
        {/* =================================================================== */}
        {(themeStyle === 'rose_editorial' || themeStyle === 'dark_fire') && (
          <>
            <div 
              className={`absolute rounded-full pointer-events-none blur-3xl opacity-20 ${
                isExporting ? '-top-48 -right-48 w-[600px] h-[600px]' : '-top-28 -right-28 w-80 h-80'
              }`}
              style={{ background: 'radial-gradient(circle, #F5BAC9 0%, transparent 70%)' }}
            />
            <div 
              className={`absolute rounded-full pointer-events-none blur-3xl opacity-15 ${
                isExporting ? '-bottom-52 -left-52 w-[600px] h-[600px]' : '-bottom-32 -left-32 w-80 h-80'
              }`}
              style={{ background: 'radial-gradient(circle, #2B181E 0%, transparent 70%)' }}
            />
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: isExporting ? '48px 48px' : '24px 24px',
              }}
            />
          </>
        )}

        {(themeStyle === 'alert_behavior' || themeStyle === 'alert_loss') && (
          <>
            <div 
              className="absolute top-0 inset-x-0"
              style={{ 
                height: isExporting ? '8px' : '3px',
                background: 'repeating-linear-gradient(45deg, #FF6B8B, #FF6B8B 15px, #1C1316 15px, #1C1316 30px)' 
              }}
            />
            <div 
              className={`absolute rounded-full pointer-events-none blur-3xl opacity-15 ${
                isExporting ? '-top-40 -left-40 w-[600px] h-[600px]' : '-top-20 -left-20 w-80 h-80'
              }`}
              style={{ background: 'radial-gradient(circle, #FF6B8B 0%, transparent 70%)' }}
            />
          </>
        )}

        {themeStyle === 'natural_harmony' && (
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background: 'radial-gradient(ellipse at top right, rgba(164, 203, 191, 0.25) 0%, transparent 70%)',
            }}
          />
        )}

        {/* =================================================================== */}
        {/* CABEÇALHO DO SLIDE: BRASÃO OFICIAL + MARCA + NUMERAÇÃO              */}
        {/* =================================================================== */}
        <div 
          className={`relative z-10 flex items-center justify-between w-full border-b shrink-0 ${
            isExporting ? 'pb-7 mb-5 border-b-2' : 'pb-3 mb-2'
          }`}
          style={{ borderColor: themeStyle === 'clean_cream' || themeStyle === 'clean_authority' ? '#EEDCE1' : 'rgba(255, 255, 255, 0.10)' }}
        >
          {/* Brasão Circular Oficial Seu Pet Equilibrado */}
          <div className="flex items-center" style={{ gap: isExporting ? '18px' : '9px' }}>
            <div 
              className={`rounded-full overflow-hidden flex items-center justify-center shrink-0 border shadow-sm ${
                isExporting ? 'w-20 h-20 border-[2.5px] p-1' : 'w-8 h-8 border p-0.5'
              }`}
              style={{ 
                borderColor: config.accent, 
                background: themeStyle === 'clean_cream' ? '#FFFFFF' : '#14171C' 
              }}
            >
              <img 
                src={PET_LOGO_BASE64} 
                alt="Brasão Oficial Seu Pet Equilibrado" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span 
                className="font-extrabold tracking-tight leading-none" 
                style={{ 
                  color: config.textColor,
                  fontSize: isExporting ? '30px' : '13px'
                }}
              >
                Seu Pet Equilibrado
              </span>
              <span 
                className="font-medium tracking-wide mt-0.5" 
                style={{ 
                  color: config.textMuted,
                  fontSize: isExporting ? '20px' : '10px'
                }}
              >
                {authorHandle}
              </span>
            </div>
          </div>

          {/* Numeração de Páginas */}
          <div 
            className="font-bold tracking-wider"
            style={{ 
              background: config.badgeBg, 
              color: config.badgeText,
              border: `${isExporting ? '2px' : '1px'} solid ${config.badgeBorder}`,
              borderRadius: '9999px',
              padding: isExporting ? '10px 22px' : '2px 9px',
              fontSize: isExporting ? '22px' : '11px'
            }}
          >
            {String(slide.slideNumber).padStart(2, '0')} / {String(slide.totalSlides).padStart(2, '0')}
          </div>
        </div>

        {/* Barra de Progresso Fina */}
        <div 
          className="relative z-10 w-full rounded-full overflow-hidden shrink-0" 
          style={{ 
            background: 'rgba(128, 128, 128, 0.15)',
            height: isExporting ? '5px' : '3px',
            marginBottom: isExporting ? '22px' : '10px'
          }}
        >
          <div 
            className="h-full rounded-full transition-all duration-300"
            style={{ 
              width: `${(slide.slideNumber / slide.totalSlides) * 100}%`,
              background: config.accentGradient 
            }}
          />
        </div>

        {/* =================================================================== */}
        {/* ÁREA CENTRAL DO CONTEÚDO (PROPORCIONAL E RESPIRADA)                 */}
        {/* =================================================================== */}
        <div 
          className="relative z-10 flex-1 flex flex-col justify-center min-h-0"
          style={{ padding: isExporting ? '18px 0' : '5px 0' }}
        >
          {/* Badge de Destaque Superior */}
          {badge && (
            <div className="shrink-0" style={{ marginBottom: isExporting ? '22px' : '8px' }}>
              <span 
                className="inline-flex items-center font-bold uppercase tracking-wider shadow-sm"
                style={{
                  background: config.badgeBg,
                  color: config.badgeText,
                  border: `${isExporting ? '2px' : '1px'} solid ${config.badgeBorder}`,
                  borderRadius: isExporting ? '14px' : '6px',
                  padding: isExporting ? '10px 20px' : '3px 10px',
                  fontSize: isExporting ? '21px' : '10px',
                  gap: isExporting ? '10px' : '6px',
                }}
              >
                {(themeStyle === 'alert_behavior' || themeStyle === 'alert_loss') && (
                  <AlertTriangle style={{ width: isExporting ? 22 : 11, height: isExporting ? 22 : 11 }} />
                )}
                {themeStyle === 'natural_harmony' && (
                  <Heart style={{ width: isExporting ? 22 : 11, height: isExporting ? 22 : 11 }} />
                )}
                {themeStyle !== 'alert_behavior' && themeStyle !== 'alert_loss' && themeStyle !== 'natural_harmony' && (
                  <Sparkles style={{ width: isExporting ? 22 : 11, height: isExporting ? 22 : 11 }} />
                )}
                {badge}
              </span>
            </div>
          )}

          {/* TÍTULO PRINCIPAL (HEADLINE) */}
          <h1 
            className="font-extrabold tracking-tight leading-[1.24] text-left"
            style={{
              fontSize: getHeadlineFontSize(),
              color: config.textColor,
              marginBottom: isExporting ? '24px' : '10px'
            }}
          >
            {headline}
          </h1>

          {/* SUBTÍTULO OU COMPLEMENTO */}
          {subtitle && (
            <p 
              className="font-medium leading-relaxed"
              style={{ 
                color: config.textMuted,
                fontSize: isExporting ? '27px' : '12px',
                lineHeight: 1.48,
                marginBottom: isExporting ? '24px' : '10px'
              }}
            >
              {subtitle}
            </p>
          )}

          {/* PARÁGRAFOS EXPLICATIVOS CONCISOS */}
          {slide.bodyText && slide.bodyText.length > 0 && !slide.points && (
            <div 
              className="border backdrop-blur-sm shadow-sm"
              style={{
                background: config.cardBg,
                borderColor: config.cardBorder,
                borderRadius: isExporting ? '22px' : '12px',
                borderWidth: isExporting ? '2px' : '1px',
                padding: isExporting ? '30px 34px' : '13px',
                marginBottom: isExporting ? '24px' : '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: isExporting ? '16px' : '8px',
              }}
            >
              {slide.bodyText.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className="leading-relaxed" 
                  style={{ 
                    color: config.textColor,
                    fontSize: isExporting ? '27px' : '12px',
                    lineHeight: 1.52
                  }}
                >
                  {sanitizeText(paragraph)}
                </p>
              ))}
            </div>
          )}

          {/* LISTA DE TÓPICOS (COM ESPAÇAMENTO E ALTURA CALIBRADOS) */}
          {slide.points && slide.points.length > 0 && (
            <div 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: isExporting ? '16px' : '7px',
                margin: isExporting ? '16px 0' : '6px 0' 
              }}
            >
              {slide.points.slice(0, 4).map((pt, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center border"
                  style={{
                    background: config.cardBg,
                    borderColor: config.cardBorder,
                    borderRadius: isExporting ? '18px' : '8px',
                    borderWidth: isExporting ? '2px' : '1px',
                    padding: isExporting ? '18px 22px' : '7px 10px',
                    gap: isExporting ? '16px' : '9px',
                  }}
                >
                  <div 
                    className="rounded-full flex items-center justify-center shrink-0"
                    style={{ 
                      background: config.badgeBg, 
                      color: config.badgeText,
                      width: isExporting ? '38px' : '18px',
                      height: isExporting ? '38px' : '18px'
                    }}
                  >
                    <CheckCircle2 style={{ width: isExporting ? 22 : 12, height: isExporting ? 22 : 12 }} />
                  </div>
                  <span 
                    className="font-medium leading-snug" 
                    style={{ 
                      color: config.textColor,
                      fontSize: isExporting ? '25px' : '12px' 
                    }}
                  >
                    {sanitizeText(pt)}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* MÉTRICA DE DESTAQUE */}
          {slide.metricNumber && (
            <div 
              className="border text-center relative overflow-hidden"
              style={{
                background: config.cardBg,
                borderColor: config.accent,
                boxShadow: `0 0 25px -5px ${config.accent}30`,
                borderRadius: isExporting ? '26px' : '14px',
                borderWidth: isExporting ? '2.5px' : '1px',
                padding: isExporting ? '34px 24px' : '14px',
                margin: isExporting ? '22px 0' : '9px 0',
              }}
            >
              <div 
                className="font-extrabold tracking-tight"
                style={{ 
                  color: config.accent,
                  fontSize: isExporting ? '68px' : '30px',
                  marginBottom: isExporting ? '8px' : '3px'
                }}
              >
                {slide.metricNumber}
              </div>
              <div 
                className="font-semibold uppercase tracking-wider" 
                style={{ 
                  color: config.textMuted,
                  fontSize: isExporting ? '23px' : '11px' 
                }}
              >
                {sanitizeText(slide.metricLabel)}
              </div>
            </div>
          )}

          {/* NOTA DE DESTAQUE / DICA DE OURO */}
          {customNote && (
            <div 
              className="font-semibold"
              style={{
                background: config.badgeBg,
                borderColor: config.accent,
                borderLeftWidth: isExporting ? '8px' : '4px',
                borderRadius: isExporting ? '16px' : '8px',
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                color: config.textColor,
                padding: isExporting ? '22px 26px' : '9px 12px',
                fontSize: isExporting ? '23px' : '11px',
                marginTop: isExporting ? '16px' : '7px',
              }}
            >
              💡 {customNote}
            </div>
          )}

          {/* BOTÃO DE CTA (SLIDE FINAL) */}
          {isLast && ctaButtonText && (
            <div style={{ marginTop: isExporting ? '26px' : '11px' }}>
              <div 
                className="w-full font-extrabold text-center shadow-lg flex items-center justify-center transition-transform"
                style={{ 
                  background: config.accentGradient,
                  color: themeStyle === 'clean_cream' ? '#FFFFFF' : '#121418',
                  boxShadow: '0 8px 25px -4px rgba(245, 186, 201, 0.35)',
                  borderRadius: isExporting ? '22px' : '12px',
                  padding: isExporting ? '26px 36px' : '11px 18px',
                  fontSize: isExporting ? '27px' : '12.5px',
                  gap: isExporting ? '14px' : '7px',
                }}
              >
                <Send style={{ width: isExporting ? 26 : 14, height: isExporting ? 26 : 14 }} />
                <span>{ctaButtonText}</span>
              </div>
            </div>
          )}
        </div>

        {/* =================================================================== */}
        {/* RODAPÉ DO SLIDE: AUTORIDADE & DIRECIONAMENTO                       */}
        {/* =================================================================== */}
        <div 
          className="relative z-10 border-t flex items-center justify-between shrink-0"
          style={{ 
            borderColor: themeStyle === 'clean_cream' || themeStyle === 'clean_authority' ? '#EEDCE1' : 'rgba(255, 255, 255, 0.10)',
            borderTopWidth: isExporting ? '2px' : '1px',
            paddingTop: isExporting ? '22px' : '9px',
            marginTop: isExporting ? '14px' : '5px',
            fontSize: isExporting ? '21px' : '10.5px',
            color: config.textMuted 
          }}
        >
          <div className="flex items-center font-semibold" style={{ gap: isExporting ? '12px' : '6px' }}>
            <span 
              className="rounded-full" 
              style={{ 
                background: config.accent,
                width: isExporting ? '12px' : '6px',
                height: isExporting ? '12px' : '6px'
              }} 
            />
            <span>Adestramento e Comportamento Canino</span>
          </div>

          <div className="flex items-center font-bold" style={{ color: config.accent, gap: isExporting ? '10px' : '4px' }}>
            {!isLast ? (
              <>
                <span>Arraste para o lado</span>
                <ChevronRight style={{ width: isExporting ? 24 : 13, height: isExporting ? 24 : 13 }} />
              </>
            ) : (
              <div className="flex items-center" style={{ gap: isExporting ? '10px' : '4px' }}>
                <Bookmark style={{ width: isExporting ? 24 : 13, height: isExporting ? 24 : 13 }} />
                <span>Salvar para consultar</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

SlideCanvas.displayName = 'SlideCanvas';
