import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "u9a6wmr3as.ufs.sh" }],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/fsw-donalds", // Altere para a rota correta do seu projeto
        permanent: false, // Defina como true se quiser um redirecionamento permanente (301)
      },
    ];
  },
};

export default nextConfig;
