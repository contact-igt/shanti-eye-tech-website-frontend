import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import styles from "./styles.module.css";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-contact-montserrat",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-contact-inter",
});
const icons = {
  location: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  phone: (
    <Image
      className={styles.iconImage}
      src="/assets/contact/call-icon.png"
      alt=""
      width={26}
      height={26}
      aria-hidden="true"
    />
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
};

export default function ContactInfo({ data }) {
  return (
    <section className={`${inter.variable} ${montserrat.variable} ${montserrat.className} ${styles.section}`} id="contact-info">
      <div className={styles.inner}>
        <span className={styles.badge}>
          <Image
            className={styles.badgeIcon}
            src="/assets/contact/plus-icon.png"
            alt=""
            width={12}
            height={12}
            aria-hidden="true"
          />
          Contact
        </span>

        <h2 className={`${montserrat.className} ${styles.heading}`}>
          {data.heading.line1}
          <span className={styles.headingAccent}>{data.heading.line2}</span>
        </h2>

        <p className={`${inter.className} ${styles.description}`}>{data.description}</p>

        <div className={styles.cards}>
          {data.cards.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.iconWrap}>
                {icons[card.icon]}
              </div>
              <h3 className={`${montserrat.className} ${styles.cardTitle}`}>{card.title}</h3>
              <p className={`${inter.className} ${styles.cardBody}`}>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
