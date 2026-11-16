import { getLocale } from "next-intl/server";
import NotFoundContent from "@/components/sections/NotFoundContent";

// 404 per URL sconosciuti dentro una lingua valida (es. /it/pagina-inesistente)
export default async function LocaleNotFound() {
  const locale = await getLocale();
  return <NotFoundContent locale={locale} />;
}
