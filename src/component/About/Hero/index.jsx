import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Intel_One_Mono, Playfair_Display } from "next/font/google";
import { ease, heroContent, reveal, stagger } from "@/constant/aboutContent";
import styles from "./styles.module.css";

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
    <motion.article className={styles.aboutBannerStat} initial={{ opacity: 0, y: 28, rotate: cardRotations[index] }} animate={{ opacity: 1, y: 0, rotate: cardRotations[index] }} transition={{ duration: 0.6, delay: 0.72 + index * 0.12, ease }}>
      <span className={styles.aboutBannerStatIcon}><Image src={statIcons[index]} alt="" width={34} height={34} aria-hidden="true" /></span>
      <strong className={intelOneMono.className}>{stat.value} {stat.label}<br />{stat.description}</strong>
    </motion.article>
  );
}

const treatmentDropdownLinks = [
  { label: "Cataract", href: "/treatments/catract" },
  { label: "LASIK", href: "/treatments/lasik" },
];

function TreatmentsDropdown({ closeMenu }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={styles.dropdown} ref={ref}>
      <button
        className={styles.dropdownTrigger}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        Treatments
        <svg
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 4.5L6 8.5L10 4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className={styles.dropdownMenu} role="menu">
          {treatmentDropdownLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.dropdownItem}
              role="menuitem"
              onClick={() => {
                setOpen(false);
                closeMenu();
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AboutHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section className={`${playfair.variable} ${intelOneMono.variable} ${styles.aboutBanner}`} id="about-hero">
      <div className={styles.aboutBannerInner}>
        <motion.div className={styles.aboutBannerCopy} variants={stagger} initial="hidden" animate="show">
          <motion.div className={styles.aboutBannerLogo} variants={reveal}>
            <Link href="/" aria-label="Shanti EyeTech home"><Image src="/assets/about/about_logo.png" alt="Shanti EyeTech" width={330} height={178} priority /></Link>
          </motion.div>
          <div className={styles.aboutBannerContent}>
            <motion.h1 className={playfair.className} variants={reveal}>Peaceful, Advanced<br /><span>&amp;</span> Personalised<br />Eye Care.</motion.h1>
            <motion.p variants={reveal}>{heroContent.description}</motion.p>
            <motion.div className={styles.aboutBannerActions} variants={reveal}>
              <a className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`} href="#about-story">
                <span className={styles.ctaButtonFill} aria-hidden="true" />
                <span className={styles.ctaButtonText}>Know Our Story</span>
                <span className={styles.arrowIcon} aria-hidden="true">
                  <span />
                </span>
              </a>
              <a className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`} href="#doctor-section">
                <span className={styles.ctaButtonFill} aria-hidden="true" />
                <span className={styles.ctaButtonText}>Meet Our Doctor</span>
                <span className={styles.arrowIcon} aria-hidden="true">
                  <span />
                </span>
              </a>
            </motion.div>
          </div>
        </motion.div>
        <nav className={`${styles.aboutBannerNav}${isMenuOpen ? ` ${styles.aboutBannerNavOpen}` : ""}`} aria-label="Primary navigation">
          <div className={styles.aboutBannerNavLinks}>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <TreatmentsDropdown closeMenu={() => setIsMenuOpen(false)} />
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
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
        <motion.div className={styles.aboutBannerVisual} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease }}>
          <Image className={`${styles.aboutBannerImage} ${styles.aboutBannerImageOne}`} src="/assets/about/banner_image1.png" alt="" fill sizes="(max-width: 900px) 100vw, 65vw" priority />
          <Image className={`${styles.aboutBannerImage} ${styles.aboutBannerImageTwo}`} src="/assets/about/banner_image2.png" alt="Dr. Amit N. Solanki in the eye clinic" fill sizes="(max-width: 900px) 100vw, 65vw" priority />
        </motion.div>
        <div className={styles.aboutBannerStats}>{heroContent.stats.map((stat, index) => <StatCard key={stat.description} stat={stat} index={index} />)}</div>
      </div>
    </section>
  );
}
