# Komal Kumari — Data Analytics Portfolio

A premium, highly interactive personal portfolio website for **Komal Kumari**, Computer Science Engineering student and aspiring Data Analyst seeking **Data Analytics Intern** and **Fresher Data Analyst** roles.

---

## 🌟 Key Highlights & Visual Architecture

- **Aesthetic**: Obsidian dark mode theme with glassmorphic cards, emerald & cyan data accents, and Plus Jakarta Sans + Inter + JetBrains Mono typography.
- **Interactive 3D Data Visual**: Real-time Three.js spatial node graph reacting smoothly to mouse movement with animated particles and floating live insight tokens.
- **How I Work With Data (Pipeline)**: Interactive 6-step analytics pipeline (`RAW DATA` → `CLEAN` → `ANALYZE` → `VISUALIZE` → `INSIGHT` → `DECISION`) with code snippets and methodology breakdowns.
- **Projects Showcase & Case Studies**: 5 end-to-end projects with category filters, interactive deep-dive modals, and direct open-source repository links.
- **Live Analytics & SQL Sandbox**: Interactive query playground and dynamic chart visualizer showcasing analytical problem-solving in real-time.
- **Strict Truthfulness**: Zero inflated metrics or claims, honest foundational SQL and Power BI representation, and verified certifications (TATA Forage, IBM Cognitive Class, Oracle Foundations Associate).

---

## 📂 Project Structure

```
komal-kumari-portfolio/
├── public/
│   └── favicon.svg               # Custom data node SVG favicon
├── src/
│   ├── main.tsx                  # Application entry point
│   ├── App.tsx                   # Main layout and toast notification system
│   ├── index.css                 # Design system tokens and glassmorphism styles
│   ├── types/
│   │   └── index.ts              # TypeScript data interfaces
│   ├── data/
│   │   ├── portfolioData.ts      # Centralized truthful candidate data & case studies
│   │   └── sandboxData.ts        # Interactive chart & SQL query simulator datasets
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx        # Floating glass navbar with scroll spy & mobile menu
│       │   └── Footer.tsx        # Footer with social links & back-to-top
│       ├── hero/
│       │   ├── Hero.tsx          # Hero section with headline, badges, CTAs
│       │   └── HeroVisual3D.tsx  # Three.js interactive 3D node mesh & particle cluster
│       ├── about/
│       │   ├── About.tsx         # Bio, seeking roles & analytics principles
│       │   └── EducationCard.tsx # Clean B.Tech CSE details (Agra College / AKTU)
│       ├── pipeline/
│       │   └── DataPipeline.tsx  # 6-step "How I Work With Data" interactive stepper
│       ├── skills/
│       │   ├── Skills.tsx        # Categorized skills (Data Analytics, BI, Python, SQL)
│       │   └── SoftSkills.tsx    # Professional & collaborative competencies grid
│       ├── experience/
│       │   └── Experience.tsx    # CodeAlpha Virtual Internship timeline
│       ├── projects/
│       │   ├── Projects.tsx      # Filterable showcase (All, Power BI, Python, SQL, EDA, NLP)
│       │   ├── ProjectCard.tsx   # Project cards with hover glow and action triggers
│       │   └── ProjectModal.tsx  # Case study dialog (Problem, Approach, Insights)
│       ├── sandbox/
│       │   └── DataSandbox.tsx   # Live interactive chart visualizer & SQL simulator
│       ├── certifications/
│       │   └── Certifications.tsx# Verified certifications (TATA Forage, IBM, Oracle)
│       ├── contact/
│       │   └── Contact.tsx       # Contact CTA, copy email toast & message form
│       └── ui/
│           ├── Badge.tsx         # Reusable data tag badge
│           ├── Icons.tsx         # Dedicated GitHub & LinkedIn SVG icons
│           └── Toast.tsx         # Toast notification component
├── index.html                    # SEO optimized HTML5 template
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 How to Run Locally

1. **Navigate to the project directory**:
   ```bash
   cd C:\Users\DELL\.gemini\antigravity\scratch\komal-kumari-portfolio
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Start the local dev server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📦 How to Export / Download as ZIP

To create a clean ZIP archive of the portfolio project (excluding `node_modules` and `dist`):

### Using Windows PowerShell:
```powershell
Compress-Archive -Path C:\Users\DELL\.gemini\antigravity\scratch\komal-kumari-portfolio\* -DestinationPath C:\Users\DELL\Desktop\komal-kumari-portfolio.zip -Exclude "node_modules", "dist"
```

---

## 🐙 How to Upload to GitHub

1. Initialize Git in the project folder:
   ```bash
   cd C:\Users\DELL\.gemini\antigravity\scratch\komal-kumari-portfolio
   git init
   git add .
   git commit -m "feat: initial commit of Komal Kumari Data Analytics Portfolio"
   ```

2. Create a new repository named `portfolio` on [GitHub](https://github.com/new).

3. Link and push your code:
   ```bash
   git branch -M main
   git remote add origin https://github.com/komal362783/portfolio.git
   git push -u origin main
   ```

---

## ⚡ How to Deploy to Vercel (Free & Instant)

1. **Option A: Via Vercel Web Dashboard (Recommended)**
   - Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
   - Click **Add New** → **Project**.
   - Import your `portfolio` repository.
   - Framework Preset will be automatically detected as **Vite**.
   - Click **Deploy**. Your portfolio will be live with a free `.vercel.app` domain and automatic SSL within 30 seconds!

2. **Option B: Via Vercel CLI**
   ```bash
   npx vercel
   ```
