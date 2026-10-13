import { GoogleGenerativeAI } from '@google/generative-ai';
import { CarouselProject, GenerationInput, AgentStatus, SlideData } from '../types';
import { StrategistAgent } from './strategist';
import { CopywriterAgent } from './copywriter';
import { DesignerAgent } from './designer';
import { QualityReviewerAgent, QAReport } from './qa';
import { PublisherAgent } from './publisher';
import { sanitizeText, sanitizeProject } from '../sanitizer';
import { ensureUUID } from '../supabase';

export interface AgentUpdateCallback {
  (agents: AgentStatus[]): void;
}

export class MultiAgentOrchestrator {
  private strategist = new StrategistAgent();
  private copywriter = new CopywriterAgent();
  private designer = new DesignerAgent();
  private qa = new QualityReviewerAgent();
  private publisher = new PublisherAgent();

  getInitialAgentStatuses(): AgentStatus[] {
    return [
      {
        role: 'strategist',
        name: this.strategist.name,
        title: this.strategist.title,
        avatar: this.strategist.avatar,
        status: 'idle',
        message: 'Aguardando tema para mapear o ângulo de comportamento canino e a dor do tutor...',
      },
      {
        role: 'copywriter',
        name: this.copywriter.name,
        title: this.copywriter.title,
        avatar: this.copywriter.avatar,
        status: 'idle',
        message: 'Preparando roteiro com reforço positivo, empatia e ganchos de retenção...',
      },
      {
        role: 'designer',
        name: this.designer.name,
        title: this.designer.title,
        avatar: this.designer.avatar,
        status: 'idle',
        message: 'Aguardando especificações para aplicar paleta oficial Seu Pet Equilibrado...',
      },
      {
        role: 'qa',
        name: this.qa.name,
        title: this.qa.title,
        avatar: this.qa.avatar,
        status: 'idle',
        message: 'Executará Auto-Análise (Safe Zones 4:5, Proporção e Bloqueio de & e travessões)...',
      },
      {
        role: 'publisher',
        name: this.publisher.name,
        title: this.publisher.title,
        avatar: this.publisher.avatar,
        status: 'idle',
        message: 'Pronto para empacotar em alta definição (1080x1350)...',
      },
    ];
  }

  async run(
    input: GenerationInput,
    onProgress?: (agents: AgentStatus[]) => void
  ): Promise<CarouselProject> {
    const agents = this.getInitialAgentStatuses();

    const updateAgent = (role: string, status: AgentStatus['status'], message: string, details?: string) => {
      const target = agents.find((a) => a.role === role);
      if (target) {
        target.status = status;
        target.message = message;
        if (details) target.details = details;
      }
      if (onProgress) onProgress([...agents]);
    };

    // =========================================================================
    // ETAPA 1: AGENTE ESTRATEGISTA DE COMPORTAMENTO CANINO (JOÃO EDUARDO)
    // =========================================================================
    updateAgent('strategist', 'running', 'Analisando a dor do tutor e a causa comportamental do cão...');
    await delay(350);

    const brief = this.strategist.analyze(input);
    updateAgent(
      'strategist',
      'completed',
      'Ângulo comportamental mapeado!',
      `Tema: ${brief.category} | Causa: ${brief.culprit.slice(0, 60)}...`
    );

    // =========================================================================
    // ETAPA 2: AGENTE COPYWRITER & ROTEIRISTA (NICOLLE)
    // =========================================================================
    updateAgent('copywriter', 'running', `Escrevendo roteiro de ${input.slideCount} lâminas com metodologia positiva...`);
    await delay(400);

    // Tenta geração via LLM (OpenRouter / Gemini) ou fallback para motor estratégico local
    let copyOutput = await this.tryLLMGeneration(input, brief);
    if (!copyOutput) {
      copyOutput = this.copywriter.generate(input, brief);
    }

    updateAgent(
      'copywriter',
      'completed',
      `${copyOutput.slides.length} lâminas geradas com sucesso!`,
      `Hook: "${copyOutput.slides[0].headline.slice(0, 50)}..."`
    );

    // =========================================================================
    // ETAPA 3: AGENTE DIRETOR DE ARTE (IDENTIDADE SEU PET EQUILIBRADO)
    // =========================================================================
    updateAgent('designer', 'running', `Formatando no padrão 1080x1350 no estilo ${input.themeStyle}...`);
    await delay(300);

    const styleSpec = this.designer.getStyleSpec(input.themeStyle);
    updateAgent(
      'designer',
      'completed',
      `Estilo ${styleSpec.name} aplicado!`,
      `Paleta oficial Seu Pet Equilibrado: Rose Pastel e Obsidian Deep`
    );

    // =========================================================================
    // ETAPA 4: AGENTE REVISOR DE QUALIDADE (QA & AUTO-ANÁLISE OBRIGATÓRIA)
    // =========================================================================
    updateAgent('qa', 'running', 'Executando Auto-Análise prévia: checando Safe Zones 4:5 e caracteres proibidos...');
    await delay(450);

    const qaReport: QAReport = this.qa.reviewAndAutoCorrect(copyOutput.slides);

    updateAgent(
      'qa',
      'completed',
      `Auto-Análise concluída com nota ${qaReport.score}/100!`,
      `Safe Zones validadas. Bloqueio de & e travessões 100% ativo.`
    );

    // =========================================================================
    // ETAPA 5: AGENTE PUBLICADOR / EXPORTADOR
    // =========================================================================
    updateAgent('publisher', 'completed', 'Pronto para visualização impecável e download!');

    const baseProject: CarouselProject = {
      id: ensureUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      topic: input.topic || 'Passeio Sem Puxar: O método passo a passo para caminhar com guia frouxa',
      targetAudience: 'Tutores de Cães com Desafios Comportamentais e Rotina',
      niche: 'Adestramento e Comportamento Canino',
      slideCount: qaReport.sanitizedSlides.length,
      themeStyle: input.themeStyle,
      caption: copyOutput.caption,
      hashtags: copyOutput.hashtags,
      slides: qaReport.sanitizedSlides,
      status: 'reviewed',
      authorHandle: '@seupetequilibrado',
      qaReport,
    };

    return sanitizeProject(baseProject);
  }

  private async tryLLMGeneration(input: GenerationInput, brief: any): Promise<{ slides: SlideData[]; caption: string; hashtags: string[] } | null> {
    const openrouterKey = process.env.OPENROUTER_API_KEY || process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || (typeof window !== 'undefined' ? localStorage.getItem('seupet_openrouter_key') || localStorage.getItem('innovary_openrouter_key') : null);
    const geminiKey = input.apiKey || process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.GEMINI_API_KEY || (typeof window !== 'undefined' ? localStorage.getItem('seupet_gemini_key') || localStorage.getItem('innovary_gemini_key') : null);

    if (!openrouterKey && !geminiKey) return null;

    const prompt = `Você é o especialista mestre em comportamento e adestramento canino da marca @seupetequilibrado (https://seu-pet-equilibrado.vercel.app/).
Os adestradores responsáveis são João Eduardo (atendimento presencial em Cuiabá e Várzea Grande) e Nicolle (consultoria comportamental online para todo o Brasil).
A metodologia é 100% baseada em estudos científicos, reforço positivo, adequação de rotina e bem-estar do animal, sem nenhum método violento ou aversivo.

Crie um carrossel para Instagram de EXATAMENTE ${input.slideCount} lâminas para tutores de cães.
Tema: "${input.topic || 'Passeio Sem Puxar: O método passo a passo para caminhar com guia frouxa'}"
Categoria: "${brief.category || 'Comportamento Canino'}"
Dor central do tutor: "${brief.corePain}"
Causa comportamental: "${brief.culprit}"
Solução proposta: "${brief.solutionAngle}"

DIRETRIZES FUNDAMENTAIS DE DESIGN E COPY:
1. JAMAIS use o caractere & em nenhum lugar. Sempre escreva "e".
2. JAMAIS use travessão (— ou –) nem hífens isolados no texto.
3. CONCISÃO ABSOLUTA: Textos ultra enxutos (headline máx 75 caracteres, subtítulo máx 100 caracteres) para caber perfeitamente na proporção 4:5 vertical (1080x1350) do Instagram sem corte de texto.
4. Lâmina 1: Gancho instigante que faça o tutor parar o feed imediatamente.
5. Lâmina 2: A dor vivida no dia a dia com empatia.
6. Lâmina 3: O erro comum que tutores cometem sem saber.
7. Lâmina 4: A explicação científica e a solução pelo reforço positivo.
${input.slideCount >= 6 ? '8. Lâmina 5: Passo a passo prático para o tutor testar hoje em casa.' : ''}
${input.slideCount === 7 ? '9. Lâmina 6: Como fica a convivência harmoniosa após o equilíbrio.' : ''}
10. Lâmina final (slide ${input.slideCount}): CTA chamando para enviar mensagem no direct do @seupetequilibrado ou WhatsApp (65 98429-8949) para consultoria presencial em Cuiabá/VG ou online.

Retorne SOMENTE um JSON válido com a seguinte estrutura:
{
  "slides": [
    {
      "slideNumber": 1,
      "type": "hook",
      "badge": "COMPORTAMENTO CANINO",
      "headline": "Título instigante curto",
      "subtitle": "Subtítulo enxuto",
      "ctaButtonText": "Arraste para entender ➔"
    }
  ],
  "caption": "Legenda empática e completa com quebras de linha e chamada para o direct do @seupetequilibrado",
  "hashtags": ["#seupetequilibrado", "#adestramentocanino", "#comportamentocanino", "#adestramentopositivo", "#tutoresdecaes", "#adestradorcuiaba"]
}`;

    // 1. Tenta via OpenRouter se chave configurada
    if (openrouterKey) {
      try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openrouterKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'openai/gpt-4o-mini',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const content = data.choices?.[0]?.message?.content || '';
          const cleanJson = content.replace(/```json/g, '').replace(/```/g, '').trim();
          const parsed = JSON.parse(cleanJson);
          if (parsed.slides && Array.isArray(parsed.slides) && parsed.slides.length > 0) {
            parsed.slides.forEach((s: any, idx: number) => {
              s.id = ensureUUID();
              s.slideNumber = idx + 1;
              s.totalSlides = parsed.slides.length;
              s.headline = sanitizeText(s.headline);
              s.subtitle = sanitizeText(s.subtitle);
              s.badge = sanitizeText(s.badge);
            });
            return {
              slides: parsed.slides,
              caption: sanitizeText(parsed.caption),
              hashtags: parsed.hashtags || [],
            };
          }
        }
      } catch (err) {
        console.warn('OpenRouter call error:', err);
      }
    }

    // 2. Tenta via Google Gemini
    if (geminiKey) {
      try {
        const genAI = new GoogleGenerativeAI(geminiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(prompt);
        const text = result.response.text().trim();
        const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleanJson);

        if (parsed.slides && Array.isArray(parsed.slides) && parsed.slides.length > 0) {
          parsed.slides.forEach((s: any, idx: number) => {
            s.id = ensureUUID();
            s.slideNumber = idx + 1;
            s.totalSlides = parsed.slides.length;
            s.headline = sanitizeText(s.headline);
            s.subtitle = sanitizeText(s.subtitle);
            s.badge = sanitizeText(s.badge);
          });
          return {
            slides: parsed.slides,
            caption: sanitizeText(parsed.caption),
            hashtags: parsed.hashtags || [],
          };
        }
      } catch (e) {
        console.warn('Gemini API call skipped or failed, using built-in strategic engine', e);
      }
    }

    return null;
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
