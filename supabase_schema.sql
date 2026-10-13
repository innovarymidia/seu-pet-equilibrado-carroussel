-- ==============================================================================
-- SCHEMA SUPABASE: SISTEMA GERADOR DE CARROSSÉIS SEU PET EQUILIBRADO
-- ==============================================================================
-- Execute este script no SQL Editor do seu Dashboard Supabase (https://supabase.com/dashboard)

-- Habilitar extensão para geração de UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. TABELA DE CARROSSÉIS (Metadados do projeto gerado)
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
    status TEXT DEFAULT 'draft', -- draft, reviewed, downloaded, published
    is_published BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP WITH TIME ZONE,
    instagram_post_id TEXT,
    user_id UUID -- Se futuramente usar Supabase Auth
);

-- 2. TABELA DE SLIDES (Conteúdo individual de cada folha)
CREATE TABLE IF NOT EXISTS public.slides (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    carousel_id UUID REFERENCES public.carousels(id) ON DELETE CASCADE,
    slide_number INTEGER NOT NULL,
    slide_type TEXT NOT NULL, -- hook, problem, solution, proof, cta, content
    headline TEXT NOT NULL,
    subtitle TEXT,
    body_text TEXT,
    badge TEXT,
    highlight_word TEXT,
    cta_text TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. TABELA DE CONFIGURAÇÕES / TOKENS
CREATE TABLE IF NOT EXISTS public.system_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    key TEXT UNIQUE NOT NULL,
    value JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Inserir perfil padrão da Seu Pet Equilibrado
INSERT INTO public.system_settings (key, value)
VALUES (
    'profile',
    jsonb_build_object(
        'handle', '@seupetequilibrado',
        'agency_name', 'Seu Pet Equilibrado',
        'website', 'https://seu-pet-equilibrado.vercel.app/',
        'cta_default', 'Mande uma mensagem na nossa DM ou WhatsApp (65 98429-8949) para consultoria presencial ou online.'
    )
) ON CONFLICT (key) DO NOTHING;

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.carousels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.slides ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_settings ENABLE ROW LEVEL SECURITY;

-- Políticas públicas para protótipo e MVP
CREATE POLICY "Acesso público temporário para carrosséis" ON public.carousels FOR ALL USING (true);
CREATE POLICY "Acesso público temporário para slides" ON public.slides FOR ALL USING (true);
CREATE POLICY "Acesso público temporário para configurações" ON public.system_settings FOR ALL USING (true);
