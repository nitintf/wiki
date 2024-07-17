import nextra from 'nextra'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  distDir: './.next', // Nextra supports custom `nextConfig.distDir`
  reactStrictMode: true,
}

/**
 * @type {import('nextra/types').NextraConfig}
 */
const nextraConfig = {
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
}

const withNextra = nextra(nextraConfig)

export default withNextra(nextConfig)
