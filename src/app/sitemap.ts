import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lacantinettadelchianti.it";
  const locales = ["it", "en"];

  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/vini", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/prodotti", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/servizi", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/storie", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/chi-siamo", changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: locale === "it" ? route.priority : route.priority - 0.1,
    })),
  );
}
