"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bricolage_Grotesque, Playfair_Display } from "next/font/google";
import Image from "next/image";
import Slider from "react-slick";
import styles from "./styles.module.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

function SliderArrow({ direction, onClick }) {
  return (
    <button
      className={`${styles.navButton} ${direction === "prev" ? styles.prevButton : styles.nextButton}`}
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      type="button"
    >
      <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {direction === "prev" ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

export default function TreatmentBenefitsCarousel({ content }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [slideDirection, setSlideDirection] = useState(1);
  const useSlider = useMediaQuery("(max-width: 992px)");
  const sliderRef = useRef(null);

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

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2400,
    speed: 450,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    adaptiveHeight: false,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: true,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
          infinite: true,
        },
      },
    ],
  };

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
    <section className={styles.section} aria-labelledby={content.headingId || "benefits-carousel-title"}>
      <div className={styles.inner}>
        <span className={styles.badge}>{content.badge}</span>

        <h2
          id={content.headingId || "benefits-carousel-title"}
          className={`${styles.title} ${playfairDisplay.className}`}
        >
          {content.title}
        </h2>

        <div className={styles.carouselOuter}>
          {useSlider ? (
            <div className={styles.mobileSliderWrap}>
              <Slider ref={sliderRef} className={styles.mobileSlider} {...sliderSettings}>
                {content.cards.map((card) => (
                  <div key={card.title} className={styles.mobileSlideItem}>
                    <div className={styles.mobileCard}>
                      <Image src={card.image} alt={card.title} fill className={styles.cardImage} sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw" />
                      <div className={styles.cardGradient} />
                      <h3 className={`${styles.mobileCardTitle} ${bricolageGrotesque.className}`}>
                        {card.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </Slider>

              <SliderArrow direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
              <SliderArrow direction="next" onClick={() => sliderRef.current?.slickNext()} />
            </div>
          ) : (
            <div className={styles.carouselContainer}>
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
                  <Image src={leftCard.image} alt={leftCard.title} fill className={styles.cardImage} sizes="30vw" />
                  <div className={styles.cardGradient} />
                  <h3 className={`${styles.sideTitle} ${bricolageGrotesque.className}`}>
                    {leftCard.title}
                  </h3>
                </motion.div>
              </AnimatePresence>

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
                  <Image src={centerCard.image} alt={centerCard.title} fill className={styles.cardImage} sizes="40vw" />
                  <div className={styles.cardGradient} />
                  <h3 className={`${styles.centerTitle} ${bricolageGrotesque.className}`}>
                    {centerCard.title}
                  </h3>
                </motion.div>
              </AnimatePresence>

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
                  <Image src={rightCard.image} alt={rightCard.title} fill className={styles.cardImage} sizes="30vw" />
                  <div className={styles.cardGradient} />
                  <h3 className={`${styles.sideTitle} ${bricolageGrotesque.className}`}>
                    {rightCard.title}
                  </h3>
                </motion.div>
              </AnimatePresence>

              <SliderArrow direction="prev" onClick={handlePrev} />
              <SliderArrow direction="next" onClick={handleNext} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
