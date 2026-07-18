import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { AlignCenter } from "lucide-react";
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

export default function GlaucomaHero({ content }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <article className={styles.page}>
      <section className={styles.hero} aria-labelledby="glaucoma-hero-title">
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
          <h1 id="glaucoma-hero-title" className={playfairDisplay.className}>
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
                className={`${styles.ctaButton} ${action.variant === "primary" ? styles.ctaButtonPrimary : styles.ctaButtonSecondary}`}
              >
                <span className={styles.ctaButtonFill} aria-hidden="true" />
                <span className={styles.ctaButtonText}>{action.label}</span>
                <span className={styles.arrowIcon} aria-hidden="true">
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
