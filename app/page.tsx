import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QualitySection } from "@/components/sections/QualitySection";
import { UnserEssen } from "@/components/sections/UnserEssen";
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
        <UnserEssen />
        <WeeklyMenuSection />
        <BioCertificationSection />
        <TestimonialsSection />
        <StorySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
