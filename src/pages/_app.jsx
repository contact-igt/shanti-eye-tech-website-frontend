import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/style/globals.css";
import Layout from "@/common/Layout";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const queryValue = Array.isArray(router.query.utm_source)
      ? router.query.utm_source[0]
      : router.query.utm_source;

    if (typeof queryValue === "string" && queryValue.trim()) {
      sessionStorage.setItem(
        "shanti_eye_tech_utm_source",
        queryValue.trim().slice(0, 100),
      );
    }
  }, [router.asPath, router.isReady, router.query.utm_source]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
