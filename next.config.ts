import type { NextConfig } from "next";

/** Set to true in CI when building for GitHub Pages. */
const isGithubPages = process.env.GITHUB_PAGES === "true";

/**
 * Project sites on github.io use a subpath (/repo-name).
 * Custom domains and user sites (username.github.io) are served at the root — set to "false".
 */
const useProjectSubpath = process.env.GITHUB_PAGES_USE_SUBPATH !== "false";

/** Must match the GitHub repository name for project pages (username.github.io/repo). */
const repoName = "waqto";
const basePath =
  isGithubPages && useProjectSubpath ? `/${repoName}` : "";

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
