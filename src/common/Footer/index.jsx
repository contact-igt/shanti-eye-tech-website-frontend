import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { footerContent } from "@/constant/footerContent";
import styles from "./styles.module.css";


function toStyleName(className) {
  return className.replace(/-+([a-z0-9])/g, (_, character) => character.toUpperCase());
}

function css(classNames) {
  return classNames
    .split(/\s+/)
    .filter(Boolean)
    .map((className) => styles[toStyleName(className)] ?? className)
    .join(" ");
}

const footerEase = [0.22, 1, 0.36, 1];
const footerViewport = { once: true, amount: 0.2 };

const footerContainerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const footerRevealVariant = {
  hidden: { opacity: 0, y: 28 },
  show: ({ delay = 0 } = {}) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: footerEase }
  })
};

const footerLogoVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: 0.36, ease: footerEase }
  }
};

const footerSocialsVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.5
    }
  }
};

const footerSocialVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: footerEase }
  }
};

function FooterCurveLine({ position }) {
  const isBottom = position === "bottom";

  return (
    <motion.svg
      className={css(`footer-curve footer-curve--${position}`)}
      viewBox="0 0 1600 92"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      variants={footerRevealVariant}
      custom={{ delay: isBottom ? 1.02 : 0 }}
    >
      <path
        d={
          isBottom
            ? "M0 58H458C508 58 532 22 584 22H1016C1068 22 1092 58 1150 58H1600"
            : "M0 36H458C508 36 532 70 584 70H1016C1068 70 1092 36 1150 36H1600"
        }
      />
    </motion.svg>
  );
}

const SOCIAL_ICON_SOURCES = {
  Facebook: "/assets/facebook.png",
  WhatsApp: "/assets/whatsapp_2.png",
  Instagram: "/assets/instagram.png",
  YouTube: "/assets/youtube_2.png",
};

function FooterSocialIcon({ label }) {
  const src = SOCIAL_ICON_SOURCES[label];

  if (!src) {
    return null;
  }

  return (
    <Image
      src={src}
      alt=""
      width={18}
      height={18}
      className={css("footer-social-image")}
      aria-hidden="true"
    />
  );
}
function FooterNavLink({ href, children }) {
  if (href.startsWith("/")) {
    return <Link href={href}>{children}</Link>;
  }

  return <a href={href}>{children}</a>;
}

export default function Footer() {
  return (
    <footer className={css("footer-section")}>
      <motion.div
        className={css("footer-shell")}
        initial="hidden"
        whileInView="show"
        viewport={footerViewport}
        variants={footerContainerVariant}
      >
        <img
          className={css("footer-bg-image")}
          src="https://framerusercontent.com/images/Kw7qYWRE5oJS1vo7LgFTnJmSPZI.png?width=4800&height=2644"
          alt=""
          decoding="async"
          loading="lazy"
          aria-hidden="true"
        />
        <span className={css("footer-bg-overlay")} aria-hidden="true" />

        <FooterCurveLine position="top" />

        <div className={css("footer-content")}>
          <motion.div className={css("footer-left")} variants={footerContainerVariant}>
            <motion.p
              className={css("footer-description")}
              variants={footerRevealVariant}
              custom={{ delay: 0.12 }}
            >
              {footerContent.description}
            </motion.p>

            <motion.div
              className={css("footer-pages")}
              variants={footerRevealVariant}
              custom={{ delay: 0.24 }}
            >
              <h3>Main Pages</h3>
              <nav aria-label="Footer main pages">
                {footerContent.mainPages.map((link) => (
                  <FooterNavLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterNavLink>
                ))}
              </nav>
            </motion.div>
          </motion.div>

          <motion.div className={css("footer-center")} variants={footerContainerVariant}>
            <motion.img
              src="/assets/about/about_logo.png"
              alt="Shanti EyeTech logo"
              className={css("footer-logo")}
              variants={footerLogoVariant}
            />
            <motion.div className={css("footer-socials")} variants={footerSocialsVariant}>
              {footerContent.socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css("footer-social-icon")}
                  aria-label={social.label}
                  variants={footerSocialVariant}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <FooterSocialIcon label={social.label} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className={css("footer-right")} variants={footerContainerVariant}>
            <motion.div
              className={css("footer-support")}
              variants={footerRevealVariant}
              custom={{ delay: 0.78 }}
            >
              <h3>Support</h3>
              <nav aria-label="Footer support links">
                {footerContent.support.map((link) => (
                  <FooterNavLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterNavLink>
                ))}
              </nav>
            </motion.div>

            <motion.div
              className={css("footer-visit")}
              variants={footerRevealVariant}
              custom={{ delay: 0.9 }}
            >
              <h3>Visit us</h3>
              <address>
                {footerContent.contact.address.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
              <p>{footerContent.contact.phone}</p>
              <p>{footerContent.contact.email}</p>
            </motion.div>
          </motion.div>
        </div>

        <FooterCurveLine position="bottom" />

        <motion.p
          className={css("footer-copy")}
          variants={footerRevealVariant}
          custom={{ delay: 1.14 }}
        >
          {footerContent.copyright}
        </motion.p>
      </motion.div>
    </footer>
  );
}
