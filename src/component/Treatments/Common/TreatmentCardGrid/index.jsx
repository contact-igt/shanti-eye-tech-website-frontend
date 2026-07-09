import { motion } from "framer-motion";
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import styles from "./styles.module.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
  style: ["normal"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});

function BrandIcon() {
  return (
    <Image
      className={styles.brandIcon}
      src="/assets/Treatments/star.png"
      alt=""
      width={18}
      height={18}
      sizes="18px"
      aria-hidden="true"
    />
  );
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TreatmentCardGrid({ content }) {
  if (!content) return null;

  return (
    <section className={styles.section} aria-labelledby={content.headingId || "treatment-card-grid-title"}>
      <span className={styles.glowLeft} aria-hidden="true" />
      <span className={styles.glowRight} aria-hidden="true" />
      <div className={styles.inner}>
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {content.badge}
        </motion.span>

        <motion.h2
          id={content.headingId || "treatment-card-grid-title"}
          className={`${styles.title} ${playfairDisplay.className}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {content.title}
        </motion.h2>

        <motion.h3
          className={`${styles.subtitle} ${plusJakartaSans.className}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content.subtitle}
        </motion.h3>

        <motion.p
          className={`${styles.description} ${inter.className}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {content.description}
        </motion.p>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {content.cards.map((card) => (
            <motion.div key={card.title} className={styles.card} variants={cardVariants}>
              <div className={styles.cardImageWrapper}>
                {card.image.src ? (
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                ) : null}
              </div>
              <div className={styles.cardContent}>
                <div className={styles.brand}>
                  <BrandIcon />
                  <span>{card.brand}</span>
                </div>
                <h4 className={styles.cardTitle}>{card.title}</h4>
                <p className={styles.cardDesc}>{card.description}</p>
                <div className={styles.tags}>
                  {card.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



