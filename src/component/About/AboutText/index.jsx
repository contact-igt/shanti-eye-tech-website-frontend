import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
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

const aboutWordCount = aboutIntroductionContent.paragraphs.reduce(
  (total, paragraph) => total + paragraph.split(" ").length,
  0
);

function ScrollTextWord({ children, index, progress, reduceMotion }) {
  const start = (index / aboutWordCount) * 0.94;
  const color = useTransform(
    progress,
    [start, start + 0.055],
    ["rgba(77, 70, 65, 0.15)", "#111111"]
  );

  return (
    <motion.span
      className={styles.aboutIntroductionWord}
      style={reduceMotion ? { color: "#111111" } : { color }}
    >
      {children}{" "}
    </motion.span>
  );
}

export default function AboutText() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 94%", "end 6%"]
  });

  return (
    <section
      className={`${inter.className} ${styles.aboutIntroductionSection}`}
      aria-labelledby="about-introduction-title"
      id="about-story"
      ref={sectionRef}
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
          {aboutIntroductionContent.paragraphs.map((paragraph, paragraphIndex) => {
            const previousWords = aboutIntroductionContent.paragraphs
              .slice(0, paragraphIndex)
              .reduce((total, item) => total + item.split(" ").length, 0);

            return (
              <motion.p
                id={paragraphIndex === 0 ? "about-introduction-title" : undefined}
                key={paragraph}
                variants={reveal}
              >
                {paragraph.split(" ").map((word, wordIndex) => (
                  <ScrollTextWord
                    index={previousWords + wordIndex}
                    key={`${paragraphIndex}-${wordIndex}`}
                    progress={scrollYProgress}
                    reduceMotion={reduceMotion}
                  >
                    {word}
                  </ScrollTextWord>
                ))}
              </motion.p>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
