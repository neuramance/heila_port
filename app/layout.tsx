import type { Metadata, Viewport } from 'next';
import { Cinzel, Cormorant_Garamond, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
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
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
