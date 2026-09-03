# Heila Shahidi

A cinematic, modern single-page hero portfolio for software engineer **Heila Shahidi**.

![Heila Shahidi Portfolio](public/screenshot.png)

## Overview

- **Typography**: Monumental display typography set in Italiana with tight kerning and atmospheric luminance.
- **Cinematics**: Looping background video with default audio playback, frosted glass controls, and gesture-resilient policy fallbacks.
- **Micro-Delights**: Interactive Austin location badge featuring live Central Time via `useSyncExternalStore` and coordinate toggle.
- **Design System**: Meta StyleX for zero-runtime, type-safe atomic CSS.
- **Verification**: Deterministic test suite with Vitest unit tests and Playwright cross-viewport end-to-end verification.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Meta StyleX (`@stylexjs/stylex`)
- **Runtime**: Bun
- **Testing**: Vitest, React Testing Library, Playwright

## Development

```bash
bun install
bun run dev
```

Preview runs locally at `http://localhost:3000` (or `http://localhost:3001` if port 3000 is in use).

## Verification

Execute the full verification gate (formatting, linting, typechecking, unit tests, production build, and E2E):

```bash
bun run check
```
