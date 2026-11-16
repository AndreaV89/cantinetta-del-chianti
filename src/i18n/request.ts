import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale può essere undefined (middleware saltato) o non valido
  // (es. "favicon.ico" catturato dal segmento [locale]): in quei casi
  // si usa la lingua di default, così l'import dei messaggi non fallisce.
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
