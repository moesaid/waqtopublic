# Waqto

Next.js app configured for static export and [GitHub Pages](https://pages.github.com/) hosting.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app locally.

## Build

```bash
npm run build
```

Static files are written to the `out/` directory.

To preview the GitHub Pages build locally (with the `/waqto` base path):

```bash
GITHUB_PAGES=true npm run build
npx serve out
```

Then open [http://localhost:3000/waqto/](http://localhost:3000/waqto/).

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In the repo **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

The site will be available at `https://<username>.github.io/waqto/`.

### Custom domain or user site

If you deploy to a `username.github.io` repository (no project subpath), set `repoName` to `""` in `next.config.ts` and remove the `GITHUB_PAGES` base-path logic, or adjust `basePath` accordingly.
