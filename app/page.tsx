import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ServiceAreaSection from "./components/ServiceAreaSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ServiceAreaSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
