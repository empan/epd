# epd

Static site built with [Next.js](https://nextjs.org) (App Router, static export)
and [Tailwind CSS](https://tailwindcss.com). Deploys to GitHub Pages via Actions.

## Develop

```bash
npm install
npm run dev
```

http://localhost:3000

## Build

```bash
npm run build
```

Static output lands in `out/`.

## Structure

Single-page site ("The Desk").

```
src/
  app/
    page.tsx        The whole page (header, hero, marquee, work, about)
    layout.tsx      Fonts + metadata
    globals.css     Palette tokens, keyframes, hover classes
  components/
    HeaderGlow.tsx  Cursor-following header glow (client component)
  data/
    site.ts         Name, role, tagline, nav, pills, marquee, bio, links
    projects.ts     Project cards (title, blurb, meta, slot, tint)
```

## Editing content

- Headline, role, pills, bio, links: `src/data/site.ts`
- Project cards: `src/data/projects.ts`
- Colors / fonts / animation: `src/app/globals.css` + `src/app/layout.tsx`
- Résumé button expects `public/resume.pdf` (not committed yet)

## Deployment

Push to `main` runs `.github/workflows/deploy.yml`.

One-time: repo **Settings → Pages → Build and deployment → Source → GitHub Actions**.

Served at `https://<user>.github.io/epd/`. Rename the repo to `<user>.github.io`
for a root-domain user site — the workflow adjusts the base path automatically.
