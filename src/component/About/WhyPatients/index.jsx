import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import {
  ease,
  reveal,
  sectionViewport,
  stagger,
  whyPatientsContent
} from "@/pagecomponent/About/aboutData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap"
});

function BenefitItem({ item, index }) {
  const row = Math.floor(index / 4);
  const column = index % 4;

  return (
    <motion.li
      className="about-why-item"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={sectionViewport}
      transition={{
        duration: 0.6,
        delay: row * 0.14 + column * 0.08,
        ease
      }}
    >
      <span className="about-why-icon" aria-hidden="true">
        <Image src={item.image} alt="" width={52} height={52} sizes="52px" />
      </span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </motion.li>
  );
}

export default function WhyPatients() {
  return (
    <section className={`${inter.className} about-why-section`} aria-labelledby="about-why-title">
      <motion.div
        className="about-why-inner"
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
        variants={stagger}
      >
        <motion.header className="about-why-heading" variants={stagger}>
          <motion.span className="about-why-badge" variants={reveal}>
            {whyPatientsContent.badge}
          </motion.span>
          <motion.h2 id="about-why-title" variants={reveal}>
            {whyPatientsContent.title}
          </motion.h2>
          <motion.p variants={reveal}>
            {whyPatientsContent.description.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </motion.p>
        </motion.header>

        <ul className="about-why-grid">
          {whyPatientsContent.items.map((item, index) => (
            <BenefitItem key={item.title} item={item} index={index} />
          ))}
        </ul>
      </motion.div>
    </section>
  );
};