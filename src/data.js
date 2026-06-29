// ─────────────────────────────────────────────
//  PORTFOLIO DATA  — edit this file to update
//  your information permanently.
// ─────────────────────────────────────────────

export const PROFILE = {
  name: 'Marvin Mathebula',
  role: 'Software Engineer',
  location: 'Pretoria, South Africa',
  email: 'marvinnicolasmathebula@gmail.com',
  github: 'https://github.com/marvin54-hub',
  linkedin: 'https://www.linkedin.com/in/marvin-mathebula-406ab1254/',
  bio: [
    "I'm Marvin Matimu Mathebula, a Computer Science student at Tshwane University of Technology, graduating in 2026. I design and build software that solves real problems — from backend APIs in Spring Boot and JEE to interactive frontends with React.js.",
    "I'm driven by curiosity, clean architecture, and the belief that great code is a form of craft. My focus spans full-stack web development, system design, and the complete software development lifecycle.",
    "Based in Pretoria, South Africa, I'm open to full-time opportunities immediately after graduation. Fast learner, collaborative by nature, and always hungry to grow.",
  ],
  tags: ['Problem Solver', 'Backend Focus', 'System Design', 'Pretoria, ZA', 'Open to Remote', '2026 Graduate'],
}

export const EXPERIENCE = [
  {
    id: 'ex1',
    org: 'Ubuntu African Resources',
    role: 'Freelance Web Developer',
    period: '2025',
    desc: 'Developed and deployed a web application for Ubuntu African Resources, built using Java, JavaScript, and MySQL.',
  },
]

export const EDUCATION = [
  {
    id: 'ed1',
    org: 'Tshwane University of Technology',
    role: 'Diploma in Computer Science',
    period: '2023 — 2026',
    desc: 'Core modules: Internet Programming, Software Engineering, Mobile Computing, Data Structures, Database Programming, Object-Oriented Programming, Software Projects, Web Technologies, and Systems Analysis.',
  },
]

export const PROJECTS = [
  {
    id: 'p1',
    name: 'CropPlanner',
    desc: 'Spring Boot farm management platform for small-scale farmers — weather-based planting recommendations, yield prediction, expense tracking, and analytics.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    demo: '',
    github: 'https://github.com/marvin54-hub/cropplanner',
    status: 'active',
    screenshot: '',
  },
  {
    id: 'p2',
    name: 'CompareIt',
    desc: 'Cross-platform price comparison app that scrapes retail store data in real time using a Python web-scraping engine, feeding live pricing into a Spring Boot backend.',
    tags: ['React Native', 'React.js', 'Java', 'Spring Boot', 'PostgreSQL', 'Firebase', 'Python'],
    demo: '',
    github: 'https://github.com/marvin54-hub',
    status: 'active',
    screenshot: '',
  },
  {
    id: 'p3',
    name: 'myDevPortfolio',
    desc: 'Personal developer portfolio built as a fully componentised React + Vite application with an in-page admin panel for live content editing.',
    tags: ['React.js', 'Vite', 'JavaScript'],
    demo: 'https://marvin54-hub.github.io/myportfolio/',
    github: 'https://github.com/marvin54-hub/myportfolio',
    status: 'active',
    screenshot: '',
  },
  {
    id: 'p4',
    name: 'Student Management System',
    desc: 'Full-stack JEE web application for managing student records, grades, and timetables, built with JSF, EJB, and a MySQL backend.',
    tags: ['Java', 'JEE', 'JSF', 'EJB', 'MySQL'],
    demo: '',
    github: 'https://github.com/marvin54-hub',
    status: 'active',
    screenshot: '',
  },
]

export const SKILLS = [
  { id: 'sk1', name: 'Languages',      icon: 'ti-code',       chips: ['Java', 'Kotlin', 'JavaScript', 'CSS', 'SQL'] },
  { id: 'sk2', name: 'Frameworks',     icon: 'ti-components', chips: ['Spring Boot', 'JEE', 'React.js', 'React Native'] },
  { id: 'sk3', name: 'Database',       icon: 'ti-database',   chips: ['MySQL', 'PostgreSQL', 'SQL', 'Firebase'] },
  { id: 'sk4', name: 'Tools',          icon: 'ti-tools',      chips: ['VS Code', 'IntelliJ IDEA', 'NetBeans', 'Git', 'GitHub', 'Vercel', 'Firebase'] },
  { id: 'sk5', name: 'Concepts',       icon: 'ti-bulb',       chips: ['System Design', 'OOP', 'SOLID', 'SDLC', 'REST APIs', 'MVC'] },
]
