import ClientAboutPage from '@/components/pages/ClientAboutPage';
import { createMetadata } from '@/lib/seoHelper';

export const metadata = createMetadata({
  title: 'About Propage Digital | Your Growth, Backed by Quality Links!',
  description:
    'Pro Page Digital simplifies blogger outreach and link building with automation + human editorial. Earn high-quality do-follow placements at scale.',
  url: 'https://propagedigital.com/about',
});

export default function AboutPage() {
  return <ClientAboutPage />;
}
