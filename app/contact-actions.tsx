'use client';

import * as stylex from '@stylexjs/stylex';
import { useEffect, useState } from 'react';
import { tokens } from './tokens.stylex';

const fadeIn = stylex.keyframes({
  '0%': { opacity: 0, transform: 'scale(0.96) translateY(8px)' },
  '100%': { opacity: 1, transform: 'scale(1) translateY(0)' },
});

const toastAnim = stylex.keyframes({
  '0%': { opacity: 0, transform: 'translateY(-10px)' },
  '15%': { opacity: 1, transform: 'translateY(0)' },
  '85%': { opacity: 1, transform: 'translateY(0)' },
  '100%': { opacity: 0, transform: 'translateY(-10px)' },
});

const styles = stylex.create({
  navGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: {
      default: '1.25rem',
      '@media (max-width: 640px)': '0.35rem',
    },
  },
  navLink: {
    fontFamily: tokens.fontMono,
    fontSize: {
      default: '0.8rem',
      '@media (max-width: 640px)': '0.68rem',
    },
    letterSpacing: {
      default: '0.12em',
      '@media (max-width: 640px)': '0.06em',
    },
    textTransform: 'uppercase',
    color: {
      default: tokens.colorTextSecondary,
      ':hover': tokens.colorTextPrimary,
    },
    textDecoration: 'none',
    transition: 'color 0.15s ease',
    backgroundColor: 'transparent',
    borderWidth: 0,
    cursor: 'pointer',
    paddingTop: '0.35rem',
    paddingBottom: '0.35rem',
    paddingLeft: {
      default: '0.5rem',
      '@media (max-width: 640px)': '0.25rem',
    },
    paddingRight: {
      default: '0.5rem',
      '@media (max-width: 640px)': '0.25rem',
    },
  },
  ctaButton: {
    fontFamily: tokens.fontMono,
    fontSize: {
      default: '0.8rem',
      '@media (max-width: 640px)': '0.68rem',
    },
    letterSpacing: {
      default: '0.14em',
      '@media (max-width: 640px)': '0.08em',
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
    paddingTop: '0.45rem',
    paddingBottom: '0.45rem',
    paddingLeft: {
      default: '1.1rem',
      '@media (max-width: 640px)': '0.65rem',
    },
    paddingRight: {
      default: '1.1rem',
      '@media (max-width: 640px)': '0.65rem',
    },
    backdropFilter: 'blur(16px)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  modalBackdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(2, 2, 4, 0.78)',
    backdropFilter: 'blur(18px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    padding: '1.5rem',
  },
  modalContent: {
    position: 'relative',
    maxWidth: 680,
    width: '100%',
    maxHeight: '88vh',
    overflowY: 'auto',
    backgroundColor: tokens.colorGlassModal,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: tokens.colorBorderHover,
    borderRadius: 16,
    padding: {
      default: '2.5rem',
      '@media (max-width: 640px)': '1.5rem',
    },
    boxShadow: '0 24px 70px rgba(0, 0, 0, 0.8), 0 0 40px rgba(196, 181, 253, 0.12)',
    animationName: fadeIn,
    animationDuration: '0.22s',
    animationTimingFunction: 'ease-out',
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '2rem',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.colorBorder,
    paddingBottom: '1.25rem',
  },
  modalEyebrow: {
    fontFamily: tokens.fontMono,
    fontSize: '0.72rem',
    letterSpacing: '0.15em',
    color: tokens.colorAccent,
    textTransform: 'uppercase',
    marginBottom: '0.4rem',
  },
  modalTitle: {
    fontFamily: tokens.fontDisplay,
    fontSize: '1.85rem',
    fontWeight: 600,
    color: tokens.colorTextPrimary,
    letterSpacing: '0.04em',
  },
  closeButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: '50%',
    backgroundColor: {
      default: 'rgba(255, 255, 255, 0.05)',
      ':hover': 'rgba(255, 255, 255, 0.15)',
    },
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: tokens.colorBorder,
    color: tokens.colorTextSecondary,
    cursor: 'pointer',
    transition: 'all 0.15s ease',
  },
  pillarGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  pillarCard: {
    padding: '1.25rem',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: tokens.colorBorder,
    transition: 'border-color 0.2s ease',
  },
  pillarNum: {
    fontFamily: tokens.fontMono,
    fontSize: '0.7rem',
    color: tokens.colorAccent,
    letterSpacing: '0.15em',
    marginBottom: '0.3rem',
  },
  pillarHeading: {
    fontFamily: tokens.fontSans,
    fontSize: '1.05rem',
    fontWeight: 600,
    color: tokens.colorTextPrimary,
    marginBottom: '0.35rem',
    letterSpacing: '0.02em',
  },
  pillarText: {
    fontFamily: tokens.fontSans,
    fontSize: '0.88rem',
    lineHeight: 1.55,
    color: tokens.colorTextSecondary,
  },
  toastBadge: {
    position: 'fixed',
    top: '1.75rem',
    left: '50%',
    transform: 'translateX(-50%)',
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
  const [showExpertise, setShowExpertise] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowExpertise(false);
      }
    };
    if (showExpertise) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showExpertise]);

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
        <button
          type="button"
          onClick={() => setShowExpertise(true)}
          {...stylex.props(styles.navLink)}
        >
          Expertise
        </button>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          {...stylex.props(styles.navLink)}
        >
          GitHub
        </a>

        <a
          href="https://x.com"
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

      {showExpertise && (
        <div
          {...stylex.props(styles.modalBackdrop)}
          onClick={() => setShowExpertise(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div {...stylex.props(styles.modalContent)} onClick={(e) => e.stopPropagation()}>
            <div {...stylex.props(styles.modalHeader)}>
              <div>
                <p {...stylex.props(styles.modalEyebrow)}>Technical Architecture & Research</p>
                <h2 id="modal-title" {...stylex.props(styles.modalTitle)}>
                  Core AI Disciplines
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setShowExpertise(false)}
                {...stylex.props(styles.closeButton)}
                aria-label="Close dialog"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div {...stylex.props(styles.pillarGrid)}>
              <div {...stylex.props(styles.pillarCard)}>
                <p {...stylex.props(styles.pillarNum)}>01 · FOUNDATION MODELS</p>
                <h3 {...stylex.props(styles.pillarHeading)}>Neural Architecture & Pretraining</h3>
                <p {...stylex.props(styles.pillarText)}>
                  Scalable Transformer designs, State Space Models (Mamba), Mixture-of-Experts
                  routing, and parameter-efficient fine-tuning across multimodal token streams.
                </p>
              </div>

              <div {...stylex.props(styles.pillarCard)}>
                <p {...stylex.props(styles.pillarNum)}>02 · AGENTIC SYSTEMS</p>
                <h3 {...stylex.props(styles.pillarHeading)}>Autonomous Reasoning & Cognition</h3>
                <p {...stylex.props(styles.pillarText)}>
                  State-graph orchestration, tool-augmented verification loops, Monte Carlo tree
                  search for code generation, and multi-agent coordination topologies.
                </p>
              </div>

              <div {...stylex.props(styles.pillarCard)}>
                <p {...stylex.props(styles.pillarNum)}>03 · DISTRIBUTED INFERENCE</p>
                <h3 {...stylex.props(styles.pillarHeading)}>
                  High-Throughput Serving & Optimization
                </h3>
                <p {...stylex.props(styles.pillarText)}>
                  Custom vLLM / TensorRT-LLM runtimes, PagedAttention, continuous batching, FP8/INT4
                  quantization, speculative decoding, and sub-10ms time-to-first-token latencies.
                </p>
              </div>

              <div {...stylex.props(styles.pillarCard)}>
                <p {...stylex.props(styles.pillarNum)}>04 · INFRASTRUCTURE</p>
                <h3 {...stylex.props(styles.pillarHeading)}>GPU Systems & Accelerated Computing</h3>
                <p {...stylex.props(styles.pillarText)}>
                  PyTorch, Triton kernels, CUDA C++, NCCL collective communication, InfiniBand
                  clustering, and resilient distributed model serving at global scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
