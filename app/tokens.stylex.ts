import * as stylex from '@stylexjs/stylex';

export const tokens = stylex.defineVars({
  colorBg: '#020204',
  colorTextPrimary: '#ffffff',
  colorTextSecondary: 'rgba(240, 242, 250, 0.85)',
  colorTextMuted: 'rgba(205, 212, 230, 0.55)',
  colorAccent: '#c4b5fd',
  colorAccentGlow: 'rgba(196, 181, 253, 0.25)',
  colorAccentCyan: '#38bdf8',
  colorStatusGreen: '#34d399',
  colorBorder: 'rgba(255, 255, 255, 0.12)',
  colorBorderHover: 'rgba(255, 255, 255, 0.3)',
  colorGlassBg: 'rgba(8, 8, 14, 0.55)',
  colorGlassBgHover: 'rgba(20, 20, 32, 0.75)',
  colorGlassModal: 'rgba(10, 10, 18, 0.92)',
  fontDisplay: 'var(--font-display), "Cinzel", "Times New Roman", serif',
  fontSerif: 'var(--font-serif), "Cormorant Garamond", Georgia, serif',
  fontSans: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif',
  fontMono: 'var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace',
});
