import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ErrorPage() {
  const router = useRouter();
  const message = router.query.msg || "There was an error submitting your message. Please try again later.";

  return (
    <>
      <Head>
        <title>Submission Error | Shanti EyeTech</title>
      </Head>
      <main style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: "120px 24px", textAlign: "center" }}>
        <div>
          <h1 style={{ margin: "0 0 16px", color: "#011139" }}>Submission failed</h1>
          <p style={{ margin: "0 0 28px", color: "#4b5563" }}>{message}</p>
          <Link href="/contact" style={{ color: "#15c8f0", fontWeight: 700 }}>Back to contact</Link>
        </div>
      </main>
    </>
  );
}