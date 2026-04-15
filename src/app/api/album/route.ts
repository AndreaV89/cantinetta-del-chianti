import { NextResponse } from "next/server";
import { getAlbum } from "@/lib/wordpress";

export async function GET() {
  const album = await getAlbum();
  return NextResponse.json(album);
}
