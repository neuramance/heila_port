import * as stylex from '@stylexjs/stylex';
import Competencies from './competencies';
import ContactActions from './contact-actions';
import HeroVideo from './hero-video';
import LocationBadge from './location-badge';
import { tokens } from './tokens.stylex';

const styles = stylex.create({
  page: {
    position: 'relative',
    height: '100vh',
    maxHeight: '100dvh',
    width: '100vw',
    maxWidth: '100vw',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: {
      default: '2rem',
      '@media (max-width: 768px)': '1.25rem',
      '@media (max-width: 480px)': '0.9rem',
    },
    paddingBottom: {
      default: '2rem',
      '@media (max-width: 768px)': '1.25rem',
      '@media (max-width: 480px)': '0.9rem',
    },
    paddingLeft: {
      default: '2.5rem',
      '@media (max-width: 768px)': '1.25rem',
      '@media (max-width: 480px)': '0.9rem',
    },
    paddingRight: {
      default: '2.5rem',
      '@media (max-width: 768px)': '1.25rem',
      '@media (max-width: 480px)': '0.9rem',
    },
    backgroundColor: tokens.colorBg,
    color: tokens.colorTextPrimary,
    boxSizing: 'border-box',
  },
  header: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45rem',
    paddingTop: '0.35rem',
    paddingBottom: '0.35rem',
    paddingLeft: '0.75rem',
    paddingRight: '0.45rem',
    borderRadius: 9999,
    backgroundColor: tokens.colorGlassBg,
    backdropFilter: 'blur(16px)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: tokens.colorBorder,
    fontFamily: tokens.fontMono,
    fontSize: {
      default: '0.74rem',
      '@media (max-width: 640px)': '0.66rem',
    },
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: tokens.colorTextSecondary,
  },
  desktopRole: {
    display: {
      default: 'inline',
      '@media (max-width: 480px)': 'none',
    },
  },
  mobileRole: {
    display: {
      default: 'none',
      '@media (max-width: 480px)': 'inline',
    },
  },
  badgeTag: {
    display: 'inline-flex',
    alignItems: 'center',
    paddingTop: '0.12rem',
    paddingBottom: '0.12rem',
    paddingLeft: '0.42rem',
    paddingRight: '0.42rem',
    borderRadius: 9999,
    backgroundColor: 'rgba(196, 181, 253, 0.12)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(196, 181, 253, 0.3)',
    color: tokens.colorAccent,
    fontSize: {
      default: '0.66rem',
      '@media (max-width: 640px)': '0.6rem',
    },
    letterSpacing: '0.12em',
    fontWeight: 500,
  },
  heroCenter: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexGrow: 1,
    paddingLeft: {
      default: '1rem',
      '@media (max-width: 640px)': '0.25rem',
    },
    paddingRight: {
      default: '1rem',
      '@media (max-width: 640px)': '0.25rem',
    },
  },
  nameHeading: {
    fontFamily: tokens.fontDisplay,
    fontSize: {
      default: 'clamp(5.2rem, 13.5vw, 12.5rem)',
      '@media (max-width: 640px)': 'clamp(3.4rem, 14vw, 5.4rem)',
    },
    fontWeight: 400,
    letterSpacing: {
      default: '-0.04em',
      '@media (max-width: 640px)': '-0.025em',
    },
    lineHeight: 0.94,
    color: tokens.colorTextPrimary,
    margin: 0,
    userSelect: 'none',
    textShadow:
      '0 2px 32px rgba(0, 0, 0, 0.98), 0 0 80px rgba(196, 181, 253, 0.4), 0 0 140px rgba(167, 139, 250, 0.25)',
  },
  footer: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: {
      default: '7rem',
      '@media (max-width: 640px)': '5.5rem',
    },
    boxSizing: 'border-box',
  },
  footerCenter: {
    fontFamily: tokens.fontMono,
    fontSize: '0.7rem',
    letterSpacing: '0.12em',
    color: tokens.colorTextMuted,
    textTransform: 'uppercase',
    display: {
      default: 'block',
      '@media (max-width: 768px)': 'none',
    },
  },
});

export default function Home() {
  return (
    <main {...stylex.props(styles.page)}>
      <HeroVideo />

      <header {...stylex.props(styles.header)}>
        <div {...stylex.props(styles.badge)}>
          <span {...stylex.props(styles.desktopRole)}>Software Engineer</span>
          <span {...stylex.props(styles.mobileRole)}>SWE</span>
          <span {...stylex.props(styles.badgeTag)}>AI</span>
        </div>

        <ContactActions />
      </header>

      <section {...stylex.props(styles.heroCenter)}>
        <h1 {...stylex.props(styles.nameHeading)}>Heila Shahidi</h1>
        <Competencies />
      </section>

      <footer {...stylex.props(styles.footer)}>
        <LocationBadge />
        <span {...stylex.props(styles.footerCenter)}>
          Engineering Intelligent Software & Systems
        </span>
      </footer>
    </main>
  );
}
