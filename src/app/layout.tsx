import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Seu Pet Equilibrado | Gerador de Carrosséis de Adestramento Canino com IA',
  description:
    'Sistema inteligente de múltiplos agentes para geração de carrosséis de alta conversão e autoridade sobre adestramento e comportamento canino equilibrado. Seu Pet Equilibrado.',
  keywords: [
    'adestramento canino',
    'comportamento canino',
    'adestramento equilibrado',
    'limites e regras cães',
    'passeio sem puxar',
    'reatividade canina',
    'ansiedade de separação cães',
    'seu pet equilibrado',
    'psicologia canina',
  ],
  authors: [{ name: 'Seu Pet Equilibrado', url: 'https://www.instagram.com/seupetequilibrado' }],
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
      <body className="min-h-screen bg-brand-bg text-white antialiased selection:bg-brand-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
