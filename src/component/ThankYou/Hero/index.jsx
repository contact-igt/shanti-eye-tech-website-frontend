"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter, Montserrat } from "next/font/google";
import styles from "./styles.module.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const topNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const treatmentLinks = [
  { label: "Cataract", href: "/treatments/catract" },
  { label: "LASIK", href: "/treatments/lasik" },
  { label: "Pediatric Eye Care", href: "/treatments/pediatric-eye-care" },
  { label: "Glaucoma", href: "/treatments/glaucoma" },
  { label: "Retina", href: "/treatments/retina" },
];

/* ── Treatments dropdown ── */
function TreatmentsDropdown({ closeMenu }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      className={styles.dropdown}
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
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
          {treatmentLinks.map((link) => (
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

export default function ThankYouHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      className={`${inter.className} ${styles.hero}`}
      aria-labelledby="thankyou-hero-heading"
    >
      {/* Background image – reuse contact page banner */}
      <Image
        className={styles.heroImage}
        src="/assets/contact/contact_page_img.png"
        alt="Shanti EyeTech – Modern Eye Care Clinic"
        fill
        sizes="100vw"
        priority
        quality={90}
        aria-hidden="true"
      />

      {/* ── Header: logo + nav ── */}
      <div className={styles.header}>
        <Link
          className={styles.logoLink}
          href="/"
          aria-label="Shanti EyeTech home"
        >
          <Image
            className={styles.logo}
            src="/assets/about/about_logo.png"
            alt="Shanti EyeTech Eye Care & Laser Hospital"
            width={330}
            height={178}
            priority
          />
        </Link>

        <nav
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
          aria-label="Primary navigation"
        >
          <div className={styles.navLinks}>
            {/* Home */}
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>

            {/* ── Treatments dropdown ── */}
            <TreatmentsDropdown closeMenu={() => setIsMenuOpen(false)} />

            {/* About */}
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>

            {/* Contact */}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>

            {/* Hamburger */}
            <button
              className={`${styles.menuButton} ${
                isMenuOpen ? styles.menuOpen : ""
              }`}
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div>

      {/* ── Hero copy ── */}
      <div className={styles.heroCopy}>
        <h1
          id="thankyou-hero-heading"
          className={`${montserrat.className} ${styles.heading}`}
        >
          Thank you —{" "}
          <span className={styles.headingAccent}>we received</span>
          <br />
          your request
        </h1>
        <p className={styles.subtitle}>
          Our team will review your details and contact you
          <br className={styles.subtitleBr} /> to confirm the appointment.
        </p>
      </div>
    </section>
  );
}


