import Head from "next/head";
import ContactPage from "@/pagecomponent/Contact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Shanti EyeTech Eye Care &amp; Laser Hospital</title>
        <meta
          name="description"
          content="Get in touch with Shanti EyeTech Eye Care & Laser Hospital. Book appointments, consultations, and enquiries for advanced eye care in Indore."
        />
      </Head>
      <ContactPage />
    </>
  );
}
