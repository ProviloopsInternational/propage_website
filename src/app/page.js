import { createMetadata } from "@/lib/seoHelper";
import ClientHomePage from "@/components/pages/ClientHomePage";

export const metadata = createMetadata({
  title: "Pro Page Digital - Your Growth, Backed by Quality Links!",
  description:
    "We specialize in creating and placing high-quality guest posts that build authority and drive results.",
  url: "https://propagedigital.com/",
});

export default function HomePage() {
  return <ClientHomePage />;
}
