export const lasikTreatmentContent = {
  hero: {
    logo: {
      src: "/assets/about/about_logo.png",
      alt: "Shanti EyeTech Eye Care & Laser Hospital",
    },
    background: {
      src: "/assets/Treatments/LASIK/lasik.png",
      alt: "LASIK Treatment Background",
    },
    navLinks: [
      { label: "Home", href: "/" },
      { label: "Cataract", href: "/treatments/catract" },
      { label: "LASIK", href: "/treatments/lasik" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/#contact" },
    ],
    title: {
      lineOne: "Freedom From",
      lineTwoStart: "Glasses ",
      accent: "Starts Here.",
      lineThree: "",
    },
    description:
      "Experience sharper, clearer vision with advanced LASIK technology. Our personalized approach, experienced specialists, and precision-driven care help you see the world with greater confidence.",
    actions: [
      { label: "Book Consultation", href: "/#contact", variant: "primary" },
      { label: "Check your Eligibility", href: "/#contact", variant: "secondary" },
    ],
  },
  whatIsLasik: {
    badge: "Services",
    title: "What is LASIK?",
    description:
      "LASIK (Laser-Assisted In Situ Keratomileusis) is one of the world's most trusted vision correction procedures. It reshapes the cornea using advanced laser technology to reduce or eliminate dependence on glasses and contact lenses.",
    descriptionSecondary:
      "The procedure is quick, minimally invasive, and designed to improve vision for suitable candidates with refractive errors such as nearsightedness, farsightedness, and astigmatism.",
  },
  conditionsCorrect: {
    badge: "Services",
    title: "Conditions LASIK Can Correct",
    subtitle: "Quick Procedure",
    description: "Usually completed within minutes for both eyes.",
    cards: [
      {
        image: {
          src: "/assets/Treatments/0f6b12b7ef5d32fb792e943e96f6f82c7685aa9b.png",
          alt: "Myopia Diagnostic",
        },
        brand: "HEIDELBERG ENGINEERING",
        title: "Myopia",
        description:
          "See distant objects more clearly without relying on glasses.",
        tags: ["Non-Invasive", "3D Imaging"],
      },
      {
        image: {
          src: "/assets/Treatments/1b16ab3e404a55e8510be714e3fdbd617d455645.png",
          alt: "Hyperopia Diagnostic",
        },
        brand: "DIGITAL PATHOLOGY",
        title: "Hyperopia",
        description:
          "Improve focus on nearby objects for more comfortable daily vision.",
        tags: ["Quick Screen", "High Res"],
      },
      {
        image: {
          src: "/assets/Treatments/df31644d2d100e1c57a392f15f2e8a8bc5275191.png",
          alt: "Astigmatism Diagnostic",
        },
        brand: "REFRACTIVE EXCELLENCE",
        title: "Astigmatism",
        description:
          "Correct irregular corneal shape for sharper, more balanced vision.",
        tags: ["Blade-free", "Fast Recovery"],
      },
    ],
  },
  benefitsCarousel: {
    badge: "Services",
    title: "Benefits of LASIK",
    cards: [
      {
        title: "Quick recovery",
        image: "/assets/Treatments/c4ce383aa720ee5e8768d85726ef2502367e016f.png",
      },
      {
        title: "Reduced dependence on glasses",
        image: "/assets/Treatments/24f1c3b3e7814ae91706722ef4d342dacc5b706e.png",
      },
      {
        title: "Clearer everyday vision",
        image: "/assets/Treatments/ae08abf366197adc432fbda371363e23f90e052b.png",
      },
    ],
  },
  faq: {
    eyebrow: "Frequently asked question",
    title: "Answers to your asked queries",
    callout: "Still not sure? Book a free discovery call now.",
    email: "info@shantieyetech.com",
    items: [
      {
        id: "lasik-what-is",
        question: "What is LASIK?",
        answer: "LASIK is a popular laser eye surgery designed to correct vision problems such as nearsightedness (myopia), farsightedness (hyperopia), and astigmatism, reducing or eliminating the need for glasses or contact lenses."
      },
      {
        id: "lasik-pain",
        question: "Is the LASIK procedure painful?",
        answer: "No, LASIK is not painful. Numbing eye drops are applied before the procedure, so you will only feel a mild pressure. Any post-surgery discomfort is typically mild and resolves within a few hours."
      },
      {
        id: "lasik-recovery",
        question: "How long is the recovery time after LASIK?",
        answer: "Most patients see a significant improvement in their vision within 24 hours. Many can return to work and normal daily activities the very next day, though full visual stabilization may take a few weeks."
      },
      {
        id: "lasik-eligibility",
        question: "Who is a good candidate for LASIK?",
        answer: "Good candidates are usually at least 18 years old, have a stable vision prescription for at least one year, healthy eyes with adequate corneal thickness, and no major medical conditions affecting healing."
      },
      {
        id: "lasik-results",
        question: "Are LASIK results permanent?",
        answer: "Yes, the physical reshaping of the cornea is permanent. However, LASIK does not prevent normal age-related changes like presbyopia (needing reading glasses) or cataracts, which may occur later in life."
      }
    ]
  }
};

export const catractTreatmentContent = {
  hero: {
    logo: {
      src: "/assets/about/about_logo.png",
      alt: "Shanti EyeTech Eye Care & Laser Hospital",
    },
    background: {
      src: "/assets/Treatments/Catract/catract.png",
      alt: "Cataract Treatment Background",
    },
    navLinks: [
      { label: "Home", href: "/" },
      { label: "Cataract", href: "/treatments/catract" },
      { label: "LASIK", href: "/treatments/lasik" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/#contact" },
    ],
    title: {
      lineOne: "Restore Clear",
      lineTwoStart: "Vision. ",
      accent: "Rediscover",
      lineThree: "Everyday Life.",
    },
    description:
      "Cataracts can gradually make everyday activities like reading, driving, and recognizing faces more difficult. At Shanti EyeTech, we combine advanced surgical technology with personalized care to restore clearer vision safely and comfortably.",
    actions: [
      { label: "Book Consultation", href: "/#contact", variant: "primary" },
      { label: "Check your Eligibility", href: "/#contact", variant: "secondary" },
    ],
  },
  whatIsCataract: {
    badge: "Services",
    title: "What is a Cataract?",
    description:
      "A cataract is the clouding of the eye's natural lens, causing blurry or hazy vision over time. It is a common age-related condition that develops gradually and can affect one or both eyes.",
    descriptionSecondary:
      "While cataracts cannot be reversed with medicines or eye drops, modern cataract surgery is a safe and effective solution that replaces the cloudy lens with a clear artificial intraocular lens (IOL), helping restore vision and improve quality of life.",
  },
  advancedCare: {
    badge: "Services",
    title: "Our Advanced Cataract Care",
    subtitle: "Types of Intraocular Lenses (IOLs)",
    description: "Usually completed within minutes for both eyes.",
    cards: [
      {
        image: {
          src: "/assets/Treatments/0f6b12b7ef5d32fb792e943e96f6f82c7685aa9b.png",
          alt: "Standard Monofocal Lens",
        },
        brand: "HEIDELBERG ENGINEERING",
        title: "Standard Monofocal Lens",
        description:
          "Designed to provide clear vision at a single distance, typically for everyday activities.",
        tags: ["Non-Invasive", "3D Imaging"],
      },
      {
        image: {
          src: "/assets/Treatments/1b16ab3e404a55e8510be714e3fdbd617d455645.png",
          alt: "Premium Multifocal Lens",
        },
        brand: "DIGITAL PATHOLOGY",
        title: "Premium Multifocal Lens",
        description:
          "Helps improve vision at multiple distances, reducing dependence on glasses for many patients.",
        tags: ["Quick Screen", "High Res"],
      },
      {
        image: {
          src: "/assets/Treatments/df31644d2d100e1c57a392f15f2e8a8bc5275191.png",
          alt: "Toric Lens",
        },
        brand: "REFRACTIVE EXCELLENCE",
        title: "Toric Lens",
        description:
          "Specifically designed to correct cataracts along with astigmatism for clearer vision.",
        tags: ["Blade-free", "Fast Recovery"],
      },
    ],
  },
  benefitsCarousel: {
    badge: "Services",
    title: "Benefits of Cataract Surgery",
    cards: [
      {
        title: "Quick recovery",
        image: "/assets/Treatments/c4ce383aa720ee5e8768d85726ef2502367e016f.png",
      },
      {
        title: "Reduced dependence on glasses",
        image: "/assets/Treatments/24f1c3b3e7814ae91706722ef4d342dacc5b706e.png",
      },
      {
        title: "Clearer everyday vision",
        image: "/assets/Treatments/ae08abf366197adc432fbda371363e23f90e052b.png",
      },
    ],
  },
  faq: {
    eyebrow: "Frequently asked question",
    title: "Answers to your asked queries",
    callout: "Still not sure? Book a free discovery call now.",
    email: "info@shantieyetech.com",
    items: [
      {
        id: "cataract-what-is",
        question: "What exactly is a cataract?",
        answer: "A cataract is a clouding of the normally clear lens of your eye. Over time, proteins break down and clump together, creating a cloudy area that makes your vision blurry or hazy."
      },
      {
        id: "cataract-when",
        question: "When is the right time to have cataract surgery?",
        answer: "You should consider surgery when cataracts begin to affect your quality of life or interfere with your ability to perform daily activities like reading, working, or driving at night."
      },
      {
        id: "cataract-pain",
        question: "Is cataract surgery painful?",
        answer: "No, cataract surgery is virtually painless. We use local anesthetic eye drops to completely numb the eye before the procedure. You may feel a slight pressure, but no sharp pain."
      },
      {
        id: "cataract-recovery",
        question: "How long does recovery take?",
        answer: "Most patients notice improved vision within 24 to 48 hours. While full internal healing can take a few weeks, you can usually resume most normal activities within a few days."
      },
      {
        id: "cataract-both-eyes",
        question: "Can both eyes be operated on at the same time?",
        answer: "Typically, we operate on one eye at a time, usually spacing the surgeries about one to two weeks apart. This allows the first eye to recover and stabilize before treating the second."
      }
    ]
  },
};
