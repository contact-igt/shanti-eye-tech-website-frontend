import FAQ from "@/component/About/FAQ";
import AboutCTA from "@/component/About/CTA";
import Testimonials from "@/component/About/Testimonials";
import TreatmentBenefits from "@/component/Treatments/Common/TreatmentBenefits";
import TreatmentBenefitsCarousel from "@/component/Treatments/Common/TreatmentBenefitsCarousel";
import TreatmentCardGrid from "@/component/Treatments/Common/TreatmentCardGrid";
import TreatmentChecklistBento from "@/component/Treatments/Common/TreatmentChecklistBento";
import TreatmentHero from "@/component/Treatments/Common/TreatmentHero";
import TreatmentIntro from "@/component/Treatments/Common/TreatmentIntro";

export default function TreatmentPage({ content }) {
  return (
    <>
      <TreatmentHero content={content.hero} />
      <TreatmentBenefits content={content.benefits} />
      <TreatmentIntro content={content.intro} />
      <TreatmentChecklistBento content={content.checklistBento} />
      <TreatmentCardGrid content={content.cardGrid} />
      <TreatmentBenefitsCarousel content={content.benefitsCarousel} />
      <Testimonials />
      <FAQ content={content.faq} />
      <AboutCTA />
    </>
  );
}
