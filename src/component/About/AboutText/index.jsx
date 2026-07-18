import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
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
  const safeWordCount = Math.max(aboutWordCount - 1, 1);
  const start = (index / safeWordCount) * 0.76;
  const end = Math.min(start + 0.18, 1);
  const color = useTransform(
    progress,
    [start, end],
    ["rgba(17, 24, 23, 0.24)", "#111817"]
  );

  return (
    <motion.span
      className={styles.aboutIntroductionWord}
      style={reduceMotion ? { color: "#111817" } : { color }}
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
    offset: ["start 82%", "end 24%"]
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.35
  });
  const revealProgress = useTransform(smoothProgress, [0.04, 0.92], [0, 1]);

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
                    progress={revealProgress}
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
