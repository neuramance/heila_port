'use client';

import * as stylex from '@stylexjs/stylex';
import { useEffect, useRef, useState } from 'react';
import { tokens } from './tokens.stylex';

const pulse = stylex.keyframes({
  '0%': { opacity: 0.4, transform: 'scale(0.92)' },
  '50%': { opacity: 1, transform: 'scale(1.08)' },
  '100%': { opacity: 0.4, transform: 'scale(0.92)' },
});

const styles = stylex.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: 0,
    pointerEvents: 'none',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'contrast(1.04) brightness(0.92)',
  },
  vignette: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'radial-gradient(ellipse at center, rgba(2, 2, 4, 0.28) 0%, rgba(2, 2, 4, 0.65) 65%, rgba(2, 2, 4, 0.92) 100%)',
    zIndex: 1,
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'linear-gradient(to bottom, rgba(2, 2, 4, 0.75) 0%, transparent 20%, transparent 75%, rgba(2, 2, 4, 0.88) 100%)',
    zIndex: 2,
  },
  controlsContainer: {
    position: 'fixed',
    bottom: {
      default: '1.5rem',
      '@media (max-width: 640px)': '1rem',
    },
    right: {
      default: '1.75rem',
      '@media (max-width: 640px)': '1rem',
    },
    zIndex: 30,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    paddingTop: '0.35rem',
    paddingBottom: '0.35rem',
    paddingLeft: '0.65rem',
    paddingRight: '0.65rem',
    backgroundColor: tokens.colorGlassBg,
    backdropFilter: 'blur(16px)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: tokens.colorBorder,
    borderRadius: 9999,
    pointerEvents: 'auto',
  },
  statusIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    paddingRight: '0.35rem',
    borderRightWidth: 1,
    borderRightStyle: 'solid',
    borderRightColor: tokens.colorBorder,
  },
  beaconDot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: tokens.colorStatusGreen,
    boxShadow: '0 0 8px rgba(52, 211, 153, 0.8)',
    animationName: pulse,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
  },
  beaconDotPaused: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: tokens.colorTextMuted,
    boxShadow: 'none',
  },
  statusLabel: {
    fontFamily: tokens.fontMono,
    fontSize: '0.68rem',
    letterSpacing: '0.08em',
    color: tokens.colorTextMuted,
    textTransform: 'uppercase',
  },
  controlButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: {
      default: 'transparent',
      ':hover': 'rgba(255, 255, 255, 0.1)',
    },
    borderWidth: 0,
    borderRadius: '50%',
    color: {
      default: tokens.colorTextSecondary,
      ':hover': tokens.colorTextPrimary,
    },
    cursor: 'pointer',
    transition: 'all 0.15s ease',
  },
});

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      setIsPlaying(false);
    });
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <>
      <div {...stylex.props(styles.wrapper)} aria-hidden="true">
        <video
          ref={videoRef}
          src="/heila_compressed.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          {...stylex.props(styles.video)}
        />
        <div {...stylex.props(styles.vignette)} />
        <div {...stylex.props(styles.gradientOverlay)} />
      </div>

      <div {...stylex.props(styles.controlsContainer)} role="region" aria-label="Video Controls">
        <div {...stylex.props(styles.statusIndicator)}>
          <div {...stylex.props(isPlaying ? styles.beaconDot : styles.beaconDotPaused)} />
          <span {...stylex.props(styles.statusLabel)}>{isPlaying ? 'Live Stream' : 'Paused'}</span>
        </div>

        <button
          type="button"
          onClick={togglePlayback}
          {...stylex.props(styles.controlButton)}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <rect x="5" y="4" width="4" height="16" rx="1" />
              <rect x="15" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6 4 20 12 6 20 6 4" />
            </svg>
          )}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          {...stylex.props(styles.controlButton)}
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
