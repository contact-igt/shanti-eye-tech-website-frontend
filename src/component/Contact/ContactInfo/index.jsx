import styles from "./styles.module.css";

const icons = {
  location: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 1.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
};

export default function ContactInfo({ data }) {
  return (
    <section className={styles.section} id="contact-info">
      <div className={styles.inner}>
        <span className={styles.badge}>Contact</span>

        <h2 className={styles.heading}>
          {data.heading.line1}
          <span className={styles.headingAccent}>{data.heading.line2}</span>
        </h2>

        <p className={styles.description}>{data.description}</p>

        <div className={styles.cards}>
          {data.cards.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.iconWrap}>
                {icons[card.icon]}
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardBody}>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
