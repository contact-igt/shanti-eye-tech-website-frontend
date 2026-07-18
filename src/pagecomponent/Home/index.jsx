import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import {
  ease,
  sectionViewport,
  reveal,
  stagger,
  serviceCardReveal,
  docCardReveal,
  aboutLines,
  stats,
  aboutWordCount,
  technologyFeatures,
  services,
  doctorCards,
  benefits,
  awards,
  testimonials,
  faqs
} from "@/constant/homeContent";
import styles from "./styles.module.css";
import WhyPatients from "@/component/About/WhyPatients";
import FAQ from "@/component/About/FAQ";
import AboutCTA from "@/component/About/CTA";
import Testimonials from "@/component/About/Testimonials";


function toStyleName(className) {
  return className.replace(/-+([a-z0-9])/g, (_, character) => character.toUpperCase());
}

function css(classNames) {
  return classNames
    .split(/\s+/)
    .filter(Boolean)
    .map((className) => styles[toStyleName(className)] ?? className)
    .join(" ");
}

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal"],
  display: "swap",
});
const awardsInter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
  display: "swap",
  variable: "--font-awards-inter",
});
const homeNavMontserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
  variable: "--font-home-nav-montserrat",
});

function ArrowIcon() {
  return (
    <span className={css("arrow-icon")} aria-hidden="true">
      <span />
    </span>
  );
}

const technologyViewport = { once: true, amount: 0.25 };

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      when: "beforeChildren"
    }
  }
};

const textVariant = {
  hidden: ({ y = 40, scale = 1 } = {}) => ({
    opacity: 0,
    y,
    scale
  }),
  show: ({ delay = 0, duration = 0.7 } = {}) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration,
      delay,
      ease
    }
  })
};

const imageVariant = {
  hidden: {
    opacity: 0,
    x: -60,
    scale: 0.96
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.96,
      ease
    }
  }
};

const cardContainerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 1.32
    }
  }
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.94
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease,
      when: "beforeChildren",
      delayChildren: 0.14
    }
  }
};

const iconVariant = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    rotate: -8
  },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.46,
      ease
    }
  }
};

function CTAButton({ children, variant = "primary" }) {
  return (
    <motion.a
      className={css(`cta-button cta-button--${variant}`)}
      href="contact"
      whileTap={{ scale: 0.98 }}
    >
      <span className={css("cta-button-fill")} aria-hidden="true" />
      <span className={css("cta-button-text")}>{children}</span>
      <ArrowIcon />
    </motion.a>
  );
}

function MenuButton({ isOpen, onClick }) {
  return (
    <motion.button
      className={css(`menu-button ${isOpen ? "menu-open" : ""}`)}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
    >
      <span />
      <span />
      <span />
    </motion.button>
  );
}

function FeaturePill({ className, iconSrc, label, delay }) {
  return (
    <motion.div
      className={css(`feature-pill ${className}`)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      <span className={css("feature-pill-float")}>
        <span className={css("feature-icon")}>
          <Image
            src={iconSrc}
            alt=""
            width={52}
            height={52}
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
        </span>
        <span className={css("feature-label")}>{label}</span>
      </span>
    </motion.div>
  );
}

function HeroImage() {
  return (
    <motion.div
      className={css("hero-media")}
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.72, ease, delay: 0.1 }}
    >

      <div className={css("image-card")}>
        <motion.span
          className={css("image-card-photo")}
          role="img"
          aria-label="Shanthi Eye Tech reception"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 0.75, ease }}
        />
      </div>

      <FeaturePill
        className={css("pill-rating")}
        iconSrc="/assets/home_logos/gogle_rating.png"
        label="4.9 Google Rating"
        delay={0.42}
      />
      <FeaturePill
        className={css("pill-years")}
        iconSrc="/assets/home_logos/20+_Years.png"
        label="20+ Years Experience"
        delay={0.56}
      />
      <FeaturePill
        className={css("pill-procedures")}
        iconSrc="/assets/home_logos/10000+_Patients.png"
        label="1000+ Procedures"
        delay={0.7}
      />

      <div className={css("location-pill")}>
        <motion.span
          className={css("location-pill-inner")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.65, ease }}
        >
          <span />
          INDORE - SINCE 2003
        </motion.span>
      </div>
    </motion.div>
  );
}

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className={css("hero-canvas")} id="home">
      <nav className={`${css(`nav-links ${isMenuOpen ? "nav-open" : ""}`)} ${homeNavMontserrat.variable}`} aria-label="Primary navigation">
        <div className={css("nav-pill")}>
          <Link href="#home" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="#services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
        <MenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </nav>

      <motion.article
        className={css("copy-card")}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.a className={css("brand-mark")} href="#home" variants={reveal}>
          <span className={css("logo-crop")}>
            <Image
              src="/assets/about/about_logo.png"
              alt="Shanti EyeTech Eye Care & Laser Hospital logo"
              fill
              priority
              sizes="(max-width: 760px) 245px, 330px"
            />
          </span>
        </motion.a>

        <div className={css("copy-center")}>
          <motion.div className={css("section-label")} variants={reveal}>
            <span className={css("section-label-line section-label-line--left")} aria-hidden="true" />
            <b>Eye Care Experts</b>
            <span className={css("section-label-line section-label-line--right")} aria-hidden="true" />
          </motion.div>

          <motion.h1 variants={reveal}>
            Eyecare for clearer vision & confident living
          </motion.h1>

          <motion.p variants={reveal}>
            Advanced diagnostics, precision treatment, and personalized eye care
            designed around your comfort.
          </motion.p>

          <motion.div className={css("button-row")} variants={reveal}>
            <CTAButton>Book a Consultation</CTAButton>
            <CTAButton variant="secondary">Call Now !</CTAButton>
          </motion.div>
        </div>
      </motion.article>

      <HeroImage />

      <div className={css("mouse-cutout scroll-hint")} aria-hidden="true">
        <span />
      </div>
    </section>
  );
}

function ScrollTextWord({ children, index, progress, reduceMotion }) {
  const safeWordCount = Math.max(aboutWordCount - 1, 1);
  const start = (index / safeWordCount) * 0.76;
  const end = Math.min(start + 0.18, 1);
  const color = useTransform(progress, [start, end], ["rgba(17, 24, 23, 0.24)", "#111817"]);

  return (
    <motion.span
      className={css("about-word")}
      style={reduceMotion ? { color: "#111817" } : { color }}
    >
      {children}{" "}
    </motion.span>
  );
}

function StatCard({ value, description, tone }) {
  return (
    <motion.article
      className={css(`stat-card stat-card--${tone}`)}
      variants={reveal}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.75, ease }}
    >
      <span className={css("stat-dot")} />
      <div className={css("stat-content")}>
        <h3>{value}</h3>
        <p>{description}</p>
      </div>
    </motion.article>
  );
}

function AboutStats() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 82%", "end 24%"]
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.35
  });
  const revealProgress = useTransform(smoothProgress, [0.04, 0.92], [0, 1]);

  return (
    <section className={css("about-stats")} id="about" ref={sectionRef}>
      <motion.div
        className={css("about-inner")}
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
        variants={stagger}
      >
        <motion.div className={css("about-intro")} variants={reveal}>
          <span className={css("about-badge")}>About Us</span>
          <p className={css("about-text")}>
            {aboutLines.map((line, lineIndex) => {
              const previousWords = aboutLines
                .slice(0, lineIndex)
                .reduce((total, item) => total + item.split(" ").length, 0);

              return (
                <span className={css("about-line")} key={line}>
                  {line.split(" ").map((word, wordIndex) => (
                    <ScrollTextWord
                      key={`${line}-${word}-${wordIndex}`}
                      index={previousWords + wordIndex}
                      progress={revealProgress}
                      reduceMotion={reduceMotion}
                    >
                      {word}
                    </ScrollTextWord>
                  ))}
                </span>
              );
            })}
          </p>
        </motion.div>

        <motion.div className={css("stats-grid")} variants={stagger}>
          {stats.map((stat) => (
            <StatCard
              key={stat.value}
              value={stat.value}
              description={stat.description}
              tone={stat.tone}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function ServiceIcon({ type }) {
  if (type === "surgery") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 4h8M12 4v4M8.5 10h7l1.5 8h-10l1.5-8Z" />
        <path d="M9 14h6M12 11.5v5" />
      </svg>
    );
  }

  if (type === "comfort") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5.5c1.5-2.3 5.5-1.4 5.5 2.2 0 3.7-5.5 7.2-5.5 7.2S6.5 11.4 6.5 7.7c0-3.6 4-4.5 5.5-2.2Z" />
        <path d="M12 15v4M8.5 19h7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 7.5a4.5 4.5 0 0 1 6.36 0l3.14 3.14a4.5 4.5 0 0 1-6.36 6.36L7 13.86a4.5 4.5 0 0 1 0-6.36Z" />
      <path d="M8.5 8.5 15.5 15.5M14 7.5l2.5-2.5M16.5 10l2.5-2.5" />
    </svg>
  );
}

function TechnologyCard({ title, description, image }) {
  return (
    <motion.article
      className={css("tech-card")}
      variants={cardVariant}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.75, ease }}
    >
      <motion.span className={css("tech-icon")} variants={iconVariant}>
        <Image src={image} alt="" width={42} height={42} unoptimized />
      </motion.span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.article>
  );
}

function TechnologySection() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(sectionRef, technologyViewport);
  return (
    <section className={css("technology-section")} ref={sectionRef}>
      <motion.div
        className={css("technology-inner")}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={containerVariant}
      >
        <motion.div
          className={css("technology-image")}
          variants={imageVariant}
          whileHover={reduceMotion ? undefined : { scale: 1.02 }}
          transition={{ duration: 0.7, ease }}
        >
          <motion.img
            src="/assets/Beds.jpg"
            alt="Advanced eye care technology room"
          />
        </motion.div>

        <div className={css("technology-content")}>
          <motion.div className={css("technology-copy")} variants={containerVariant}>
            <motion.h2 variants={textVariant} custom={{ y: 40, delay: 0, duration: 0.7 }}>
              Expert Eye Care with Advanced Technology
            </motion.h2>
            <motion.p variants={textVariant} custom={{ y: 30, delay: 0.2, duration: 0.66 }}>
              Modern diagnostic and surgical systems improve accuracy, treatment
              quality, and patient experience.
            </motion.p>
            <motion.a
              className={css("learn-button cta-button cta-button--primary")}
              href="#contact"
              variants={textVariant}
              custom={{ y: 25, scale: 0.96, delay: 0.42, duration: 0.62 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* <span className={css("cta-button-fill")} aria-hidden="true" /> */}
              <span className={css("cta-button-text")}>Learn More</span>
              <ArrowIcon />
            </motion.a>
          </motion.div>

          <motion.div className={css("technology-cards")} variants={cardContainerVariant}>
            {technologyFeatures.map((feature) => (
              <TechnologyCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                image={feature.image}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <article className={css("service-card")}>
      <span className={css("service-number")}>{service.number}</span>
      <div className={css("service-card-panel")}>
        <div className={css("service-card-content")}>
          <div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
          <div className={css("service-tags")}>
            {service.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function ServicesSection() {
  const serviceRows = [services.slice(0, 3), services.slice(3, 6)];

  return (
    <section className={css("services-section")} id="services">
      <div className={css("services-inner")}>
        <div className={css("services-heading")}>
          <span className={css("services-badge")}>
            Treatment
          </span>
          <h2>
            Comprehensive Eye Care Treatments
          </h2>
          <p>
            From routine concerns to advanced surgical care, Shanti EyeTech
            offers specialised treatment across the major areas of ophthalmology.
          </p>
        </div>

        <div className={css("services-grid")}>
          {serviceRows.map((row, rowIndex) => (
            <motion.div
              className={css("services-row")}
              key={`services-row-${rowIndex}`}
              custom={rowIndex}
              variants={serviceCardReveal}
              initial="hidden"
              whileInView="show"
              viewport={sectionViewport}
            >
              {row.map((service) => (
                <ServiceCard key={service.number} service={service} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctorInfoCard({ card, index }) {
  return (
    <motion.article
      className={css("doc-card")}
      custom={index}
      variants={docCardReveal}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.75, ease }}
    >
      <span className={css("doc-card-number")}>{card.number}</span>
      <div className={css("doc-card-panel")}>
        <span className={css("doc-glow")} />
        <div className={css("doc-card-body")}>
          <h3>{card.title}</h3>
          {card.type === "pills" ? (
            <div className={css("doc-card-pills")}>
              {card.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ) : (
            <p>{card.body}</p>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function DoctorSection() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  return (
    <section className={css("specialist-section")} id="specialist" ref={sectionRef}>
      <motion.div
        className={css("specialist-inner")}
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
        variants={stagger}
      >
        <motion.div className={css("specialist-heading")} variants={stagger}>
          <motion.span className={css("specialist-badge")} variants={reveal}>
            Our Specialist
          </motion.span>
          <motion.h2 variants={reveal}>
            Cataract, Glaucoma &amp; Refractive-LASIK Surgeon
          </motion.h2>
          <motion.p variants={reveal}>
            Director of Shanti EyeTech, with more than 20 years of ophthalmology
            experience. Trained at B.J. Medical College, Ahmedabad and Aravind Eye
            Hospital, Tamil Nadu — with advanced training in phacoemulsification,
            glaucoma diagnosis &amp; management, and LASIK refractive surgery.
          </motion.p>
        </motion.div>

        <div className={css("specialist-layout")}>
          <motion.div
            className={css("specialist-photo")}
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={sectionViewport}
            transition={{ duration: 0.72, ease }}
          >
            <motion.img
              src="/assets/1_doctor.png"
              alt="Dr. Amit N. Solanki"
            />
            <motion.div
              className={css("specialist-name-overlay")}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.62, delay: 0.24, ease }}
            >
              <span className={css("specialist-doctor-name")}>Dr. Amit N. Solanki</span>
              <span className={css("specialist-doctor-role")}>
                Medical Director of Shanti Eye Care
              </span>
            </motion.div>
          </motion.div>

          <div className={css("specialist-cards-wrap")}>
            <motion.div className={css("specialist-cards-grid")} variants={stagger}>
              {doctorCards.map((card, index) => (
                <DoctorInfoCard key={`${card.number}-${card.title}`} card={card} index={index} />
              ))}
            </motion.div>
            <motion.div className={css("specialist-buttons")} variants={reveal}>
              <CTAButton>Book a Consultation</CTAButton>
              <CTAButton variant="secondary">Call Now !</CTAButton>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function BenefitIcon({ index }) {
  return (
    <span className={css("benefit-icon")} aria-hidden="true">
      <img
        src={`/assets/why_Patients_choose/${index + 1}.png`}
        alt=""
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}

function BenefitItem({ item, index }) {
  const col = index % 4;
  const row = Math.floor(index / 4);
  return (
    <motion.div
      className={css("benefit-item")}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={sectionViewport}
      transition={{
        duration: 0.62,
        delay: row * 0.18 + col * 0.1,
        ease
      }}
    >
      <BenefitIcon index={index} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </motion.div>
  );
}

function BenefitsSection() {
  return (
    <section className={css("benefits-section")} id="benefits">
      <motion.div
        className={css("benefits-inner")}
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
        variants={stagger}
      >
        <motion.div className={css("benefits-heading")} variants={stagger}>
          <motion.span className={css("benefits-badge")} variants={reveal}>
            Benefits
          </motion.span>
          <motion.h2 variants={reveal}>
            Why Patients Choose Shanti EyeTech
          </motion.h2>
          <motion.p variants={reveal}>
            Eight reasons why families across Indore<br />
            choose us for their eye care.
          </motion.p>
        </motion.div>

        <div className={css("benefits-grid")}>
          {benefits.map((item, index) => (
            <BenefitItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* -----------------------------------------------------
   Awards & Recognition Timeline
----------------------------------------------------- */

function TimelineRow({ item, index, tailItem }) {
  const cardOnRight = item.side === "right";   // true -> card right, year left
  const isTail = !item.year && !item.num; // item 5 — no dot, no year
  const delay = index * 0.15;

  /* Year label — slides in from its side */
  const yearEl = item.year && (
    <motion.div
      className={css(`tl-year tl-year--${item.accent}`)}
      initial={{ opacity: 0, x: cardOnRight ? -44 : 44 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {item.year}
    </motion.div>
  );

  /* Award card — slides in from its side */
  const cardEl = (
    <motion.div
      className={css(`award-card${item.highlight ? " award-card--highlight" : ""}`)}
      initial={{ opacity: 0, x: isTail ? -32 : cardOnRight ? 44 : -44 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </motion.div>
  );

  const tailCardEl = tailItem && (
    <motion.div
      className={css(`award-card${tailItem.highlight ? " award-card--highlight" : ""}`)}
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: delay + 0.12, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <h3>{tailItem.title}</h3>
      <p>{tailItem.description}</p>
    </motion.div>
  );

  const stackedCardEl = tailCardEl ? (
    <div className={css("tl-award-stack")}>
      {cardEl}
      {tailCardEl}
    </div>
  ) : cardEl;

  /* Numbered dot — scales in */
  const dotEl = item.num && (
    <motion.div
      className={css(`tl-circle tl-circle--${item.accent}`)}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay + 0.1, ease: "easeOut" }}
      whileHover={{ boxShadow: "0 0 0 10px rgba(36,197,232,0.15)" }}
    >
      {item.num}
    </motion.div>
  );

  /* Tail row: no dot, no year — card aligned with the left column (same as card above) */
  if (isTail) {
    return (
      <div className={css("tl-row tl-row--tail")}>
        <div className={css("tl-col-left")}>{cardEl}</div>
        <div className={css("tl-col-center")} />
        <div className={css("tl-col-right")} />
      </div>
    );
  }

  return (
    <div className={css(`tl-row tl-row--${item.side} tl-row--${item.accent} tl-row--num-${item.num}${tailItem ? " tl-row--stacked" : ""}`)}>
      {/* Left column: year when card-right, card when card-left */}
      <div className={css("tl-col-left")}>
        {cardOnRight ? yearEl : stackedCardEl}
      </div>
      {/* Center column: always the numbered dot */}
      <div className={css("tl-col-center")}>
        {dotEl}
      </div>
      {/* Right column: card when card-right, year when card-left */}
      <div className={css("tl-col-right")}>
        {cardOnRight ? stackedCardEl : yearEl}
      </div>
    </div>
  );
}

function AwardsSection() {
  return (
    <section className={`${css("awards-section")} ${awardsInter.variable}`} id="awards">
      <motion.div
        className={css("awards-inner")}
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
        variants={stagger}
      >
        {/* Heading */}
        <motion.div className={css("awards-heading")} variants={stagger}>
          <motion.span className={css("awards-badge")} variants={reveal}>
            Awards &amp; Recognition
          </motion.span>
          <motion.h2 variants={reveal}>A Legacy of Recognition</motion.h2>
          <motion.p variants={reveal}>
            Continuous excellence in ophthalmic innovation and patient service.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className={css("tl-track")}>
          {/* Single continuous vertical spine line that draws downward */}
          <div className={css("tl-spine-outer")}>
            <motion.div
              className={css("tl-spine-inner")}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ transformOrigin: "top center" }}
            />
          </div>

          {awards.map((item, i) => {
            if (!item.year && !item.num) return null;
            const tailItem = awards[i + 1]?.year || awards[i + 1]?.num ? null : awards[i + 1];
            return <TimelineRow key={item.id} item={item} index={i} tailItem={tailItem} />;
          })}
        </div>
      </motion.div>
    </section>
  );
}

function TestimonialCard({ item, index }) {
  return (
    <motion.article
      className={css("testimonial-card")}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 26px 58px rgba(20, 16, 12, 0.14)" }}
    >
      <div className={css("testimonial-stars")} aria-label="5 out of 5 stars">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>

      <h3>{item.title}</h3>
      <p className={css("testimonial-quote")}>“{item.quote}”</p>

      <div className={css("testimonial-divider")} />

      <div className={css("testimonial-patient-row")}>
        <img src={item.avatar} alt={item.name} className={css("testimonial-avatar")} loading="lazy" />
        <p className={css("testimonial-patient-line")}>
          <span className={css("testimonial-name")}>{item.name}</span>
          <span className={css("testimonial-meta")}>{item.details}</span>
        </p>
      </div>
    </motion.article>
  );
}

function TestimonialsSection() {
  return (
    <section className={css("testimonials-section")} id="testimonials">
      <div className={css("testimonials-inner")}>
        <motion.span
          className={css("testimonials-badge")}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Testimonials
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What Our Patients Say
        </motion.h2>

        <motion.p
          className={css("testimonials-subtitle")}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Real experiences from patients who improved their vision and confidence through our expert eye care services.
        </motion.p>

        <div className={css("testimonials-grid")}>
          {testimonials.map((item, i) => (
            <TestimonialCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <motion.a
          href="contact"
          className={css("testimonials-view-all")}
          whileTap={{ scale: 0.98 }}
        >
          <span className={css("testimonials-view-all-fill")} aria-hidden="true" />
          <span className={css("testimonials-view-all-text")}>View all</span>
          <motion.span
            className={css("testimonials-view-all-arrow")}
            aria-hidden="true"
          >{"\u2192"}</motion.span>
        </motion.a>
      </div>
    </section>
  );
}

const blogInsights = [
  {
    id: "understanding-cataracts",
    title: "Understanding Cataracts",
    description: "Early signs and treatment options",
    image: "/assets/home_logos/blog1.png",
    imageAlt: "Cataract vision education graphic",
    badge: "Must Read",
    category: "Recovery",
    author: "Dr. Emily Carter",
    role: "Cataract Consultant",
    avatar: "/assets/home_logos/blog1_avatar.png",
  },
  {
    id: "lasik-myths-vs-facts",
    title: "LASIK Myths vs Facts",
    image: "/assets/home_logos/blog2.png",
    imageAlt: "LASIK eye examination with blue diagnostic light",
    category: "Rehabilitation",
  },
  {
    id: "tips-for-healthy-vision",
    title: "Tips for Healthy Vision",
    image: "/assets/home_logos/blog3.png",
    imageAlt: "Eye chart and healthy eye close up",
    category: "Wellness",
  },
];

function BlogSection() {
  const [featuredBlog, ...secondaryBlogs] = blogInsights;

  return (
    <section className={`${css("blog-section")} ${awardsInter.variable}`} id="blog">
      <div className={css("blog-inner")}>
        <div className={css("blog-header")}>
          <motion.div
            className={css("blog-title-wrap")}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.58, ease: "easeOut" }}
          >
            <span className={css("blog-badge")}>Blog</span>
            <h2>Eye Health Insights</h2>
          </motion.div>

          <motion.a
            href="/contact"
            className={css("blog-view-all")}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={css("blog-view-all-text")}>View all</span>
            <span className={css("blog-view-all-arrow")} aria-hidden="true">
              <Image
                src="/assets/home_logos/right_arrow.png"
                alt=""
                width={16}
                height={16}
              />
            </span>
          </motion.a>
        </div>

        <motion.article
          className={css("blog-featured-card")}
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className={css("blog-featured-image")}>
            <Image
              src={featuredBlog.image}
              alt={featuredBlog.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 540px"
            />
          </div>

          <div className={css("blog-featured-content")}>
            <span className={css("blog-pill blog-pill--top")}>{featuredBlog.badge}</span>
            <h3>{featuredBlog.title}</h3>
            <p>{featuredBlog.description}</p>

            <div className={css("blog-featured-footer")}>
              <div className={css("blog-author")}>
                <Image
                  src={featuredBlog.avatar}
                  alt={featuredBlog.author}
                  width={36}
                  height={36}
                />
                <span>
                  <strong>{featuredBlog.author}</strong>
                  <small>{featuredBlog.role}</small>
                </span>
              </div>
              <span className={css("blog-pill")}>{featuredBlog.category}</span>
            </div>
          </div>
        </motion.article>

        <div className={css("blog-secondary-grid")}>
          {secondaryBlogs.map((blog, index) => (
            <motion.article
              className={css("blog-secondary-card")}
              key={blog.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
            >
              <div className={css("blog-secondary-image")}>
                <Image
                  src={blog.image}
                  alt={blog.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 520px"
                />
              </div>
              <div className={css("blog-secondary-meta")}>
                <h3>{blog.title}</h3>
                <span className={css("blog-pill")}>{blog.category}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.article
      className={css("faq-item")}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: "easeOut" }}
      whileHover={{
        y: -2,
        backgroundColor: "rgba(235, 252, 255, 0.94)",
        boxShadow: "0 20px 40px rgba(23, 17, 11, 0.09)"
      }}
    >
      <button
        className={css("faq-question-row")}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className={css("faq-question")}>{item.question}</span>
        <span className={css("faq-toggle")} aria-hidden="true">
          <motion.span
            className={css("faq-toggle-symbol")}
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {isOpen ? "-" : "+"}
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${item.id}`}
            className={css("faq-answer-wrap")}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <p className={css("faq-answer")}>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function FAQSection() {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className={css("faq-section")} id="faq">
      <div className={css("faq-inner")}>
        <motion.div
          className={css("faq-heading")}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className={css("faq-badge")}>FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before your visit.</p>
        </motion.div>

        <div className={css("faq-list")}>
          {faqs.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABannerSection() {
  return (
    <section className={css("cta-banner-section")} id="cta-banner">
      <div className={css("cta-banner-shell")}>
        <motion.img
          src="/assets/1_doctor.png"
          alt="Eye specialist"
          className={css("cta-banner-photo cta-banner-photo--left")}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.58, ease: "easeOut" }}
        />

        <motion.img
          src="/assets/1_doctor.png"
          alt="Patient consultation"
          className={css("cta-banner-photo cta-banner-photo--right")}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        <div className={css("cta-banner-card")}>
          <motion.span
            className={css("cta-banner-badge")}
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Let&apos;s Talk
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.62, delay: 0.14, ease: "easeOut" }}
          >
            <span className={css("cta-banner-heading-soft")}>Start Your </span>
            {" "}
            <span className={css("cta-banner-heading-accent")}>Vision Journey</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.28, ease: "easeOut" }}
          >
            <motion.a
              href="contact"
              className={css("cta-banner-button")}
              whileTap={{ scale: 0.98 }}
            >
              <span className={css("cta-banner-button-fill")} aria-hidden="true" />
              <span className={css("cta-banner-button-text")}>Book a Consultation</span>
              <motion.span
                className={css("cta-banner-button-arrow")}
                aria-hidden="true"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function HomePageComponent() {
  return (
    <main className={css("home-page")}>
      <Hero />
      <AboutStats />
      <TechnologySection />
      <ServicesSection />
      <DoctorSection />
      {/* <BenefitsSection /> */}
      <WhyPatients />
      <AwardsSection />
      {/* <TestimonialsSection /> */}
      <Testimonials />
      <BlogSection />
      <FAQ />
      <AboutCTA />
      {/* <FAQSection />
      <CTABannerSection /> */}
    </main>
  );
};




