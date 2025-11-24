# Sagekosi — One Page Portfolio

This repository contains a single-page dark-themed portfolio scaffold (HTML/CSS/JS). It's designed to be lightweight, stylish, and easy to customize.

Files:
- `index.html` — main page
- `assets/style.css` — styles and theme
- `assets/script.js` — gallery rendering, filters, contact form handling

Quick preview (local):

```bash
# from repo root
python3 -m http.server 8000
# then open http://localhost:8000
```

Contact form
- The contact form in `index.html` is wired to Formspree using the endpoint `https://formspree.io/f/xpweqrlg` in `assets/script.js`.
- To receive emails ensure your Formspree form settings are enabled. Alternatively configure Netlify Forms or a serverless endpoint.

Deploying
- GitHub Pages: push to `main` and enable Pages for the repository root.
- Netlify / Vercel: drag & drop or connect repo.

Next steps you might want me to do:
- Wire contact form to Formspree/Netlify and test submissions.
- Add project modal views and images (I can scaffold the modal and image folder).
- Add accessibility enhancements and Lighthouse tweaks.

If you'd like, I can now:
- run the site locally in this environment, or
- add more creative interactions (project modals, SVG transitions), or
- commit these files and open a PR.
