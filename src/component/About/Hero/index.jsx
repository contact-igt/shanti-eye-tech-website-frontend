import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Intel_One_Mono, Playfair_Display } from "next/font/google";
import { ease, heroContent, reveal, stagger } from "@/pagecomponent/About/aboutData";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair-display",
});

const intelOneMono = Intel_One_Mono({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-intel-one-mono",
});

const cardRotations = [-3.45, -3.45, -3.45];

const statIcons = [
  '/assets/about/card_icon1.png',
  '/assets/about/card_icon2.png',
  '/assets/about/card_icon3.png',
];

function MenuIcon() {
  return (
    <svg viewBox="0 0 36 24" aria-hidden="true" focusable="false">
      <path d="M7 6.5h22M11 12h14M15 17.5h6" />
    </svg>
  );
}

function StatCard({ stat, index }) {
  return (
    <motion.article className="about-banner-stat" initial={{ opacity: 0, y: 28, rotate: cardRotations[index] }} animate={{ opacity: 1, y: 0, rotate: cardRotations[index] }} transition={{ duration: 0.6, delay: 0.72 + index * 0.12, ease }}>
      <span className="about-banner-stat-icon"><Image src={statIcons[index]} alt="" width={34} height={34} aria-hidden="true" /></span>
      <strong className={intelOneMono.className}>{stat.value} {stat.label}<br />{stat.description}</strong>
    </motion.article>
  );
}

export default function AboutHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className={`${playfair.variable} ${intelOneMono.variable} about-banner`} id="about-hero">
      <div className="about-banner-inner">
        <motion.div className="about-banner-copy" variants={stagger} initial="hidden" animate="show">
          <motion.div className="about-banner-logo" variants={reveal}>
            <Link href="/" aria-label="Shanti EyeTech home"><Image src="/assets/about/about_logo.png" alt="Shanti EyeTech" width={330} height={178} priority /></Link>
          </motion.div>
          <div className="about-banner-content">
            <motion.h1 className={playfair.className} variants={reveal}>Peaceful, Advanced<br /><span>&amp;</span> Personalised<br />Eye Care.</motion.h1>
            <motion.p variants={reveal}>{heroContent.description}</motion.p>
            <motion.div className="about-banner-actions" variants={reveal}>
              <a className="cta-button cta-button--primary" href="#about-story">
                <span className="cta-button-fill" aria-hidden="true" />
                <span className="cta-button-text">Know Our Story</span>
                <span className="arrow-icon" aria-hidden="true">
                  <span />
                </span>
              </a>
              <a className="cta-button cta-button--secondary" href="#doctor-section">
                <span className="cta-button-fill" aria-hidden="true" />
                <span className="cta-button-text">Meet Our Doctor</span>
                <span className="arrow-icon" aria-hidden="true">
                  <span />
                </span>
              </a>
            </motion.div>
          </div>
        </motion.div>
        <nav className={`about-banner-nav${isMenuOpen ? " about-banner-nav--open" : ""}`} aria-label="Primary navigation">
          <div className="about-banner-nav-links">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/treatments/catract" onClick={() => setIsMenuOpen(false)}>Cataract</Link>
            <Link href="/treatments/lasik" onClick={() => setIsMenuOpen(false)}>LASIK</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <MenuIcon />
          </button>
        </nav>
        <motion.div className="about-banner-visual" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease }}>
          <Image className="about-banner-image about-banner-image--one" src="/assets/about/banner_image1.png" alt="" fill sizes="(max-width: 900px) 100vw, 65vw" priority />
          <Image className="about-banner-image about-banner-image--two" src="/assets/about/banner_image2.png" alt="Dr. Amit N. Solanki in the eye clinic" fill sizes="(max-width: 900px) 100vw, 65vw" priority />
        </motion.div>
        <div className="about-banner-stats">{heroContent.stats.map((stat, index) => <StatCard key={stat.description} stat={stat} index={index} />)}</div>
      </div>
    </section>
  );
}
