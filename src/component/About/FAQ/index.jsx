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
} from "@/pagecomponent/About/aboutData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <motion.article className="about-faq-item" variants={reveal}>
      <button
        className="about-faq-question"
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`about-faq-answer-${item.id}`}
      >
        <span>{item.question}</span>
        <motion.span
          className="about-faq-arrow"
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
            className="about-faq-answer-wrap"
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

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      className={`${inter.className} about-faq-section`}
      id="faq"
      aria-labelledby="about-faq-title"
    >
      <div className="about-faq-inner">
        <motion.aside
          className="about-faq-callout"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.7, ease }}
        >
          <span className="about-faq-phone" aria-hidden="true">
            <Phone fill="currentColor" strokeWidth={1.8} />
          </span>
          <p>{aboutFaqContent.callout}</p>
          <Link className="about-faq-book" href="/#contact">
            <CalendarDays aria-hidden="true" strokeWidth={1.7} />
            <span>Book a call</span>
          </Link>
          <a className="about-faq-email" href={`mailto:${aboutFaqContent.email}`}>
            or {aboutFaqContent.email}
          </a>
        </motion.aside>

        <motion.div
          className="about-faq-content"
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
          variants={stagger}
        >
          <motion.div className="about-faq-heading" variants={reveal}>
            <span className="about-faq-eyebrow">
              <i aria-hidden="true" />
              {aboutFaqContent.eyebrow}
            </span>
            <h2 id="about-faq-title">{aboutFaqContent.title}</h2>
          </motion.div>

          <motion.div className="about-faq-list" variants={stagger}>
            {aboutFaqContent.items.map((item) => (
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