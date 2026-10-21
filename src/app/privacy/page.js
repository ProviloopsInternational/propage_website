import PrivacyPage from "@/components/pages/PrivacyPage";
import { createMetadata } from "@/lib/seoHelper";

export const metadata = createMetadata({
  title: "Privacy Policy | Propage Digital",
  description:
    "This policy explains how Propage Digital handles personal information when you visit our website, contact us, or discuss a potential project with us.",
  url: "https://propagedigital.com/privacy",
});

export default function Privacy() {
  return <PrivacyPage />;
}
