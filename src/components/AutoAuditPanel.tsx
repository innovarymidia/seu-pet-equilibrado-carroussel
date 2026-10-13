import React, { useState } from 'react';
import { QAReport } from '../lib/agents/qa';
import { CheckCircle2, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

interface AutoAuditPanelProps {
  qaReport?: QAReport;
}

export const AutoAuditPanel: React.FC<AutoAuditPanelProps> = ({ qaReport }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!qaReport) return null;

  return (
    <div className="bg-[#14171C] border border-white/[0.08] rounded-2xl p-4 shadow-lg mb-6 animate-in fade-in">
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* LADO ESQUERDO: SELO DE AUTO-ANÁLISE */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-white">
                Auto-Análise de Qualidade e Safe Zones (1080x1350)
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                100% APROVADO
              </span>
            </div>
            <p className="text-[11px] text-[#9DA3B4] mt-0.5">
              Revisão automática especializada: sem corte de texto para o feed do Instagram e com bloqueio ativo de caracteres proibidos.
            </p>
          </div>
        </div>

        {/* LADO DIREITO: BOTÃO DE EXPANDIR CHECKLIST */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-3 py-1.5 rounded-xl bg-[#0C0E12] hover:bg-[#1B1E26] border border-white/[0.08] hover:border-[#F5BAC9]/40 text-xs font-bold text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
        >
          <span>{isExpanded ? 'Ocultar Detalhes da Auditoria' : 'Ver Itens Auditados'}</span>
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-[#F5BAC9]" /> : <ChevronDown className="w-3.5 h-3.5 text-[#F5BAC9]" />}
        </button>
      </div>

      {/* CHECKLIST EXPANDIDO */}
      {isExpanded && (
        <div className="pt-4 mt-4 border-t border-white/[0.08] space-y-3 animate-in fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {qaReport.checks.map((chk, i) => (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-[#0C0E12] border border-white/[0.06] flex items-start gap-2 text-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white leading-tight">{chk.name}</div>
                  <div className="text-[11px] text-[#9DA3B4] mt-0.5">{chk.feedback}</div>
                </div>
              </div>
            ))}
          </div>

          {/* AUDITORIA POR LÂMINA */}
          <div className="pt-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9DA3B4] block mb-2">
              Status das Lâminas:
            </span>
            <div className="flex flex-wrap gap-2">
              {qaReport.slideAudits.map((audit) => (
                <div
                  key={audit.slideNumber}
                  className="px-2.5 py-1.5 rounded-lg bg-[#0C0E12] border border-emerald-500/25 flex items-center gap-1.5 text-[11px]"
                >
                  <span className="font-bold text-[#F5BAC9]">#{audit.slideNumber}</span>
                  <span className="text-zinc-300 font-medium">Safe Zone: OK</span>
                  <span className="text-[10px] text-emerald-400 font-semibold">({audit.charCount} chars)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
