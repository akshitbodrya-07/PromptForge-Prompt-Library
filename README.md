# PromptForge 🔥

> A high-performance AI prompt library built with React — browse, generate, and save prompts for any use case.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-2C5282?style=for-the-badge)](https://prompt-forge-prompt-library.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📖 About

PromptForge is a prompt library app that helps users discover, generate, and organise prompts for AI tools. The prompt generation engine is built entirely in JavaScript — no external AI API is used. All prompt logic, templates, and variations are crafted and structured by hand, giving full control over quality and output.

---

## ✨ Features

- 🧠 **Dynamic Prompt Engine** — custom-built JavaScript logic that generates prompt variations from reusable templates
- 📁 **Category Browser** — browse prompts organised by use case (writing, coding, design, etc.)
- 💾 **localStorage Persistence** — saved prompts stay in your library across sessions, no login needed
- ⚡ **Fast & Lightweight** — built with Vite for near-instant load times
- 📱 **Fully Responsive** — works seamlessly on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | UI components and state management |
| Vite | Build tool and dev server |
| Tailwind CSS | Styling and responsive design |
| React Router | Client-side navigation |
| localStorage | Prompt persistence across sessions |
| Vercel | Deployment |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/akshitbodrya-07/promptforge.git

# Navigate into the project
cd promptforge

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
promptforge/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── data/             # Prompt templates and categories (JS)
│   ├── pages/            # Route-level pages
│   ├── utils/            # Prompt generation logic
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── vite.config.js
```

---

## 🔮 Roadmap

- [ ] Add search and filter across all prompts
- [ ] Export saved prompts as a text file
- [ ] Dark mode toggle
- [ ] Share prompts via URL

---

## 👨‍💻 Author

**Akshit Bodrya**  
[Portfolio](https://akshitportfolio.com) · [LinkedIn](https://www.linkedin.com/in/akshitbodrya/) · [GitHub](https://github.com/akshitbodrya-07)
