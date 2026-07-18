import Head from "next/head";
import ThankYouPage from "@/pagecomponent/ThankYou";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You | Shanti EyeTech Eye Care &amp; Laser Hospital</title>
        <meta
          name="description"
          content="Thank you for contacting Shanti EyeTech. Our team will review your details and contact you to confirm the appointment."
        />
        <meta name="robots" content="noindex" />
      </Head>
      <ThankYouPage />
    </>
  );
}