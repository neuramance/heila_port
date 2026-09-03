import * as stylex from '@stylexjs/stylex';
import Competencies from './competencies';
import ContactActions from './contact-actions';
import HeroVideo from './hero-video';
import LocationBadge from './location-badge';
import { tokens } from './tokens.stylex';

const styles = stylex.create({
  page: {
    position: 'relative',
    height: '100dvh',
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
      '@media (max-width: 480px)': '0.8rem',
      '@media (max-width: 360px)': '0.6rem',
    },
    paddingBottom: {
      default: '2rem',
      '@media (max-width: 768px)': '1.25rem',
      '@media (max-width: 480px)': '0.8rem',
      '@media (max-width: 360px)': '0.6rem',
    },
    paddingLeft: {
      default: '2.5rem',
      '@media (max-width: 768px)': '1.25rem',
      '@media (max-width: 480px)': '0.8rem',
      '@media (max-width: 360px)': '0.6rem',
    },
    paddingRight: {
      default: '2.5rem',
      '@media (max-width: 768px)': '1.25rem',
      '@media (max-width: 480px)': '0.8rem',
      '@media (max-width: 360px)': '0.6rem',
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
    gap: {
      default: '0.45rem',
      '@media (max-width: 480px)': '0.32rem',
      '@media (max-width: 360px)': '0.22rem',
    },
    paddingTop: {
      default: '0.35rem',
      '@media (max-width: 360px)': '0.24rem',
    },
    paddingBottom: {
      default: '0.35rem',
      '@media (max-width: 360px)': '0.24rem',
    },
    paddingLeft: {
      default: '0.75rem',
      '@media (max-width: 480px)': '0.55rem',
      '@media (max-width: 360px)': '0.42rem',
    },
    paddingRight: {
      default: '0.45rem',
      '@media (max-width: 480px)': '0.35rem',
      '@media (max-width: 360px)': '0.24rem',
    },
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
      '@media (max-width: 360px)': '0.58rem',
    },
    letterSpacing: {
      default: '0.08em',
      '@media (max-width: 360px)': '0.04em',
    },
    textTransform: 'uppercase',
    color: tokens.colorTextSecondary,
    whiteSpace: 'nowrap',
    flexShrink: 0,
    minHeight: {
      default: 'auto',
      '@media (max-width: 640px)': 32,
    },
  },
  desktopRole: {
    display: {
      default: 'inline',
      '@media (max-width: 640px)': 'none',
    },
  },
  mobileRole: {
    display: {
      default: 'none',
      '@media (max-width: 640px)': 'inline',
    },
  },
  badgeTag: {
    display: 'inline-flex',
    alignItems: 'center',
    paddingTop: '0.12rem',
    paddingBottom: '0.12rem',
    paddingLeft: {
      default: '0.42rem',
      '@media (max-width: 360px)': '0.28rem',
    },
    paddingRight: {
      default: '0.42rem',
      '@media (max-width: 360px)': '0.28rem',
    },
    borderRadius: 9999,
    backgroundColor: 'rgba(196, 181, 253, 0.12)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(196, 181, 253, 0.3)',
    color: tokens.colorAccent,
    fontSize: {
      default: '0.66rem',
      '@media (max-width: 640px)': '0.6rem',
      '@media (max-width: 360px)': '0.52rem',
    },
    letterSpacing: {
      default: '0.12em',
      '@media (max-width: 360px)': '0.06em',
    },
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
      '@media (max-width: 360px)': '0rem',
    },
    paddingRight: {
      default: '1rem',
      '@media (max-width: 640px)': '0.25rem',
      '@media (max-width: 360px)': '0rem',
    },
  },
  nameHeading: {
    fontFamily: tokens.fontDisplay,
    fontSize: {
      default: 'clamp(6.2rem, 15.5vw, 14.5rem)',
      '@media (max-width: 640px)': 'clamp(3.1rem, 14vw, 5.2rem)',
      '@media (max-width: 380px)': 'clamp(2.4rem, 12.5vw, 3.2rem)',
    },
    fontWeight: 600,
    letterSpacing: {
      default: '-0.035em',
      '@media (max-width: 640px)': '-0.02em',
    },
    lineHeight: 0.92,
    whiteSpace: 'nowrap',
    backgroundImage: 'linear-gradient(180deg, #ffffff 25%, #f5f3ff 65%, #ddd6fe 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter:
      'drop-shadow(0 4px 32px rgba(0, 0, 0, 0.98)) drop-shadow(0 0 65px rgba(196, 181, 253, 0.45))',
    margin: 0,
    userSelect: 'none',
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
      '@media (max-width: 480px)': '4.6rem',
      '@media (max-width: 360px)': '4.2rem',
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
