import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.supabase.co" },
    ],
  },
  async redirects() {
    return [
      { source: "/fuer-arbeitgeber", destination: "/arbeitgeber", permanent: true },
      { source: "/fachkraefte-fuer-das-gesundheitswesen", destination: "/arbeitgeber", permanent: true },
      { source: "/allgemeine-geschaeftsbedingungen", destination: "/agb", permanent: true },
      { source: "/downloadbereich", destination: "/pflegefachkraefte", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
