"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
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

const INITIAL_VALUES = {
  firstName: "",
  mobile: "",
  treatment: "",
  message: "",
};

const contactSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name must be 50 characters or less.")
    .required("Please enter your name."),
  mobile: Yup.string()
    .trim()
    .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, "Please enter a valid mobile number.")
    .min(10, "Mobile number must be at least 10 digits.")
    .max(16, "Mobile number must be 16 digits or less.")
    .required("Please enter your mobile number."),
  treatment: Yup.string()
    .required("Please select a treatment."),
  message: Yup.string()
    .trim()
    .max(500, "Message must be 500 characters or less."),
});

export default function ContactForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: contactSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      const fullName = values.firstName.trim();

      const contactData = {
        fullName,
        mobile: values.mobile.trim(),
        treatment: values.treatment,
        message: values.message.trim(),
      };

      try {
        await submitForm("Contact", contactData);
        resetForm();
        router.push("/thank-you");
      } catch (err) {
        const msg = err?.message || "Failed to submit contact form";
        router.push({ pathname: "/error", query: { msg } });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const getFieldError = (name) => formik.touched[name] && formik.errors[name] ? formik.errors[name] : "";
  const getInputClassName = (name) => getFieldError(name) ? styles.inputError : "";

  return (
    <section className={`${inter.variable} ${montserrat.variable} ${styles.section}`} id="contact-form">
      <div className={styles.inner}>
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
            to help. Contact us by phone, email, or visit our medical center - we&apos;re
            always ready to assist you.
          </p>

          <div className={styles.formCard}>
            <form onSubmit={formik.handleSubmit} noValidate>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="firstName">Name</label>
                  <div className={styles.inputWrap}>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Enter name"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={getInputClassName("firstName")}
                      aria-invalid={Boolean(getFieldError("firstName"))}
                      aria-describedby={getFieldError("firstName") ? "firstName-error" : undefined}
                      autoComplete="given-name"
                    />
                    <span className={styles.inputIcon}><FieldIcon src="/assets/contact/user-icon.png" /></span>
                  </div>
                  {getFieldError("firstName") && <p id="firstName-error" className={styles.errorText}>{getFieldError("firstName")}</p>}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="mobile">Mobile Number</label>
                  <div className={styles.inputWrap}>
                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      placeholder="Enter mobile number"
                      value={formik.values.mobile}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={getInputClassName("mobile")}
                      aria-invalid={Boolean(getFieldError("mobile"))}
                      aria-describedby={getFieldError("mobile") ? "mobile-error" : undefined}
                      autoComplete="tel"
                    />
                    <span className={styles.inputIcon}><FieldIcon src="/assets/contact/call-icon-blue.png" /></span>
                  </div>
                  {getFieldError("mobile") && <p id="mobile-error" className={styles.errorText}>{getFieldError("mobile")}</p>}
                </div>


                <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                  <label className={styles.label} htmlFor="treatment">Treatments</label>
                  <div className={styles.inputWrap}>
                    <select
                      id="treatment"
                      name="treatment"
                      value={formik.values.treatment}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={getInputClassName("treatment")}
                      aria-invalid={Boolean(getFieldError("treatment"))}
                      aria-describedby={getFieldError("treatment") ? "treatment-error" : undefined}
                    >
                      <option value="">Select treatment</option>
                      <option value="Cataract">Cataract</option>
                      <option value="LASIK">LASIK</option>
                      <option value="Pediatric Eye Care">Pediatric Eye Care</option>
                      <option value="Glaucoma">Glaucoma</option>
                      <option value="Retina">Retina</option>
                    </select>
                    <span className={styles.inputIcon}><FieldIcon src="/assets/contact/plus-icon.png" /></span>
                  </div>
                  {getFieldError("treatment") && <p id="treatment-error" className={styles.errorText}>{getFieldError("treatment")}</p>}
                </div>
                <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <div className={styles.inputWrap}>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter Your Message Or Note here..."
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={getInputClassName("message")}
                      aria-invalid={Boolean(getFieldError("message"))}
                      aria-describedby={getFieldError("message") ? "message-error" : undefined}
                      rows={4}
                    />
                    <span className={`${styles.inputIcon} ${styles.iconTop}`}><FieldIcon src="/assets/contact/message-icon.png" /></span>
                  </div>
                  {getFieldError("message") && <p id="message-error" className={styles.errorText}>{getFieldError("message")}</p>}
                </div>
              </div>

              <button className={styles.submitBtn} type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Sending..." : "Send Message"}
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

