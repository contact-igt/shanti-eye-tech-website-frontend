import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
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

export default function WhatIsLasikSection({ content }) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 82%", "end 24%"]
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.35,
  });
  const revealProgress = useTransform(smoothProgress, [0.04, 0.92], [0, 1]);

  const wordsOne = content.description.split(" ");
  const wordsTwo = content.descriptionSecondary.split(" ");
  const totalWords = wordsOne.length + wordsTwo.length;

  return (
    <section className={styles.section} aria-labelledby="what-is-lasik-title" ref={sectionRef}>
      {/* badge + title + first paragraph inside padded inner */}
      <div className={styles.inner}>
        <span className={styles.badge}>{content.badge}</span>

        <div className={styles.headerRow}>
          <div className={styles.titleWrap}>
            <h2 id="what-is-lasik-title" className={playfairDisplay.className}>
              {content.title}
            </h2>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <Image
              src="/assets/Treatments/LASIK/92a1835e1ef63ae90a3cc2d7cc296acf44366304.png"
              alt=""
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

      {/* Full-bleed banner — outside .inner, no padding, no border-radius */}
      <div className={styles.middleVisual}>
        <Image
          src="/assets/Treatments/LASIK/fcaf36b415bc029b876282b7c58e920d8be0fdf7.png"
          alt="LASIK laser eye surgery procedure"
          fill
          className={styles.middleVisualImg}
          sizes="100vw"
        />
      </div>

      {/* Second paragraph back inside padded inner */}
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

