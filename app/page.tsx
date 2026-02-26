import { AdvantageSection } from "@/components/advantage-section";
import { AutopilotSection } from "@/components/autopilot-section";
import { Logos3Demo } from "@/components/blocks/logos3";
import { CtaSection } from "@/components/cta-section";
import { FlexibilitySection } from "@/components/flexibility-section";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Logos3Demo />
      <HowItWorksSection />
      <AdvantageSection />
      <AutopilotSection />
      <FlexibilitySection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
