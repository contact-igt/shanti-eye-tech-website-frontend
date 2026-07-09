import { useState } from "react";
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
          style={
            content.background.objectPosition
              ? { objectPosition: content.background.objectPosition }
              : undefined
          }
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
              {content.navLinks.map((link) => (
                <TreatmentLink
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </TreatmentLink>
              ))}
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
