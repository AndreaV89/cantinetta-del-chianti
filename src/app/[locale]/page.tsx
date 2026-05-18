import HeroVideo from "@/components/sections/HeroVideo";
import Pillars from "@/components/sections/Pillars";
import WineSection from "@/components/sections/WineSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import QuoteSection from "@/components/sections/QuoteSection";
import RecensioniSection from "@/components/sections/RecensioniSection";
import { getViniInEvidenza } from "@/lib/wordpress";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const vini = await getViniInEvidenza(locale);

  return (
    <main>
      <HeroVideo />
      <Pillars />
      <WineSection vini={vini} />
      <ProductsSection />
      <QuoteSection quote="Wine not?" />
      <ServicesSection />
      <RecensioniSection />
      <AboutSection />
    </main>
  );
}
