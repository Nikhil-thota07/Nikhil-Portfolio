# Nikhil Thota — Personal Portfolio Website 🚀

A modern, bespoke, and futuristic developer portfolio built with **React**, **Vite**, and **Tailwind CSS**. 

> **Tagline:** *"Learning. Building. Growing with AI."*  
> **Brand:** CSE (AI & ML) Student | Python Developer | Aspiring AI Engineer

---

## 🌟 Highlights

- **Authentic Student Brand:** Showcases working knowledge in Python, active learning in AI, ML, DSA, and Web Development, hackathon spirit, and creative dimension through dance and content creation.
- **Deep Cosmic Dark Theme:** Black/slate background (`#07090e`), subtle electric cyan and purple gradient accents, frosted glassmorphism, and ambient particle constellations.
- **Centralized Data Store:** All personal information, social links, project placeholders, and contact details can be customized in a single file: `src/data/portfolioData.js`.
- **Integrated Profile Photo:** Displays the authentic photograph from `src/assets/nikhil.jpeg` with glowing rounded frame and verified student status badge.
- **Responsive & Accessible:** Built mobile-first with smooth sticky navigation, hamburger drawer, and clean semantic markup.

---

## 🛠️ Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 2. Build for Production
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```
├── public/
│   └── favicon.svg               # Custom "NT" monogram brand icon
├── src/
│   ├── assets/
│   │   └── nikhil.jpeg           # Authentic profile photograph
│   ├── data/
│   │   └── portfolioData.js      # Central configuration file (edit links & text here)
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky navbar with mobile drawer
│   │   ├── Hero.jsx              # Hero introduction, roles, photo, and Python snippet
│   │   ├── About.jsx             # Academic background at NRCM & creative balance
│   │   ├── Skills.jsx            # Python (Working Knowledge) + 4 Learning Cards
│   │   ├── Projects.jsx          # Smart Canteen prototype & "Coming Soon" cards
│   │   ├── Journey.jsx           # Animated step-by-step learning timeline
│   │   ├── Hackathons.jsx        # "Building Beyond the Classroom" & campus ideas
│   │   ├── BeyondCode.jsx        # Dance instructor & choreographer background
│   │   ├── ContentCreation.jsx   # "Just Nikhil Things" YouTube channel showcase
│   │   ├── PersonalValues.jsx    # 01-Learn, 02-Build, 03-Create, 04-Grow
│   │   ├── CareerVision.jsx      # Step-by-step roadmap to AI Engineer
│   │   ├── Contact.jsx           # Direct channels & message form
│   │   ├── Footer.jsx            # Copyright, socials, and back-to-top button
│   │   └── ParticleBackground.jsx # Lightweight canvas constellation effect
│   ├── App.jsx                   # Main layout stitching sections
│   ├── index.css                 # Custom scrollbars, glass utilities, animations
│   └── main.jsx                  # React application entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ✏️ How to Customize Your Details

Open `src/data/portfolioData.js`:
- **Social Links:** Update your GitHub username, email, or YouTube URL.
- **Projects:** Add new projects to `projectsData.currentBuilding`.
- **Bio & Journey:** Edit milestones or descriptions whenever you achieve new milestones!

© 2026 Nikhil Thota. Built with curiosity & code.
