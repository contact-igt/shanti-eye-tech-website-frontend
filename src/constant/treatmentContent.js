import { whyPatientsContent } from "@/constant/aboutContent";

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
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
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
      { label: "Book Consultation", href: "/contact", variant: "primary" },
      { label: "Check your Eligibility", href: "/contact", variant: "secondary" },
    ],
  },
  whatIsLasik: {
    badge: "Treatments",
    title: "What is LASIK?",
    description:
      "LASIK (Laser-Assisted In Situ Keratomileusis) is one of the world's most trusted vision correction procedures. It reshapes the cornea using advanced laser technology to reduce or eliminate dependence on glasses and contact lenses.",
    descriptionSecondary:
      "The procedure is quick, minimally invasive, and designed to improve vision for suitable candidates with refractive errors such as nearsightedness, farsightedness, and astigmatism.",
  },
  conditionsCorrect: {
    badge: "Treatments",
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
    badge: "Treatments",
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
    title: "Frequently Asked Questions",
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
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
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
      { label: "Book Consultation", href: "/contact", variant: "primary" },
      { label: "Check your Eligibility", href: "/contact", variant: "secondary" },
    ],
  },
  whatIsCataract: {
    badge: "Treatments",
    title: "What is a Cataract?",
    description:
      "A cataract is the clouding of the eye's natural lens, causing blurry or hazy vision over time. It is a common age-related condition that develops gradually and can affect one or both eyes.",
    descriptionSecondary:
      "While cataracts cannot be reversed with medicines or eye drops, modern cataract surgery is a safe and effective solution that replaces the cloudy lens with a clear artificial intraocular lens (IOL), helping restore vision and improve quality of life.",
  },
  advancedCare: {
    badge: "Treatments",
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
    badge: "Treatments",
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
    title: "Frequently Asked Questions",
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
export const pediatricEyeCareTreatmentContent = {
  hero: {
    logo: {
      src: "/assets/about/about_logo.png",
      alt: "Shanti EyeTech Eye Care & Laser Hospital",
    },
    background: {
      src: "/assets/Treatments/pediatric/hero_banner.png",
      alt: "Child receiving pediatric eye examination",
      objectPosition: "center center",
    },
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    title: {
      lines: ["Protect Their Future.", "Every Little Moment", "Matters."],
      accentWords: ["Every Little"],
    },
    description:
      "Early eye care can shape a lifetime of clear vision and confidence. Expert care for your child's sight tomorrow.",
    actions: [
      { label: "Book Consultation", href: "/contact", variant: "primary" },
      { label: "Check your Eligibility", href: "/contact", variant: "secondary" },
    ],
  },
  whatIsPediatricEyeCare: {
    badge: "Treatments",
    title: "What is Pediatric Eye Care?",
    description:
      "Pediatric eye care focuses on the eye health and vision development of infants, children, and teenagers. Early eye examinations help detect and treat vision problems that can affect learning, development, and quality of life.",
    descriptionSecondary:
      "Good vision in childhood lays the foundation for a bright and successful future. Early detection and treatment make all the difference.",
  },
  careOptions: {
    badge: "Treatments",
    title: "Our Pediatric Eye Care & Treatment Options",
    subtitle: null,
    description:
      "Specialized care for healthy vision and happy childhood.",
    cards: [
      {
        image: {
          src: "/assets/Treatments/pediatric/options1.png",
          alt: "Child undergoing comprehensive pediatric eye exam",
        },
        brand: null,
        title: "Comprehensive Eye Exams",
        description:
          "Thorough eye evaluations to detect vision issues early.",
        tags: ["Early Detection", "Anti - Progression"],
      },
      {
        image: {
          src: "/assets/Treatments/pediatric/options2.png",
          alt: "Child receiving vision therapy assessment",
        },
        brand: null,
        title: "Vision Therapy",
        description:
          "Customized therapy to improve eye coordination and visual skills.",
        tags: ["Preventive measure"],
      },
      {
        image: {
          src: "/assets/Treatments/pediatric/options3.png",
          alt: "Child seated for myopia management consultation",
        },
        brand: null,
        title: "Myopia Management",
        description:
          "Advanced solutions to slow the progression of nearsightedness",
        tags: ["Anti-Progression"],
      },
    ],
  },
  benefitsCarousel: {
    badge: "Treatments",
    title: "Benefits of Early Pediatric Eye Care",
    cards: [
      {
        title: "Long-term Healthy Vision",
        image: "/assets/Treatments/pediatric/benefits1.png",
      },
      {
        title: "Better Learning & Development",
        image: "/assets/Treatments/pediatric/benefits2.png",
      },
      {
        title: "Higher Confidence & Happiness",
        image: "/assets/Treatments/pediatric/benefits3.png",
      },
    ],
  },
  faq: {
    eyebrow: "Frequently asked question",
    title: "Frequently Asked Questions",
    callout: "Still not sure? Book a free discovery call now.",
    email: "info@shantieyetech.com",
    items: [
      {
        id: "pediatric-first-exam",
        question: "When should my child have their first eye exam?",
        answer:
          "Children should have their eyes checked early, especially if parents notice squinting, frequent eye rubbing, sitting too close to screens, or difficulty reading. Our team can recommend the right schedule based on your child's age and symptoms.",
      },
      {
        id: "pediatric-warning-signs",
        question: "What signs suggest my child has a vision problem?",
        answer:
          "Common signs include squinting, closing one eye, frequent headaches, eye strain, rubbing the eyes, losing place while reading, or difficulty concentrating at school.",
      },
      {
        id: "pediatric-screen-time",
        question: "Can screen time affect children's eyes?",
        answer:
          "Long screen time can contribute to eye strain, dryness, and focusing fatigue. Regular breaks, proper lighting, outdoor time, and routine eye checks help protect children's vision.",
      },
      {
        id: "pediatric-myopia-management",
        question: "What is myopia management?",
        answer:
          "Myopia management uses specialized care plans to slow the progression of nearsightedness in children and reduce long-term risks linked with high myopia.",
      },
      {
        id: "pediatric-testing-pain",
        question: "Is pediatric eye testing painful?",
        answer:
          "No, pediatric eye testing is generally comfortable and child friendly. Most tests are non-invasive and designed to help children feel relaxed during the visit.",
      },
    ],
  },
};
export const retinaTreatmentContent = {
  hero: {
    logo: {
      src: "/assets/about/about_logo.png",
      alt: "Shanti EyeTech Eye Care & Laser Hospital",
    },
    background: {
      src: "/assets/Treatments/retina/banner_retina_v1.png",
      alt: "Retina care consultation and vision protection",
      objectPosition: "center center",
      tabletObjectPosition: "72% center",
      mobileObjectPosition: "76% center",
      smallObjectPosition: "78% center",
    },
    navLinks: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    title: {
      lines: ["Preserve Your Vision.", "Cherish Every", "Moment."],
      accentWords: ["Cherish"],
    },
    description:
      "Your retina is essential for the vision you rely on every day. Early detection and expert care can help protect it from serious, vision-threatening conditions.",
    actions: [
      { label: "Book Consultation", href: "/contact", variant: "primary" },
      { label: "Check your Eligibility", href: "/contact", variant: "secondary" },
    ],
  },
  whatIsRetina: {
    badge: "Treatments",
    title: "What is Retina?",
    description:
      "The retina is the light-sensitive layer at the back of the eye that captures images and sends signals to the brain. Damage to the retina can lead to partial or total vision loss if not detected and treated early.",
    descriptionSecondary:
      "Retina care focuses on diagnosing and treating diseases that affect the retina, macula, and blood vessels at the back of the eye.",
  },
  warningSigns: {
    badge: "Treatments",
    title: "When Should You Consider Evaluation?",
    subtitle: "Watch Out For These Warning Signs",
    headingId: "retina-warning-signs-title",
    layoutVariant: "four-card",
    listItems: [
      "Blurred or distorted vision",
      "Floaters or dark spots in vision",
      "Difficulty seeing in low light",
      "Loss of peripheral (side) vision",
      "Diabetes or high blood pressure",
    ],
    images: [
      {
        id: "retina-signs-card1",
        src: "/assets/Treatments/retina/signs1.png",
        alt: "Blurred or distorted vision warning sign",
        objectPosition: "center center",
      },
      {
        id: "retina-signs-card2",
        src: "/assets/Treatments/retina/signs2.png",
        alt: "Night driving difficulty and glare warning sign",
        objectPosition: "center center",
      },
      {
        id: "retina-signs-card3",
        src: "/assets/Treatments/retina/signs3.png",
        alt: "Low light vision difficulty warning sign",
        objectPosition: "center center",
      },
      {
        id: "retina-signs-card4",
        src: "/assets/Treatments/retina/signs4.png",
        alt: "Peripheral vision concern during retina evaluation",
        objectPosition: "center center",
      },
    ],
  },
  careOptions: {
    badge: "Treatments",
    title: "Our Retina Care & Treatment Options",
    subtitle: null,
    description: "Advanced, precise care for better outcomes.",
    cards: [
      {
        image: {
          src: "/assets/Treatments/retina/options1.png",
          alt: "Retina surgery procedure",
        },
        brand: null,
        title: "Retina Surgery",
        description: "Advanced surgical solutions for complex retinal conditions.",
        tags: ["Long term Relief", "Anti - Progression"],
      },
      {
        image: {
          src: "/assets/Treatments/retina/options2.png",
          alt: "Laser therapy for retina care",
        },
        brand: null,
        title: "Laser Therapy",
        description:
          "Targeted laser treatment to seal retinal tears, reduce swelling, and protect vision.",
        tags: ["Preventive measure"],
      },
      {
        image: {
          src: "/assets/Treatments/retina/options3.png",
          alt: "Medical management for retinal conditions",
        },
        brand: null,
        title: "Medical Management",
        description:
          "Medications and injections to manage retinal conditions and reduce swelling.",
        tags: ["Anti - Progression"],
      },
    ],
  },
  benefitsCarousel: {
    badge: "Treatments",
    title: "Benefits of Timely Retina Care",
    cards: [
      {
        title: "Maintain an active life",
        image: "/assets/Treatments/retina/benefits1.png",
      },
      {
        title: "Preserve your vision",
        image: "/assets/Treatments/retina/benefits2.png",
      },
      {
        title: "Live independently",
        image: "/assets/Treatments/retina/benefits3.png",
      },
    ],
  },
  faq: {
    eyebrow: "Frequently asked question",
    title: "Frequently Asked Questions",
    callout: "Still not sure? Book a free discovery call now.",
    email: "info@shantieyetech.com",
    items: [
      {
        id: "retina-what-is",
        question: "What is retina care?",
        answer:
          "Retina care focuses on diagnosing and treating conditions that affect the retina, macula, and blood vessels at the back of the eye.",
      },
      {
        id: "retina-warning-signs",
        question: "What symptoms need a retina evaluation?",
        answer:
          "Blurred or distorted vision, floaters, flashes, dark spots, difficulty seeing in low light, or loss of side vision should be evaluated promptly.",
      },
      {
        id: "retina-diabetes",
        question: "Do diabetic patients need regular retina checkups?",
        answer:
          "Yes. Diabetes can affect the retinal blood vessels, so regular retina screening is important even when vision feels normal.",
      },
      {
        id: "retina-treatment-options",
        question: "What treatments are available for retina conditions?",
        answer:
          "Treatment may include retina laser therapy, injections, medicines, monitoring, or surgery depending on the diagnosis and severity.",
      },
      {
        id: "retina-early-care",
        question: "Why is early retina care important?",
        answer:
          "Many retinal conditions can progress silently or quickly. Early detection gives the best chance to protect vision and prevent avoidable complications.",
      },
    ],
  },
};
const sharedTreatmentBenefits = {
  id: "benefits",
  headingId: "treatment-benefits-title",
  badge: whyPatientsContent.badge,
  title: whyPatientsContent.title,
  description: whyPatientsContent.description,
  background: {
    src: "/assets/Treatments/background.png",
    alt: "",
  },
  items: whyPatientsContent.items,
};

export const treatmentPages = {
  catract: {
    seo: {
      title: "Cataract Treatment | Shanti EyeTech Eye Care & Laser Hospital",
      description:
        "Explore advanced Cataract Treatment at Shanti EyeTech Eye Care & Laser Hospital in Indore, restoring vision clarity and quality.",
    },
    hero: {
      ...catractTreatmentContent.hero,
      headingId: "catract-hero-title",
      accentWords: ["Rediscover"],
    },
    benefits: sharedTreatmentBenefits,
    intro: {
      ...catractTreatmentContent.whatIsCataract,
      headingId: "what-is-cataract-title",
      topImage: {
        src: "/assets/Treatments/Catract/cataract-new.png",
        alt: "",
      },
      middleImage: {
        src: "/assets/Treatments/Catract/cataract_2.png",
        alt: "Cataract surgery procedure",
      },
    },
    checklistBento: {
      badge: "Treatments",
      title: "When Should You Consider Surgery?",
      subtitle: "Cataract Surgery May Be Recommended If",
      headingId: "consider-surgery-title",
      layoutVariant: "four-card",
      listItems: [
        "Vision interferes with daily activities",
        "Glasses no longer improve your vision",
        "Reading or driving has become difficult",
        "Cataracts are affecting your independence",
        "Your eye specialist recommends treatment",
      ],
      images: [
        {
          id: "catract-card1",
          src: "/assets/Treatments/Catract/3a0367b670f3795a1eaed25172c9c7ba2cf2afc3.png",
          alt: "Elderly man struggling to read newspaper - blurry vision symptom",
          objectPosition: "center top",
        },
        {
          id: "catract-card2",
          src: "/assets/Treatments/Catract/9efa0bd53bf7cbafb709b9b53de912fc20c2a0ae.png",
          alt: "Elderly man having difficulty reading a book - cataract symptom",
          objectPosition: "center center",
        },
        {
          id: "catract-card3",
          src: "/assets/Treatments/Catract/8e0710610a2bd4e48b6fae4572c5444e1d7109ff.png",
          alt: "Elderly man struggling with phone screen in dim light - night vision difficulty",
          objectPosition: "center center",
        },
        {
          id: "catract-card4",
          src: "/assets/Treatments/Catract/e26ee078e6c07a5d6b07d7a60565c2444ac41851.png",
          alt: "Elderly man experiencing eye discomfort - cataract symptom",
          objectPosition: "center center",
        },
      ],
    },
    cardGrid: {
      ...catractTreatmentContent.advancedCare,
      headingId: "advanced-cataract-care-title",
    },
    benefitsCarousel: {
      ...catractTreatmentContent.benefitsCarousel,
      headingId: "cataract-benefits-carousel-title",
    },
    faq: catractTreatmentContent.faq,
  },
  lasik: {
    seo: {
      title: "LASIK Treatment | Shanti EyeTech Eye Care & Laser Hospital",
      description:
        "Explore LASIK laser vision correction at Shanti EyeTech Eye Care & Laser Hospital in Indore, including consultation and eligibility screening.",
    },
    hero: {
      ...lasikTreatmentContent.hero,
      headingId: "lasik-hero-title",
      accentWords: ["Starts Here."],
    },
    benefits: sharedTreatmentBenefits,
    intro: {
      ...lasikTreatmentContent.whatIsLasik,
      headingId: "what-is-lasik-title",
      topImage: {
        src: "/assets/Treatments/LASIK/lasik-new.png",
        alt: "",
      },
      middleImage: {
        src: "/assets/Treatments/LASIK/fcaf36b415bc029b876282b7c58e920d8be0fdf7.png",
        alt: "LASIK laser eye surgery procedure",
      },
    },
    checklistBento: {
      badge: "Treatments",
      title: "Is LASIK Right For You?",
      subtitle: "You May Be A Good Candidate If You",
      headingId: "is-lasik-right-title",
      layoutVariant: "five-card",
      listItems: [
        "Are over 18 years of age",
        "Have stable vision prescription",
        "Have healthy eyes",
        "Tired of wearing glasses or contact lenses",
        "Have myopia (near-sightedness)",
        "Have hyperopia (far-sightedness)",
        "Have astigmatism",
      ],
      images: [
        {
          id: "card1",
          src: "/assets/Treatments/LASIK/4ace159656d795c72e72bfd3a053e52f41a43fbc.png",
          alt: "Doctor examining patient's eyes",
        },
        {
          id: "card2",
          src: "/assets/Treatments/LASIK/d54d3fba574c60621b053a0ad7dcca3873dbed00.png",
          alt: "Close-up of eye with laser treatment",
        },
        {
          id: "card3",
          src: "/assets/Treatments/LASIK/711d0d6ad3bed69e51fe8cb7e3254d02bbe5f1c1.png",
          alt: "Glasses and contact lenses",
        },
        {
          id: "card4",
          src: "/assets/Treatments/LASIK/fc939891e9418eb68f171e14c33ed05ca7e6f054.png",
          alt: "Eye test with phoropter",
        },
        {
          id: "card5",
          src: "/assets/Treatments/LASIK/24f1c3b3e7814ae91706722ef4d342dacc5b706e.png",
          alt: "Patient in surgical setting",
        },
      ],
    },
    cardGrid: {
      ...lasikTreatmentContent.conditionsCorrect,
      headingId: "lasik-conditions-title",
    },
    benefitsCarousel: {
      ...lasikTreatmentContent.benefitsCarousel,
      headingId: "lasik-benefits-carousel-title",
    },
    faq: lasikTreatmentContent.faq,
  },
  retina: {
    seo: {
      title: "Retina Treatment | Shanti EyeTech Eye Care & Laser Hospital",
      description:
        "Explore advanced retina care at Shanti EyeTech Eye Care & Laser Hospital in Indore, including retina evaluation, laser therapy, medical management, and surgery.",
    },
    hero: {
      ...retinaTreatmentContent.hero,
      headingId: "retina-hero-title",
      accentWords: ["Cherish"],
    },
    benefits: sharedTreatmentBenefits,
    intro: {
      ...retinaTreatmentContent.whatIsRetina,
      headingId: "what-is-retina-title",
      topImage: {
        src: "/assets/Treatments/Catract/cataract-new.png",
        alt: "Close-up retina diagnostic scan",
      },
      middleImage: {
        src: "/assets/Treatments/retina/retina.png",
        alt: "Detailed retina anatomy and eye care visual",
      },
    },
    checklistBento: retinaTreatmentContent.warningSigns,
    cardGrid: {
      ...retinaTreatmentContent.careOptions,
      headingId: "retina-treatment-options-title",
    },
    benefitsCarousel: {
      ...retinaTreatmentContent.benefitsCarousel,
      headingId: "retina-benefits-carousel-title",
    },
    faq: retinaTreatmentContent.faq,
  },
  glaucoma: {
    seo: {
      title: "Glaucoma Treatment | Shanti EyeTech Eye Care & Laser Hospital",
      description:
        "Explore advanced Glaucoma Treatment at Shanti EyeTech Eye Care & Laser Hospital in Indore, preserving your vision.",
    },
    hero: {
      logo: {
        src: "/assets/about/about_logo.png",
        alt: "Shanti EyeTech Eye Care & Laser Hospital",
      },
      background: {
        src: "/assets/Treatments/glaucoma/d8599089dc924bddd51110f2038690c918abafeb.png",
        alt: "Glaucoma Treatment Background",
        objectPosition: "center center",
        tabletObjectPosition: "72% center",
        mobileObjectPosition: "76% center",
        smallObjectPosition: "78% center",
      },
      navLinks: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
      title: {
        lineOne: "Detect",
        lineTwoStart: "Glaucoma ",
        accent: "Early,",
        lineThree: "Preserve Life's Precious Moments.",
      },
      description:
        "Glaucoma is often called the 'silent thief of sight'. Protect your vision with our advanced diagnostics and personalized treatment.",
      actions: [
        { label: "Book Consultation", href: "/contact", variant: "primary" },
        { label: "Check your Eligibility", href: "/contact", variant: "secondary" },
      ],
      headingId: "glaucoma-hero-title",
      accentWords: ["Early,"],
    },
    benefits: sharedTreatmentBenefits,
    intro: {
      badge: "Treatments",
      title: "What is Glaucoma?",
      description:
        "Glaucoma is a group of eye diseases that damage the optic nerve, often due to increased pressure inside the eye. It usually has no early symptoms but can cause gradual vision loss.",
      descriptionSecondary:
        "If untreated, glaucoma can lead to irreversible blindness. Early detection through regular eye check-ups is the key to protecting your vision.",
      headingId: "what-is-glaucoma-title",
      topImage: {
        src: "/assets/Treatments/Catract/cataract-new.png",
        alt: "Close-up glaucoma eye examination",
      },
      middleImage: {
        src: "/assets/Treatments/glaucoma/081025920cc8d271562973e4ae61a644fef3b036.png",
        alt: "Glaucoma evaluation",
      },
    },
    checklistBento: {
      badge: "Treatments",
      title: "When Should You Consider Evaluation?",
      subtitle: "Watch Out For These Warning Signs",
      headingId: "glaucoma-warning-signs-title",
      layoutVariant: "four-card",
      listItems: [
        "Loss of peripheral (side) vision",
        "Blurred vision, especially in low light",
        "Halos around lights",
        "Headaches, nausea, or vomiting",
        "Age above 40 years",
      ],
      images: [
        {
          id: "glaucoma-signs-card1",
          src: "/assets/Treatments/glaucoma/ef05d739652b323275bd5c4af41f774c995e461f.png",
          alt: "Loss of peripheral vision",
          objectPosition: "center center",
        },
        {
          id: "glaucoma-signs-card2",
          src: "/assets/Treatments/glaucoma/8d4a0a548eace991724e13e67aa0210d5248fb9c.png",
          alt: "Blurred vision in low light",
          objectPosition: "center center",
        },
        {
          id: "glaucoma-signs-card3",
          src: "/assets/Treatments/glaucoma/2622ad0f596e190e51f9113286fb62b207d8e241.png",
          alt: "Halos around lights",
          objectPosition: "center center",
        },
        {
          id: "glaucoma-signs-card4",
          src: "/assets/Treatments/glaucoma/437c8b72848a6c66eb4a429c64d1306d30369cbe.png",
          alt: "Headache and nausea glaucoma warning sign",
          objectPosition: "center center",
        },
      ],
    },
    cardGrid: {
      badge: "Treatments",
      title: "Our Glaucoma Care & Treatment Options",
      subtitle: null,
      description:
        "Personalized solutions to manage eye pressure and protect your optic nerve.",
      headingId: "glaucoma-care-title",
      cards: [
        {
          image: {
            src: "/assets/Treatments/glaucoma/86bd16b205c41335d124ac0ab2189273c13a1e96.png",
            alt: "Medications",
          },
          brand: null,
          title: "Medications",
          description:
            "Prescription eye drops help reduce eye pressure and slow disease progression.",
          tags: ["Preventive measure", "Anti - Progression"],
        },
        {
          image: {
            src: "/assets/Treatments/glaucoma/05a77aa2c207af02183f97fc979cf5a86b810a05.png",
            alt: "Laser Therapy",
          },
          brand: null,
          title: "Laser Therapy",
          description:
            "Advanced laser procedures to improve fluid drainage and reduce eye pressure.",
          tags: ["Quick Recovery"],
        },
        {
          image: {
            src: "/assets/Treatments/glaucoma/1b16ab3e404a55e8510be714e3fdbd617d455645.png",
            alt: "Glaucoma Surgery",
          },
          brand: null,
          title: "Glaucoma Surgery",
          description:
            "Minimally invasive surgical options for long-term pressure control.",
          tags: ["Long Term Relief"],
        },
      ],
    },
    benefitsCarousel: {
      badge: "Treatments",
      title: "Benefits of Early Glaucoma Care",
      headingId: "glaucoma-benefits-carousel-title",
      cards: [
        {
          title: "Maintain an active life",
          image: "/assets/Treatments/glaucoma/1a7d1a65c84191423b79eed37ce8ee377f9497ae.png",
        },
        {
          title: "Preserve your vision",
          image: "/assets/Treatments/glaucoma/eea449ec779f949737d32bcd53516f26dfc6f888.png",
        },
        {
          title: "Live independently",
          image: "/assets/Treatments/glaucoma/9ee28d1e61d081deafdb54ddff5befea02be8ab7.png",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked question",
      title: "Frequently Asked Questions",
      callout: "Still not sure? Book a free discovery call now.",
      email: "info@shantieyetech.com",
      items: [
        {
          id: "glaucoma-what-is",
          question: "What is glaucoma?",
          answer:
            "Glaucoma is a group of eye conditions that damage the optic nerve, the health of which is vital for good vision. This damage is often caused by an abnormally high pressure in your eye.",
        },
        {
          id: "glaucoma-cured",
          question: "Can glaucoma be cured?",
          answer:
            "Glaucoma cannot be cured, and vision lost to the disease cannot be restored. However, early detection and treatment can delay or prevent further vision loss.",
        },
        {
          id: "glaucoma-hereditary",
          question: "Is glaucoma hereditary?",
          answer:
            "Yes, family history is a significant risk factor for glaucoma. If you have an immediate family member with glaucoma, you have a much higher risk of developing the disease.",
        },
        {
          id: "glaucoma-pressure",
          question: "Does high eye pressure always mean glaucoma?",
          answer:
            "Not necessarily. High eye pressure (ocular hypertension) increases your risk of developing glaucoma, but not everyone with high pressure will develop the disease. Regular monitoring is key.",
        },
        {
          id: "glaucoma-checked",
          question: "How often should I get checked?",
          answer:
            "It's recommended to have a comprehensive eye exam every 1 to 2 years, especially if you are over 40 or have risk factors like a family history of glaucoma.",
        },
      ],
    },
  },
  pediatricEyeCare: {
    seo: {
      title: "Pediatric Eye Care | Shanti EyeTech Eye Care & Laser Hospital",
      description:
        "Explore pediatric eye care at Shanti EyeTech Eye Care & Laser Hospital in Indore, including child-friendly eye exams, vision therapy, and myopia management.",
    },
    hero: {
      ...pediatricEyeCareTreatmentContent.hero,
      headingId: "pediatric-eye-care-hero-title",
      accentWords: ["Every Little"],
    },
    benefits: sharedTreatmentBenefits,
    intro: {
      ...pediatricEyeCareTreatmentContent.whatIsPediatricEyeCare,
      headingId: "what-is-pediatric-eye-care-title",
      topImage: {
        src: "/assets/Treatments/Catract/cataract-new.png",
        alt: "Close-up pediatric eye examination",
      },
      middleImage: {
        src: "/assets/Treatments/pediatric/pediatric.png",
        alt: "Child smiling during pediatric eye checkup",
      },
    },
    checklistBento: {
      badge: "Treatments",
      title: "When Should You Consider Evaluation?",
      subtitle: "Watch Out For These Warning Signs",
      headingId: "pediatric-eye-specialist-signs-title",
      layoutVariant: "four-card",
      listItems: [
        "Squinting or tilting the head",
        "Sitting too close to screens or TV",
        "Frequent rubbing of the eyes",
        "Complaints of headache or eye strain",
        "Difficulty reading or concentrating",
      ],
      images: [
        {
          id: "pediatric-signs-card1",
          src: "/assets/Treatments/pediatric/signs_1.png",
          alt: "Child covering one eye during vision check",
          objectPosition: "center center",
        },
        {
          id: "pediatric-signs-card2",
          src: "/assets/Treatments/pediatric/signs_2.png",
          alt: "Child sitting near screen",
          objectPosition: "center center",
        },
        {
          id: "pediatric-signs-card3",
          src: "/assets/Treatments/pediatric/signs_3.png",
          alt: "Child rubbing eyes",
          objectPosition: "center center",
        },
        {
          id: "pediatric-signs-card4",
          src: "/assets/Treatments/pediatric/signs_4.png",
          alt: "Child reading during eye care assessment",
          objectPosition: "center center",
        },
      ],
    },
    cardGrid: {
      ...pediatricEyeCareTreatmentContent.careOptions,
      headingId: "pediatric-treatment-options-title",
    },
    benefitsCarousel: {
      ...pediatricEyeCareTreatmentContent.benefitsCarousel,
      headingId: "pediatric-benefits-carousel-title",
    },
    faq: pediatricEyeCareTreatmentContent.faq,
  },
};



export const glaucomaTreatmentContent = {
  hero: {
    logo: {
      src: "/assets/about/about_logo.png",
      alt: "Shanti EyeTech Eye Care & Laser Hospital",
    },
    background: {
      src: "/assets/Treatments/glaucoma/Gluocoma_backgrund.png",
      alt: "Glaucoma Treatment Background",
    },
    navLinks: [
      { label: "Home", href: "/" },
      { label: "Cataract", href: "/treatments/catract" },
      { label: "LASIK", href: "/treatments/lasik" },
      { label: "Glaucoma", href: "/treatments/glaucoma" },
      { label: "Retina", href: "/treatments/retina" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/#contact" },
    ],
    title: {
      lineOne: "Detect",
      lineTwoStart: "Glaucoma ",
      accent: "Early,",
      lineThree: "Preserve Life's Precious Moments.",
    },
    description:
      "Glaucoma is often called the 'silent thief of sight'. Protect your vision with our advanced diagnostics and personalized treatment.",
    actions: [
      { label: "Book Consultation", href: "/#contact", variant: "primary" },
      { label: "Check your Eligibility", href: "/#contact", variant: "secondary" },
    ],
  },
  whatIsGlaucoma: {
    badge: "Treatments",
    title: "What is Glaucoma?",
    description:
      "Glaucoma is a group of eye diseases that damage the optic nerve, often due to increased pressure inside the eye. It usually has no early symptoms but can cause gradual vision loss.",
    descriptionSecondary:
      "Fortunately, glaucoma can be effectively managed if detected early. Early detection through regular eye check-ups is the key to protecting your vision.",
  },
  warningSigns: {
    badge: "Treatments",
    title: "When Should You Consider Evaluation?",
    subtitle: "Watch Out For These Warning Signs",
  },
  advancedCare: {
    badge: "Treatments",
    title: "Our Glaucoma Care & Treatment Options",
    subtitle: "Personalized solutions to manage eye pressure and protect your optic nerve.",
    cards: [
      {
        image: {
          src: "/assets/Treatments/glaucoma/86bd16b205c41335d124ac0ab2189273c13a1e96.png",
          alt: "Medications",
        },
        title: "Medications",
        description:
          "Prescription eye drops help reduce eye pressure and slow disease progression.",
        tags: ["Preventive measure", "Anti - Progression"],
      },
      {
        image: {
          src: "/assets/Treatments/glaucoma/05a77aa2c207af02183f97fc979cf5a86b810a05.png",
          alt: "Laser Therapy",
        },
        title: "Laser Therapy",
        description:
          "Advanced laser procedures to improve fluid drainage and reduce eye pressure.",
        tags: ["Quick Recovery"],
      },
      {
        image: {
          src: "/assets/Treatments/glaucoma/1b16ab3e404a55e8510be714e3fdbd617d455645.png",
          alt: "Glaucoma Surgery",
        },
        title: "Glaucoma Surgery",
        description:
          "Minimally invasive surgical options for long-term pressure control.",
        tags: ["Long Term Relief"],
      },
    ],
  },
  benefitsCarousel: {
    badge: "Treatments",
    title: "Benefits of Early Glaucoma Care",
    cards: [
      {
        title: "Maintain an active life",
        image: "/assets/Treatments/glaucoma/1a7d1a65c84191423b79eed37ce8ee377f9497ae.png",
      },
      {
        title: "Preserve your vision",
        image: "/assets/Treatments/glaucoma/eea449ec779f949737d32bcd53516f26dfc6f888.png",
      },
      {
        title: "Live independently",
        image: "/assets/Treatments/glaucoma/9ee28d1e61d081deafdb54ddff5befea02be8ab7.png",
      },
    ],
  },
  faq: {
    eyebrow: "Frequently asked question",
    title: "Frequently Asked Questions",
    callout: "Still not sure? Book a free discovery call now.",
    email: "info@shantieyetech.com",
    items: [
      {
        id: "glaucoma-what-is",
        question: "What is glaucoma?",
        answer: "Glaucoma is a group of eye conditions that damage the optic nerve, the health of which is vital for good vision. This damage is often caused by an abnormally high pressure in your eye."
      },
      {
        id: "glaucoma-cured",
        question: "Can glaucoma be cured?",
        answer: "Glaucoma cannot be cured, and vision lost to the disease cannot be restored. However, early detection and treatment can delay or prevent further vision loss."
      },
      {
        id: "glaucoma-hereditary",
        question: "Is glaucoma hereditary?",
        answer: "Yes, family history is a significant risk factor for glaucoma. If you have an immediate family member with glaucoma, you have a much higher risk of developing the disease."
      },
      {
        id: "glaucoma-pressure",
        question: "Does high eye pressure always mean glaucoma?",
        answer: "Not necessarily. High eye pressure (ocular hypertension) increases your risk of developing glaucoma, but not everyone with high pressure will develop the disease. Regular monitoring is key."
      },
      {
        id: "glaucoma-checked",
        question: "How often should I get checked?",
        answer: "It's recommended to have a comprehensive eye exam every 1 to 2 years, especially if you are over 40 or have risk factors like a family history of glaucoma."
      }
    ]
  },
};






