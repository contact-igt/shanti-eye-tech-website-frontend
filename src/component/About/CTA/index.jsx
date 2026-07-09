import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Inter } from "next/font/google";
import {
  aboutCtaContent,
  ease,
  sectionViewport
} from "@/constant/aboutContent";
import styles from "./styles.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap"
});

export default function AboutCTA() {
  return (
    <section
      className={`${inter.className} ${styles.aboutCtaSection}`}
      aria-labelledby="about-cta-title"
    >
      <div className={styles.aboutCtaShell}>
        <motion.div
          className={`${styles.aboutCtaImage} ${styles.aboutCtaImageLeft}`}
          initial={{ opacity: 0, x: -34, y: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.62, ease }}
        >
          <Image
            src={aboutCtaContent.images.left.src}
            alt={aboutCtaContent.images.left.alt}
            width={222}
            height={245}
            sizes="(max-width: 768px) 86px, 124px"
          />
        </motion.div>

        <motion.div
          className={`${styles.aboutCtaImage} ${styles.aboutCtaImageRight}`}
          initial={{ opacity: 0, x: 34, y: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.68, delay: 0.08, ease }}
        >
          <Image
            src={aboutCtaContent.images.right.src}
            alt={aboutCtaContent.images.right.alt}
            width={666}
            height={735}
            sizes="(max-width: 768px) 86px, 124px"
          />
        </motion.div>

        <motion.div
          className={styles.aboutCtaCard}
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.72, ease }}
        >
          <motion.span
            className={styles.aboutCtaBadge}
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ duration: 0.48, delay: 0.12, ease }}
          >
            {aboutCtaContent.badge}
          </motion.span>

          <motion.h2
            id="about-cta-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ duration: 0.58, delay: 0.2, ease }}
          >
            <span>{aboutCtaContent.title[0]}</span>
            {" "}
            <span>{aboutCtaContent.title[1]}</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ duration: 0.52, delay: 0.3, ease }}
          >
            <Link className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`} href={aboutCtaContent.href}>
              <span className={styles.ctaButtonFill} aria-hidden="true" />
              <span className={styles.ctaButtonText}>{aboutCtaContent.buttonLabel}</span>
              <span className={styles.arrowIcon} aria-hidden="true">
                <span />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}