import { DM_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
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

// Prerender delle sole lingue supportate (it, en)
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    metadataBase: new URL("https://lacantinettadelchianti.it"),
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
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "La Cantinetta del Chianti",
        },
      ],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    },
    other: {
      "format-detection": "telephone=no",
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Lingua non supportata (es. /phpinfo.php finisce in [locale]) → 404
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
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
