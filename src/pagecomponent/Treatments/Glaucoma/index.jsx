import GlaucomaHero from "@/component/Treatments/Glaucoma/Hero";
import LasikBenefitsSection from "@/component/Treatments/LASIK/Benefits";
import WhatIsGlaucomaSection from "@/component/Treatments/Glaucoma/WhatIsGlaucoma";
import ConsiderEvaluationSection from "@/component/Treatments/Glaucoma/ConsiderEvaluation";
import GlaucomaCareSection from "@/component/Treatments/Glaucoma/GlaucomaCare";
import BenefitsCarouselSection from "@/component/Treatments/Glaucoma/BenefitsCarousel";
import Testimonials from "@/component/About/Testimonials";
import FAQ from "@/component/About/FAQ";
import AboutCTA from "@/component/About/CTA";
import { glaucomaTreatmentContent } from "@/constant/treatmentContent";

export default function GlaucomaTreatmentPage() {
  return (
    <>
      <GlaucomaHero content={glaucomaTreatmentContent.hero} />
      <LasikBenefitsSection />
      <WhatIsGlaucomaSection content={glaucomaTreatmentContent.whatIsGlaucoma} />
      <ConsiderEvaluationSection content={glaucomaTreatmentContent.warningSigns} />
      <GlaucomaCareSection content={glaucomaTreatmentContent.advancedCare} />
      <BenefitsCarouselSection content={glaucomaTreatmentContent.benefitsCarousel} />
      <Testimonials />
      <FAQ content={glaucomaTreatmentContent.faq} />
      <AboutCTA />
    </>
  );
}
