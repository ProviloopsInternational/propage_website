import ClientServicesPage from '@/components/pages/ClientServicesPage';
import { createMetadata } from '@/lib/seoHelper';

export const metadata = createMetadata({
  title: 'Services | Pro Page Digital',
  description:
    'Pro Page Digital provides guest posting and link insertion (niche edits) with clean, do-follow placements, global publisher access, and editorial quality.',
  url: 'https://propagedigital.com/services', // update to your production domain
});

export default function ServicesPage() {
  return <ClientServicesPage />;
}
