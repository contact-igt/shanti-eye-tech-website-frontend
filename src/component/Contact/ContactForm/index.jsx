"use client";
import { useState } from "react";
import styles from "./styles.module.css";

/* ── Inline SVG icons ── */
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <line x1="5" y1="19" x2="19" y2="5" />
      <polyline points="6 5 19 5 19 18" />
    </svg>
  );
}

const INITIAL = { firstName: "", lastName: "", email: "", mobile: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up real submission (email service / API route)
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm(INITIAL);
  }

  return (
    <section className={styles.section} id="contact-form">
      <div className={styles.inner}>

        {/* ── Left: form ── */}
        <div className={styles.left}>
          <span className={styles.badge}>Get In Touch</span>

          <h2 className={styles.heading}>
            We&apos;re here for you.
            <span className={styles.headingAccent}>Our team will contact Shortly</span>
          </h2>

          <p className={styles.description}>
            Have questions or need assistance? Our friendly eyecare team is here
            to help. Contact us by phone, email, or visit our medical center—we&apos;re
            always ready to assist you.
          </p>

          <div className={styles.formCard}>
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.formGrid}>

                {/* First Name */}
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="firstName">First Name</label>
                  <div className={styles.inputWrap}>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Enter first name"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      autoComplete="given-name"
                    />
                    <span className={styles.inputIcon}><UserIcon /></span>
                  </div>
                </div>

                {/* Last Name */}
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="lastName">Last Name</label>
                  <div className={styles.inputWrap}>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Enter last name"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      autoComplete="family-name"
                    />
                    <span className={styles.inputIcon}><UserIcon /></span>
                  </div>
                </div>

                {/* Email */}
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">Email</label>
                  <div className={styles.inputWrap}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter email id"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                    <span className={styles.inputIcon}><EmailIcon /></span>
                  </div>
                </div>

                {/* Mobile */}
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="mobile">Mobile Number</label>
                  <div className={styles.inputWrap}>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="Enter mobile number"
                      value={form.mobile}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                    <span className={styles.inputIcon}><PhoneIcon /></span>
                  </div>
                </div>

                {/* Message */}
                <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <div className={styles.inputWrap}>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter Your Message Or Note here..."
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                    />
                    <span className={`${styles.inputIcon} ${styles.iconTop}`}><MessageIcon /></span>
                  </div>
                </div>

              </div>

              <button className={styles.submitBtn} type="submit">
                {sent ? "Message Sent!" : "Send Message"}
                <span className={styles.arrowCircle}><ArrowIcon /></span>
              </button>
            </form>
          </div>
        </div>

        {/* ── Right: map ── */}
        <div className={styles.mapWrap}>
          <iframe
            title="Shanti EyeTech location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1437014017415!2d75.88692329999999!3d22.722899599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd5037568439%3A0xb4160c93774cf232!2sDr.%20Amit%20Solanki%20Eye%20Specialist%20Shanti%20EyeTech%20Best%20Eye%20Hospital%20in%20Indore!5e0!3m2!1sen!2sin!4v1783316499353!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

      </div>
    </section>
  );
}
