/**
 * Static export config for GitHub Pages.
 *
 * If this deploys to a project site (https://<user>.github.io/<repo>), the
 * GitHub Actions workflow sets NEXT_PUBLIC_BASE_PATH to "/<repo>" so assets
 * and links resolve correctly. For a user site (https://<user>.github.io),
 * leave NEXT_PUBLIC_BASE_PATH unset.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
