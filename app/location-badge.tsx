'use client';

import * as stylex from '@stylexjs/stylex';
import { useState, useSyncExternalStore } from 'react';
import { tokens } from './tokens.stylex';

function getAustinTime(): string {
  try {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Chicago',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).format(new Date());
  } catch {
    return '';
  }
}

function subscribe(callback: () => void) {
  const interval = setInterval(callback, 15000);
  return () => clearInterval(interval);
}

function getSnapshot(): string {
  return getAustinTime();
}

function getServerSnapshot(): string {
  return '';
}

const styles = stylex.create({
  badgeButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: {
      default: '0.45rem',
      '@media (max-width: 640px)': '0.35rem',
      '@media (max-width: 380px)': '0.25rem',
    },
    paddingTop: {
      default: '0.35rem',
      '@media (max-width: 380px)': '0.26rem',
    },
    paddingBottom: {
      default: '0.35rem',
      '@media (max-width: 380px)': '0.26rem',
    },
    paddingLeft: {
      default: '0.7rem',
      '@media (max-width: 640px)': '0.55rem',
      '@media (max-width: 380px)': '0.42rem',
    },
    paddingRight: {
      default: '0.7rem',
      '@media (max-width: 640px)': '0.55rem',
      '@media (max-width: 380px)': '0.42rem',
    },
    minHeight: {
      default: 'auto',
      '@media (max-width: 640px)': 28,
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
      '@media (max-width: 380px)': '0.54rem',
    },
    letterSpacing: {
      default: '0.08em',
      '@media (max-width: 380px)': '0.04em',
    },
    textTransform: 'uppercase',
    color: tokens.colorTextSecondary,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    touchAction: 'manipulation',
  },
  iconWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: tokens.colorAccent,
  },
  divider: {
    color: tokens.colorTextMuted,
    opacity: 0.6,
  },
  timeText: {
    color: tokens.colorAccent,
    fontWeight: 500,
  },
  coordsText: {
    color: tokens.colorTextPrimary,
    letterSpacing: '0.06em',
  },
});

export default function LocationBadge() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [showCoords, setShowCoords] = useState(false);

  const toggleMode = () => {
    setShowCoords((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={toggleMode}
      {...stylex.props(styles.badgeButton)}
      aria-label={
        showCoords ? 'Austin coordinates: 30.2672° N, 97.7431° W' : 'Location: Austin, TX, USA'
      }
      title={showCoords ? 'Click to show local time' : 'Click to show coordinates'}
    >
      <span {...stylex.props(styles.iconWrapper)} aria-hidden="true">
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <polygon
            points="12 3 14.5 9.5 21 12 14.5 14.5 12 21 9.5 14.5 3 12 9.5 9.5 12 3"
            fill="currentColor"
            fillOpacity="0.25"
          />
        </svg>
      </span>

      {showCoords ? (
        <span {...stylex.props(styles.coordsText)}>30.2672° N, 97.7431° W</span>
      ) : (
        <>
          <span>Austin, TX, USA</span>
          {time && (
            <>
              <span {...stylex.props(styles.divider)}>•</span>
              <span {...stylex.props(styles.timeText)}>{time} CT</span>
            </>
          )}
        </>
      )}
    </button>
  );
}
