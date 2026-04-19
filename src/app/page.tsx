import HeroVideo from "@/components/sections/HeroVideo";
import Pillars from "@/components/sections/Pillars";
import WineSection from "@/components/sections/WineSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import QuoteSection from "@/components/sections/QuoteSection";
import RecensioniSection from "@/components/sections/RecensioniSection";
import { getViniInEvidenza, getProdottiInEvidenza } from "@/lib/wordpress";

export default async function Home() {
  const vini = await getViniInEvidenza();
  const prodotti = await getProdottiInEvidenza();

  return (
    <main>
      <HeroVideo />
      <Pillars />
      <WineSection vini={vini} />
      <ProductsSection prodotti={prodotti} />
      <QuoteSection quote="Wine not?" />
      <ServicesSection />
      <RecensioniSection />
      <AboutSection />
    </main>
  );
}
