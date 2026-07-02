import Hero from "@/component/About/Hero";
import WhyPatients from "@/component/About/WhyPatients";
import AboutText from "@/component/About/AboutText";
import KnowYourDoctor from "@/component/About/KnowYourDoctor";
import Testimonials from "@/component/About/Testimonials";
import FAQ from "@/component/About/FAQ";
import AboutCTA from "@/component/About/CTA";


export default function AboutPageComponent() {
  return (
    <>
      <Hero />
      <WhyPatients />
      <AboutText />
      <KnowYourDoctor />
      <Testimonials />
      <FAQ />
      <AboutCTA />
    </>
  );
}