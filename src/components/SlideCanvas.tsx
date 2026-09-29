import React, { forwardRef } from 'react';
import { SlideData, ThemeStyle } from '../lib/types';
import { THEME_CONFIGS } from '../lib/presets';
import { sanitizeText } from '../lib/sanitizer';
import { INNOVARY_LOGO_BASE64 } from '../lib/brandLogo';
import { 
  Flame, 
  AlertTriangle, 
  TrendingUp, 
  CheckCircle2, 
  Bookmark, 
  Send, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface SlideCanvasProps {
  slide: SlideData;
  themeStyle: ThemeStyle;
  authorHandle?: string;
  isExporting?: boolean;
}

export const SlideCanvas = forwardRef<HTMLDivElement, SlideCanvasProps>(
  ({ slide, themeStyle, authorHandle = '@innovarymidia', isExporting = false }, ref) => {
    const config = THEME_CONFIGS[themeStyle] || THEME_CONFIGS.dark_fire;
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
        if (isFirst) return '54px';
        if (headline.length > 70) return '40px';
        if (headline.length > 50) return '44px';
        return '48px';
      }
      if (isFirst) return 'clamp(1.35rem, 3.8vw, 1.85rem)';
      if (headline.length > 70) return 'clamp(1.1rem, 2.8vw, 1.35rem)';
      if (headline.length > 50) return 'clamp(1.15rem, 3vw, 1.45rem)';
      return 'clamp(1.25rem, 3.2vw, 1.6rem)';
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
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
          padding: isExporting ? '90px 80px' : '6% 6.5%',
        }}
      >
        {/* =================================================================== */}
        {/* ELEMENTOS DECORATIVOS DE FUNDO                                     */}
        {/* =================================================================== */}
        {themeStyle === 'dark_fire' && (
          <>
            <div 
              className={`absolute rounded-full pointer-events-none blur-3xl opacity-25 ${
                isExporting ? '-top-48 -right-48 w-[600px] h-[600px]' : '-top-28 -right-28 w-80 h-80'
              }`}
              style={{ background: 'radial-gradient(circle, #FF3D00 0%, transparent 70%)' }}
            />
            <div 
              className={`absolute rounded-full pointer-events-none blur-3xl opacity-20 ${
                isExporting ? '-bottom-52 -left-52 w-[600px] h-[600px]' : '-bottom-32 -left-32 w-80 h-80'
              }`}
              style={{ background: 'radial-gradient(circle, #EA580C 0%, transparent 70%)' }}
            />
            <div 
              className="absolute inset-0 pointer-events-none opacity-5"
              style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: isExporting ? '48px 48px' : '24px 24px',
              }}
            />
          </>
        )}

        {themeStyle === 'alert_loss' && (
          <>
            <div 
              className="absolute top-0 inset-x-0"
              style={{ 
                height: isExporting ? '8px' : '3px',
                background: 'repeating-linear-gradient(45deg, #FF2E2E, #FF2E2E 15px, #000 15px, #000 30px)' 
              }}
            />
            <div 
              className={`absolute rounded-full pointer-events-none blur-3xl opacity-20 ${
                isExporting ? '-top-40 -left-40 w-[600px] h-[600px]' : '-top-20 -left-20 w-80 h-80'
              }`}
              style={{ background: 'radial-gradient(circle, #FF2E2E 0%, transparent 70%)' }}
            />
          </>
        )}

        {themeStyle === 'data_growth' && (
          <div 
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255, 61, 0, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 61, 0, 0.15) 1px, transparent 1px)',
              backgroundSize: isExporting ? '64px 64px' : '32px 32px',
            }}
          />
        )}

        {themeStyle === 'sunset_gradient' && (
          <div 
            className="absolute inset-0 pointer-events-none opacity-35"
            style={{
              background: 'radial-gradient(ellipse at bottom, rgba(234, 88, 12, 0.45) 0%, transparent 75%)',
            }}
          />
        )}

        {/* =================================================================== */}
        {/* CABEÇALHO DO SLIDE: MARCA + NUMERAÇÃO                              */}
        {/* =================================================================== */}
        <div 
          className={`relative z-10 flex items-center justify-between w-full border-b shrink-0 ${
            isExporting ? 'pb-8 mb-6 border-b-2' : 'pb-3 mb-2'
          }`}
          style={{ borderColor: themeStyle === 'clean_authority' ? '#E5E7EB' : 'rgba(255, 255, 255, 0.12)' }}
        >
          {/* Perfil Innovary Mídia com Logo Circular Oficial */}
          <div className="flex items-center" style={{ gap: isExporting ? '20px' : '10px' }}>
            <div 
              className={`rounded-full overflow-hidden flex items-center justify-center shadow-md shrink-0 border ${
                isExporting ? 'w-20 h-20 border-[3px]' : 'w-8 h-8 border'
              }`}
              style={{ borderColor: config.accent, background: '#0d0b0b' }}
            >
              <img 
                src={INNOVARY_LOGO_BASE64} 
                alt="Innovary Mídia" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span 
                className="font-bold tracking-tight leading-none" 
                style={{ 
                  color: config.textColor,
                  fontSize: isExporting ? '30px' : '13px'
                }}
              >
                Innovary Mídia
              </span>
              <span 
                className="font-medium tracking-wide mt-1" 
                style={{ 
                  color: config.textMuted,
                  fontSize: isExporting ? '22px' : '10px'
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
              borderRadius: isExporting ? '9999px' : '9999px',
              padding: isExporting ? '10px 24px' : '2px 10px',
              fontSize: isExporting ? '24px' : '11px'
            }}
          >
            {String(slide.slideNumber).padStart(2, '0')} / {String(slide.totalSlides).padStart(2, '0')}
          </div>
        </div>

        {/* Barra de Progresso Fina */}
        <div 
          className="relative z-10 w-full rounded-full overflow-hidden shrink-0" 
          style={{ 
            background: 'rgba(128, 128, 128, 0.18)',
            height: isExporting ? '6px' : '3px',
            marginBottom: isExporting ? '24px' : '10px'
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
          style={{ padding: isExporting ? '20px 0' : '6px 0' }}
        >
          {/* Badge de Destaque */}
          {badge && (
            <div className="shrink-0" style={{ marginBottom: isExporting ? '24px' : '8px' }}>
              <span 
                className="inline-flex items-center font-bold uppercase tracking-wider shadow-sm"
                style={{
                  background: config.badgeBg,
                  color: config.badgeText,
                  border: `${isExporting ? '2px' : '1px'} solid ${config.badgeBorder}`,
                  borderRadius: isExporting ? '12px' : '6px',
                  padding: isExporting ? '10px 20px' : '3px 10px',
                  fontSize: isExporting ? '22px' : '10px',
                  gap: isExporting ? '10px' : '6px',
                }}
              >
                {themeStyle === 'alert_loss' && <AlertTriangle style={{ width: isExporting ? 24 : 12, height: isExporting ? 24 : 12 }} />}
                {themeStyle === 'data_growth' && <TrendingUp style={{ width: isExporting ? 24 : 12, height: isExporting ? 24 : 12 }} />}
                {themeStyle === 'dark_fire' && <Sparkles style={{ width: isExporting ? 24 : 12, height: isExporting ? 24 : 12 }} />}
                {badge}
              </span>
            </div>
          )}

          {/* TÍTULO PRINCIPAL (HEADLINE) */}
          <h1 
            className="font-extrabold tracking-tight leading-[1.2] text-left"
            style={{
              fontSize: getHeadlineFontSize(),
              color: config.textColor,
              marginBottom: isExporting ? '28px' : '12px'
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
                fontSize: isExporting ? '28px' : '12px',
                lineHeight: 1.45,
                marginBottom: isExporting ? '28px' : '12px'
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
                borderRadius: isExporting ? '24px' : '12px',
                borderWidth: isExporting ? '2px' : '1px',
                padding: isExporting ? '32px 36px' : '14px',
                marginBottom: isExporting ? '28px' : '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: isExporting ? '18px' : '8px',
              }}
            >
              {slide.bodyText.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className="leading-relaxed" 
                  style={{ 
                    color: config.textColor,
                    fontSize: isExporting ? '28px' : '12px',
                    lineHeight: 1.5
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
                gap: isExporting ? '18px' : '8px',
                margin: isExporting ? '20px 0' : '8px 0' 
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
                    padding: isExporting ? '20px 24px' : '8px 10px',
                    gap: isExporting ? '18px' : '10px',
                  }}
                >
                  <div 
                    className="rounded-full flex items-center justify-center shrink-0"
                    style={{ 
                      background: config.badgeBg, 
                      color: config.badgeText,
                      width: isExporting ? '40px' : '18px',
                      height: isExporting ? '40px' : '18px'
                    }}
                  >
                    <CheckCircle2 style={{ width: isExporting ? 24 : 12, height: isExporting ? 24 : 12 }} />
                  </div>
                  <span 
                    className="font-medium leading-snug" 
                    style={{ 
                      color: config.textColor,
                      fontSize: isExporting ? '26px' : '12px' 
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
                boxShadow: `0 0 20px -5px ${config.accent}30`,
                borderRadius: isExporting ? '28px' : '14px',
                borderWidth: isExporting ? '3px' : '1px',
                padding: isExporting ? '36px 24px' : '16px',
                margin: isExporting ? '24px 0' : '10px 0',
              }}
            >
              <div 
                className="font-extrabold tracking-tight"
                style={{ 
                  color: config.accent,
                  fontSize: isExporting ? '72px' : '32px',
                  marginBottom: isExporting ? '10px' : '4px'
                }}
              >
                {slide.metricNumber}
              </div>
              <div 
                className="font-semibold uppercase tracking-wider" 
                style={{ 
                  color: config.textMuted,
                  fontSize: isExporting ? '24px' : '11px' 
                }}
              >
                {sanitizeText(slide.metricLabel)}
              </div>
            </div>
          )}

          {/* NOTA DE DESTAQUE */}
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
                padding: isExporting ? '24px 28px' : '10px 12px',
                fontSize: isExporting ? '24px' : '11px',
                marginTop: isExporting ? '18px' : '8px',
              }}
            >
              💡 {customNote}
            </div>
          )}

          {/* BOTÃO DE CTA (SLIDE FINAL) */}
          {isLast && ctaButtonText && (
            <div style={{ marginTop: isExporting ? '28px' : '12px' }}>
              <div 
                className="w-full font-bold text-center shadow-lg flex items-center justify-center text-white"
                style={{ 
                  background: config.accentGradient,
                  boxShadow: '0 8px 20px -4px rgba(255, 61, 0, 0.4)',
                  borderRadius: isExporting ? '24px' : '12px',
                  padding: isExporting ? '28px 40px' : '12px 20px',
                  fontSize: isExporting ? '28px' : '13px',
                  gap: isExporting ? '16px' : '8px',
                }}
              >
                <Send style={{ width: isExporting ? 28 : 14, height: isExporting ? 28 : 14 }} />
                <span>{ctaButtonText}</span>
              </div>
            </div>
          )}
        </div>

        {/* =================================================================== */}
        {/* RODAPÉ DO SLIDE                                                    */}
        {/* =================================================================== */}
        <div 
          className="relative z-10 border-t flex items-center justify-between shrink-0"
          style={{ 
            borderColor: themeStyle === 'clean_authority' ? '#E5E7EB' : 'rgba(255, 255, 255, 0.12)',
            borderTopWidth: isExporting ? '2px' : '1px',
            paddingTop: isExporting ? '24px' : '10px',
            marginTop: isExporting ? '16px' : '6px',
            fontSize: isExporting ? '22px' : '11px',
            color: config.textMuted 
          }}
        >
          <div className="flex items-center font-semibold" style={{ gap: isExporting ? '14px' : '6px' }}>
            <span 
              className="rounded-full animate-pulse" 
              style={{ 
                background: config.accent,
                width: isExporting ? '14px' : '6px',
                height: isExporting ? '14px' : '6px'
              }} 
            />
            <span>Tráfego Pago para Food Service</span>
          </div>

          <div className="flex items-center font-bold" style={{ color: config.accent, gap: isExporting ? '10px' : '4px' }}>
            {!isLast ? (
              <>
                <span>Arraste para o lado</span>
                <ChevronRight style={{ width: isExporting ? 26 : 14, height: isExporting ? 26 : 14 }} />
              </>
            ) : (
              <div className="flex items-center" style={{ gap: isExporting ? '10px' : '4px' }}>
                <Bookmark style={{ width: isExporting ? 26 : 14, height: isExporting ? 26 : 14 }} />
                <span>Salvar post</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

SlideCanvas.displayName = 'SlideCanvas';
