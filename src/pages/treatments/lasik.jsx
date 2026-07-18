import Head from "next/head";
import TreatmentPage from "@/component/Treatments/Common/TreatmentPage";
import { treatmentPages } from "@/constant/treatmentContent";

export default function LasikTreatment() {
  const content = treatmentPages.lasik;

  return (
    <>
      <Head>
        <title>{content.seo.title}</title>
        <meta name="description" content={content.seo.description} />
      </Head>
      <TreatmentPage content={content} />
    </>
  );
}
