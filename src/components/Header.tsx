import React from 'react';
import { Download, Settings, ExternalLink } from 'lucide-react';
import { PET_LOGO_URL } from '../lib/brandLogo';

interface HeaderProps {
  onOpenSettings: () => void;
  onDownloadZip: () => void;
  isDownloadingZip: boolean;
  hasProject: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSettings,
  onDownloadZip,
  isDownloadingZip,
  hasProject,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0C0E12]/90 backdrop-blur-md border-b border-white/[0.08] px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO E IDENTIFICAÇÃO DA MARCA SEU PET EQUILIBRADO */}
        <div className="flex items-center gap-3">
          <div 
            className="w-11 h-11 rounded-full overflow-hidden border border-[#F5BAC9]/40 flex items-center justify-center shadow-rose bg-[#14171C] shrink-0 p-0.5"
          >
            <img 
              src={PET_LOGO_URL} 
              alt="Brasão Oficial Seu Pet Equilibrado" 
              className="w-full h-full object-cover rounded-full" 
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base md:text-lg text-white tracking-tight leading-none">
                Seu Pet <span className="text-[#F5BAC9]">Equilibrado</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#2B181E] text-[#F5BAC9] border border-[#F5BAC9]/30">
                Adestramento Canino AI
              </span>
            </div>
            <p className="text-[11px] text-[#9DA3B4] font-medium mt-0.5 flex items-center gap-1.5">
              <span>@seupetequilibrado</span>
              <span>•</span>
              <a
                href="https://seu-pet-equilibrado.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#F5BAC9] transition-colors flex items-center gap-0.5 text-[#F5BAC9]/90"
              >
                seu-pet-equilibrado.vercel.app
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </p>
          </div>
        </div>

        {/* AÇÕES NO TOPO */}
        <div className="flex items-center gap-3">
          {/* Botão de Download Completo em ZIP */}
          <button
            onClick={onDownloadZip}
            disabled={!hasProject || isDownloadingZip}
            className="px-4 py-2 rounded-xl text-xs font-extrabold text-[#121418] shadow-rose flex items-center gap-2 transition-all disabled:opacity-40 disabled:pointer-events-none hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(135deg, #F5BAC9 0%, #F8CAD6 100%)' }}
          >
            <Download className="w-4 h-4 text-[#121418]" />
            <span>
              {isDownloadingZip ? 'Gerando 1080x1350...' : 'Baixar Carrossel (.ZIP)'}
            </span>
          </button>

          {/* Atalho Supabase */}
          <button
            onClick={onOpenSettings}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-medium transition-colors bg-[#14171C] hover:bg-[#1B1E26] text-zinc-300 border-white/[0.08] hover:border-[#F5BAC9]/40"
            title="Conexão do Supabase (carousels, slides, system_settings)"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[11px] text-zinc-200">Supabase</span>
          </button>

          {/* Botão de Configurações */}
          <button
            onClick={onOpenSettings}
            className="p-2 rounded-xl bg-[#14171C] hover:bg-[#1B1E26] text-[#9DA3B4] hover:text-white border border-white/[0.08] hover:border-[#F5BAC9]/30 transition-colors"
            title="Configurações e Integrações (Supabase / Gemini / Meta)"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
