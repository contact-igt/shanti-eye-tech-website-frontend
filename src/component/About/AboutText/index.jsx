import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import {
  aboutIntroductionContent,
  reveal,
  sectionViewport,
  stagger
} from "@/pagecomponent/About/aboutData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap"
});

export default function AboutText() {
  return (
    <section
      className={`${inter.className} about-introduction-section`}
      aria-labelledby="about-introduction-title"
      id="about-story"
    >
      <motion.div
        className="about-introduction-inner"
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
        variants={stagger}
      >
        <motion.span className="about-introduction-badge" variants={reveal}>
          {aboutIntroductionContent.badge}
        </motion.span>

        <motion.div className="about-introduction-copy" variants={stagger}>
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