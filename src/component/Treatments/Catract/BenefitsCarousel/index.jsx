"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import styles from "./styles.module.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal"],
  display: "swap",
});

export default function BenefitsCarouselSection({ content }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [slideDirection, setSlideDirection] = useState(1);

  const total = content?.cards?.length || 1;

  const handleNext = useCallback(() => {
    setSlideDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setSlideDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  if (!content) return null;

  const centerIdx = currentIndex;
  const leftIdx = (currentIndex - 1 + total) % total;
  const rightIdx = (currentIndex + 1) % total;

  const centerCard = content.cards[centerIdx];
  const leftCard = content.cards[leftIdx];
  const rightCard = content.cards[rightIdx];
  const slideTransition = { duration: 0.54, ease: [0.32, 0.72, 0, 1] };
  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 90 : -90,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -90 : 90,
    }),
  };

  return (
    <section className={styles.section} aria-labelledby="benefits-carousel-title">
      <div className={styles.inner}>
        <span className={styles.badge}>{content.badge}</span>

        <h2
          id="benefits-carousel-title"
          className={`${styles.title} ${playfairDisplay.className}`}
        >
          {content.title}
        </h2>

        <div className={styles.carouselOuter}>
          <div className={styles.carouselContainer}>
            {/* Left side card */}
            <AnimatePresence mode="popLayout" custom={slideDirection}>
              <motion.div
                key={`left-${leftIdx}`}
                className={`${styles.sideCard} ${styles.sideCardLeft}`}
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
              >
                <Image
                  src={leftCard.image}
                  alt={leftCard.title}
                  fill
                  className={styles.cardImage}
                  sizes="30vw"
                />
                <div className={styles.cardGradient} />
                <h3 className={styles.sideTitle}>{leftCard.title}</h3>
              </motion.div>
            </AnimatePresence>

            {/* Center card */}
            <AnimatePresence mode="popLayout" custom={slideDirection}>
              <motion.div
                key={`center-${centerIdx}`}
                className={styles.centerCard}
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
              >
                <Image
                  src={centerCard.image}
                  alt={centerCard.title}
                  fill
                  className={styles.cardImage}
                  sizes="40vw"
                />
                <div className={styles.cardGradient} />
                <h3 className={`${styles.centerTitle} ${playfairDisplay.className}`}>
                  {centerCard.title}
                </h3>
              </motion.div>
            </AnimatePresence>

            {/* Right side card */}
            <AnimatePresence mode="popLayout" custom={slideDirection}>
              <motion.div
                key={`right-${rightIdx}`}
                className={`${styles.sideCard} ${styles.sideCardRight}`}
                custom={slideDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
              >
                <Image
                  src={rightCard.image}
                  alt={rightCard.title}
                  fill
                  className={styles.cardImage}
                  sizes="30vw"
                />
                <div className={styles.cardGradient} />
                <h3 className={styles.sideTitle}>{rightCard.title}</h3>
              </motion.div>
            </AnimatePresence>

            {/* Nav buttons */}
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={handleNext}
              aria-label="Next slide"
            >
              <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
