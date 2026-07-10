"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Treatments",
    href: "#",
    subItems: [
      { label: "Cataract", href: "/treatments/catract" },
      { label: "LASIK", href: "/treatments/lasik" },
      { label: "Glaucoma", href: "/treatments/glaucoma" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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
      {/* ── Transparent header bar ── */}
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
        {NAV_ITEMS.map((item) => {
          if (item.subItems) {
            return (
              <div key={item.label} className={styles.dropdownItem}>
                <button
                  className={styles.dropdownTrigger}
                  onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                  aria-expanded={isTreatmentsOpen}
                >
                  {item.label}
                  <span className={`${styles.chevron} ${isTreatmentsOpen ? styles.chevronOpen : ""}`}>
                    ▼
                  </span>
                </button>
                {isTreatmentsOpen && (
                  <div className={styles.subLinks}>
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className={styles.subLink}
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
          return (
            <Link
              key={item.label}
              href={item.href}
              className={styles.navLink}
              onClick={close}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
