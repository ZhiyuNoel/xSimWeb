# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview
- This is a Vite + React single-page showcase site for XVisualSim.
- It is deployed as a static site to GitHub Pages via GitHub Actions.
- Internationalization is implemented with `i18next` + `react-i18next` using two locale files (`en`, `zh`).

## Commands
- Install dependencies: `npm install`
- Start local dev server (HMR): `npm run dev`
- Build production bundle: `npm run build`
- Preview production build locally: `npm run preview`

Notes:
- Node.js >= 18 is required (README recommends Node 20 LTS).
- There are currently no lint or test scripts in `package.json`, so there is no project-defined lint/test command or single-test command at this time.

## Deployment details
- GitHub Pages deployment is defined in `.github/workflows/deploy.yml`.
- CI uses Node 20, runs `npm install` then `npm run build`, and deploys `dist/`.
- `vite.config.js` sets `base: '/xSimWeb/'`; this must match the repository path used for GitHub Pages.

## High-level architecture
- App bootstrap:
  - `src/main.jsx` initializes i18n, loads global CSS, and mounts the React app.
- Page composition:
  - `src/App.jsx` builds a single long-form SPA by composing section components and separators.
  - Navigation is anchor-based (section IDs like `#about`, `#results`, etc.) rather than route-based.
- Shared interactivity pattern:
  - Lightbox state is centralized in `App` and passed down as callback props to sections that open images (e.g., results/gallery).
- i18n flow:
  - `src/i18n.js` loads `src/locales/en.json` and `src/locales/zh.json` into i18next.
  - Components use `useTranslation()` for text; language is switched at runtime from the navbar.
- Styling model:
  - Styling is primarily global/class-based via `src/index.css`; components consume shared class names.
- Assets/content:
  - Static assets are served from `public/`; build output is emitted to `dist/`.
