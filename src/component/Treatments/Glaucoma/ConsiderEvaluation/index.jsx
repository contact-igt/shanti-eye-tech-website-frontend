import Image from "next/image";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import styles from "./styles.module.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal"],
  display: "swap",
});

const listItems = [
  "Vision interferes with daily activities",
  "Glasses no longer improve your vision",
  "Reading or driving has become difficult",
  "Cataracts are affecting your independence",
  "Your eye specialist recommends treatment"
];

const images = [
  {
    id: "card1",
    src: "/assets/Treatments/glaucoma/ef05d739652b323275bd5c4af41f774c995e461f.png",
    alt: "Loss of peripheral vision",
    pos: "center center",
  },
  {
    id: "card2",
    src: "/assets/Treatments/glaucoma/8d4a0a548eace991724e13e67aa0210d5248fb9c.png",
    alt: "Blurred vision in low light",
    pos: "center center",
  },
  {
    id: "card3",
    src: "/assets/Treatments/glaucoma/2622ad0f596e190e51f9113286fb62b207d8e241.png",
    alt: "Halos around lights",
    pos: "center center",
  },
  {
    id: "card4",
    src: "/assets/Treatments/glaucoma/437c8b72848a6c66eb4a429c64d1306d30369cbe.png",
    alt: "Headaches or nausea",
    pos: "center center",
  },
];

function CheckIcon() {
  return (
    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#e1fbf2" />
      <path d="M8.5 12.5L11 15L15.5 9.5" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const bentoVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

export default function ConsiderEvaluationSection({ content }) {
  return (
    <section className={styles.section} aria-labelledby="consider-evaluation-title">

      {/* ── Section header (full-width, balanced padding) ── */}
      <div className={styles.sectionHeader}>
        <span className={styles.badge}>{content.badge}</span>
        <h2
          id="consider-evaluation-title"
          className={`${styles.title} ${playfairDisplay.className}`}
        >
          {content.title}
        </h2>
      </div>

      {/* ── Two-column: left text + right bento (bleeds to edge) ── */}
      <div className={styles.contentGrid}>

        {/* Left: subtitle + checklist */}
        <div className={styles.leftContent}>
          <h3 className={`${styles.subtitle} ${playfairDisplay.className}`}>
            {content.subtitle}
          </h3>

          <motion.ul
            className={styles.list}
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Hardcoded list for Glaucoma since warning signs are a list */}
            {["Loss of peripheral (side) vision", "Blurred vision, especially in low light", "Halos around lights", "Headaches, nausea, or vomiting", "Age above 40 years"].map((item, i) => (
              <motion.li key={i} className={styles.listItem} variants={itemVariants}>
                <CheckIcon />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right: 2×2 image bento — bleeds to right viewport edge */}
        <motion.div
          className={styles.bentoGrid}
          variants={bentoVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {images.map((img) => (
            <motion.div
              key={img.id}
              className={`${styles.bentoCard} ${styles[img.id]}`}
              variants={cardVariants}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={styles.cardImg}
                style={{ objectPosition: img.pos }}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 45vw, 30vw"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
