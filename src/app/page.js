import { createMetadata } from '@/lib/seoHelper';
import Hero from '../components/home/HeroSection';
import FeaturedServices from '../components/home/FeaturedServices';
import Portfolio from '../components/home/Portfolio';
import FAQ from '../components/home/FAQ';
import CTAConsultation from '../components/global/CTAConsultation';

export const metadata = createMetadata({
  title: 'Pro Page Digital - Guest Posting & Blogger Outreach',
  description: 'The Finest Guest Posting Services',
  url: 'https://propagedigital.com/',
});

export default function HomePage() {
  return (
    <>
      <Hero/>
      <FeaturedServices/>
      <Portfolio/>
      <FAQ/>
      <CTAConsultation/>
    </>
  );
}
