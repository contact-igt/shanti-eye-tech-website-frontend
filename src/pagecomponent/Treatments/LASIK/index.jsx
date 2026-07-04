import LasikHero from "@/component/Treatments/LASIK/Hero";
import LasikBenefitsSection from "@/component/Treatments/LASIK/Benefits";
import WhatIsLasikSection from "@/component/Treatments/LASIK/WhatIsLasik";
import IsLasikRightSection from "@/component/Treatments/LASIK/IsLasikRight";
import AdvancedCareSection from "@/component/Treatments/Catract/AdvancedCare";
import BenefitsCarouselSection from "@/component/Treatments/Catract/BenefitsCarousel";
import Testimonials from "@/component/About/Testimonials";
import FAQ from "@/component/About/FAQ";
import AboutCTA from "@/component/About/CTA";
import { lasikTreatmentContent } from "@/constant/treatmentContent";

export default function LasikTreatmentPage() {
  return (
    <>
      <LasikHero content={lasikTreatmentContent.hero} />
      <LasikBenefitsSection />
      <WhatIsLasikSection content={lasikTreatmentContent.whatIsLasik} />
      <IsLasikRightSection />
      <AdvancedCareSection content={lasikTreatmentContent.conditionsCorrect} />
      <BenefitsCarouselSection content={lasikTreatmentContent.benefitsCarousel} />
      <Testimonials />
      <FAQ content={lasikTreatmentContent.faq} />
      <AboutCTA />
    </>
  );
}
