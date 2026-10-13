import React, { useState } from 'react';
import { GenerationInput, ThemeStyle } from '../lib/types';
import { TOPIC_PRESETS, THEME_CONFIGS } from '../lib/presets';
import { Sparkles, Dices, Layers, Sliders, HeartHandshake } from 'lucide-react';

interface GeneratorFormProps {
  onGenerate: (input: GenerationInput) => void;
  isGenerating: boolean;
  selectedTheme: ThemeStyle;
  onThemeSelect: (theme: ThemeStyle) => void;
}

export const GeneratorForm: React.FC<GeneratorFormProps> = ({
  onGenerate,
  isGenerating,
  selectedTheme,
  onThemeSelect,
}) => {
  const [topic, setTopic] = useState('');
  const [slideCount, setSlideCount] = useState<number>(6);
  const [showPresets, setShowPresets] = useState(false);

  const handleRandomPreset = () => {
    const random = TOPIC_PRESETS[Math.floor(Math.random() * TOPIC_PRESETS.length)];
    setTopic(random.title);
    onThemeSelect(random.recommendedTheme);
  };

  const handleSelectPreset = (preset: typeof TOPIC_PRESETS[0]) => {
    setTopic(preset.title);
    onThemeSelect(preset.recommendedTheme);
    setShowPresets(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate({
      topic: topic.trim() || 'Passeio Sem Puxar: O método passo a passo para caminhar com guia frouxa',
      slideCount,
      themeStyle: selectedTheme,
    });
  };

  return (
    <div className="bg-[#14171C] border border-white/[0.08] rounded-2xl p-5 shadow-xl relative">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* TÍTULO E BOTÃO DE PAUTA ALEATÓRIA */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#F5BAC9] flex items-center gap-1.5">
            <HeartHandshake className="w-4 h-4 text-[#F5BAC9]" />
            Tema ou Desafio do Tutor com o Cão:
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleRandomPreset}
              className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#0C0E12] text-[#F5BAC9] hover:text-white hover:bg-[#2B181E] border border-[#F5BAC9]/30 flex items-center gap-1.5 transition-all"
            >
              <Dices className="w-3.5 h-3.5" />
              Sortear Pauta para Tutores
            </button>
            <button
              type="button"
              onClick={() => setShowPresets(!showPresets)}
              className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#0C0E12] text-[#9DA3B4] hover:text-white border border-white/[0.08] hover:border-[#F5BAC9]/40 transition-colors"
            >
              {showPresets ? 'Fechar Pautas' : `Ver Pautas Prontas (${TOPIC_PRESETS.length})`}
            </button>
          </div>
        </div>

        {/* LISTA DE PRESETS EXPANSÍVEL */}
        {showPresets && (
          <div className="p-3 rounded-xl bg-[#0C0E12] border border-white/[0.08] space-y-2 max-h-64 overflow-y-auto">
            <span className="text-[11px] font-bold text-[#9DA3B4] uppercase tracking-wider block mb-1">
              Selecione uma pauta com alta dor e interesse de tutores:
            </span>
            {TOPIC_PRESETS.map((p) => (
              <div
                key={p.id}
                onClick={() => handleSelectPreset(p)}
                className="p-2.5 rounded-lg border border-white/[0.06] hover:border-[#F5BAC9]/50 hover:bg-[#1B1E26] cursor-pointer transition-all flex items-start justify-between gap-2"
              >
                <div>
                  <div className="text-xs font-bold text-white leading-tight">
                    {p.title}
                  </div>
                  <div className="text-[11px] text-[#9DA3B4] mt-0.5">
                    Público: {p.targetCategory} | Categoria: {p.category}
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#2B181E] text-[#F5BAC9] font-semibold whitespace-nowrap border border-[#F5BAC9]/20">
                  Usar
                </span>
              </div>
            ))}
          </div>
        )}

        {/* CAMPO DE TEXTO DO TEMA */}
        <div>
          <textarea
            rows={2}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Ex: Como ensinar o cão a parar de latir na campainha, passeio sem puxar a guia, xixi e cocô no lugar certo..."
            className="w-full bg-[#0C0E12] border border-white/[0.08] rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#F5BAC9] transition-colors resize-none"
          />
        </div>

        {/* SELETORES: QUANTIDADE DE SLIDES E DESIGN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          {/* Quantidade de Folhas: 5, 6 ou 7 */}
          <div>
            <label className="block text-xs font-semibold text-[#9DA3B4] mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#F5BAC9]" />
              Quantidade de Folhas (Lâminas):
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[5, 6, 7].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setSlideCount(num)}
                  className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                    slideCount === num
                      ? 'bg-[#F5BAC9] text-[#121418] border-[#F5BAC9] shadow-rose scale-105'
                      : 'bg-[#0C0E12] text-[#9DA3B4] border-white/[0.08] hover:text-white hover:bg-[#1B1E26]'
                  }`}
                >
                  {num} Lâminas
                </button>
              ))}
            </div>
          </div>

          {/* Seletor de Estilo Visual */}
          <div>
            <label className="block text-xs font-semibold text-[#9DA3B4] mb-2 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-[#F5BAC9]" />
              Padrão Visual das Publicações:
            </label>
            <select
              value={selectedTheme}
              onChange={(e) => onThemeSelect(e.target.value as ThemeStyle)}
              className="w-full bg-[#0C0E12] border border-white/[0.08] rounded-xl px-3 py-2 text-xs font-semibold text-white focus:outline-none focus:border-[#F5BAC9] transition-colors cursor-pointer"
            >
              {(Object.keys(THEME_CONFIGS) as ThemeStyle[]).slice(0, 6).map((key) => {
                const conf = THEME_CONFIGS[key];
                return (
                  <option key={key} value={key} className="bg-[#14171C] text-white">
                    {conf.name} ({conf.tag})
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* BOTÃO PRINCIPAL DE GERAÇÃO */}
        <button
          type="submit"
          disabled={isGenerating}
          className="w-full py-3.5 px-6 rounded-xl font-extrabold text-sm text-[#121418] shadow-rose flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none hover:scale-[1.01] active:scale-[0.99]"
          style={{ background: 'linear-gradient(135deg, #F5BAC9 0%, #F8CAD6 100%)' }}
        >
          <Sparkles className="w-4 h-4 text-[#121418] animate-spin" />
          <span>{isGenerating ? 'Equipe de Agentes Produzindo Carrossel...' : 'Disparar Agentes e Gerar Conteúdo para Tutores'}</span>
        </button>
      </form>
    </div>
  );
};
