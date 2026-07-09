import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import {
  aboutIntroductionContent,
  reveal,
  sectionViewport,
  stagger
} from "@/constant/aboutContent";
import styles from "./styles.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap"
});

export default function AboutText() {
  return (
    <section
      className={`${inter.className} ${styles.aboutIntroductionSection}`}
      aria-labelledby="about-introduction-title"
      id="about-story"
    >
      <motion.div
        className={styles.aboutIntroductionInner}
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
        variants={stagger}
      >
        <motion.span className={styles.aboutIntroductionBadge} variants={reveal}>
          {aboutIntroductionContent.badge}
        </motion.span>

        <motion.div className={styles.aboutIntroductionCopy} variants={stagger}>
          {aboutIntroductionContent.paragraphs.map((paragraph, index) => (
            <motion.p
              id={index === 0 ? "about-introduction-title" : undefined}
              key={paragraph}
              variants={reveal}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}