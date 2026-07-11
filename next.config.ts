import type { NextConfig } from "next";

/** Set to true in CI when building for GitHub Pages project-site hosting. */
const isGithubPages = process.env.GITHUB_PAGES === "true";

/** Must match the GitHub repository name for project pages (username.github.io/repo). */
const repoName = "waqto";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
