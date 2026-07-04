import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import styles from "./styles.module.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal"],
  display: "swap",
});

function ScrollTextWord({ children, index, totalWords, progress, reduceMotion }) {
  const start = (index / totalWords) * 0.72;
  const color = useTransform(progress, [start, start + 0.22], ["rgba(41, 55, 71, 0.2)", "#111111"]);

  return (
    <motion.span
      className={styles.word}
      style={reduceMotion ? { color: "#111111" } : { color }}
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
    offset: ["start 80%", "end 50%"]
  });

  const wordsOne = content.description.split(" ");
  const wordsTwo = content.descriptionSecondary.split(" ");
  const totalWords = wordsOne.length + wordsTwo.length;

  return (
    <section className={styles.section} aria-labelledby="what-is-lasik-title" ref={sectionRef}>
      <div className={styles.inner}>
        <span className={styles.badge}>{content.badge}</span>

        <div className={styles.headerRow}>
          <div className={styles.titleWrap}>
            <h2 id="what-is-lasik-title" className={playfairDisplay.className}>
              {content.title}
            </h2>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <span className={styles.visualFill} />
          </div>
        </div>

        <p className={styles.description}>
          {wordsOne.map((word, wordIndex) => (
            <ScrollTextWord
              key={`one-${wordIndex}-${word}`}
              index={wordIndex}
              totalWords={totalWords}
              progress={scrollYProgress}
              reduceMotion={reduceMotion}
            >
              {word}
            </ScrollTextWord>
          ))}
        </p>

        <div className={styles.middleVisual}>
          <span className={styles.middleVisualFill} />
        </div>

        <p className={styles.description}>
          {wordsTwo.map((word, wordIndex) => (
            <ScrollTextWord
              key={`two-${wordIndex}-${word}`}
              index={wordsOne.length + wordIndex}
              totalWords={totalWords}
              progress={scrollYProgress}
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
