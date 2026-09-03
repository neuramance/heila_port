'use client';

import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';
import { tokens } from './tokens.stylex';

type Competency = {
  id: string;
  label: string;
  detail: string;
  tech: string[];
};

const competencies: Competency[] = [
  {
    id: 'agents',
    label: 'Autonomous AI Agents',
    detail: 'Voice AI agents, real-time STT/TTS synthesis pipelines, and LLM reasoning workflows.',
    tech: ['Voice AI', 'LLMs', 'LangChain', 'FastAPI', 'Python'],
  },
  {
    id: 'distributed',
    label: 'Real-Time & Distributed',
    detail:
      'High-throughput Rust order matching engines, event-driven pipelines, and serverless architectures.',
    tech: ['Rust', 'EventBridge', 'SQS', 'Solana', 'Low-Latency'],
  },
  {
    id: 'fullstack',
    label: 'Full-Stack Architecture',
    detail:
      'Production-grade reactive applications with strict type safety and modern web standards.',
    tech: ['React 19', 'Next.js', 'TypeScript', 'StyleX', 'Node.js'],
  },
  {
    id: 'education',
    label: 'UT Austin • MS SE',
    detail: "Master's student in Software Engineering at UT Austin; Xilinx-MATRIX AI Fellow.",
    tech: ['UT Austin', 'Software Engineering', 'AI Fellow'],
  },
];

const fadeIn = stylex.keyframes({
  '0%': { opacity: 0, transform: 'translateY(4px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: {
      default: '1.1rem',
      '@media (max-width: 640px)': '0.65rem',
    },
    maxWidth: 720,
    width: '100%',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    boxSizing: 'border-box',
  },
  bioStatement: {
    fontFamily: tokens.fontSans,
    fontSize: {
      default: 'clamp(0.92rem, 1.3vw, 1.06rem)',
      '@media (max-width: 640px)': '0.78rem',
    },
    lineHeight: {
      default: 1.55,
      '@media (max-width: 640px)': 1.38,
    },
    color: tokens.colorTextSecondary,
    textAlign: 'center',
    margin: 0,
    marginBottom: {
      default: '0.9rem',
      '@media (max-width: 640px)': '0.55rem',
    },
    maxWidth: 580,
    textShadow: '0 2px 16px rgba(0, 0, 0, 0.9)',
  },
  chipList: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: {
      default: '0.5rem',
      '@media (max-width: 640px)': '0.35rem',
    },
  },
  chipButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    paddingTop: {
      default: '0.35rem',
      '@media (max-width: 640px)': '0.26rem',
    },
    paddingBottom: {
      default: '0.35rem',
      '@media (max-width: 640px)': '0.26rem',
    },
    paddingLeft: {
      default: '0.75rem',
      '@media (max-width: 640px)': '0.5rem',
    },
    paddingRight: {
      default: '0.75rem',
      '@media (max-width: 640px)': '0.5rem',
    },
    borderRadius: 9999,
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
    backdropFilter: 'blur(16px)',
    fontFamily: tokens.fontMono,
    fontSize: {
      default: '0.72rem',
      '@media (max-width: 640px)': '0.62rem',
    },
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: tokens.colorTextSecondary,
    cursor: 'pointer',
    transition: 'all 0.18s ease',
    userSelect: 'none',
  },
  chipButtonActive: {
    backgroundColor: 'rgba(196, 181, 253, 0.16)',
    borderColor: tokens.colorAccent,
    color: tokens.colorTextPrimary,
    boxShadow: '0 0 20px rgba(196, 181, 253, 0.25)',
  },
  chipDot: {
    width: 5,
    height: 5,
    borderRadius: '50%',
    backgroundColor: tokens.colorAccent,
    opacity: 0.65,
  },
  chipDotActive: {
    opacity: 1,
    boxShadow: '0 0 8px rgba(196, 181, 253, 0.9)',
  },
  detailCard: {
    marginTop: {
      default: '0.75rem',
      '@media (max-width: 640px)': '0.45rem',
    },
    paddingTop: {
      default: '0.6rem',
      '@media (max-width: 640px)': '0.45rem',
    },
    paddingBottom: {
      default: '0.6rem',
      '@media (max-width: 640px)': '0.45rem',
    },
    paddingLeft: {
      default: '1rem',
      '@media (max-width: 640px)': '0.7rem',
    },
    paddingRight: {
      default: '1rem',
      '@media (max-width: 640px)': '0.7rem',
    },
    borderRadius: 10,
    backgroundColor: 'rgba(10, 10, 18, 0.82)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: tokens.colorBorder,
    backdropFilter: 'blur(20px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.4rem',
    maxWidth: 560,
    width: '100%',
    boxSizing: 'border-box',
    animationName: fadeIn,
    animationDuration: '0.2s',
    animationTimingFunction: 'ease-out',
  },
  detailText: {
    fontFamily: tokens.fontSans,
    fontSize: {
      default: '0.82rem',
      '@media (max-width: 640px)': '0.72rem',
    },
    lineHeight: 1.45,
    color: tokens.colorTextSecondary,
    textAlign: 'center',
    margin: 0,
  },
  techPills: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.35rem',
  },
  techPill: {
    fontFamily: tokens.fontMono,
    fontSize: {
      default: '0.66rem',
      '@media (max-width: 640px)': '0.58rem',
    },
    letterSpacing: '0.06em',
    color: tokens.colorAccent,
    backgroundColor: 'rgba(196, 181, 253, 0.1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(196, 181, 253, 0.25)',
    borderRadius: 4,
    paddingTop: '0.1rem',
    paddingBottom: '0.1rem',
    paddingLeft: '0.4rem',
    paddingRight: '0.4rem',
  },
});

export default function Competencies() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const toggleCompetency = (id: string) => {
    setSelectedId((current) => (current === id ? null : id));
  };

  const activeCompetency = competencies.find((c) => c.id === selectedId);

  return (
    <div {...stylex.props(styles.container)}>
      <p {...stylex.props(styles.bioStatement)}>
        Software engineer architecting autonomous AI voice agents, real-time engines, and
        distributed platforms with mathematical rigor.
      </p>

      <div
        {...stylex.props(styles.chipList)}
        role="tablist"
        aria-label="Core Technical Competencies"
      >
        {competencies.map((comp) => {
          const isActive = comp.id === selectedId;
          return (
            <button
              key={comp.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => toggleCompetency(comp.id)}
              {...stylex.props(styles.chipButton, isActive && styles.chipButtonActive)}
            >
              <span
                {...stylex.props(styles.chipDot, isActive && styles.chipDotActive)}
                aria-hidden="true"
              />
              <span>{comp.label}</span>
            </button>
          );
        })}
      </div>

      {activeCompetency && (
        <div {...stylex.props(styles.detailCard)} role="tabpanel">
          <p {...stylex.props(styles.detailText)}>{activeCompetency.detail}</p>
          <div {...stylex.props(styles.techPills)}>
            {activeCompetency.tech.map((item) => (
              <span key={item} {...stylex.props(styles.techPill)}>
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
