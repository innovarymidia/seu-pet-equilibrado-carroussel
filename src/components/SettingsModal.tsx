import React, { useState, useEffect } from 'react';
import { 
  X, 
  Key, 
  Database, 
  Instagram, 
  Check, 
  Copy, 
  ExternalLink, 
  ShieldCheck, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';
import { testSupabaseConnection } from '../lib/supabase';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaved: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, onSaved }) => {
  const [geminiKey, setGeminiKey] = useState('');
  const [supabaseUrl, setSupabaseUrl] = useState('');
  const [supabaseKey, setSupabaseKey] = useState('');
  const [metaToken, setMetaToken] = useState('');
  const [pageId, setPageId] = useState('');
  const [activeTab, setActiveTab] = useState<'apis' | 'sql' | 'instagram'>('apis');
  const [copiedSql, setCopiedSql] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isTestingSupabase, setIsTestingSupabase] = useState(false);
  const [testFeedback, setTestFeedback] = useState<{
    success: boolean;
    message: string;
    error?: string;
  } | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setGeminiKey(
        localStorage.getItem('seupet_gemini_key') || 
        localStorage.getItem('innovary_gemini_key') || ''
      );
      setSupabaseUrl(
        localStorage.getItem('seupet_supabase_url') || 
        localStorage.getItem('innovary_supabase_url') || 
        process.env.NEXT_PUBLIC_SUPABASE_URL || ''
      );
      setSupabaseKey(
        localStorage.getItem('seupet_supabase_key') || 
        localStorage.getItem('innovary_supabase_key') || 
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
      );
      setMetaToken(
        localStorage.getItem('seupet_meta_token') || 
        localStorage.getItem('innovary_meta_token') || ''
      );
      setPageId(
        localStorage.getItem('seupet_page_id') || 
        localStorage.getItem('innovary_page_id') || ''
      );
      setTestFeedback(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTestConnection = async () => {
    if (!supabaseUrl.trim() || !supabaseKey.trim()) {
      setTestFeedback({
        success: false,
        message: 'Preencha a URL do Projeto e a Anon Key antes de testar.',
      });
      return;
    }

    setIsTestingSupabase(true);
    setTestFeedback(null);

    // Salva temporariamente no localStorage para o client instanciar
    if (typeof window !== 'undefined') {
      localStorage.setItem('seupet_supabase_url', supabaseUrl.trim());
      localStorage.setItem('seupet_supabase_key', supabaseKey.trim());
      localStorage.setItem('innovary_supabase_url', supabaseUrl.trim());
      localStorage.setItem('innovary_supabase_key', supabaseKey.trim());
    }

    try {
      const res = await testSupabaseConnection();
      setTestFeedback(res);
    } catch (err: any) {
      setTestFeedback({
        success: false,
        message: 'Erro inesperado ao tentar conectar.',
        error: err.message || String(err),
      });
    } finally {
      setIsTestingSupabase(false);
    }
  };

  const handleSave = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('seupet_gemini_key', geminiKey.trim());
      localStorage.setItem('seupet_supabase_url', supabaseUrl.trim());
      localStorage.setItem('seupet_supabase_key', supabaseKey.trim());
      localStorage.setItem('seupet_meta_token', metaToken.trim());
      localStorage.setItem('seupet_page_id', pageId.trim());

      // Compatibilidade retroativa
      localStorage.setItem('innovary_gemini_key', geminiKey.trim());
      localStorage.setItem('innovary_supabase_url', supabaseUrl.trim());
      localStorage.setItem('innovary_supabase_key', supabaseKey.trim());
      localStorage.setItem('innovary_meta_token', metaToken.trim());
      localStorage.setItem('innovary_page_id', pageId.trim());
    }
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onSaved();
      onClose();
    }, 1000);
  };

  const sqlSchemaSnippet = `-- Execute este SQL no Supabase SQL Editor:
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS public.carousels (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    topic TEXT NOT NULL,
    target_audience TEXT DEFAULT 'Tutores de Cães com Desafios de Comportamento',
    niche TEXT DEFAULT 'Adestramento e Comportamento Canino',
    slide_count INTEGER NOT NULL DEFAULT 6,
    theme_style TEXT NOT NULL DEFAULT 'rose_editorial',
    caption TEXT,
    hashtags TEXT[],
    status TEXT DEFAULT 'draft',
    is_published BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP WITH TIME ZONE,
    instagram_post_id TEXT,
    user_id UUID
);

CREATE TABLE IF NOT EXISTS public.slides (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    carousel_id UUID REFERENCES public.carousels(id) ON DELETE CASCADE,
    slide_number INTEGER NOT NULL,
    slide_type TEXT NOT NULL,
    headline TEXT NOT NULL,
    subtitle TEXT,
    body_text TEXT,
    badge TEXT,
    highlight_word TEXT,
    cta_text TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS public.system_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key TEXT UNIQUE NOT NULL,
    value JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

INSERT INTO public.system_settings (key, value)
VALUES (
    'profile',
    jsonb_build_object(
        'handle', '@seupetequilibrado',
        'agency_name', 'Seu Pet Equilibrado',
        'website', 'https://seu-pet-equilibrado.vercel.app/',
        'cta_default', 'Mande uma mensagem na nossa DM para consultoria presencial ou online.'
    )
) ON CONFLICT (key) DO NOTHING;

ALTER TABLE public.carousels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.slides ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Acesso público temporário para carrosséis" ON public.carousels FOR ALL USING (true);
CREATE POLICY "Acesso público temporário para slides" ON public.slides FOR ALL USING (true);
CREATE POLICY "Acesso público temporário para configurações" ON public.system_settings FOR ALL USING (true);`;

  const copySql = async () => {
    await navigator.clipboard.writeText(sqlSchemaSnippet);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="bg-[#14171C] border border-white/[0.08] rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl">
        {/* Cabeçalho do Modal */}
        <div className="flex items-center justify-between p-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#2B181E] border border-[#F5BAC9]/40 flex items-center justify-center text-[#F5BAC9] font-bold text-sm">
              ⚙️
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Configurações e Integrações</h3>
              <p className="text-xs text-[#9DA3B4]">Seu Pet Equilibrado • Supabase, Gemini e Instagram</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-[#0C0E12] flex items-center justify-center text-[#9DA3B4] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Abas */}
        <div className="flex border-b border-white/[0.08] px-5 gap-4">
          <button
            onClick={() => setActiveTab('apis')}
            className={`py-3 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'apis'
                ? 'text-[#F5BAC9] border-[#F5BAC9]'
                : 'text-[#9DA3B4] border-transparent hover:text-white'
            }`}
          >
            <Key className="w-3.5 h-3.5" />
            Supabase e APIs
          </button>
          <button
            onClick={() => setActiveTab('sql')}
            className={`py-3 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'sql'
                ? 'text-[#F5BAC9] border-[#F5BAC9]'
                : 'text-[#9DA3B4] border-transparent hover:text-white'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            Script SQL Supabase
          </button>
          <button
            onClick={() => setActiveTab('instagram')}
            className={`py-3 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'instagram'
                ? 'text-[#F5BAC9] border-[#F5BAC9]'
                : 'text-[#9DA3B4] border-transparent hover:text-white'
            }`}
          >
            <Instagram className="w-3.5 h-3.5" />
            Instagram API
          </button>
        </div>

        {/* Conteúdo das Abas */}
        <div className="p-5 max-h-[70vh] overflow-y-auto space-y-4">
          {activeTab === 'apis' && (
            <div className="space-y-4">
              {/* Supabase URL e Anon Key */}
              <div className="p-4 rounded-xl bg-[#0C0E12] border border-white/[0.08] space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-emerald-400" />
                    Conexão Supabase
                  </label>
                  <a
                    href="https://supabase.com/dashboard"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    Painel Supabase
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                <div>
                  <span className="text-[11px] text-[#9DA3B4] block mb-1">Project URL:</span>
                  <input
                    type="text"
                    value={supabaseUrl}
                    onChange={(e) => {
                      setSupabaseUrl(e.target.value);
                      setTestFeedback(null);
                    }}
                    placeholder="https://xyzabcdefg.supabase.co"
                    className="w-full bg-[#14171C] border border-white/[0.08] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F5BAC9] transition-colors font-mono"
                  />
                </div>

                <div>
                  <span className="text-[11px] text-[#9DA3B4] block mb-1">Anon Public Key:</span>
                  <input
                    type="password"
                    value={supabaseKey}
                    onChange={(e) => {
                      setSupabaseKey(e.target.value);
                      setTestFeedback(null);
                    }}
                    placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                    className="w-full bg-[#14171C] border border-white/[0.08] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F5BAC9] transition-colors font-mono"
                  />
                </div>

                <div className="pt-1 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={handleTestConnection}
                    disabled={isTestingSupabase || !supabaseUrl || !supabaseKey}
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 text-xs font-semibold flex items-center gap-1.5 transition-all disabled:opacity-40"
                  >
                    {isTestingSupabase ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Database className="w-3.5 h-3.5" />
                    )}
                    {isTestingSupabase ? 'Testando tabelas...' : 'Testar Conexão Supabase'}
                  </button>
                  {testFeedback && (
                    <span className="text-[10px] text-zinc-400">
                      {testFeedback.success ? 'Conexão validada' : 'Atenção'}
                    </span>
                  )}
                </div>

                {testFeedback && (
                  <div
                    className={`p-2.5 rounded-lg text-xs border flex items-start gap-2 ${
                      testFeedback.success
                        ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                        : 'bg-red-950/40 border-red-500/40 text-red-300'
                    }`}
                  >
                    {testFeedback.success ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="font-semibold">{testFeedback.message}</p>
                      {testFeedback.error && (
                        <p className="text-[11px] opacity-80 mt-0.5 font-mono">
                          {testFeedback.error}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Google Gemini API Key */}
              <div className="p-4 rounded-xl bg-[#0C0E12] border border-white/[0.08]">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Key className="w-3.5 h-3.5 text-[#F5BAC9]" />
                    Google Gemini API Key (Opcional)
                  </label>
                  <a
                    href="https://aistudio.google.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-[#F5BAC9] hover:underline flex items-center gap-1"
                  >
                    Obter Grátis no Google AI Studio
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
                <input
                  type="password"
                  value={geminiKey}
                  onChange={(e) => setGeminiKey(e.target.value)}
                  placeholder="AIzaSy..."
                  className="w-full bg-[#14171C] border border-white/[0.08] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F5BAC9] transition-colors"
                />
                <p className="text-[11px] text-[#9DA3B4] mt-1.5">
                  Se deixado em branco, o sistema utilizará o motor estratégico integrado com os 12 temas validados do Seu Pet Equilibrado.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'sql' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">
                  Tabelas para criar no Supabase SQL Editor:
                </span>
                <button
                  onClick={copySql}
                  className="px-2.5 py-1 rounded-lg bg-[#2B181E] text-[#F5BAC9] border border-[#F5BAC9]/40 text-xs font-semibold flex items-center gap-1 hover:bg-[#F5BAC9] hover:text-[#121418] transition-all"
                >
                  {copiedSql ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copiedSql ? 'Copiado!' : 'Copiar SQL Completo'}
                </button>
              </div>
              <pre className="p-3.5 rounded-xl bg-black border border-white/[0.08] text-[11px] font-mono text-zinc-300 overflow-x-auto max-h-60">
                {sqlSchemaSnippet}
              </pre>
              <p className="text-xs text-[#9DA3B4]">
                O arquivo completo com políticas e segurança também está salvo no arquivo <code className="text-[#F5BAC9]">supabase_schema.sql</code> na raiz do projeto.
              </p>
            </div>
          )}

          {activeTab === 'instagram' && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#0C0E12] border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-2 text-[#F5BAC9] font-bold text-xs">
                  <Instagram className="w-4 h-4" />
                  Postagem Direta no Instagram (@seupetequilibrado)
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                  A postagem inicial recomendada é <strong>100% manual e segura</strong> (você baixa as lâminas em alta definição 1080x1350 em 1 clique e publica).
                </p>
                <div className="space-y-2.5 text-xs text-[#9DA3B4]">
                  <div className="p-2.5 rounded-lg bg-[#14171C] border border-white/[0.08]">
                    <strong>Passos para quando quiser ligar o automático:</strong>
                    <ol className="list-decimal pl-4 mt-1 space-y-1">
                      <li>Ter uma conta Profissional no Instagram vinculada a uma Página do Facebook.</li>
                      <li>Criar um app gratuito no Meta for Developers com permissão <code className="text-zinc-200">instagram_content_publish</code>.</li>
                      <li>Inserir o Token e o ID da Página abaixo para postar direto da tela sem precisar baixar.</li>
                    </ol>
                  </div>
                </div>

                <div className="mt-3 space-y-2">
                  <span className="text-[11px] text-[#9DA3B4] block">Instagram Business Account ID:</span>
                  <input
                    type="text"
                    value={pageId}
                    onChange={(e) => setPageId(e.target.value)}
                    placeholder="Ex: 17841400000000000"
                    className="w-full bg-[#14171C] border border-white/[0.08] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F5BAC9] transition-colors"
                  />
                  <span className="text-[11px] text-[#9DA3B4] block">Meta Long-Lived Access Token:</span>
                  <input
                    type="password"
                    value={metaToken}
                    onChange={(e) => setMetaToken(e.target.value)}
                    placeholder="EAAB..."
                    className="w-full bg-[#14171C] border border-white/[0.08] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#F5BAC9] transition-colors"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Rodapé do Modal */}
        <div className="p-5 border-t border-white/[0.08] flex items-center justify-between bg-[#0C0E12]/50">
          <span className="text-xs text-[#9DA3B4] flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Salvo com segurança localmente e no Supabase.
          </span>
          <button
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-[#121418] shadow-rose flex items-center gap-1.5 transition-all"
            style={{ background: 'linear-gradient(135deg, #F5BAC9 0%, #F8CAD6 100%)' }}
          >
            {isSaved ? <Check className="w-4 h-4 text-[#121418]" /> : null}
            <span>{isSaved ? 'Configurações Salvas!' : 'Salvar Alterações'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
