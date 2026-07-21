import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays, Phone } from "lucide-react";
import { Inter } from "next/font/google";
import {
  aboutFaqContent,
  ease,
  reveal,
  sectionViewport,
  stagger
} from "@/constant/aboutContent";
import styles from "./styles.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <motion.article className={styles.aboutFaqItem} variants={reveal}>
      <button
        className={styles.aboutFaqQuestion}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`about-faq-answer-${item.id}`}
      >
        <span>{item.question}</span>
        <motion.span
          className={styles.aboutFaqArrow}
          aria-hidden="true"
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease }}
        >
          <ArrowRight strokeWidth={1.9} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.aboutFaqAnswerWrap}
            id={`about-faq-answer-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.34, ease }}
          >
            <p>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default function FAQ({ content = aboutFaqContent }) {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      className={`${inter.className} ${styles.aboutFaqSection}`}
      id="faq"
      aria-labelledby="about-faq-title"
    >
      <div className={styles.aboutFaqInner}>
        <motion.aside
          className={styles.aboutFaqCallout}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.7, ease }}
        >
          <span className={styles.aboutFaqPhone} aria-hidden="true">
            <Phone fill="currentColor" strokeWidth={1.8} />
          </span>
          <p>{content.callout}</p>
          <Link className={styles.aboutFaqBook} href="/contact">
            <CalendarDays aria-hidden="true" strokeWidth={1.7} />
            <span>Book an Appointment</span>
          </Link>
          <a className={styles.aboutFaqEmail} href={`mailto:${content.email}`}>
            or {content.email}
          </a>
        </motion.aside>

        <motion.div
          className={styles.aboutFaqContent}
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
          variants={stagger}
        >
          <motion.div className={styles.aboutFaqHeading} variants={reveal}>
            <span className={styles.aboutFaqEyebrow}>
              <i aria-hidden="true" />
              {content.eyebrow}
            </span>
            <h2 id="about-faq-title">{content.title}</h2>
          </motion.div>

          <motion.div className={styles.aboutFaqList} variants={stagger}>
            {content.items.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}