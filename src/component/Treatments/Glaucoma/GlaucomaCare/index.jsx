import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import styles from "./styles.module.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal"],
  display: "swap",
});

function BrandIcon() {
  return (
    <svg className={styles.brandIcon} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="7" r="2" fill="currentColor" />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function GlaucomaCareSection({ content }) {
  if (!content) return null;

  return (
    <section className={styles.section} aria-labelledby="glaucoma-care-title">
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
          id="glaucoma-care-title" 
          className={`${styles.title} ${playfairDisplay.className}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {content.title}
        </motion.h2>

        <motion.h3 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content.subtitle}
        </motion.h3>

        {content.description && (
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {content.description}
          </motion.p>
        )}

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {content.cards.map((card, index) => (
            <motion.div key={index} className={styles.card} variants={cardVariants}>
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
                {card.brand && (
                  <div className={styles.brand}>
                    <BrandIcon />
                    <span>{card.brand}</span>
                  </div>
                )}
                <h4 className={styles.cardTitle}>{card.title}</h4>
                <p className={styles.cardDesc}>{card.description}</p>
                <div className={styles.tags}>
                  {card.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
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
