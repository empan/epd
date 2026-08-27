# Portfolio

Personal portfolio site built with [Next.js](https://nextjs.org) (App Router,
static export) and [Tailwind CSS](https://tailwindcss.com), deployed to GitHub
Pages via GitHub Actions.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Outputs a static site to `out/`.

## Structure

```
src/
  app/            Routes (App Router)
    page.tsx      Home
    about/        About page
    projects/     Projects list
    contact/      Contact page
  components/      Reusable UI (Header, Footer, ProjectCard)
  data/
    site.ts       Name, nav, socials, metadata
    projects.ts   Project entries — edit this to add work
```

## Editing content

- **Bio, name, links:** `src/data/site.ts`
- **Projects:** `src/data/projects.ts`
- **About / experience:** `src/app/about/page.tsx`
- **Colors / fonts:** `src/app/globals.css` (`@theme` block)

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages.

One-time setup: in the repo, go to **Settings → Pages → Build and deployment**
and set **Source** to **GitHub Actions**.

### Project site vs. user site

This repo is set up as a **project site**, served at
`https://<user>.github.io/<repo>/`. The workflow injects the correct base path
automatically.

To use a **user site** (`https://<user>.github.io/`), rename the repo to
`<user>.github.io`. No config change needed — the workflow detects the base path
from Pages.
