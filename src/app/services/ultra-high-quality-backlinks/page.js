import HighQualityBacklinksPage from "@/components/pages/HighQualityBacklinksPage";
import { createMetadata } from "@/lib/seoHelper";

export const metadata = createMetadata({
  title: "Premium Backlinks | Propage Digital",
  description: "Premium backlinks built around strict quality checks.",
  url: "https://propagedigital.com/services/ultra-high-quality-backlinks",
});

export default function UltraHighQualityBacklinksPage() {
  return <HighQualityBacklinksPage />;
}
