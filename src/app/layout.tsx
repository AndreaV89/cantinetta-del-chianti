import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import ThemeRegistry from "@/components/ui/ThemeRegistry";
import Navbar from "@/components/layout/Navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "La Cantinetta del Chianti",
  description:
    "Enoteca a Gaiole in Chianti — vini selezionati, prodotti tipici e aperitivi.",
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
        </ThemeRegistry>
      </body>
    </html>
  );
}
