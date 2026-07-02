import Head from "next/head";
import AboutPageComponent from "@/pagecomponent/About";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Shanti EyeTech Eye Care & Laser Hospital</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn about Shanti EyeTech Eye Care & Laser Hospital in Indore. Discover our peaceful, advanced, and personalized eye care led by Dr. Amit N. Solanki."
        />
      </Head>
      <AboutPageComponent />
    </>
  );
}
