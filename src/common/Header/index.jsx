"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Montserrat } from "next/font/google";
import { Home, Info, Phone, X, Eye } from "lucide-react";
import styles from "./styles.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-header-montserrat",
});

const NAV_ITEMS = [
  { label: "Home", href: "/", Icon: Home },
  {
    label: "Treatment",
    Icon: Eye,
    subItems: [
      { label: "Cataract", href: "/treatments/catract" },
      { label: "LASIK", href: "/treatments/lasik" },
      { label: "Pediatric Eye Care", href: "/treatments/pediatric-eye-care" },
      { label: "Glaucoma", href: "/treatments/glaucoma" },
      { label: "Retina", href: "/treatments/retina" },
    ],
  },
  { label: "About", href: "/about", Icon: Info },
  { label: "Contact", href: "/contact", Icon: Phone },
];

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);

  const hideLogo = router.pathname === "/" || router.pathname === "/about";

  function close() {
    setIsOpen(false);
    setIsTreatmentsOpen(false);
  }

  return (
    <>
      <header className={styles.header}>
        {!hideLogo && (
          <Link href="/" className={styles.logoLink} aria-label="Shanti EyeTech home">
            <Image
              src="/assets/about/about_logo.png"
              alt="Shanti EyeTech"
              width={330}
              height={178}
              priority
              className={styles.logo}
            />
          </Link>
        )}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={close}
          aria-hidden="true"
        />
      )}

      <nav
        className={`${styles.drawer} ${montserrat.variable} ${isOpen ? styles.drawerOpen : ""}`}
        aria-label="Main navigation"
        aria-hidden={!isOpen}
        inert={!isOpen ? "" : undefined}
      >
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.drawerLogo} aria-label="Shanti EyeTech home" onClick={close}>
            <Image
              src="/assets/about/about_logo.png"
              alt="Shanti EyeTech"
              width={210}
              height={114}
              priority
            />
          </Link>
          <button
            className={styles.drawerClose}
            type="button"
            aria-label="Close navigation menu"
            onClick={close}
          >
            <X size={24} strokeWidth={2.2} />
          </button>
        </div>

        <div className={styles.drawerLinks}>
          {NAV_ITEMS.map((item) => {
            const Icon = item.Icon;

            if (item.subItems) {
              const isTreatmentActive = router.pathname.startsWith("/treatments");
              return (
                <div key={item.label} className={styles.dropdownItem}>
                  <button
                    className={`${styles.dropdownTrigger} ${isTreatmentActive ? styles.navLinkActive : ""}`}
                    type="button"
                    onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                    aria-expanded={isTreatmentsOpen}
                  >
                    <span className={styles.navItemIcon} aria-hidden="true">
                      <Icon size={21} strokeWidth={1.9} />
                    </span>
                    <span className={styles.navItemText}>{item.label}</span>
                    <span className={styles.dropdownChevronBox} aria-hidden="true">
                      <svg
                        className={`${styles.chevron} ${isTreatmentsOpen ? styles.chevronOpen : ""}`}
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 4.5L6 8.5L10 4.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  {isTreatmentsOpen && (
                    <div className={styles.subLinks}>
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className={`${styles.subLink} ${router.pathname === sub.href ? styles.subLinkActive : ""}`}
                          onClick={close}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = router.pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                onClick={close}
              >
                <span className={styles.navItemIcon} aria-hidden="true">
                  <Icon size={21} strokeWidth={1.9} />
                </span>
                <span className={styles.navItemText}>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}