import ThemeRegistry from "@/components/ui/ThemeRegistry";
import NotFoundContent from "@/components/sections/NotFoundContent";
import { routing } from "@/i18n/routing";

// 404 per richieste senza lingua valida (es. /phpinfo.php, /.env).
// Il root layout non genera <html>/<body>, quindi vanno inseriti qui.
export default function RootNotFound() {
  return (
    <html lang={routing.defaultLocale}>
      <body>
        <ThemeRegistry>
          <NotFoundContent locale={routing.defaultLocale} />
        </ThemeRegistry>
      </body>
    </html>
  );
}
