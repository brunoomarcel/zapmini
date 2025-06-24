import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,     // ✅ Isso faz o Next exportar /pagina/index.html em vez de pagina.html
};

export default nextConfig;
