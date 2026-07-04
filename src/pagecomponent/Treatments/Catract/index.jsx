import CatractHero from "@/component/Treatments/Catract/Hero";
import LasikBenefitsSection from "@/component/Treatments/LASIK/Benefits";
import WhatIsCataractSection from "@/component/Treatments/Catract/WhatIsCataract";
import ConsiderSurgerySection from "@/component/Treatments/Catract/ConsiderSurgery";
import AdvancedCareSection from "@/component/Treatments/Catract/AdvancedCare";
import BenefitsCarouselSection from "@/component/Treatments/Catract/BenefitsCarousel";
import Testimonials from "@/component/About/Testimonials";
import FAQ from "@/component/About/FAQ";
import AboutCTA from "@/component/About/CTA";
import { catractTreatmentContent } from "@/constant/treatmentContent";

export default function CatractTreatmentPage() {
  return (
    <>
      <CatractHero content={catractTreatmentContent.hero} />
      <LasikBenefitsSection />
      <WhatIsCataractSection content={catractTreatmentContent.whatIsCataract} />
      <ConsiderSurgerySection />
      <AdvancedCareSection content={catractTreatmentContent.advancedCare} />
      <BenefitsCarouselSection content={catractTreatmentContent.benefitsCarousel} />
      <Testimonials />
      <FAQ content={catractTreatmentContent.faq} />
      <AboutCTA />
    </>
  );
}
