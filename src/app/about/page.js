import ClientAboutPage from '@/components/pages/ClientAboutPage';
import { createMetadata } from '@/lib/seoHelper';

export const metadata = createMetadata({
  title: 'About Pro Page Digital | Guest Posting & Blogger Outreach',
  description:
    'Pro Page Digital simplifies blogger outreach and link building with automation + human editorial. Earn high-quality do-follow placements at scale.',
  url: 'https://propagedigital.com/about',
});

export default function AboutPage() {
  return <ClientAboutPage />;
}
