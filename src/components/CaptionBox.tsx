import React, { useState } from 'react';
import { Copy, Check, FileText } from 'lucide-react';
import { sanitizeText } from '../lib/sanitizer';

interface CaptionBoxProps {
  caption: string;
  hashtags: string[];
  onUpdateCaption?: (newCaption: string) => void;
}

export const CaptionBox: React.FC<CaptionBoxProps> = ({ caption, hashtags, onUpdateCaption }) => {
  const [copied, setCopied] = useState(false);

  const cleanCaption = sanitizeText(caption);
  const fullText = `${cleanCaption}\n\n${hashtags.join(' ')}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error('Falha ao copiar', e);
    }
  };

  return (
    <div className="bg-[#14171C] border border-white/[0.08] rounded-2xl p-5 shadow-lg space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-[#F5BAC9]" />
          <h3 className="font-bold text-sm text-white">
            Legenda Otimizada para o Instagram (@seupetequilibrado)
          </h3>
        </div>
        <button
          onClick={handleCopy}
          className={`px-3 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition-all ${
            copied
              ? 'bg-emerald-600 text-white'
              : 'bg-[#F5BAC9] text-[#121418] hover:bg-[#F8CAD6] shadow-rose'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Copiado com Sucesso!
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copiar Legenda
            </>
          )}
        </button>
      </div>

      {/* Caixa de Texto da Legenda */}
      <textarea
        rows={7}
        value={cleanCaption}
        onChange={(e) => onUpdateCaption?.(e.target.value)}
        placeholder="Legenda do post com storytelling e chamada para ação..."
        className="w-full bg-[#0C0E12] border border-white/[0.08] rounded-xl px-4 py-3 text-xs md:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#F5BAC9] transition-colors resize-y leading-relaxed"
      />

      {/* Hashtags da Marca */}
      <div className="pt-2">
        <span className="text-[11px] font-bold text-[#9DA3B4] uppercase tracking-wider block mb-1.5">
          Hashtags Estratégicas:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {hashtags.map((h, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-md bg-[#0C0E12] text-[#F5BAC9] text-[11px] font-medium border border-[#F5BAC9]/20"
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
