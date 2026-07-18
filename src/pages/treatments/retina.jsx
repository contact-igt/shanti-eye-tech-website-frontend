import Head from "next/head";
import TreatmentPage from "@/component/Treatments/Common/TreatmentPage";
import { treatmentPages } from "@/constant/treatmentContent";

export default function RetinaTreatment() {
  const content = treatmentPages.retina;

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
