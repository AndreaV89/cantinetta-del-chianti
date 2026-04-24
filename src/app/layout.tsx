import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import ThemeRegistry from "@/components/ui/ThemeRegistry";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "La Cantinetta del Chianti — Enoteca a Gaiole in Chianti",
    template: "%s | La Cantinetta del Chianti",
  },
  description:
    "Enoteca a Gaiole in Chianti dal 2003. Vini selezionati, prodotti tipici toscani, degustazioni guidate e aperitivi nel cuore del Chianti Classico.",
  keywords: [
    "enoteca",
    "Chianti",
    "vini",
    "Gaiole in Chianti",
    "Chianti Classico",
    "degustazione",
    "prodotti tipici toscani",
  ],
  openGraph: {
    siteName: "La Cantinetta del Chianti",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={dmSans.variable}>
      <body>
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
