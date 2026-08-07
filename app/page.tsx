import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { WeeklyMenuSection } from "@/components/sections/WeeklyMenuSection";
import { BioCertificationSection } from "@/components/sections/BioCertificationSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StorySection } from "@/components/sections/StorySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="mx-auto w-full overflow-x-hidden bg-bio-white">
      <Header />
      <main>
        <QualitySection />
        <WeeklyMenuSection />
        <BioCertificationSection />
        <TestimonialsSection />
        <StorySection />
        {/* <FAQSection />
        <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
}
