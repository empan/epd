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

```
src/
  app/            Routes (App Router): page.tsx, about/, projects/, contact/
  components/      Header, Footer, ProjectCard
  data/
    site.ts       Name, nav, socials, metadata
    projects.ts   Project entries
```

## Editing content

- Name / links / metadata: `src/data/site.ts`
- Projects: `src/data/projects.ts`
- Experience: `src/app/about/page.tsx`
- Colors / fonts: `@theme` block in `src/app/globals.css`

## Deployment

Push to `main` runs `.github/workflows/deploy.yml`.

One-time: repo **Settings → Pages → Build and deployment → Source → GitHub Actions**.

Served at `https://<user>.github.io/epd/`. Rename the repo to `<user>.github.io`
for a root-domain user site — the workflow adjusts the base path automatically.
