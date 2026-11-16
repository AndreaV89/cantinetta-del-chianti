import { notFound } from "next/navigation";

// Cattura gli URL sconosciuti sotto /[locale]/... per mostrare la 404 localizzata
export default function CatchAllPage() {
  notFound();
}
