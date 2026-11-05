# Azza Corporation

**One sky, many stars.**

The official landing page for **Azza Corporation** — a holding company for independent digital products. This site introduces our divisions, tells our story, and provides a gateway to each product: EzIndustrion, EzOrb, Smart Key, and Azza AI.

---

## About

Azza Corporation builds and nurtures independent digital products. Each division lives under its own sky — independent, but connected by shared craft and care. From boarding house management to Linux distributions, smart access systems, and AI agents, every product is designed to make life calmer, not busier.

This landing page is the front door: a single place where visitors can discover all divisions, learn about the company, and reach out.

---

## Divisions

| Division | Description | Status |
|---|---|---|
| **EzIndustrion** | Boarding house (kos) management — rooms, tenants, dashboard, tenant portal. | Live |
| **EzOrb** | A Linux distribution built from the ground up — custom kernel, package manager, and clear UX. | In Development |
| **Smart Key** | An Android application that turns your phone into a smart access key. | In Development |
| **Azza AI** | Purpose-built AI agents that work quietly in the background. | Planned |

---

## Features

- **Cosmic design** — deep blue space background, star field, cyan accents, and Mars red highlights
- **Responsive** — works on mobile, tablet, and desktop
- **Division showcase** — each product has its own card with status badge and accent color
- **Smooth navigation** — sticky navbar, anchor links, and React Router routes
- **About section** — tells the Azza Corp story with key facts
- **Contact & footer** — links to GitHub, email, and all divisions

---

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **React Router** (routing)
- **Tailwind CSS** (styling)
- **Lucide React** (icons)
- **clsx** + **tailwind-merge** (class utilities)

---

## Project Structure

```
azzacorp/
├── public/
├── src/
│   ├── components/
│   │   ├── Brand.tsx            # AzzaCorp logo
│   │   ├── DivisionCard.tsx     # Card per division
│   │   ├── Footer.tsx           # Site footer
│   │   ├── Navbar.tsx           # Sticky navigation
│   │   └── StarField.tsx        # Cosmic background
│   ├── lib/
│   │   └── utils.ts             # cn() helper
│   ├── pages/
│   │   ├── Home.tsx             # Landing (hero, divisions, about, CTA)
│   │   └── Placeholder.tsx      # /ezorb, /smartkey, /ai
│   ├── App.tsx                  # Routes
│   ├── index.css                # Tailwind + cosmic theme
│   └── main.tsx                 # Entry point
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## Getting Started

### Prerequisites (all OS)

- **Node.js 20+** — https://nodejs.org
- **npm** (comes with Node.js)
- **Git** — https://git-scm.com
- **VS Code** (recommended) — https://code.visualstudio.com

### 1. Clone the repository

```bash
git clone https://github.com/ALAZZA15/azzacorp.git
cd azzacorp
```

---

## Installation

### Windows

Open **PowerShell** or **Windows Terminal**.

```powershell
npm install
npm run dev
```

Open http://localhost:5174

---

### Linux

Open your terminal.

```bash
npm install
npm run dev
```

Open http://localhost:5174

> If `npm install` fails due to permissions, do **not** use `sudo`. Instead, ensure Node.js was installed via [nvm](https://github.com/nvm-sh/nvm) or your distro's package manager.

---

### macOS

Open **Terminal**.

If Node.js is not installed:

```bash
brew install node
```

Then:

```bash
npm install
npm run dev
```

Open http://localhost:5174

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at http://localhost:5174 |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

---

## Moving to Another Machine

Because `node_modules/` and `.env` are intentionally excluded from Git, a fresh clone needs a bit of setup.

### 1. Clone on the new machine

```bash
git clone https://github.com/ALAZZA15/azzacorp.git
cd azzacorp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

Open http://localhost:5174

> No `.env` file is needed for this project — all content is static.

---

### Transfer without Git (USB / external drive)

**On the source machine:**

```bash
tar --exclude='node_modules' \
    --exclude='dist' \
    -czf azzacorp.tar.gz azzacorp/
```

**On the target machine:**

```bash
tar -xzf azzacorp.tar.gz
cd azzacorp
npm install
npm run dev
```

---

## Customization

### Change colors

Edit `tailwind.config.js` → `theme.extend.colors`:

```js
colors: {
  space: { DEFAULT: "#030A16", soft: "#081A33", deep: "#010610" },
  cosmic: { DEFAULT: "#7DD3FC", soft: "#BAE6FD", deep: "#0284C7" },
  mars: { DEFAULT: "#E5484D", soft: "#FCA5A5", deep: "#991B1B" },
  bone: "#F1F5F9",
  dust: "#94A3B8",
}
```

### Change divisions

Edit `src/pages/Home.tsx` — the `DivisionCard` components inside the `<div className="grid ...">`.

### Change text

All copy lives directly in the page components (`Home.tsx`, `Placeholder.tsx`). No i18n layer yet.

---

## Common Issues

| Symptom | Fix |
|---|---|
| `npm install` fails | Delete `node_modules/` and `package-lock.json`, retry |
| Port 5174 already in use | Change `server.port` in `vite.config.ts` |
| Tailwind classes not applied | Ensure `content` in `tailwind.config.js` includes `./src/**/*.{ts,tsx}` |
| Blank page after build | Check `base` in `vite.config.ts` if deploying to subpath |
| Fonts not loading | Needs internet for Google Fonts |

---

## Roadmap

- [x] Cosmic landing page with divisions
- [x] Responsive navbar & footer
- [x] Placeholder pages for each division
- [ ] Individual division pages (EzOrb, Smart Key, AI)
- [ ] AI chat integration (OpenRouter)
- [ ] Blog / news section
- [ ] Contact form (backend)

---

## License

Private — © 2026 Azza Corporation. All rights reserved.