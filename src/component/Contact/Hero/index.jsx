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

function NavLink({ href, children, onClick }) {
  if (href.startsWith("/")) {
    return <Link href={href} onClick={onClick}>{children}</Link>;
  }
  return <a href={href} onClick={onClick}>{children}</a>;
}
const treatmentLinks = [
  { label: "Cataract", href: "/treatments/catract" },
  { label: "LASIK", href: "/treatments/lasik" },
  { label: "Pediatric Eye Care", href: "/treatments/pediatric-eye-care" },
  { label: "Glaucoma", href: "/treatments/glaucoma" },
  { label: "Retina", href: "/treatments/retina" },
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

export default function ContactHero({ content }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      className={`${inter.className} ${styles.hero}`}
      aria-labelledby="contact-hero-heading"
    >
      {/* Background image */}
      <Image
        className={styles.heroImage}
        src={content.background.src}
        alt={content.background.alt}
        fill
        sizes="100vw"
        priority
        quality={90}
        aria-hidden="true"
      />

      {/* ── Header: logo + nav ── */}
      <div className={styles.header}>
        <Link className={styles.logoLink} href="/" aria-label="Shanti EyeTech home">
          <Image
            className={styles.logo}
            src={content.logo.src}
            alt={content.logo.alt}
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
            <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </NavLink>
            <TreatmentsDropdown closeMenu={() => setIsMenuOpen(false)} />
            <NavLink href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </NavLink>
            <NavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </NavLink>
            <button
              className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ""}`}
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((o) => !o)}
            >
              <span /><span /><span />
            </button>
          </div>
        </nav>
      </div>

      {/* ── Hero copy ── */}
      <div className={styles.heroCopy}>
        <h1 id="contact-hero-heading" className={`${montserrat.className} ${styles.heading}`}>
          {content.heading.line1}
          <br />
          {content.heading.line2}
        </h1>
        <p className={styles.subtitle}>{content.subtitle}</p>
      </div>
    </section>
  );
}


