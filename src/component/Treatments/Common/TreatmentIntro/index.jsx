import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import styles from "./styles.module.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal"],
  display: "swap",
});

function ScrollTextWord({ children, index, totalWords, progress, reduceMotion }) {
  const safeWordCount = Math.max(totalWords - 1, 1);
  const start = (index / safeWordCount) * 0.76;
  const end = Math.min(start + 0.18, 1);
  const color = useTransform(progress, [start, end], [
    "rgba(17, 24, 23, 0.24)",
    "#111817",
  ]);

  return (
    <motion.span
      className={styles.word}
      style={reduceMotion ? { color: "#111817" } : { color }}
    >
      {children}{" "}
    </motion.span>
  );
}

export default function TreatmentIntro({ content }) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 82%", "end 24%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.35,
  });
  const revealProgress = useTransform(smoothProgress, [0.04, 0.92], [0, 1]);

  if (!content) return null;

  const wordsOne = content.description.split(" ");
  const wordsTwo = content.descriptionSecondary.split(" ");
  const totalWords = wordsOne.length + wordsTwo.length;
  const headingId = content.headingId || "treatment-intro-title";

  return (
    <section className={styles.section} aria-labelledby={headingId} ref={sectionRef}>
      <div className={styles.inner}>
        <span className={styles.badge}>{content.badge}</span>

        <div className={styles.headerRow}>
          <div className={styles.titleWrap}>
            <h2 id={headingId} className={playfairDisplay.className}>
              {content.title}
            </h2>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <Image
              src={content.topImage.src}
              alt={content.topImage.alt || ""}
              fill
              className={styles.visualImg}
              sizes="(max-width:768px) 80vw, 45vw"
              priority
            />
          </div>
        </div>

        <p className={styles.description}>
          {wordsOne.map((word, wordIndex) => (
            <ScrollTextWord
              key={`one-${wordIndex}-${word}`}
              index={wordIndex}
              totalWords={totalWords}
              progress={revealProgress}
              reduceMotion={reduceMotion}
            >
              {word}
            </ScrollTextWord>
          ))}
        </p>
      </div>

      <div className={styles.middleVisual}>
        <Image
          src={content.middleImage.src}
          alt={content.middleImage.alt}
          fill
          className={styles.middleVisualImg}
          sizes="100vw"
        />
      </div>

      <div className={styles.inner}>
        <p className={`${styles.description} ${styles.descriptionCenter}`}>
          {wordsTwo.map((word, wordIndex) => (
            <ScrollTextWord
              key={`two-${wordIndex}-${word}`}
              index={wordsOne.length + wordIndex}
              totalWords={totalWords}
              progress={revealProgress}
              reduceMotion={reduceMotion}
            >
              {word}
            </ScrollTextWord>
          ))}
        </p>
      </div>
    </section>
  );
}


