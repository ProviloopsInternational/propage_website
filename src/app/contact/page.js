import ClientContactPage from '@/components/pages/ClientContactPage';
import { createMetadata } from '@/lib/seoHelper';

export const metadata = createMetadata({
  title: 'Contact Pro Page Digital',
  description:
    'Talk to Pro Page Digital about guest posting, link insertion, and outreach. Book a consultation or send us a message.',
  url: 'https://propagedigital.com/contact',
});

export default function ContactPage() {
  return <ClientContactPage />;
}
