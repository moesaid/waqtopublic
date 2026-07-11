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

## Custom domain

A custom domain is served from the **root** of that domain (e.g. `https://waqto.com/`), not `/waqto`. You must disable the GitHub Pages subpath in the build.

### 1. Update the deploy workflow

In `.github/workflows/deploy.yml`, set `GITHUB_PAGES_USE_SUBPATH: false`:

```yaml
- name: Build static site
  run: npm run build
  env:
    GITHUB_PAGES: true
    GITHUB_PAGES_USE_SUBPATH: false
```

Commit and push so future deploys use root-relative asset paths.

### 2. Configure DNS at your registrar

Replace `YOUR_USERNAME` with your GitHub username.

**`www` subdomain (recommended first)**

| Type  | Name | Value                    |
|-------|------|--------------------------|
| CNAME | www  | `YOUR_USERNAME.github.io` |

**Apex / root domain (`example.com`)**

Either use your registrar’s **ALIAS / ANAME / CNAME flattening** to `YOUR_USERNAME.github.io`, or add these **A records** (check [GitHub’s docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain) for the current IPs):

| Type | Name | Value           |
|------|------|-----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

### 3. Add the domain in GitHub

1. Repo **Settings → Pages → Custom domain**
2. Enter your domain (e.g. `waqto.com` or `www.waqto.com`)
3. Save and wait for DNS to propagate
4. Enable **Enforce HTTPS** once GitHub shows the certificate as ready

GitHub will attach the domain to your Pages deployment; no `CNAME` file in the repo is required when using GitHub Actions.

### 4. Redirect apex ↔ www (optional)

If you use both `example.com` and `www.example.com`, pick one as canonical in GitHub’s custom domain field and set up a redirect at your DNS/hosting provider for the other.
