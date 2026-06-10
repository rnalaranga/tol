import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WelcomeSection from '@/components/WelcomeSection';
import SolutionsCarousel from '@/components/SolutionsCarousel';
import NeedSection from '@/components/NeedSection';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import LatestNews from '@/components/LatestNews';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Micro Finance & Business Loans in Sri Lanka | The Orient Life',
  description: 'Providing accessible Micro Finance, Group Loans, and Daily Collection Schemes in Sri Lanka. Empowering rural and urban entrepreneurs to build a better future.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WelcomeSection />
        <SolutionsCarousel />
        <NeedSection />
        <WhyUs />
        <Testimonials />
        <LatestNews />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
