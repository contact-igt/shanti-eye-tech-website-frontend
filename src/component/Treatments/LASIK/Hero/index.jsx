import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import styles from "./styles.module.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal"],
  display: "swap",
});

function TreatmentLink({ href, children, className, onClick }) {
  if (href.startsWith("/")) {
    return (
      <Link className={className} href={href} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
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

export default function LasikHero({ content }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <article className={styles.page}>
      <section className={styles.hero} aria-labelledby="lasik-hero-title">
        <Image
          className={styles.heroImage}
          src={content.background.src}
          alt={content.background.alt}
          fill
          sizes="100vw"
          priority
          aria-hidden="true"
        />

        <div className={styles.heroChrome}>
          <Link className={styles.logoLink} href="/" aria-label="Shanti EyeTech home">
            <Image
              className={styles.logo}
              src={content.logo.src}
              alt={content.logo.alt}
              width={420}
              height={195}
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

              {/* Treatments dropdown */}
              <TreatmentsDropdown closeMenu={() => setIsMenuOpen(false)} />

              {/* About */}
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>

              {/* Contact */}
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>

              <button
                className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ""}`}
                type="button"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((open) => !open)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </nav>
        </div>

        <div className={styles.heroCopy}>
          <h1 id="lasik-hero-title" className={playfairDisplay.className}>
            {content.title.lineOne}
            <br />
            {content.title.lineTwoStart} <span>{content.title.accent}</span>
            <br />
            {content.title.lineThree}
          </h1>
          <p>{content.description}</p>
          <div className={styles.actions}>
            {content.actions.map((action) => (
              <TreatmentLink
                key={action.label}
                href={action.href}
                className={`cta-button cta-button--${action.variant === "primary" ? "primary" : "secondary"}`}
              >
                <span className="cta-button-fill" aria-hidden="true" />
                <span className="cta-button-text">{action.label}</span>
                <span className="arrow-icon" aria-hidden="true">
                  <span />
                </span>
              </TreatmentLink>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
