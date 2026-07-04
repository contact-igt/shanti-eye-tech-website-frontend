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
  "Are over 18 years of age",
  "Have stable vision prescription",
  "Have healthy eyes",
  "tired of wearing glasses or contact lenses",
  "Have myopia (near-sightedness)",
  "Have hyperopia (far-sightedness)",
  "Have astigmatism"
];

function CheckIcon() {
  return (
    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#e1fbf2" />
      <path d="M8.5 12.5L11 15L15.5 9.5" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const listContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const bentoContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const bentoCardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function IsLasikRightSection() {
  return (
    <section className={styles.section} aria-labelledby="is-lasik-right-title">
      <div className={styles.inner}>
        <span className={styles.badge}>Services</span>
        <h2 id="is-lasik-right-title" className={`${styles.title} ${playfairDisplay.className}`}>
          Is LASIK Right For You?
        </h2>

        <div className={styles.contentGrid}>
          <div className={styles.leftCol}>
            <h3 className={`${styles.subtitle} ${playfairDisplay.className}`}>
              You May Be A Good Candidate If You
            </h3>

            <motion.ul 
              className={styles.list}
              variants={listContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {listItems.map((item, index) => (
                <motion.li 
                  key={index} 
                  className={styles.listItem}
                  variants={listItemVariants}
                >
                  <CheckIcon />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className={styles.rightCol}>
            <motion.div 
              className={styles.bentoGrid}
              variants={bentoContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className={`${styles.bentoCard} ${styles.card1}`} variants={bentoCardVariants} />
              <motion.div className={`${styles.bentoCard} ${styles.card2}`} variants={bentoCardVariants} />
              <motion.div className={`${styles.bentoCard} ${styles.card3}`} variants={bentoCardVariants} />
              <motion.div className={`${styles.bentoCard} ${styles.card4}`} variants={bentoCardVariants} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
