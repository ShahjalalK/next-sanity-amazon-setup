/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/layout.tsx",   
    "./pages/index.tsx",
    "./components/bgcircles.tsx",
    "./components/header.tsx",
    "./components/hero.tsx",
    "./components/about.tsx",
    "./components/exprience.tsx",
    "./components/expriencecard.tsx",
    "./components/skills.tsx",
    "./components/skill.tsx",
    "./components/projects.tsx",
    "./components/contact.tsx",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
