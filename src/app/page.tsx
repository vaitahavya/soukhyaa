import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import IndustriesSection from '@/components/IndustriesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Soukhyaa - Premium Hospital Uniforms | Doctor Coats, Nursing Scrubs, Medical Apparel India",
  description: "Leading manufacturer of premium hospital uniforms in India. Doctor coats, nursing scrubs, lab coats, and custom medical apparel. Trusted by 500+ hospitals with ISO certified quality.",
  keywords: "hospital uniforms India, medical scrubs, doctor coats, nursing uniforms, lab coats, healthcare apparel, medical clothing manufacturers, custom hospital uniforms, medical apparel suppliers India",
  alternates: {
    canonical: 'https://soukhyaa.com/',
  },
  openGraph: {
    title: "Soukhyaa - Premium Hospital Uniforms | Medical Apparel India",
    description: "Leading manufacturer of premium hospital uniforms in India. Doctor coats, nursing scrubs, lab coats, and custom medical apparel.",
    url: 'https://soukhyaa.com/',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyChooseSection />
        <IndustriesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}