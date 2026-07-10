"use client";
import { useState } from "react";
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
            {content.navLinks.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
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
