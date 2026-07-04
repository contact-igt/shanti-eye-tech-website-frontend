import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Inter, Playfair_Display } from "next/font/google";
import {
  ease,
  knowYourDoctorContent,
  reveal,
  sectionViewport,
  stagger
} from "@/pagecomponent/About/aboutData";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap"
});

function DoctorInfoCard({ card }) {
  return (
    <motion.article className="about-doctor-card" variants={reveal}>
      <div className="about-doctor-card-heading">
        <h3>{card.title}</h3>
        <span aria-hidden="true">{card.number}</span>
      </div>

      {card.type === "pills" ? (
        <div className="about-doctor-pills">
          {card.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ) : (
        <p>{card.body}</p>
      )}
    </motion.article>
  );
}


export default function KnowYourDoctor() {
  return (
    <section
      className={`${inter.className} about-doctor-section`}
      id="doctor-section"
      aria-labelledby="about-doctor-title"
    >
      <motion.div
        className="about-doctor-inner"
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
        variants={stagger}
      >
        <motion.div
          className="about-doctor-visual"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={sectionViewport}
          transition={{ duration: 0.72, ease }}
        >
          <Image
            src={knowYourDoctorContent.image}
            alt="Dr. Amit N. Solanki"
            fill
            sizes="(max-width: 992px) 90vw, 46vw"
          />
        </motion.div>

        <div className="about-doctor-content">
          <motion.header className="about-doctor-header" variants={reveal}>
            <h2 id="about-doctor-title">
              <span>{knowYourDoctorContent.eyebrow}</span>
              <strong>{knowYourDoctorContent.accent}</strong>
            </h2>
            <span className="about-doctor-divider" aria-hidden="true" />
            <div className="about-doctor-identity">
              <p className={playfair.className}>{knowYourDoctorContent.name}</p>
              <span>{knowYourDoctorContent.role}</span>
            </div>
          </motion.header>

          <motion.div className="about-doctor-grid" variants={stagger}>
            {knowYourDoctorContent.cards.map((card) => (
              <DoctorInfoCard key={`${card.number}-${card.title}`} card={card} />
            ))}
          </motion.div>

          <motion.div className="about-doctor-actions" variants={reveal}>
            <Link className="cta-button cta-button--primary" href="/#contact">
              <span className="cta-button-fill" aria-hidden="true" />
              <span className="cta-button-text">Book a Consultation</span>
              <span className="arrow-icon" aria-hidden="true">
                <span />
              </span>
            </Link>
            <a className="cta-button cta-button--secondary" href="tel:+919179191939">
              <span className="cta-button-fill" aria-hidden="true" />
              <span className="cta-button-text">Call Now !</span>
              <span className="arrow-icon" aria-hidden="true">
                <span />
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}