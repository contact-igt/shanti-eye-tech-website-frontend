import Head from "next/head";
import GlaucomaTreatmentPage from "@/pagecomponent/Treatments/Glaucoma";

export default function GlaucomaTreatment() {
  return (
    <>
      <Head>
        <title>Glaucoma Treatment | Shanti EyeTech Eye Care & Laser Hospital</title>
        <meta
          name="description"
          content="Explore advanced Glaucoma Treatment at Shanti EyeTech Eye Care & Laser Hospital in Indore, preserving your vision."
        />
      </Head>
      <GlaucomaTreatmentPage />
    </>
  );
}
