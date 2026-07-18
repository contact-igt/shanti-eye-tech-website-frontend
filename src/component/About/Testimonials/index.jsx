import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Castoro, Inter, Playfair_Display } from "next/font/google";
import {
  aboutTestimonialsContent,
  reveal,
  sectionViewport,
  stagger
} from "@/constant/aboutContent";
import styles from "./styles.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap"
});

const castoro = Castoro({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap"
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap"
});

function TestimonialCard({ item }) {
  return (
    <div className={styles.aboutTestimonialSlide}>
      <article
        className={styles.aboutTestimonialCard}
        style={{
          "--testimonial-rotation": `${item.rotation}deg`,
          "--testimonial-offset": `${item.offset}px`
        }}
      >
        <Image
          className={styles.aboutTestimonialPin}
          src={item.pin}
          alt=""
          width={232}
          height={359}
          sizes="64px"
          aria-hidden="true"
        />
        <cite className={`${inter.className} ${styles.aboutTestimonialName}`}>
          {item.name}
        </cite>
        <blockquote className={playfair.className}>
          &quot;{item.quote}&quot;
        </blockquote>
      </article>
    </div>
  );
}

export default function Testimonials() {
  const sliderRef = useRef(null);
  const keepAutoplayRunning = () => sliderRef.current?.slickPlay?.();

  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1800,
    speed: 850,
    cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "7vw",
    pauseOnHover: true,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    swipeToSlide: true,
    draggable: true,
    touchThreshold: 8,
    accessibility: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: { slidesToShow: 3, centerPadding: "7vw" }
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, centerPadding: "6vw" }
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, centerPadding: "8vw" }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, centerPadding: "34px" }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, centerPadding: "28px" }
      },
      {
        breakpoint: 390,
        settings: { slidesToShow: 1, centerPadding: "20px" }
      }
    ]
  };

  return (
    <section
      className={styles.aboutTestimonialsSection}
      id="testimonials"
      aria-labelledby="about-testimonials-title"
    >
      <motion.header
        className={styles.aboutTestimonialsHeading}
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
        variants={stagger}
      >
        <motion.span
          className={`${inter.className} ${styles.aboutTestimonialsBadge}`}
          variants={reveal}
        >
          {aboutTestimonialsContent.badge}
        </motion.span>
        <motion.h2
          className={castoro.className}
          id="about-testimonials-title"
          variants={reveal}
        >
          {aboutTestimonialsContent.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </motion.h2>
      </motion.header>

      <div
        className={styles.aboutTestimonialsCarousel}
        aria-label="Client testimonials carousel"
        onMouseEnter={keepAutoplayRunning}
        onMouseMove={keepAutoplayRunning}
        onMouseLeave={keepAutoplayRunning}
      >
        <Slider ref={sliderRef} {...sliderSettings}>
          {aboutTestimonialsContent.items.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
