import { createMetadata } from '@/lib/seoHelper';
import Hero from '../components/home/HeroSection';
import FeaturedServices from '../components/home/FeaturedServices';
import Portfolio from '../components/home/Portfolio';
import FAQ from '../components/home/FAQ';
import CTAConsultation from '../components/global/CTAConsultation';

export const metadata = createMetadata({
  title: 'Pro Page Digital - Your Growth, Backed by Quality Links!',
  description: 'We specialize in creating and placing high-quality guest posts that build authority and drive results.',
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
