import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const IUBENDA_PRIVACY = "https://www.iubenda.com/privacy-policy/89647461";

const nextConfig: NextConfig = {
  // Redirect 301 dai vecchi URL .html del sito precedente
  // (statusCode: 301 invece di permanent: true, che in Next restituisce 308)
  async redirects() {
    return [
      { source: "/index.html", destination: "/it", statusCode: 301 },
      { source: "/contatti.html", destination: "/it/chi-siamo", statusCode: 301 },
      { source: "/chi-siamo.html", destination: "/it/chi-siamo", statusCode: 301 },
      { source: "/privacy-policy.html", destination: IUBENDA_PRIVACY, statusCode: 301 },
      {
        source: "/cookie-policy.html",
        destination: `${IUBENDA_PRIVACY}/cookie-policy`,
        statusCode: 301,
      },
      { source: "/note-legali.html", destination: "/it", statusCode: 301 },
      { source: "/vini.html", destination: "/it/vini", statusCode: 301 },
      { source: "/prodotti.html", destination: "/it/prodotti", statusCode: 301 },
      { source: "/servizi.html", destination: "/it/servizi", statusCode: 301 },
      { source: "/storie.html", destination: "/it/storie", statusCode: 301 },
      { source: "/galleria.html", destination: "/it/storie", statusCode: 301 },
      // Rete di sicurezza: qualsiasi altro vecchio .html va in home (deve restare ultima)
      { source: "/:path(.+)\\.html", destination: "/it", statusCode: 301 },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordpress-1573725-6349681.cloudwaysapps.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
