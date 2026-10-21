import GuestPostingPage from "@/components/pages/GuestPostingPage";
import { createMetadata } from "@/lib/seoHelper";

export const metadata = createMetadata({
  title: "Guest Posting | Propage Digital",
  description:
    "High-quality, in-content backlinks built through tailored outreach.",
  url: "https://propagedigital.com/services/blogger-outreach",
});

export default function BloggerOutreachPage() {
  return <GuestPostingPage />;
}
