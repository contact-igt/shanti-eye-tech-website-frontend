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

function CheckIcon() {
  return (
    <span className={styles.checkIcon} aria-hidden="true">
      <Image src="/assets/Treatments/tick_icon.png" alt="" width={48} height={48} sizes="48px" />
    </span>
  );
}

function chunkRows(images, isFiveCard) {
  if (isFiveCard) {
    return [images.slice(0, 2), images.slice(2, 3), images.slice(3, 5)];
  }

  return [images.slice(0, 2), images.slice(2, 4)];
}

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const bentoVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function TreatmentChecklistBento({ content }) {
  if (!content) return null;

  const headingId = content.headingId || "treatment-checklist-title";
  const isFiveCard = content.layoutVariant === "five-card";
  const imageRows = chunkRows(content.images, isFiveCard);

  return (
    <section
      className={`${styles.section} ${isFiveCard ? styles.fiveCard : styles.fourCard}`}
      aria-labelledby={headingId}
    >
      <Image
        className={`${styles.overlayShape} ${styles.overlayShapeLeft}`}
        src="/assets/Treatments/overlay_shape1.png"
        alt=""
        width={720}
        height={520}
        aria-hidden="true"
      />
      <Image
        className={`${styles.overlayShape} ${styles.overlayShapeRight}`}
        src="/assets/Treatments/overlay_shape2.png"
        alt=""
        width={260}
        height={260}
        aria-hidden="true"
      />

      <div className={styles.sectionHeader}>
        <span className={styles.badge}>{content.badge}</span>
        <h2 id={headingId} className={`${styles.title} ${playfairDisplay.className}`}>
          {content.title}
        </h2>
      </div>

      <div className={styles.contentGrid}>
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
            {content.listItems.map((item) => (
              <motion.li key={item} className={styles.listItem} variants={listItemVariants}>
                <CheckIcon />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className={styles.bentoRows}
          variants={bentoVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {imageRows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className={`${styles.bentoRow} ${styles[`row${rowIndex + 1}`]}`}>
              {row.map((image, imageIndex) => {
                const cardIndex = content.images.indexOf(image) + 1;

                return (
                  <motion.div
                    key={image.id}
                    className={`${styles.bentoCard} ${styles[`card${cardIndex}`] || ""} ${
                      row.length === 1 ? styles.singleCard : imageIndex === 0 ? styles.primaryCard : styles.secondaryCard
                    }`}
                    variants={cardVariants}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className={styles.cardImg}
                      style={{ objectPosition: image.objectPosition || "center center" }}
                      sizes={isFiveCard ? "(max-width: 1024px) 50vw, 38vw" : "(max-width: 1024px) 50vw, 34vw"}
                    />
                  </motion.div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
