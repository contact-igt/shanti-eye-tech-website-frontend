import Head from "next/head";
import LasikTreatmentPage from "@/pagecomponent/Treatments/LASIK";

export default function LasikTreatment() {
  return (
    <>
      <Head>
        <title>LASIK Treatment | Shanti EyeTech Eye Care & Laser Hospital</title>
        <meta
          name="description"
          content="Explore LASIK laser vision correction at Shanti EyeTech Eye Care & Laser Hospital in Indore, including consultation and eligibility screening."
        />
      </Head>
      <LasikTreatmentPage />
    </>
  );
}
