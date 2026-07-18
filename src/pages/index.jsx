import Head from "next/head";
import HomePageComponent from "@/pagecomponent/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shanthi Eye Tech</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Shanthi Eye Tech premium medical and wellness website experience."
        />
      </Head>
      <HomePageComponent />
    </>
  );
}
