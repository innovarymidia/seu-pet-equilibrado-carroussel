import JSZip from 'jszip';
import { toBlob } from 'html-to-image';
import { CarouselProject } from '../types';

export class PublisherAgent {
  name = 'Publicador';
  title = 'Comandante de Exportação em Alta Definição & Meta Sync';
  avatar = '📦';

  /**
   * Empacota todos os slides do carrossel em um arquivo .ZIP em alta resolução
   */
  async exportToZip(
    project: CarouselProject,
    slideElements: HTMLElement[],
    onProgress?: (percent: number, current: number, total: number) => void
  ): Promise<Blob> {
    const zip = new JSZip();
    const folder = zip.folder(`seupet-carrossel-${project.id.slice(0, 8)}`);

    const total = slideElements.length;

    for (let i = 0; i < total; i++) {
      const element = slideElements[i];
      if (element) {
        // Renderiza no tamanho exato de 1080x1350 definido no container com qualidade máxima
        const blob = await toBlob(element, {
          quality: 0.98,
          pixelRatio: 1,
          cacheBust: true,
        });

        if (blob && folder) {
          const fileName = `slide-${String(i + 1).padStart(2, '0')}.png`;
          folder.file(fileName, blob);
        }
      }

      if (onProgress) {
        onProgress(Math.round(((i + 1) / total) * 100), i + 1, total);
      }
    }

    // Adiciona arquivo de texto com a legenda e hashtags
    if (folder) {
      const readmeContent = `==================================================
SEU PET EQUILIBRADO | CARROSSEL OFICIAL
Adestramento e Comportamento Canino
Instagram: @seupetequilibrado
Site: https://seu-pet-equilibrado.vercel.app/
WhatsApp: +55 (65) 98429-8949
==================================================

Tema: ${project.topic}
Total de Lâminas: ${project.slideCount}
Estilo Visual: ${project.themeStyle}

==================================================
LEGENDA PRONTA PARA O INSTAGRAM:
==================================================

${project.caption}

${project.hashtags.join(' ')}

==================================================
INSTRUÇÕES DE POSTAGEM:
==================================================
1. Abra o Instagram no celular ou o Meta Business Suite no computador.
2. Crie uma publicação e selecione as imagens em ordem numérica (slide-01.png até slide-${String(total).padStart(2, '0')}.png).
3. Cole a legenda acima e adicione a localização (Cuiabá / MT ou Brasil).
4. Melhores horários para engajamento de tutores: 07h30 às 09h, 12h às 13h30 ou 19h às 21h30.
5. Responda todos os comentários e directs direcionando para agendamento!
`;
      folder.file('legenda-e-instrucoes.txt', readmeContent);
    }

    return await zip.generateAsync({ type: 'blob' });
  }

  /**
   * Baixa um único slide como PNG de alta resolução
   */
  async exportSingleSlide(element: HTMLElement, slideIndex: number): Promise<Blob | null> {
    return await toBlob(element, {
      quality: 0.98,
      pixelRatio: 1,
      cacheBust: true,
    });
  }

  /**
   * Estrutura da Instagram Graph API para publicação automática futura
   */
  async publishToInstagram(
    imageUrls: string[],
    caption: string,
    credentials: { instagramAccountId: string; accessToken: string }
  ): Promise<{ success: boolean; postId?: string; error?: string }> {
    if (!credentials.accessToken || !credentials.instagramAccountId) {
      return {
        success: false,
        error: 'Credenciais da Instagram Graph API não configuradas. Utilize o modo de download do ZIP.',
      };
    }

    try {
      // 1. Criar container de cada item do carrossel
      const itemContainerIds: string[] = [];
      for (const imageUrl of imageUrls) {
        const itemRes = await fetch(
          `https://graph.facebook.com/v19.0/${credentials.instagramAccountId}/media`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              image_url: imageUrl,
              is_carousel_item: true,
              access_token: credentials.accessToken,
            }),
          }
        );
        const itemData = await itemRes.json();
        if (itemData.id) {
          itemContainerIds.push(itemData.id);
        } else {
          throw new Error(itemData.error?.message || 'Falha ao criar item do carrossel');
        }
      }

      // 2. Criar o container principal do carrossel
      const carouselRes = await fetch(
        `https://graph.facebook.com/v19.0/${credentials.instagramAccountId}/media`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            media_type: 'CAROUSEL',
            children: itemContainerIds,
            caption: caption,
            access_token: credentials.accessToken,
          }),
        }
      );
      const carouselData = await carouselRes.json();
      if (!carouselData.id) {
        throw new Error(carouselData.error?.message || 'Falha ao criar carrossel principal');
      }

      // 3. Publicar o container
      const publishRes = await fetch(
        `https://graph.facebook.com/v19.0/${credentials.instagramAccountId}/media_publish`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            creation_id: carouselData.id,
            access_token: credentials.accessToken,
          }),
        }
      );
      const publishData = await publishRes.json();

      return {
        success: true,
        postId: publishData.id,
      };
    } catch (err: any) {
      return {
        success: false,
        error: err.message || 'Erro na comunicação com a Graph API da Meta',
      };
    }
  }
}
