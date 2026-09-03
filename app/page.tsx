import * as stylex from '@stylexjs/stylex';
import ContactActions from './contact-actions';
import HeroVideo from './hero-video';
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
      '@media (max-width: 480px)': '1rem',
    },
    paddingBottom: {
      default: '2rem',
      '@media (max-width: 768px)': '1.25rem',
      '@media (max-width: 480px)': '1rem',
    },
    paddingLeft: {
      default: '2.5rem',
      '@media (max-width: 768px)': '1.25rem',
      '@media (max-width: 480px)': '0.85rem',
    },
    paddingRight: {
      default: '2.5rem',
      '@media (max-width: 768px)': '1.25rem',
      '@media (max-width: 480px)': '0.85rem',
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
    gap: '0.55rem',
    paddingTop: '0.4rem',
    paddingBottom: '0.4rem',
    paddingLeft: '0.85rem',
    paddingRight: '0.85rem',
    borderRadius: 9999,
    backgroundColor: tokens.colorGlassBg,
    backdropFilter: 'blur(16px)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: tokens.colorBorder,
  },
  beaconDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    backgroundColor: tokens.colorStatusGreen,
    boxShadow: '0 0 10px rgba(52, 211, 153, 0.9)',
  },
  badgeTextDesktop: {
    display: {
      default: 'inline',
      '@media (max-width: 640px)': 'none',
    },
    fontFamily: tokens.fontMono,
    fontSize: '0.74rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: tokens.colorTextSecondary,
  },
  badgeTextMobile: {
    display: {
      default: 'none',
      '@media (max-width: 640px)': 'inline',
    },
    fontFamily: tokens.fontMono,
    fontSize: '0.66rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: tokens.colorTextSecondary,
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
      '@media (max-width: 640px)': 0,
    },
    paddingRight: {
      default: '1rem',
      '@media (max-width: 640px)': 0,
    },
  },
  eyebrow: {
    fontFamily: tokens.fontMono,
    fontSize: {
      default: '0.8rem',
      '@media (max-width: 640px)': '0.68rem',
    },
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: tokens.colorAccent,
    marginBottom: {
      default: '1.25rem',
      '@media (max-width: 640px)': '0.75rem',
    },
    paddingTop: '0.35rem',
    paddingBottom: '0.35rem',
    paddingLeft: '0.95rem',
    paddingRight: '0.95rem',
    borderRadius: 9999,
    backgroundColor: 'rgba(196, 181, 253, 0.08)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(196, 181, 253, 0.25)',
    backdropFilter: 'blur(12px)',
  },
  nameHeading: {
    fontFamily: tokens.fontDisplay,
    fontSize: {
      default: 'clamp(3.4rem, 8.8vw, 8.5rem)',
      '@media (max-width: 640px)': 'clamp(2.3rem, 10.5vw, 3.5rem)',
    },
    fontWeight: 700,
    letterSpacing: {
      default: '0.07em',
      '@media (max-width: 640px)': '0.04em',
    },
    lineHeight: 1.02,
    textTransform: 'uppercase',
    color: tokens.colorTextPrimary,
    margin: 0,
    textShadow: '0 0 45px rgba(255, 255, 255, 0.24), 0 0 90px rgba(196, 181, 253, 0.18)',
  },
  roleSubheading: {
    fontFamily: tokens.fontSans,
    fontSize: {
      default: 'clamp(1rem, 2vw, 1.35rem)',
      '@media (max-width: 640px)': '0.85rem',
    },
    fontWeight: 500,
    letterSpacing: {
      default: '0.24em',
      '@media (max-width: 640px)': '0.18em',
    },
    textTransform: 'uppercase',
    color: tokens.colorTextSecondary,
    marginTop: {
      default: '1.2rem',
      '@media (max-width: 640px)': '0.7rem',
    },
    marginBottom: {
      default: '1.35rem',
      '@media (max-width: 640px)': '0.75rem',
    },
  },
  statement: {
    fontFamily: tokens.fontSans,
    fontSize: {
      default: 'clamp(0.95rem, 1.4vw, 1.15rem)',
      '@media (max-width: 640px)': '0.82rem',
    },
    lineHeight: 1.55,
    color: tokens.colorTextSecondary,
    maxWidth: 660,
    margin: 0,
    marginBottom: {
      default: '2rem',
      '@media (max-width: 640px)': '1rem',
    },
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: {
      default: '0.65rem',
      '@media (max-width: 640px)': '0.35rem',
    },
  },
  chip: {
    fontFamily: tokens.fontMono,
    fontSize: {
      default: '0.72rem',
      '@media (max-width: 640px)': '0.6rem',
    },
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: tokens.colorTextSecondary,
    paddingTop: {
      default: '0.4rem',
      '@media (max-width: 640px)': '0.28rem',
    },
    paddingBottom: {
      default: '0.4rem',
      '@media (max-width: 640px)': '0.28rem',
    },
    paddingLeft: {
      default: '0.85rem',
      '@media (max-width: 640px)': '0.55rem',
    },
    paddingRight: {
      default: '0.85rem',
      '@media (max-width: 640px)': '0.55rem',
    },
    borderRadius: 6,
    backgroundColor: tokens.colorGlassBg,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: tokens.colorBorder,
    backdropFilter: 'blur(12px)',
  },
  footer: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: {
      default: '12rem',
      '@media (max-width: 768px)': '7.5rem',
      '@media (max-width: 640px)': '0',
    },
    boxSizing: 'border-box',
  },
  footerMeta: {
    display: {
      default: 'flex',
      '@media (max-width: 640px)': 'none',
    },
    flexDirection: 'column',
    gap: '0.2rem',
  },
  footerMono: {
    fontFamily: tokens.fontMono,
    fontSize: {
      default: '0.7rem',
      '@media (max-width: 640px)': '0.6rem',
    },
    letterSpacing: '0.1em',
    color: tokens.colorTextMuted,
    textTransform: 'uppercase',
  },
  footerCenter: {
    fontFamily: tokens.fontMono,
    fontSize: '0.68rem',
    letterSpacing: '0.14em',
    color: tokens.colorTextMuted,
    textTransform: 'uppercase',
    display: {
      default: 'block',
      '@media (max-width: 900px)': 'none',
    },
  },
});

export default function Home() {
  return (
    <main {...stylex.props(styles.page)}>
      <HeroVideo />

      <header {...stylex.props(styles.header)}>
        <div {...stylex.props(styles.badge)}>
          <div {...stylex.props(styles.beaconDot)} />
          <span {...stylex.props(styles.badgeTextDesktop)}>AI Systems Architecture</span>
          <span {...stylex.props(styles.badgeTextMobile)}>AI Architecture</span>
        </div>

        <ContactActions />
      </header>

      <section {...stylex.props(styles.heroCenter)}>
        <div {...stylex.props(styles.eyebrow)}>Neural Architecture & Autonomous Intelligence</div>

        <h1 {...stylex.props(styles.nameHeading)}>Heila Shahidi</h1>

        <h2 {...stylex.props(styles.roleSubheading)}>AI Software Engineer</h2>

        <p {...stylex.props(styles.statement)}>
          Architecting frontier foundation models, distributed neural inference engines, and
          autonomous reasoning agents with mathematical rigor and aesthetic precision.
        </p>

        <div {...stylex.props(styles.chipContainer)}>
          <span {...stylex.props(styles.chip)}>Foundation Models</span>
          <span {...stylex.props(styles.chip)}>Agentic Cognition</span>
          <span {...stylex.props(styles.chip)}>Distributed Inference</span>
          <span {...stylex.props(styles.chip)}>Triton & CUDA Systems</span>
        </div>
      </section>

      <footer {...stylex.props(styles.footer)}>
        <div {...stylex.props(styles.footerMeta)}>
          <span {...stylex.props(styles.footerMono)}>
            SAN FRANCISCO, CA · 37.7749° N, 122.4194° W
          </span>
          <span {...stylex.props(styles.footerMono)}>INFRASTRUCTURE: DISTRIBUTED GPU CLUSTERS</span>
        </div>

        <div {...stylex.props(styles.footerCenter)}>
          ENGINEERING COGNITION FROM FIRST PRINCIPLES
        </div>
      </footer>
    </main>
  );
}
