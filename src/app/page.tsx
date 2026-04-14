import HeroVideo from "@/components/sections/HeroVideo";
import Pillars from "@/components/sections/Pillars";
import WineSection from "@/components/sections/WineSection";
import { getViniInEvidenza } from "@/lib/wordpress";

export default async function Home() {
  const vini = await getViniInEvidenza();

  return (
    <main>
      <HeroVideo />
      <Pillars />
      <WineSection vini={vini} />
    </main>
  );
}
