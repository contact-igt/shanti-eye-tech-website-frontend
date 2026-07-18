import ContactHero from "@/component/Contact/Hero";
import ContactInfo from "@/component/Contact/ContactInfo";
import ContactForm from "@/component/Contact/ContactForm";
import ContactFAQ from "@/component/Contact/ContactFAQ";
import { contactPageContent } from "@/constant/contactContent";
import FAQ from "@/component/About/FAQ";

export default function ContactPage() {
  return (
    <>
      <ContactHero content={contactPageContent.hero} />
      <ContactInfo data={contactPageContent.contactInfo} />
      <ContactForm />
      <FAQ />
      {/* <ContactFAQ faqs={contactPageContent.faqs} /> */}
    </>
  );
}
