// ─── Animation Variants ─────────────────────────────────────────────────────

export const ease = [0.22, 1, 0.36, 1];

export const sectionViewport = { once: true, amount: 0.18 };

export const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease }
  }
};

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

export const serviceCardReveal = {
  hidden: { opacity: 0, y: 40 },
  show: (rowIndex) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: rowIndex * 0.14,
      ease: "easeOut"
    }
  })
};

export const docCardReveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease }
  })
};

// ─── About Section ──────────────────────────────────────────────────────────

export const aboutLines = [
  "At Shanti EyeTech Eye Care & Laser Hospital, we combine",
  "world-class ophthalmic technology with a calm, patient-first",
  "environment — comprehensive treatment under one roof."
];

export const stats = [
  {
    value: "4.9 Google Rating",
    description:
      "Trusted by patients for professional eye care and a positive hospital experience.",
    icon: "/assets/Treatments/patient.png",
    tone: "sky"
  },
  {
    value: "20+ Years of Experience",
    description:
      "More than 20 years of experience in cataract, glaucoma and refractive eye care.",
    icon: "/assets/Treatments/medical-staff.png",
    tone: "gold"
  },
  {
    value: "8 Specialized Services",
    description:
      "Comprehensive eye care services, including vision correction, cataract, glaucoma, retina, pediatric eye care, opticals and pharmacy.",
    icon: "/assets/Treatments/achievement.png",
    tone: "teal"
  }
];

export const aboutWordCount = aboutLines.reduce(
  (total, line) => total + line.split(" ").length,
  0
);

// ─── Technology Section ─────────────────────────────────────────────────────

export const technologyFeatures = [
  {
    title: "Advanced Diagnostics",
    description: "Fast and precise eye assessments",
    image: "/assets/home_logos/tech1.png"
  },
  {
    title: "Precision Surgery",
    description: "Modern equipment for improved outcomes",
    image: "/assets/home_logos/tech2.png"
  },
  {
    title: "Comfortable Experience",
    description: "Support faster and safer recovery",
    image: "/assets/home_logos/tech3.png"
  }
];

// ─── Services Section ───────────────────────────────────────────────────────

export const services = [
  {
    number: "01",
    title: "Cataract Surgery",
    description: "Advanced lens replacement procedures",
    tags: ["Clear Vision", "Lens Replacement", "Vision Correction"]
  },
  {
    number: "02",
    title: "LASIK & Vision Correction",
    description: "Reduce dependency on glasses",
    tags: ["LASIK Surgery", "Fast Recovery", "Sharper Vision"]
  },
  {
    number: "03",
    title: "Glaucoma Care",
    description: "Early detection and treatment",
    tags: ["OCT Imaging", "Precision Eye Scanning", "Intraocular Pressure Monitoring"]
  },
  {
    number: "04",
    title: "Retina Treatment",
    description: "Advanced retinal diagnosis and care",
    tags: ["Specialized Care", "Personalized Treatment", "High Resolution Eye Imaging"]
  },
  {
    number: "05",
    title: "Pediatric Eye Care",
    description: "Eye care for children",
    tags: ["Early Detection", "Child Focused Care", "Little Eyes, Big Care"]
  },
  {
    number: "06",
    title: "Keratoconus Care",
    description: "Diagnosis and management of keratoconus and related corneal conditions.",
    tags: ["Keratoconus Management", "Precision Diagnostics", "Restore Visual Clarity"]
  },
  {
    number: "07",
    title: "Opticals",
    description: "Frames, lenses & professional fitting for visual clarity and comfort.",
    tags: []
  },
  {
    number: "08",
    title: "Pharmacy",
    description: "Convenient in-house access to prescribed eye-care medicines.",
    tags: []
  }
];

// ─── Doctor Section ─────────────────────────────────────────────────────────

export const doctorCards = [
  {
    number: "01",
    title: "Credentials",
    type: "pills",
    items: ["MBBS", "DOMS", "DNB", "FAECS"]
  },
  {
    number: "03",
    title: "Recognition",
    type: "text",
    body: "9+ National & international honours"
  },
  {
    number: "02",
    title: "Specialization",
    type: "text",
    body: "Cataract Surgery, Glaucoma Care, LASIK / Refractive, Phacoemulsification"
  },
  {
    number: "04",
    title: "Affiliations",
    type: "text",
    body: "11 Professional memberships"
  }
];

// ─── Benefits Section ───────────────────────────────────────────────────────

export const benefits = [
  {
    title: "Doctor-led eye care",
    description: "Every consultation handled by an experienced ophthalmologist.",
    icon: "doctor"
  },
  {
    title: "Advanced technology",
    description: "Modern diagnostic and surgical equipment.",
    icon: "tech"
  },
  {
    title: "Patient-friendly environment",
    description: "A calm, peaceful, reassuring space.",
    icon: "patient"
  },
  {
    title: "Personalised Attention",
    description: "Treatment plans tailored to your case.",
    icon: "personalised"
  },
  {
    title: "Comprehensive eye care",
    description: "Multiple eye-care services available under one roof.",
    icon: "affordable"
  },
  {
    title: "Central Indore location",
    description: "Easily reachable from across the city.",
    icon: "location"
  },
  {
    title: "Trained paramedical staff",
    description: "Qualified team supporting every step.",
    icon: "staff"
  },
  {
    title: "Comprehensive services",
    description: "All major eye care under one roof.",
    icon: "comprehensive"
  }
];

// ─── Awards Section ─────────────────────────────────────────────────────────

export const awards = [
  { id: 1, year: "2018", num: "1", side: "right", title: "Best VideoShree Award", description: "Shree SadGuru Seva Sansthan Best Video Award for \"Managing Post-LASIK Epithelial Ingrowth,\" October 2018.", accent: "cyan", highlight: false },
  { id: 2, year: "2017", num: "2", side: "left", title: "Memorial Award", description: "Dr. Ramesh Krishna Agarwal Memorial Award - Awarded by the M.P. State Ophthalmic Society at the MPSOS Annual Conference in Gwalior, October 2017.", accent: "green", highlight: false },
  { id: 3, year: "2016", num: "3", side: "right", title: "Best Poster Award", description: "Presented at the M.P. State Ophthalmic Society (MPSOS) Annual Conference, Bhopal.", accent: "cyan", highlight: false },
  { id: 4, year: "2014", num: "4", side: "left", title: "Vice President, Lions International", description: "Sewa Ranjan, Indore. Served for the year 2013–14.", accent: "green", highlight: false },
  { id: 5, year: "2013", num: "5", side: "right", title: "Most Versatile Doctor of the Year 2013", description: "Honoured by Dr. A. M. Arun, Chairman, Vasan Eye Care Hospital.", accent: "cyan", highlight: false },
  { id: 6, year: "2011", num: "6", side: "left", title: "Best Surgical Video", description: "\"Small vs Large Rhexis for Endocapsular Phaco in White Mature Cataracts,\" presented at Dr. Vasavada's National Phaco Workshop, Ahmedabad, September 2011.", accent: "green", highlight: false },
  { id: 7, year: "", num: "", side: "left", title: "Best Paper Award for Glaucoma", description: "Awarded by Dr. Devendra Sood at Ophthalmology Tomorrow, the IDOS Annual Conference in Indore, June 2011.", accent: "cyan", highlight: false },
  { id: 8, year: "2006", num: "8", side: "right", title: "Best Paper of Session", description: "AIOS Conference, Bhopal.", accent: "green", highlight: false },
  { id: 9, year: "2005", num: "9", side: "left", title: "Third Rank in Gujarat University", description: "During postgraduate ophthalmology training at RIO, Ahmedabad.", accent: "cyan", highlight: false },
  { id: 10, year: "1996", num: "10", side: "right", title: "Topped in HSC", description: "Karnavat Higher Secondary School.", accent: "green", highlight: false }
];

// ─── Testimonials Section ────────────────────────────────────────────────────

export const testimonials = [
  {
    id: 1,
    title: "Excellent Professional Eye Care",
    quote:
      "The whole LASIK experience was extremely smooth. Dr. Solanki explained every step and the team made me feel completely at ease.",
    name: "Priya S.",
    details: "LASIK patient · Indore",
    avatar: "/assets/doctor.jpg"
  },
  {
    id: 2,
    title: "Trusted Recovery Support Experience",
    quote:
      "My father had his cataract operation here. The transparency in pricing and care, and the calm environment made all the difference.",
    name: "Rakesh M.",
    details: "Cataract surgery · Indore",
    avatar: "/assets/doctor.jpg"
  },
  {
    id: 3,
    title: "Highly Recommended Glaucoma Service",
    quote:
      "Long-term glaucoma care here has been outstanding. The doctor explains everything clearly and the staff is genuinely caring.",
    name: "Anita V.",
    details: "Glaucoma patient · Indore",
    avatar: "/assets/doctor.jpg"
  }
];

// ─── FAQ Section ─────────────────────────────────────────────────────────────

export const faqs = [
  {
    id: 1,
    question: "How can I book an appointment with Dr. Amit N. Solanki?",
    answer:
      "Booking an appointment is easy. You can call us directly at +91 91791 91939 during clinic hours or use the appointment form on our website. Our team will help you schedule a convenient consultation."
  },
  {
    id: 2,
    question: "What eye conditions does Shanti EyeTech treat?",
    answer:
      "We provide comprehensive eye care services including cataract surgery, LASIK & vision correction, glaucoma care, retina services, pediatric eye care, keratoconus management, optical services, and an in-house pharmacy."
  },
  {
    id: 3,
    question: "Is LASIK surgery safe?",
    answer:
      "LASIK is a safe and commonly performed vision correction procedure for eligible patients. During your consultation, Dr. Amit N. Solanki will perform a detailed eye examination to determine whether LASIK is the right option for you."
  },
  {
    id: 4,
    question: "How long does cataract surgery take?",
    answer:
      "Cataract surgery is a quick procedure that usually takes 15–30 minutes per eye. Most patients return home the same day and experience gradual improvement in vision as the eye heals."
  },
  {
    id: 5,
    question: "When should I have my eyes examined?",
    answer:
      "Regular eye examinations help detect vision problems and eye diseases early. Adults should have routine eye check-ups, while children, senior citizens, and patients with diabetes or glaucoma may require more frequent examinations."
  },
  {
    id: 6,
    question: "Does Shanti EyeTech provide cashless insurance?",
    answer:
      "Insurance availability may vary depending on your provider and treatment. Please contact our team before your visit to confirm your eligibility and required documents."
  },
  {
    id: 7,
    question: "Do I need an appointment before visiting?",
    answer:
      "Appointments are recommended to reduce waiting time and ensure adequate consultation time with the doctor. However, walk-in patients are also welcome during working hours."
  },
  {
    id: 8,
    question: "Where is Shanti EyeTech located?",
    answer:
      "Shanti EyeTech Eye Care & Laser Hospital is located at Shekhar Central, M1 & M2, Palasia Square, Manorama Ganj, Indore, Madhya Pradesh – 452001, making it easily accessible from across the city."
  }
];

