import { DM_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ThemeRegistry from "@/components/ui/ThemeRegistry";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import { getTranslations } from "next-intl/server";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-dm-sans",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: {
      default: t("title"),
      template: `%s | La Cantinetta del Chianti`,
    },
    description: t("description"),
    keywords: t("keywords").split(","),
    openGraph: {
      siteName: "La Cantinetta del Chianti",
      locale: locale === "it" ? "it_IT" : "en_GB",
      type: "website",
    },
    icons: {
      icon: "/favicon.svg",
      apple: "/favicon.svg",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={dmSans.variable}>
      <body suppressHydrationWarning>
        <Script
          src="https://embeds.iubenda.com/widgets/7f37be2a-d15a-43fc-b7b3-21f55555d4aa.js"
          strategy="afterInteractive"
        />
        <NextIntlClientProvider messages={messages}>
          <ThemeRegistry>
            <Navbar />
            {children}
            <Footer />
          </ThemeRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
