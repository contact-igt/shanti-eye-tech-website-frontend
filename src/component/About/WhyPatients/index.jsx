import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import {
  ease,
  reveal,
  sectionViewport,
  stagger,
  whyPatientsContent
} from "@/constant/aboutContent";
import styles from "./styles.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap"
});

function BenefitItem({ item, index }) {
  const row = Math.floor(index / 4);
  const column = index % 4;

  return (
    <motion.li
      className={styles.aboutWhyItem}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={sectionViewport}
      transition={{
        duration: 0.6,
        delay: row * 0.14 + column * 0.08,
        ease
      }}
    >
      <span className={styles.aboutWhyIcon} aria-hidden="true">
        <Image src={item.image} alt="" width={52} height={52} sizes="52px" />
      </span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </motion.li>
  );
}

export default function WhyPatients() {
  return (
    <section className={`${inter.className} ${styles.aboutWhySection}`} aria-labelledby="about-why-title">
      <motion.div
        className={styles.aboutWhyInner}
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
        variants={stagger}
      >
        <motion.header className={styles.aboutWhyHeading} variants={stagger}>
          <motion.span className={styles.aboutWhyBadge} variants={reveal}>
            {whyPatientsContent.badge}
          </motion.span>
          <motion.h2 id="about-why-title" variants={reveal}>
            {whyPatientsContent.title}
          </motion.h2>
          <motion.p variants={reveal}>
            {whyPatientsContent.description.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </motion.p>
        </motion.header>

        <ul className={styles.aboutWhyGrid}>
          {whyPatientsContent.items.map((item, index) => (
            <BenefitItem key={item.title} item={item} index={index} />
          ))}
        </ul>
      </motion.div>
    </section>
  );
};