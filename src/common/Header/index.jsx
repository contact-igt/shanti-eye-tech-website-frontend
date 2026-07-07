"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Treatments",
    href: null,
    children: [
      { label: "LASIK", href: "/treatments/lasik" },
      { label: "Cataract", href: "/treatments/catract" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  function close() {
    setIsOpen(false);
    setTreatmentsOpen(false);
  }

  return (
    <>
      {/* ── Sticky header bar ── */}
      <header className={styles.header}>
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

        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""}`}
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* ── Backdrop ── */}
      {isOpen && (
        <div
          className={styles.backdrop}
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* ── Nav drawer ── */}
      <nav
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}
        aria-label="Main navigation"
        aria-hidden={!isOpen}
        inert={!isOpen ? "" : undefined}
      >
        {NAV_ITEMS.map((item) =>
          item.children ? (
            <div key={item.label} className={styles.dropdownItem}>
              <button
                className={styles.dropdownTrigger}
                type="button"
                aria-expanded={treatmentsOpen}
                onClick={() => setTreatmentsOpen((o) => !o)}
              >
                {item.label}
                <span className={`${styles.chevron} ${treatmentsOpen ? styles.chevronOpen : ""}`}>
                  ▼
                </span>
              </button>

              {treatmentsOpen && (
                <div className={styles.subLinks}>
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className={styles.subLink}
                      onClick={close}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className={styles.navLink}
              onClick={close}
            >
              {item.label}
            </Link>
          )
        )}

        {/* ── Close (X) button ── */}
        <button
          className={styles.closeButton}
          type="button"
          aria-label="Close navigation menu"
          onClick={close}
        >
          <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" aria-hidden="true">
            <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="2.5" />
            <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </button>
      </nav>
    </>
  );
}
