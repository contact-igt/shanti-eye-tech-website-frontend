// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ Animation Variants Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬

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

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬ About Hero Section Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬

export const heroContent = {
  headline: "Peaceful, Advanced & Personalised Eye Care.",
  description:
    "For over two decades, we have been dedicated to preserving and restoring vision through a harmonious blend of cutting-edge technology and compassionate, patient-first care.",
  stats: [
    { value: "20+", label: "Years", description: "Experience" },
    { value: "9+", label: "Awards &", description: "Recognition" },
    { value: "11", label: "Professional", description: "Memberships" }
  ]
};
// About Why Patients section
export const whyPatientsContent = {
  badge: "Benefits",
  title: "Why Patients Choose Shanti EyeTech",
  description: [
    "Eight reasons why families across Indore",
    "choose us for their eye care."
  ],
  items: [
    {
      title: "Doctor-led eye care",
      description: "Every consultation handled by an experienced ophthalmologist.",
      image: "/assets/why_Patients_choose/1.png"
    },
    {
      title: "Advanced technology",
      description: "Modern diagnostic and surgical equipment.",
      image: "/assets/why_Patients_choose/2.png"
    },
    {
      title: "Patient-friendly environment",
      description: "A calm, peaceful, reassuring space.",
      image: "/assets/why_Patients_choose/3.png"
    },
    {
      title: "Personalised Attention",
      description: "Treatment plans tailored to your case.",
      image: "/assets/why_Patients_choose/4.png"
    },
    {
      title: "Affordable solutions",
      description: "Quality care at accessible rates.",
      image: "/assets/why_Patients_choose/5.png"
    },
    {
      title: "Central Indore location",
      description: "Easily reachable from across the city.",
      image: "/assets/why_Patients_choose/6.png"
    },
    {
      title: "Trained paramedical staff",
      description: "Qualified team supporting every step.",
      image: "/assets/why_Patients_choose/7.png"
    },
    {
      title: "Comprehensive Treatments",
      description: "All major eye care under one roof.",
      image: "/assets/why_Patients_choose/8.png"
    }
  ]
};
// About introduction section
export const aboutIntroductionContent = {
  badge: "About Us",
  paragraphs: [
    "Welcome to Shanti EyeTech, where \"Shanti\" signifies peace and \"EyeTech\" represents world-class technology in eye care. Our hospital embodies a harmonious fusion of spirituality, positive energy, and a tranquil ambiance. We take pride in our team of highly qualified doctors and well-trained paramedical staff. Shanti EyeTech is equipped with cutting-edge technology and state-of-the-art equipment to ensure the highest standards of care. Conveniently situated at the heart of Indore city, our facility is easily accessible from all areas. We are dedicated to providing personalized attention, care, and treatment at affordable rates, with the patient well-being as our foremost priority."
  ]
};
// Know Your Doctor section
export const knowYourDoctorContent = {
  eyebrow: "Know your",
  accent: "Doctor",
  name: "Dr. Amit N. Solanki",
  role: "Medical Director of Shanti Eye Care",
  image: "/assets/about/your_doctor.png",
  cards: [
    {
      number: "01",
      title: "Credentials",
      type: "pills",
      items: ["MBBS", "DOMS", "DNB", "FAECS"]
    },
    {
      number: "02",
      title: "Specialization",
      type: "text",
      body: "Cataract Surgery, Glaucoma Care, LASIK / Refractive, Phacoemulsification"
    },
    {
      number: "03",
      title: "Recognition",
      type: "text",
      body: "9+ National & international honours"
    },
    {
      number: "04",
      title: "Affiliations",
      type: "text",
      body: "11 Professional memberships"
    }
  ]
};
// About pinned testimonials carousel
export const aboutTestimonialsContent = {
  badge: "Client Testimonials",
  title: ["You're Not Alone,", "Hear From Others Like You"],
  items: [
    {
      id: "emily-carson",
      name: "Emily Carson",
      quote: "Therapy changed my life. After years of hiding my anxiety, I finally opened up and I am so grateful I did. My counselor was incredibly kind and supportive.",
      pin: "/assets/about/testimonial_pin1.png",
      rotation: -4.2,
      offset: 8,
      accent: "coral"
    },
    {
      id: "marcus-lane",
      name: "Marcus Lane",
      quote: "The online sessions made it so easy to get help without stepping out of my comfort zone. I felt just as connected and cared for.",
      pin: "/assets/about/testimonial_pin2.png",
      rotation: 4.1,
      offset: 25,
      accent: "coral"
    },
    {
      id: "hannah-mitchell",
      name: "Hannah Mitchell",
      quote: "After losing my father, I struggled deeply. My grief therapist helped me find space for the pain, without letting it define me.",
      pin: "/assets/about/testimonial_pin3.png",
      rotation: -5,
      offset: 2,
      accent: "coral"
    },
    {
      id: "daniel-rivera",
      name: "Daniel Rivera",
      quote: "I was going through a very difficult breakup, and counseling gave me the tools to heal. I felt safe, heard, and respected from day one.",
      pin: "/assets/about/testimonial_pin4.png",
      rotation: 6.2,
      offset: 24,
      accent: "coral"
    },
    {
      id: "priya-sharma",
      name: "Priya Sharma",
      quote: "The whole experience was calm and reassuring. Every step was explained clearly, and I felt genuinely supported throughout my care.",
      pin: "/assets/about/testimonial_pin1.png",
      rotation: -3.8,
      offset: 7,
      accent: "coral"
    },
    {
      id: "rakesh-mehta",
      name: "Rakesh Mehta",
      quote: "The team listened patiently, answered every question, and made a difficult time feel manageable. The care felt personal from day one.",
      pin: "/assets/about/testimonial_pin2.png",
      rotation: 4.7,
      offset: 22,
      accent: "coral"
    }
  ]
};
// About FAQ section
export const aboutFaqContent = {
  eyebrow: "Frequently asked question",
  title: "Answers to your asked queries",
  callout: "Still not sure? Book a free discovery call now.",
  email: "info@shantieyetech.com",
  items: [
    {
      id: "book-appointment",
      question: "How do I book a doctor?",
      answer: "You can book an appointment through our website contact section or call our clinic directly at +91 91791 91939."
    },
    {
      id: "reports",
      question: "Can I access reports later?",
      answer: "Yes. Please contact the clinic with your registered details and our team will help you access available reports and visit records."
    },
    {
      id: "availability",
      question: "Is Shanti EyeTech available 24/7?",
      answer: "Our regular consultation hours are scheduled. For urgent eye concerns, call the clinic so our team can guide you appropriately."
    },
    {
      id: "hospital-visit",
      question: "Do I need to visit hospital?",
      answer: "A physical examination is recommended for accurate diagnosis because many eye conditions require specialist instruments and clinical evaluation."
    },
    {
      id: "prescriptions",
      question: "Can I get prescriptions online?",
      answer: "Prescriptions are provided after an appropriate consultation. Follow-up guidance may be shared remotely when clinically suitable."
    },
    {
      id: "data-safety",
      question: "Is my data safe?",
      answer: "We handle your personal and medical information carefully and use it only for treatment, communication, and legally required purposes."
    },
    {
      id: "choose-doctor",
      question: "Can I choose my doctor?",
      answer: "Yes. You may request an appointment with Dr. Amit N. Solanki, subject to schedule and consultation availability."
    },
    {
      id: "test-results",
      question: "How fast are test results?",
      answer: "Many diagnostic findings are discussed during the same visit. Tests requiring additional review may take longer, and our team will explain the expected timeline."
    }
  ]
};
// About CTA section
export const aboutCtaContent = {
  badge: "Let's Talk",
  title: ["Start Your", "Vision Journey"],
  buttonLabel: "Book a Consultation",
  href: "/contact",
  viewAllLabel: "View all",
  viewAllHref: "/services",
  images: {
    left: {
      src: "/assets/about/cta_image1.png",
      alt: "Shanti EyeTech doctor"
    },
    right: {
      src: "/assets/about/cta_image2.png",
      alt: "Patient eye consultation"
    }
  }
};
