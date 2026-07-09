import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Inter } from "next/font/google";
import { ease, reveal, sectionViewport, stagger } from "@/constant/aboutContent";
import styles from "./styles.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <motion.div className={styles.item} variants={reveal}>
      <button
        className={styles.questionBtn}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`contact-faq-${item.id}`}
      >
        <span className={styles.questionText}>{item.question}</span>
        <span className={styles.toggle} aria-hidden="true">
          {isOpen ? <CloseIcon /> : <PlusIcon />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`contact-faq-${item.id}`}
            className={styles.answerWrap}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.34, ease }}
          >
            <p>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ContactFAQ({ faqs }) {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  return (
    <section className={`${inter.className} ${styles.section}`} id="contact-faq">
      <div className={styles.inner}>
        <motion.span
          className={styles.badge}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.5, ease }}
        >
          FAQ
        </motion.span>

        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.6, delay: 0.08, ease }}
        >
          Have Questions?
          <span className={styles.headingAccent}>We Have Answers.</span>
        </motion.h2>

        <motion.div
          className={styles.list}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
        >
          {faqs.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId((cur) => (cur === item.id ? null : item.id))}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
