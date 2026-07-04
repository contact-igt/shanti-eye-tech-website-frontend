import Image from "next/image";
import { motion } from "framer-motion";
import {
  ease,
  reveal,
  sectionViewport,
  stagger,
  whyPatientsContent
} from "@/pagecomponent/About/aboutData";
import styles from "./styles.module.css";

function BenefitItem({ item, index }) {
  const col = index % 4;
  const row = Math.floor(index / 4);

  return (
    <motion.div
      className="benefit-item"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={sectionViewport}
      transition={{
        duration: 0.62,
        delay: row * 0.18 + col * 0.1,
        ease
      }}
    >
      <span className="benefit-icon" aria-hidden="true">
        <Image src={item.image} alt="" width={54} height={54} sizes="54px" />
      </span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </motion.div>
  );
}

export default function LasikBenefitsSection() {
  return (
    <section className={`benefits-section ${styles.section}`} id="benefits">
      <Image
        className={styles.background}
        src="/assets/Treatments/background.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
      />
      <motion.div
        className={`benefits-inner ${styles.inner}`}
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
        variants={stagger}
      >
        <motion.div className="benefits-heading" variants={stagger}>
          <motion.span className="benefits-badge" variants={reveal}>
            {whyPatientsContent.badge}
          </motion.span>
          <motion.h2 variants={reveal}>{whyPatientsContent.title}</motion.h2>
          <motion.p variants={reveal}>
            {whyPatientsContent.description.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </motion.p>
        </motion.div>

        <div className="benefits-grid">
          {whyPatientsContent.items.map((item, index) => (
            <BenefitItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
