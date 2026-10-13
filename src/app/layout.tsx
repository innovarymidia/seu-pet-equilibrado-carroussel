import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Seu Pet Equilibrado | Gerador de Carrosséis para Tutores e Adestramento Canino',
  description:
    'Sistema inteligente de múltiplos agentes especializado na produção de conteúdo de alto impacto e autoridade sobre adestramento, psicologia e comportamento canino para tutores. Seu Pet Equilibrado.',
  keywords: [
    'adestramento canino',
    'comportamento canino',
    'tutores de caes',
    'passeio sem puxar',
    'reatividade canina',
    'ansiedade de separacao',
    'xixi e coco no lugar certo',
    'adestrador cuiaba',
    'consultoria comportamental online',
    'reforco positivo',
    'seu pet equilibrado',
  ],
  authors: [{ name: 'Seu Pet Equilibrado', url: 'https://seu-pet-equilibrado.vercel.app/' }],
  icons: {
    icon: '/pet-logo-circle.png',
    apple: '/pet-logo-circle.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen bg-brand-bg text-white antialiased selection:bg-brand-rose selection:text-brand-darkText">
        {children}
      </body>
    </html>
  );
}
