import { redirect } from "next/navigation";
import { heroSection } from "@/lib/content";

export async function GET() {
  redirect(heroSection.ctaLink);
}
