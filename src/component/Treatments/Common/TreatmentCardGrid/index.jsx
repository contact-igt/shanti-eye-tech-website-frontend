import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Slider from "react-slick";
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

function SliderArrow({ onClick, direction }) {
  return (
    <button
      type="button"
      className={`${styles.sliderArrow} ${direction === "prev" ? styles.prevArrow : styles.nextArrow}`}
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous treatment option" : "Next treatment option"}
    >
      <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {direction === "prev" ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}

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

function TreatmentOptionCard({ card, asMotion = false }) {
  const CardElement = asMotion ? motion.div : "div";
  const motionProps = asMotion ? { variants: cardVariants } : {};

  return (
    <CardElement className={styles.card} {...motionProps}>
      <div className={styles.cardImageWrapper}>
        {card.image.src ? (
          <Image
            src={card.image.src}
            alt={card.image.alt}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
          />
        ) : null}
      </div>
      <div className={styles.cardContent}>
        {card.brand && String(card.brand).trim() ? (
          <div className={styles.brand}>
            <BrandIcon />
            <span>{card.brand}</span>
          </div>
        ) : null}
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
    </CardElement>
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
  const useSlider = useMediaQuery("(max-width: 992px)");
  const sliderRef = useRef(null);

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

        {useSlider ? (
          <div className={styles.sliderWrap}>
            <Slider ref={sliderRef} className={styles.slider} {...sliderSettings}>
              {content.cards.map((card) => (
                <div key={card.title} className={styles.slideItem}>
                  <TreatmentOptionCard card={card} />
                </div>
              ))}
            </Slider>
            <SliderArrow direction="prev" onClick={() => sliderRef.current?.slickPrev()} />
            <SliderArrow direction="next" onClick={() => sliderRef.current?.slickNext()} />
          </div>
        ) : (
          <motion.div
            className={styles.grid}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {content.cards.map((card) => (
              <TreatmentOptionCard key={card.title} card={card} asMotion />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}








