"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Inter, Montserrat } from "next/font/google";
import { submitForm } from "@/lib/formService";
import styles from "./styles.module.css";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-contact-form-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-contact-form-inter",
});

function FieldIcon({ src }) {
  return (
    <Image
      className={styles.fieldIconImage}
      src={src}
      alt=""
      width={18}
      height={18}
      aria-hidden="true"
    />
  );
}


const INITIAL = { firstName: "", lastName: "", email: "", mobile: "", message: "" };

export default function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState(INITIAL);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    e.target.setCustomValidity("");
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleInvalid(e) {
    const messages = {
      firstName: "Please enter your first name.",
      email: "Please enter your email address.",
      mobile: "Please enter your mobile number.",
    };
    e.target.setCustomValidity(messages[e.target.name] || "Please fill out this field.");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) {
      return;
    }
    setLoading(true);

    const fullName = [form.firstName, form.lastName]
      .map((value) => value.trim())
      .filter(Boolean)
      .join(" ");

    const contactData = {
      fullName,
      email: form.email.trim(),
      mobile: form.mobile.trim(),
      message: form.message.trim(),
    };

    try {
      await submitForm("Contact", contactData);
      setForm(INITIAL);
      router.push("/thank-you");
    } catch (err) {
      const msg = err?.message || "Failed to submit contact form";
      router.push({ pathname: "/error", query: { msg } });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={`${inter.variable} ${montserrat.variable} ${styles.section}`} id="contact-form">
      <div className={styles.inner}>

        {/* ── Left: form ── */}
        <div className={styles.left}>
          <span className={styles.badge}>
            <Image
              className={styles.badgeIcon}
              src="/assets/contact/plus-icon.png"
              alt=""
              width={14}
              height={14}
              aria-hidden="true"
            />
            Get In Touch
          </span>

          <h2 className={`${montserrat.className} ${styles.heading}`}>
            We&apos;re here for you.
            <span className={styles.headingAccent}>Our team will contact Shortly</span>
          </h2>

          <p className={`${inter.className} ${styles.description}`}>
            Have questions or need assistance? Our friendly eyecare team is here
            to help. Contact us by phone, email, or visit our medical center—we&apos;re
            always ready to assist you.
          </p>

          <div className={styles.formCard}>
            <form onSubmit={handleSubmit}>
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
                      onInvalid={handleInvalid}
                      required
                      autoComplete="given-name"
                    />
                    <span className={styles.inputIcon}><FieldIcon src="/assets/contact/user-icon.png" /></span>
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
                    <span className={styles.inputIcon}><FieldIcon src="/assets/contact/user-icon.png" /></span>
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
                      onInvalid={handleInvalid}
                      required
                      autoComplete="email"
                    />
                    <span className={styles.inputIcon}><FieldIcon src="/assets/contact/email-icon.png" /></span>
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
                      onInvalid={handleInvalid}
                      required
                      autoComplete="tel"
                    />
                    <span className={styles.inputIcon}><FieldIcon src="/assets/contact/call-icon-blue.png" /></span>
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
                    <span className={`${styles.inputIcon} ${styles.iconTop}`}><FieldIcon src="/assets/contact/message-icon.png" /></span>
                  </div>
                </div>

              </div>

              <button className={styles.submitBtn} type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
                <span className={styles.arrowCircle}>
                  <Image
                    className={styles.arrowIconImage}
                    src="/assets/contact/Arrow.png"
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden="true"
                  />
                </span>
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
