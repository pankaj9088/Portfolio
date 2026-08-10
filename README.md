# 🚀 Portfolio

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)
[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-06b6d4?style=for-the-badge)](https://pankaj-kumar-sah-portfolio.ai.studio)

> A modern, animated, and fully responsive full-stack developer portfolio showcasing skills, projects, experience, and more — powered by React, TypeScript, and the Gemini AI API.

[🌐 Live Demo](https://pankaj-kumar-sah-portfolio.ai.studio) · [📂 GitHub](https://github.com/pankaj9088) · [💼 LinkedIn](https://www.linkedin.com/in/pankaj-kumar-sah-977538380/)

</div>

---

## 📸 Preview

> A sleek, dark-mode portfolio with animated background gradients, interactive terminal displays, glassmorphism cards, and a full-featured contact form powered by the Gemini AI API.

---

## ✨ Features

- 🎨 **Dark Mode Design** — Elegant deep-navy dark theme with cyan/blue gradient accents
- 💻 **Interactive Hero Terminal** — Animated code editor panel showing your tech stack in real-time
- 📱 **Fully Responsive** — Adapts perfectly to mobile, tablet, and desktop screens
- 🤖 **Gemini AI Integration** — AI-powered contact/chat using `@google/genai` SDK
- 🧩 **Modular Architecture** — Clean, reusable React components with TypeScript
- ⚡ **Blazing Fast** — Powered by Vite 6 with optimized build pipeline
- 🎞️ **Smooth Animations** — Micro-animations powered by `motion` (Framer Motion)
- 📄 **Resume Modal** — In-app resume viewer with download support
- 🔗 **Social Links** — GitHub and LinkedIn integration
- 📬 **Contact Section** — Functional contact form with AI assistance

---

## 🏗️ Project Structure

```
pankaj-kumar-sah-_-full-stack-web-developer/
├── 📁 public/               # Static public assets
├── 📁 assets/               # Image and media assets
├── 📁 src/
│   ├── 📁 components/       # All React UI components
│   │   ├── About.tsx        # About section
│   │   ├── BackgroundElements.tsx  # Animated canvas background
│   │   ├── Contact.tsx      # Contact form (AI-powered)
│   │   ├── Education.tsx    # Education timeline
│   │   ├── Experience.tsx   # Work experience cards
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Hero.tsx         # Landing hero with terminal visual
│   │   ├── Navbar.tsx       # Responsive sticky navigation
│   │   ├── ProjectCard.tsx  # Individual project card
│   │   ├── ProjectModal.tsx # Full-screen project details modal
│   │   ├── Projects.tsx     # Projects grid section
│   │   ├── ResumeModal.tsx  # Resume viewer modal
│   │   ├── ResumeSection.tsx# Resume CTA section
│   │   └── Skills.tsx       # Skills & technologies section
│   ├── 📁 data/             # Portfolio data/content
│   ├── 📁 assets/           # Component-level assets
│   ├── App.tsx              # Root application component
│   ├── main.tsx             # React entry point
│   ├── types.ts             # Global TypeScript types
│   └── index.css            # Global styles
├── .env.example             # Environment variable template
├── .gitignore               # Git ignore rules
├── index.html               # HTML entry point
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite build configuration
```

---

## 🛠️ Tech Stack

| Category        | Technology                               |
|-----------------|------------------------------------------|
| **Frontend**    | React 19, TypeScript 5.8, TailwindCSS 4 |
| **Build Tool**  | Vite 6                                   |
| **Animations**  | Motion (Framer Motion v12)               |
| **Icons**       | Lucide React                             |
| **Backend**     | Node.js + Express 4                      |
| **AI**          | Google Gemini API (`@google/genai`)      |
| **Styling**     | TailwindCSS v4 + Custom CSS              |
| **Language**    | TypeScript (strict)                      |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** v18 or higher — [Download here](https://nodejs.org/)
- **npm** v9+ (bundled with Node.js)
- A **Gemini API Key** — [Get one here](https://aistudio.google.com/app/apikey)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pankaj9088/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   # Copy the example env file
   cp .env.example .env.local
   ```
   Then open `.env.local` and set your API key:
   ```env
   GEMINI_API_KEY="your_actual_gemini_api_key_here"
   APP_URL="http://localhost:3000"
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   ```
   http://localhost:3000
   ```

---

## 📜 Available Scripts

| Command          | Description                               |
|------------------|-------------------------------------------|
| `npm run dev`    | Start dev server on `localhost:3000`      |
| `npm run build`  | Build for production (outputs to `/dist`) |
| `npm run preview`| Preview the production build locally      |
| `npm run lint`   | Run TypeScript type checking              |
| `npm run clean`  | Remove build artifacts (`dist/`)          |

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root (copy from `.env.example`):

| Variable         | Required | Description                          |
|------------------|----------|--------------------------------------|
| `GEMINI_API_KEY` | ✅ Yes   | Your Google Gemini API key           |
| `APP_URL`        | ✅ Yes   | Hosted URL of your app (for CORS)    |

> ⚠️ **Never commit your `.env.local` file!** It is already listed in `.gitignore`.

---

## 📦 Key Dependencies

```json
{
  "@google/genai": "^2.4.0",
  "react": "^19.0.1",
  "react-dom": "^19.0.1",
  "vite": "^6.2.3",
  "typescript": "~5.8.2",
  "tailwindcss": "^4.1.14",
  "lucide-react": "^0.546.0",
  "motion": "^12.23.24",
  "express": "^4.21.2",
  "dotenv": "^17.2.3"
}
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for full details.

---

## 📬 Contact

**Pankaj Kumar Sah**

- 🐙 GitHub: [@pankaj9088](https://github.com/pankaj9088)
- 💼 LinkedIn: [pankaj-kumar-sah](https://www.linkedin.com/in/pankaj-kumar-sah-977538380/)
- 🌐 Portfolio: [pankaj-kumar-sah-portfolio.ai.studio](https://pankaj-kumar-sah-portfolio.ai.studio)
- 📧 Email: sahpankajkumar690@gmail.com

---

<div align="center">

Made with ❤️ by **Pankaj Kumar Sah**

⭐ Star this repo if you found it helpful!

</div>
