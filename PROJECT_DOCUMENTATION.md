# Shanthi Eye Tech - Project Documentation

## 📋 Project Overview

**Project Name:** Shanthi Eye Tech Figma Website  
**Version:** 0.1.0  
**Type:** Next.js React Application  
**Package Manager:** npm  
**Module Type:** ES Modules  

### Project Description
A premium medical and wellness website built with Next.js and React, featuring smooth scrolling animations, modern design, and responsive UI components.

---

## 🎨 Theme Colors

All theme colors are defined in `src/style/globals.css` as CSS custom properties (variables):

| Color Variable | Hex Value | Usage |
|---|---|---|
| `--cream` | `#f4f0e8` | Primary background color |
| `--white` | `#ffffff` | Pure white for contrast elements |
| `--ink` | `#030303` | Primary text color (almost black) |
| `--muted` | `#5a5552` | Muted/secondary text color |
| `--aqua` | `#24c5e8` | Accent color - bright cyan/teal |
| `--sand` | `#a98d5f` | Secondary accent - warm beige/sand |
| `--soft-line` | `rgba(255, 255, 255, 0.58)` | Semi-transparent white for borders/dividers |
| `--shadow` | `0 26px 70px rgba(42, 31, 16, 0.13)` | Primary shadow effect |

### Color Palette Summary
- **Primary:** Cream (`#f4f0e8`) background with Ink (`#030303`) text
- **Accents:** Aqua (`#24c5e8`) for highlights, Sand (`#a98d5f`) for secondary accents
- **Typography:** Muted (`#5a5552`) for secondary text

### CSS Variables for Animations & Layout
- `--ease`: `cubic-bezier(0.22, 1, 0.36, 1)` - Standard easing curve for animations
- `--shadow`: `0 26px 70px rgba(42, 31, 16, 0.13)` - Drop shadow for elevated elements

---

## 📁 Folder Structure

```
shanthi-eye-tech-Figma-Website-master/
│
├── 📄 Configuration Files
│   ├── package.json              # Project dependencies and scripts
│   ├── next.config.mjs           # Next.js configuration
│   ├── tailwind.config.js        # Tailwind CSS configuration
│   ├── postcss.config.mjs        # PostCSS configuration
│   ├── jsconfig.json             # JavaScript compiler options
│   └── .eslintrc.json            # ESLint configuration (implied)
│
├── 📁 public/
│   └── assets/
│       └── why-patients/         # Static assets for "Why Patients Choose Us" section
│
├── 📁 src/                       # Source code directory
│   │
│   ├── 📁 common/                # Reusable common components
│   │   ├── Button/
│   │   │   └── index.jsx         # Button component
│   │   ├── Header/
│   │   │   └── index.jsx         # Header/Navigation component
│   │   ├── Footer/
│   │   │   └── index.jsx         # Footer component
│   │   ├── Layout/
│   │   │   └── index.jsx         # Main layout wrapper component
│   │   └── LenisProvider/
│   │       └── index.jsx         # Smooth scroll provider component
│   │
│   ├── 📁 component/             # Feature/Page-specific components
│   │   └── Home/                 # Home page components
│   │       ├── About/
│   │       │   └── index.jsx     # About section component
│   │       ├── Contact/
│   │       │   └── index.jsx     # Contact section component
│   │       ├── Hero/
│   │       │   └── index.jsx     # Hero/Banner section component
│   │       ├── Services/
│   │       │   └── index.jsx     # Services section component
│   │       └── Testimonials/
│   │           └── index.jsx     # Testimonials/Reviews section component
│   │
│   ├── 📁 constant/              # Constant data and configuration
│   │   ├── navContent.js         # Navigation menu items
│   │   ├── homeContent.js        # Home page content (currently empty)
│   │   ├── footerContent.js      # Footer content and links
│   │   └── privacyPolicyContent.js # Privacy policy content
│   │
│   ├── 📁 pagecomponent/         # Page-level component wrappers
│   │   ├── Home/
│   │   │   ├── index.jsx         # Home page wrapper component
│   │   │   └── homeData.js       # Home page data
│   │   └── PrivacyPolicy/
│   │       ├── index.jsx         # Privacy policy page component
│   │       └── styles.module.css # Privacy policy scoped styles
│   │
│   ├── 📁 pages/                 # Next.js pages (routing)
│   │   ├── _app.jsx              # App wrapper - global layout & styles
│   │   ├── index.jsx             # Home page (/)
│   │   └── privacy-policy.jsx    # Privacy policy page (/privacy-policy)
│   │
│   ├── 📁 style/                 # Global styles
│   │   └── globals.css           # Global CSS with theme variables & base styles
│   │
│   └── 📁 why_Patients_choose/   # Why Patients Choose Us section
│       └── (Component files)
│
└── 📋 Root Files
    └── README.md, .gitignore, etc.
```

---

## 🧩 Components

### Common Components (Reusable)

#### 1. **Button** (`src/common/Button/index.jsx`)
```javascript
// A reusable button component
<Button {...props}>{children}</Button>
```
- **Props:** All standard HTML button attributes
- **Usage:** Call-to-action buttons throughout the site

#### 2. **Header** (`src/common/Header/index.jsx`)
- Navigation component (currently minimal)
- Rendered at the top of every page
- Uses navigation content from constants

#### 3. **Footer** (`src/common/Footer/index.jsx`)
- Footer component for site bottom
- Uses footer content from `footerContent.js`

#### 4. **Layout** (`src/common/Layout/index.jsx`)
- Main layout wrapper component
- Wraps all pages with:
  - Header (top)
  - Main content area (middle)
  - Footer (bottom)
  - LenisProvider (for smooth scrolling)

#### 5. **LenisProvider** (`src/common/LenisProvider/index.jsx`)
- Provides smooth scrolling functionality
- Uses **Lenis** library for enhanced scroll experience
- **Configuration:**
  - Duration: 0.95s
  - Easing: Custom curve
  - Smooth wheel scrolling enabled
  - Wheel multiplier: 0.92
  - Touch multiplier: 0.95
- Respects user's reduced motion preference

---

### Page Components

#### Home Page (`src/component/Home/`)

**1. Hero** (`Hero/index.jsx`)
- Main banner/hero section
- Eye-catching introduction to the website

**2. About** (`About/index.jsx`)
- About Shanthi Eye Tech section
- Company information and values

**3. Services** (`Services/index.jsx`)
- Medical services offered
- Eye care specialties

**4. Testimonials** (`Testimonials/index.jsx`)
- Patient reviews and testimonials
- Success stories

**5. Contact** (`Contact/index.jsx`)
- Contact form section
- Call-to-action for inquiries

---

### Page Wrappers

#### 1. **Home Page** (`src/pagecomponent/Home/index.jsx`)
- Combines all home page sections
- Uses data from `homeData.js`

#### 2. **Privacy Policy** (`src/pagecomponent/PrivacyPolicy/index.jsx`)
- Privacy policy page
- Scoped CSS in `styles.module.css`

---

## 📄 Pages (Routes)

### 1. **Home Page** (`src/pages/index.jsx`)
- **Route:** `/`
- **Title:** Shanthi Eye Tech
- **Components:** `HomePageComponent` from `src/pagecomponent/Home`
- **Features:**
  - Meta description for SEO
  - Viewport configuration for responsive design

### 2. **Privacy Policy** (`src/pages/privacy-policy.jsx`)
- **Route:** `/privacy-policy`
- Uses `PrivacyPolicy` page component

### 3. **App Wrapper** (`src/pages/_app.jsx`)
- Global app configuration
- Imports global CSS
- Wraps all pages with `Layout` component
- Receives `Component` and `pageProps` from Next.js

---

## 📚 Constants & Content

### Navigation Content (`src/constant/navContent.js`)
```javascript
[
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]
```

### Home Content (`src/constant/homeContent.js`)
- Currently empty (`{}`)
- Can be expanded with home page specific data

### Footer Content (`src/constant/footerContent.js`)
- Footer links and information
- Company details, contact info, social links (to be configured)

### Privacy Policy Content (`src/constant/privacyPolicyContent.js`)
- Privacy policy text and data

---

## 🔧 Dependencies

### Production Dependencies
| Package | Version | Purpose |
|---|---|---|
| `next` | ^15.5.6 | React framework for production |
| `react` | ^19.0.0 | React library |
| `react-dom` | ^19.0.0 | React DOM rendering |
| `framer-motion` | ^12.40.0 | Animation library |
| `lenis` | ^1.3.23 | Smooth scrolling library |
| `vercel` | ^54.6.1 | Deployment & serverless functions |

### Development Dependencies
| Package | Version | Purpose |
|---|---|---|
| `@tailwindcss/postcss` | ^4.1.17 | Tailwind CSS with PostCSS |
| `tailwindcss` | ^4.1.17 | CSS utility framework |
| `postcss` | ^8.5.6 | CSS transformation tool |
| `autoprefixer` | ^10.4.22 | Vendor prefix automation |
| `eslint` | ^9.39.1 | Code linting |
| `eslint-config-next` | ^15.5.6 | Next.js ESLint rules |

---

## 🚀 Available Scripts

Run these commands from the project root directory:

```bash
# Development
npm run dev          # Start development server (http://localhost:3000)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint to check code quality
```

---

## ⚙️ Configuration Files

### 1. **next.config.mjs**
```javascript
{
  reactStrictMode: false  // Disable strict mode for development
}
```

### 2. **tailwind.config.js**
```javascript
{
  content: ["./src/**/*.{js,jsx}"],  // Scan these files for Tailwind classes
  theme: {
    extend: {}  // Extended theme customization
  },
  plugins: []
}
```

### 3. **postcss.config.mjs**
- Handles CSS processing with Tailwind and Autoprefixer

### 4. **jsconfig.json**
- JavaScript compiler options and path aliases

---

## 🎯 Key Features

### 1. **Smooth Scrolling**
- Powered by **Lenis** library
- Provides premium scroll experience
- Respects accessibility preferences

### 2. **Modern Animations**
- **Framer Motion** for smooth component animations
- Custom easing curve: `cubic-bezier(0.22, 1, 0.36, 1)`

### 3. **Responsive Design**
- **Tailwind CSS** for responsive utilities
- Mobile-first approach
- Flexible grid layouts

### 4. **SEO Optimized**
- Meta tags in pages
- Proper Head component usage
- Structured content

### 5. **Performance**
- Next.js for optimized static generation
- CSS optimization with Tailwind
- Smooth animations with hardware acceleration

---

## 📱 Styling System

### Global Styles (`src/style/globals.css`)
- **Theme Colors:** CSS custom properties
- **Typography:** Inter font family
- **Background:** Gradient with animated noise effect
- **Shadows:** Soft drop shadows for depth
- **Base Styles:** Resets and normalizations

### Hero Section Styles
```css
.hero-canvas {
  width: min(1140px, calc(100vw - 60px));
  display: grid;
  grid-template-columns: 1fr 1fr;  /* Two-column layout */
}

.copy-card {
  border-radius: 30px 30px 36px 30px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: var(--shadow);
}
```

---

## 🔗 Data Flow

```
pages/_app.jsx (Global App)
    ↓
pages/index.jsx (Home Page)
    ↓
Layout (Header + Footer)
    ↓
LenisProvider (Smooth Scroll)
    ↓
HomePageComponent
    ↓
Home Page Sections (Hero, About, Services, etc.)
```

---

## 📝 Development Guidelines

### Component Structure
- Place reusable components in `/src/common`
- Place page-specific components in `/src/component`
- Use `/src/pagecomponent` for page wrappers

### Styling
- Use CSS custom variables for colors
- Use Tailwind CSS utilities for responsive design
- Keep component-specific styles in scoped CSS modules

### Constants
- Store all hardcoded content in `/src/constant`
- Keep content separate from components
- Easy to update without code changes

### Adding New Pages
1. Create page file in `/src/pages` (e.g., `about.jsx`)
2. Create page component in `/src/pagecomponent` if needed
3. Add to navigation in `navContent.js`

---

## 🎨 Design System

### Typography
- **Font Family:** Inter (sans-serif)
- **Primary Color:** `--ink` (#030303)
- **Secondary Color:** `--muted` (#5a5552)

### Spacing
- Based on standard CSS measurements
- Hero canvas padding: 32px
- Grid gap: 12px

### Borders & Radius
- Hero copy card: `30px 30px 36px 30px`
- Modern, smooth border radius

### Animations
- **Easing Curve:** `cubic-bezier(0.22, 1, 0.36, 1)`
- Duration: Varies by component
- Uses Framer Motion for advanced effects

---

## 🔐 SEO & Meta Tags

- **Title:** Shanthi Eye Tech
- **Description:** Premium medical and wellness website experience
- **Viewport:** Mobile responsive (width=device-width, initial-scale=1.0)

---

## 📦 Deployment

- Configured for **Vercel** deployment
- Uses Next.js optimized build process
- `npm run build` creates production bundle
- `npm run start` runs production server

---

## 🛠️ Development Workflow

1. **Install dependencies:** `npm install`
2. **Start dev server:** `npm run dev`
3. **Open browser:** http://localhost:3000
4. **Make changes:** Files auto-refresh on save
5. **Test build:** `npm run build`
6. **Check for lint errors:** `npm run lint`

---

## 📞 Contact & Support

For questions about the project structure or components, refer to the specific section files or contact the development team.

---

**Last Updated:** 2024  
**Status:** Active Development (v0.1.0)
