# Personal CV / Resume Card Website

> **SpireX Foundation Task 2 Submission**  
> **Candidate:** VIMALKUMAR M  
> **Role:** Computer Science Engineering Student | Frontend Developer  
> **Technologies:** HTML5, CSS3, Vanilla JavaScript (100% Framework-Free)

---

## 📌 Project Overview
This repository contains a professional, modern, clean, and fully responsive **Personal CV / Resume Card Website** built strictly with semantic HTML5, pure CSS3, and vanilla JavaScript.

All personal information, education records, technical skills, projects, conference presentations, achievements, and certifications are sourced directly from the official uploaded PDF resume (`assets/resume.pdf`).

---

## 🎨 Design Philosophy & Color Palette
The design follows recruiter-centric, minimalist UI/UX standards:
- **No Gradients, No Neon Colors, No Glassmorphism, No Excessive Animations.**
- **Enterprise Dark Navy & Clean Neutral Palette:**
  - **Dark Navy (`#0f172a`, `#1e293b`, `#1e3a8a`):** Primary headings, icons, badges, and top-tier contrast elements.
  - **Light Grey / Neutral (`#f8fafc`, `#f1f5f9`, `#e2e8f0`):** Soft background containers, subtle card surfaces, and crisp borders.
  - **Clean White (`#ffffff`):** High-priority card surfaces and readable contrast areas.
  - **Text Hierarchy (`#0f172a`, `#334155`, `#64748b`):** Clean, accessible typography with high legibility.
- **Subtle Elevation:** Soft, natural drop-shadows with rounded corners (`10px`–`14px`).
- **Smooth Micro-Interactions:** Snappy `0.2s` transitions with gentle 2px vertical hover lifts.

---

## 📂 Project Structure

```text
personal-cv-resume/
├── index.html          # Semantic HTML5 markup with accessible ARIA tags
├── style.css           # Pure CSS3 stylesheet with CSS variables and responsive breakpoints
├── script.js           # Vanilla JavaScript for mobile nav, scrollspy, download & photo upload
├── README.md           # Comprehensive documentation
└── assets/
    ├── profile.jpg     # Professional avatar placeholder (with interactive custom upload option)
    └── resume.pdf      # Actual verified PDF resume of Vimalkumar M
```

---

## 🚀 Key Sections Included

1. **Profile Sidebar Card (Sticky / Recruiter Hub):**
   - Headshot avatar with a camera upload trigger allowing recruiters or the user to test adding a custom photo live in the browser (persisted via `localStorage`).
   - "Open to Opportunities" status badge.
   - Name, Title, and Academic affiliation.
   - Primary actions: **Download Resume** (PDF) and **Get in Touch**.
   - Direct contact pills with one-click **Copy to Clipboard** and external links.
   - Key summary metrics: CGPA (`5.63`), Core Projects (`3`), Certifications (`6`).
2. **About Me:**
   - Full professional profile statement from the uploaded resume.
   - 3 core specialization cards: Frontend Development, Full-Stack & Databases, and Applied Machine Learning.
3. **Education:**
   - **Bannari Amman Institute of Technology (2023–2027)** — B.E. Computer Science and Engineering (CGPA: 5.63).
   - **SKV Matric Higher Secondary School (2021–2023)** — HSC (50%).
   - **SKV Matric Higher Secondary School (2020–2021)** — SSLC (Pass).
4. **Technical Skills:**
   - Categorized into Programming, Frontend, Backend, Database, and Tools & Technologies.
5. **Projects:**
   - **Emotion Detection from Text using Bi-LSTM:** Python, Flask, TensorFlow.
   - **Nimbus Admin Dashboard:** React, Vite, Tailwind CSS.
   - **Social Learning Notes Exchange:** HTML, CSS, JavaScript, PHP, MySQL (with GitHub repo link).
6. **Conference & Achievements:**
   - **NEURONIX’26 National-Level Conference:** Paper Presentation on *“Artificial Intelligence in Signal Processing”* (Mailam Engineering College, March 2026).
   - **The Data Decode Challenge:** Insight Extraction Sprint (Indian Institute of Science - IISc Bangalore via Unstop).
7. **Certifications:**
   - Microsoft — Introduction to Generative AI and Agents (June 2026)
   - Skill India & Tech Mahindra Foundation — Cybersecurity (March 2026)
   - Infosys Springboard — JavaScript (February 2026)
   - HackerRank — Python (Basic) Verified Assessment
   - HackerRank — SQL (Basic) (January 2026)
   - UpSkill — Internet of Things (IoT) (April 2025)
8. **Core Strengths:**
   - Problem Solving, Teamwork, Quick Learner, Communication, and Adaptability.
9. **Contact Section:**
   - Email, Phone, LinkedIn, GitHub, and Portfolio cards with interactive copy/call/email actions.

---

## ⚡ Vanilla JavaScript Features

- **Mobile Navigation Menu:** Responsive hamburger toggle with accessible `aria-expanded` and auto-close on link click or outside click.
- **Sticky Header & Smooth Scrolling:** Calculates header height offsets dynamically to avoid covering section titles.
- **ScrollSpy:** Uses scroll listeners to dynamically highlight the active section in both desktop and mobile navigation bars.
- **Download Resume:** Direct download of `assets/resume.pdf` with feedback toast notification.
- **Back to Top:** Smoothly appears when scrolled >320px down and smoothly scrolls to top on click.
- **Copy to Clipboard:** Copies email or phone number to the clipboard with one click and displays a real-time toast notification.
- **Interactive Photo Upload:** Allows uploading a headshot from local disk; updates the avatar in real-time and persists in browser `localStorage` with a reset option.
- **Dynamic Year:** Automatically outputs the current calendar year in the footer.

---

## 📱 Responsiveness
Tested across:
- **Desktop (>1024px):** 2-column layout with a fixed recruiter sidebar.
- **Laptop (768px - 1024px):** Proportional fluid layout with responsive grids.
- **Tablet (580px - 768px):** Single-column stacked layout with full-width cards.
- **Mobile (<580px):** Optimized typography, hamburger drawer, and touch-friendly tap targets.

---

## 💻 How to Run Locally

1. Clone or download this folder.
2. Open `index.html` directly in any web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
3. Alternatively, serve with VS Code Live Server or Python HTTP server:
   ```bash
   python -m http.server 8000
   ```
   and navigate to `http://localhost:8000`.
