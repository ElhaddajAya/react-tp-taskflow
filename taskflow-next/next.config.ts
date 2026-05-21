import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dit à Next.js que la racine du workspace est ce dossier, pas le parent
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
