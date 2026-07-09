import ContactHero from "@/component/Contact/Hero";
import ContactInfo from "@/component/Contact/ContactInfo";
import ContactForm from "@/component/Contact/ContactForm";
import ContactFAQ from "@/component/Contact/ContactFAQ";
import { contactPageContent } from "@/constant/contactContent";

export default function ContactPage() {
  return (
    <>
      <ContactHero content={contactPageContent.hero} />
      <ContactInfo data={contactPageContent.contactInfo} />
      <ContactForm />
      <ContactFAQ faqs={contactPageContent.faqs} />
    </>
  );
}
