'use client';

import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';
import { tokens } from './tokens.stylex';

const toastAnim = stylex.keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -10px)' },
  '15%': { opacity: 1, transform: 'translate(-50%, 0)' },
  '85%': { opacity: 1, transform: 'translate(-50%, 0)' },
  '100%': { opacity: 0, transform: 'translate(-50%, -10px)' },
});

const styles = stylex.create({
  navGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: {
      default: '1.25rem',
      '@media (max-width: 640px)': '0.6rem',
    },
  },
  navLink: {
    fontFamily: tokens.fontMono,
    fontSize: {
      default: '0.78rem',
      '@media (max-width: 640px)': '0.7rem',
    },
    letterSpacing: {
      default: '0.12em',
      '@media (max-width: 640px)': '0.08em',
    },
    textTransform: 'uppercase',
    color: {
      default: tokens.colorTextSecondary,
      ':hover': tokens.colorTextPrimary,
    },
    textDecoration: 'none',
    transition: 'color 0.15s ease',
    paddingTop: '0.35rem',
    paddingBottom: '0.35rem',
    paddingLeft: {
      default: '0.4rem',
      '@media (max-width: 640px)': '0.2rem',
    },
    paddingRight: {
      default: '0.4rem',
      '@media (max-width: 640px)': '0.2rem',
    },
  },
  ctaButton: {
    fontFamily: tokens.fontMono,
    fontSize: {
      default: '0.78rem',
      '@media (max-width: 640px)': '0.7rem',
    },
    letterSpacing: {
      default: '0.14em',
      '@media (max-width: 640px)': '0.1em',
    },
    textTransform: 'uppercase',
    color: tokens.colorTextPrimary,
    backgroundColor: {
      default: tokens.colorGlassBg,
      ':hover': tokens.colorGlassBgHover,
    },
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: {
      default: tokens.colorBorder,
      ':hover': tokens.colorBorderHover,
    },
    borderRadius: 9999,
    paddingTop: '0.42rem',
    paddingBottom: '0.42rem',
    paddingLeft: {
      default: '1.1rem',
      '@media (max-width: 640px)': '0.75rem',
    },
    paddingRight: {
      default: '1.1rem',
      '@media (max-width: 640px)': '0.75rem',
    },
    backdropFilter: 'blur(16px)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  toastBadge: {
    position: 'fixed',
    top: '1.75rem',
    left: '50%',
    zIndex: 120,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderRadius: 9999,
    backgroundColor: 'rgba(12, 12, 20, 0.94)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: tokens.colorAccent,
    backdropFilter: 'blur(20px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(196, 181, 253, 0.3)',
    animationName: toastAnim,
    animationDuration: '2.5s',
    animationTimingFunction: 'ease-in-out',
  },
  toastText: {
    fontFamily: tokens.fontMono,
    fontSize: '0.78rem',
    color: tokens.colorTextPrimary,
    letterSpacing: '0.05em',
  },
});

export default function ContactActions() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const email = 'heila.shahidi@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <>
      <nav {...stylex.props(styles.navGroup)} aria-label="Primary Navigation">
        <a
          href="https://github.com/heilashahidi"
          target="_blank"
          rel="noopener noreferrer"
          {...stylex.props(styles.navLink)}
        >
          GitHub
        </a>

        <a
          href="https://x.com/h3ilaa"
          target="_blank"
          rel="noopener noreferrer"
          {...stylex.props(styles.navLink)}
        >
          X
        </a>

        <button
          type="button"
          onClick={handleCopyEmail}
          {...stylex.props(styles.ctaButton)}
          title="Copy email: heila.shahidi@gmail.com"
        >
          Contact
        </button>
      </nav>

      {copied && (
        <div {...stylex.props(styles.toastBadge)} role="status">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={tokens.colorStatusGreen}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span {...stylex.props(styles.toastText)}>Email copied: heila.shahidi@gmail.com</span>
        </div>
      )}
    </>
  );
}
