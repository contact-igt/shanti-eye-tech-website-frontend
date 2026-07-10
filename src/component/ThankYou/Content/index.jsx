import Link from "next/link";
import { Inter, Montserrat } from "next/font/google";
import styles from "./styles.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function ThankYouContent() {
  return (
    <section className={`${inter.className} ${styles.section}`}>
      {/* Decorative background blobs */}
      <div className={styles.blobLeft} aria-hidden="true" />
      <div className={styles.blobRight} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Checkmark icon */}
        <div className={styles.iconWrap} aria-hidden="true">
          <svg
            className={styles.checkIcon}
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28" cy="28" r="28" fill="rgba(22,193,228,0.12)" />
            <circle cx="28" cy="28" r="20" fill="rgba(22,193,228,0.18)" />
            <path
              d="M18 28.5L24.5 35L38 21"
              stroke="#16c1e4"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2 className={`${montserrat.className} ${styles.heading}`}>
          Thanks — appointment request received
        </h2>

        {/* Description */}
        <p className={`${montserrat.className} ${styles.description}`}>
          We have received your appointment request and will reach out to confirm
          the date and time. If you need immediate assistance, please contact the
          hospital.
        </p>

        {/* CTA buttons */}
        <div className={styles.actions}>
          <Link href="/" className={styles.btnOutline}>
            Return to Home
            <span className={styles.btnArrow}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
          <Link href="/contact" className={styles.btnFilled}>
            Book Another
            <span className={styles.btnArrow}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Contact nudge */}
        <p className={styles.contactNudge}>
          Need help right away?{" "}
          <Link href="/contact" className={styles.nudgeLink}>
            Contact us
          </Link>
        </p>
      </div>
    </section>
  );
}
