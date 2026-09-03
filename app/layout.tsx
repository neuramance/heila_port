import type { Metadata, Viewport } from 'next';
import { Geist_Mono, Italiana } from 'next/font/google';
import './globals.css';

const italiana = Italiana({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Heila Shahidi | AI Software Engineer',
  description:
    'Portfolio of Heila Shahidi — AI Software Engineer architecting frontier neural systems, autonomous agents, and scalable intelligence.',
  keywords: [
    'Heila Shahidi',
    'AI Software Engineer',
    'Machine Learning',
    'Artificial Intelligence',
    'Autonomous Agents',
    'Neural Systems',
  ],
  authors: [{ name: 'Heila Shahidi' }],
  openGraph: {
    title: 'Heila Shahidi | AI Software Engineer',
    description:
      'Portfolio of Heila Shahidi — AI Software Engineer architecting frontier neural systems and scalable intelligence.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#030305',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${italiana.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
