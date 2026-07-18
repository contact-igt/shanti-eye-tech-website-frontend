import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Inter, Playfair_Display } from "next/font/google";
import {
  ease,
  knowYourDoctorContent,
  reveal,
  sectionViewport,
  stagger
} from "@/constant/aboutContent";
import styles from "./styles.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap"
});

function DoctorInfoCard({ card }) {
  return (
    <motion.article className={styles.aboutDoctorCard} variants={reveal}>
      <span className={styles.aboutDoctorCardNumber}>{card.number}</span>
      <div className={styles.aboutDoctorCardPanel}>
        <div className={styles.aboutDoctorCardBody}>
          <div className={styles.aboutDoctorCardHeading}>
            <h3>{card.title}</h3>
          </div>

          {card.type === "pills" ? (
            <div className={styles.aboutDoctorPills}>
              {card.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ) : (
            <p>{card.body}</p>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function KnowYourDoctor() {
  return (
    <section
      className={`${inter.className} ${styles.aboutDoctorSection}`}
      id="doctor-section"
      aria-labelledby="about-doctor-title"
    >
      <motion.div
        className={styles.aboutDoctorInner}
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
        variants={stagger}
      >
        <motion.div
          className={styles.aboutDoctorVisual}
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.72, ease }}
        >
          <Image
            src={knowYourDoctorContent.image}
            alt="Dr. Amit N. Solanki"
            fill
            sizes="(max-width: 992px) 90vw, 46vw"
          />
        </motion.div>

        <div className={styles.aboutDoctorContent}>
          <motion.header className={styles.aboutDoctorHeader} variants={reveal}>
            <h2 id="about-doctor-title">
              <span>{knowYourDoctorContent.eyebrow}</span>
              <strong>{knowYourDoctorContent.accent}</strong>
            </h2>
            <span className={styles.aboutDoctorDivider} aria-hidden="true" />
            <div className={styles.aboutDoctorIdentity}>
              <p className={playfair.className}>{knowYourDoctorContent.name}</p>
              <span>{knowYourDoctorContent.role}</span>
            </div>
          </motion.header>

          <motion.div className={styles.aboutDoctorGrid} variants={stagger}>
            {knowYourDoctorContent.cards.map((card) => (
              <DoctorInfoCard key={`${card.number}-${card.title}`} card={card} />
            ))}
          </motion.div>

          <motion.div className={styles.aboutDoctorActions} variants={reveal}>
            <Link className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`} href="/contact">
              <span className={styles.ctaButtonFill} aria-hidden="true" />
              <span className={styles.ctaButtonText}>Book a Consultation</span>
              <span className={styles.arrowIcon} aria-hidden="true">
                <span />
              </span>
            </Link>
            <a className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`} href="tel:+919179191939">
              <span className={styles.ctaButtonFill} aria-hidden="true" />
              <span className={styles.ctaButtonText}>Call Now !</span>
              <span className={styles.arrowIcon} aria-hidden="true">
                <span />
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

