/** @type {import('next').NextConfig} */
//images -> domains -> [dominios] é pra permitir buscar imagens de outro dominio
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "raw.githubusercontent.com"
    ]
  }
}

module.exports = nextConfig
