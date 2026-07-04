import Head from "next/head";
import CatractTreatmentPage from "@/pagecomponent/Treatments/Catract";

export default function CatractTreatment() {
  return (
    <>
      <Head>
        <title>Cataract Treatment | Shanti EyeTech Eye Care & Laser Hospital</title>
        <meta
          name="description"
          content="Explore advanced Cataract Treatment at Shanti EyeTech Eye Care & Laser Hospital in Indore, restoring vision clarity and quality."
        />
      </Head>
      <CatractTreatmentPage />
    </>
  );
}
