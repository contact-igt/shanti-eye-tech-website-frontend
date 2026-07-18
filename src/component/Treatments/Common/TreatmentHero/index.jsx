import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Button from "@/common/Button";
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

function HighlightedText({ text, accentWords }) {
  if (!text) return null;

  const matches = accentWords.filter(Boolean);
  if (!matches.length) return text;

  const pattern = new RegExp(`(${matches.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");

  return text.split(pattern).map((part, index) => {
    const isAccent = matches.some((word) => word.toLowerCase() === part.toLowerCase());

    if (!isAccent) return part;

    return (
      <span key={`${part}-${index}`} className={styles.titleAccent}>
        {part}
      </span>
    );
  });
}

function HeroTitle({ title, accentWords }) {
  const lines = title.lines || [
    title.lineOne,
    `${title.lineTwoStart || ""}${title.accent || ""}`,
    title.lineThree,
  ].filter(Boolean);

  return lines.map((line, index) => (
    <span key={`${line}-${index}`} className={styles.titleLine}>
      <HighlightedText text={line} accentWords={accentWords} />
      {index < lines.length - 1 ? <br /> : null}
    </span>
  ));
}

export default function TreatmentHero({ content }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headingId = content.headingId || "treatment-hero-title";
  const accentWords = content.accentWords || content.title.accentWords || [content.title.accent];
  const heroImageStyle = {
    "--hero-image-position": content.background.objectPosition || "right center",
    "--hero-image-tablet-position": content.background.tabletObjectPosition || content.background.objectPosition || "70% center",
    "--hero-image-mobile-position": content.background.mobileObjectPosition || content.background.tabletObjectPosition || content.background.objectPosition || "67% center",
    "--hero-image-small-position": content.background.smallObjectPosition || content.background.mobileObjectPosition || content.background.tabletObjectPosition || content.background.objectPosition || "63% center",
  };

  return (
    <article className={styles.page}>
      <section className={styles.hero} aria-labelledby={headingId}>
        <Image
          className={styles.heroImage}
          src={content.background.src}
          alt={content.background.alt}
          fill
          sizes="100vw"
          priority
          aria-hidden="true"
          style={heroImageStyle}
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
          <h1 id={headingId} className={playfairDisplay.className}>
            <HeroTitle title={content.title} accentWords={accentWords} />
          </h1>
          <p>{content.description}</p>
          <div className={styles.actions}>
            {content.actions.map((action) => (
              <Button
                key={action.label}
                href={action.href}
                className={`${styles.heroButton} ${action.variant === "primary" ? styles.heroButtonPrimary : styles.heroButtonSecondary
                  }`}
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}


