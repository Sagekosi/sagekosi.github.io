Fullstack TypeScript App (Scaffold)

This repository contains a minimal fullstack TypeScript scaffold:

- `server/` - Node + Express backend (TypeScript)
- `client/` - React + Vite frontend (TypeScript)

Quick start (run from repository root):

```bash
# Server
cd server
npm install
npm run dev

# In another terminal: Client
cd ../client
npm install
npm run dev
# Static HTML Site — Sagekosi

This repository has been converted from a Next.js app to a static HTML site.

Quick start (serve locally from repository root):

```bash
# Using Python 3 built-in server (recommended for quick local testing)
python3 -m http.server 8000

# or with Node (if installed):
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

Files of interest
- `index.html` — main static HTML page (root of the repo)
- `api/hello.json` — static JSON file that mimics the previous API route

If you'd like, I can:
- Convert more pages to HTML
- Remove remaining Next.js dependencies from `package.json`
- Set up a GitHub Pages workflow to publish the `index.html` automatically

