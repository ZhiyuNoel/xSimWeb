# XVisualSim — Project Showcase Website

A professional static website showcasing the XVisualSim X-ray image simulation engine.  
Built with **Vite + React**, designed for deployment on **GitHub Pages**.

> **Note**: This is a project showcase website. The core simulation engine is not publicly released.

---

## 🚀 Quick Start (Local Development)

### Prerequisites

- **Node.js** ≥ 18 (recommended: 20 LTS)
- **npm** ≥ 9

If you don't have Node.js installed, download it from [https://nodejs.org](https://nodejs.org).

### Install and Run

```bash
# 1. Navigate to the website project directory
cd xSimWeb

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The dev server will start at `http://localhost:5173`. Changes are hot-reloaded.

### Build for Production

```bash
npm run build
```

The static output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deploy to GitHub Pages (Step-by-Step)

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `xSimWeb` (or your preferred name)
3. Set it to **Public** (required for GitHub Pages free tier)
4. Do NOT initialize with README (we already have one)

### Step 2: Update the Base Path

Open `vite.config.js` and ensure the `base` value matches your repository name:

```js
// If your repo is named "xSimWeb":
base: '/xSimWeb/',

// If your repo is named something else, e.g. "my-xray-site":
base: '/my-xray-site/',
```

### Step 3: Push the Code to GitHub

```bash
cd xSimWeb
git init
git add .
git commit -m "Initial commit: XVisualSim showcase website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/xSimWeb.git
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. The included workflow (`.github/workflows/deploy.yml`) will automatically build and deploy

### Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run in progress
3. Once it completes (usually 1-2 minutes), your site will be live at:

```
https://YOUR_USERNAME.github.io/xSimWeb/
```

---

## 📁 Project Structure

```
xSimWeb/
├── public/
│   ├── favicon.svg               # Site favicon
│   └── images/                   # Placeholder images (replace with real ones)
│       ├── hero-simulation.svg   # Hero section visual
│       ├── about-architecture.svg# Architecture diagram
│       ├── result-*.svg          # Result showcase images (×5)
│       └── gallery-*.svg         # Gallery images (×6)
├── src/
│   ├── main.jsx                  # React entry point
│   ├── App.jsx                   # Root component
│   ├── index.css                 # Global styles & design system
│   └── components/
│       ├── Navbar.jsx            # Sticky navigation bar
│       ├── Hero.jsx              # Hero section with CTAs
│       ├── About.jsx             # Project overview
│       ├── Capabilities.jsx      # 6 feature cards
│       ├── HowItWorks.jsx        # Pipeline flow diagram
│       ├── Results.jsx           # Simulation results showcase
│       ├── UseCases.jsx          # Application areas
│       ├── TechHighlights.jsx    # Technical specifications
│       ├── Gallery.jsx           # Media gallery with lightbox
│       ├── FAQ.jsx               # Expandable FAQ section
│       ├── Footer.jsx            # Contact info & links
│       ├── ScrollReveal.jsx      # Scroll animation wrapper
│       └── Lightbox.jsx          # Image preview modal
├── index.html                    # HTML entry with SEO meta tags
├── vite.config.js                # Vite config (base path for GitHub Pages)
├── package.json                  # Dependencies & scripts
└── .github/
    └── workflows/
        └── deploy.yml            # GitHub Actions auto-deploy
```

---

## ✏️ What to Replace

After the initial deployment, replace these placeholder items with your real content:

| Item | File(s) | Notes |
|------|---------|-------|
| **Hero image** | `public/images/hero-simulation.svg` | Replace with actual simulation screenshot |
| **Architecture diagram** | `public/images/about-architecture.svg` | Replace with real system diagram |
| **Result images** (×5) | `public/images/result-*.svg` | Replace with real simulation outputs |
| **Gallery images** (×6) | `public/images/gallery-*.svg` | Real screenshots, GIFs, or video thumbnails |
| **Contact email** | `src/components/Footer.jsx` | Search for `your.email@example.com` |
| **GitHub URL** | `src/components/Footer.jsx` | Search for `YOUR_USERNAME` |
| **Publication links** | `src/components/Footer.jsx` | ArXiv, journal, or conference links |
| **Favicon** | `public/favicon.svg` | Custom project icon |
| **OG preview image** | `public/images/og-preview.png` | Social sharing preview (1200×630px) |
| **Page title/description** | `index.html` | Update meta tags if needed |

> **Tip**: All placeholder images have `[PLACEHOLDER]` text embedded in the SVG. You can replace them with PNG, JPG, or WebP files — just keep the same filename (change extension) and update the references in the components.

---

## 🎨 Design System

- **Color palette**: Deep navy-black background with blue-cyan gradient accents
- **Typography**: Inter (Google Fonts)
- **Effects**: Glassmorphism cards, scroll-triggered animations, gradient glows
- **Responsive**: Fully responsive at 375px, 768px, 1024px, 1440px breakpoints

---

## License

© 2026 XVisualSim. All rights reserved.
