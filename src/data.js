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

const CROPPLANNER_IMG = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#0b1220"/>
  <rect x="20" y="20" width="760" height="410" rx="12" fill="#111a2e" stroke="#1d4ed8" stroke-width="1.5" stroke-opacity="0.4"/>
  <!-- Top Bar -->
  <rect x="40" y="40" width="720" height="44" rx="8" fill="#182238"/>
  <circle cx="60" cy="62" r="6" fill="#ef4444"/>
  <circle cx="78" cy="62" r="6" fill="#f59e0b"/>
  <circle cx="96" cy="62" r="6" fill="#10b981"/>
  <text x="120" y="67" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#2563eb">🌱 CropPlanner — Farm Analytics Dashboard</text>
  <text x="650" y="67" font-family="monospace" font-size="12" fill="#10b981">● LIVE DEMO</text>
  <!-- Card 1: Weather Insights -->
  <rect x="40" y="100" width="345" height="150" rx="10" fill="#182238" stroke="rgba(255,255,255,0.08)"/>
  <text x="60" y="130" font-family="Outfit, sans-serif" font-size="14" font-weight="600" fill="#f1f4f9">Weather &amp; Planting Recommendations</text>
  <text x="60" y="160" font-family="sans-serif" font-size="28" fill="#10b981">24°C ☀️</text>
  <text x="170" y="155" font-family="sans-serif" font-size="12" fill="#b6c0d1">Optimal Soil Moisture: 68%</text>
  <text x="170" y="175" font-family="sans-serif" font-size="12" fill="#b6c0d1">Recommended: Maize &amp; Soybeans</text>
  <rect x="60" y="195" width="305" height="35" rx="6" fill="#0d9488" fill-opacity="0.2" stroke="#0d9488" stroke-opacity="0.4"/>
  <text x="75" y="217" font-family="Outfit, sans-serif" font-size="12" font-weight="500" fill="#14b8a6">✓ Weather window favorable for planting next 5 days</text>
  <!-- Card 2: Yield Analytics -->
  <rect x="415" y="100" width="345" height="150" rx="10" fill="#182238" stroke="rgba(255,255,255,0.08)"/>
  <text x="435" y="130" font-family="Outfit, sans-serif" font-size="14" font-weight="600" fill="#f1f4f9">Yield Prediction &amp; Expense Tracker</text>
  <!-- Bar chart graphic -->
  <rect x="450" y="190" width="35" height="40" rx="4" fill="#2563eb"/>
  <rect x="500" y="160" width="35" height="70" rx="4" fill="#2563eb"/>
  <rect x="550" y="140" width="35" height="90" rx="4" fill="#10b981"/>
  <rect x="600" y="175" width="35" height="55" rx="4" fill="#2563eb"/>
  <rect x="650" y="150" width="35" height="80" rx="4" fill="#10b981"/>
  <text x="445" y="245" font-family="monospace" font-size="10" fill="#7c8aa0">Jan   Feb   Mar   Apr   May</text>
  <!-- Card 3: Recent Activity Table -->
  <rect x="40" y="265" width="720" height="145" rx="10" fill="#182238" stroke="rgba(255,255,255,0.08)"/>
  <text x="60" y="295" font-family="Outfit, sans-serif" font-size="14" font-weight="600" fill="#f1f4f9">Recent Farm Logs &amp; Field Status</text>
  <line x1="60" y1="310" x2="740" y2="310" stroke="rgba(255,255,255,0.1)"/>
  <text x="60" y="335" font-family="monospace" font-size="12" fill="#b6c0d1">Field A-1 (Maize)   —   Fertilizer Applied   —   Status: Healthy</text>
  <text x="60" y="360" font-family="monospace" font-size="12" fill="#b6c0d1">Field B-3 (Wheat)   —   Irrigation Scheduled —   Status: Active</text>
  <text x="60" y="385" font-family="monospace" font-size="12" fill="#b6c0d1">Field C-2 (Soybean) —   Harvesting Complete —   Status: Completed</text>
</svg>
`);

const COMPAREIT_IMG = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#0b1220"/>
  <rect x="20" y="20" width="760" height="410" rx="12" fill="#111a2e" stroke="#0d9488" stroke-width="1.5" stroke-opacity="0.4"/>
  <!-- Top Bar -->
  <rect x="40" y="40" width="720" height="44" rx="8" fill="#182238"/>
  <text x="60" y="67" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#14b8a6">🛒 CompareIt — Real-Time Retail Price Comparison</text>
  <rect x="420" y="48" width="320" height="28" rx="14" fill="#0b1220" stroke="rgba(255,255,255,0.15)"/>
  <text x="440" y="66" font-family="sans-serif" font-size="12" fill="#7c8aa0">🔍 Search groceries, electronics, deals…</text>

  <rect x="40" y="105" width="220" height="300" rx="10" fill="#182238" stroke="rgba(255,255,255,0.08)"/>
  <rect x="60" y="125" width="180" height="100" rx="8" fill="#0b1220"/>
  <text x="100" y="180" font-family="sans-serif" font-size="14" fill="#14b8a6">Store A Deal</text>
  <text x="60" y="250" font-family="Outfit, sans-serif" font-size="16" font-weight="bold" fill="#f1f4f9">Fresh Produce Item</text>
  <text x="60" y="275" font-family="sans-serif" font-size="20" font-weight="bold" fill="#10b981">R 49.99</text>
  <rect x="60" y="340" width="180" height="35" rx="6" fill="#2563eb"/>
  <text x="110" y="362" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fff">Compare Deals</text>

  <rect x="290" y="105" width="220" height="300" rx="10" fill="#182238" stroke="rgba(255,255,255,0.08)"/>
  <rect x="310" y="125" width="180" height="100" rx="8" fill="#0b1220"/>
  <text x="350" y="180" font-family="sans-serif" font-size="14" fill="#2563eb">Store B Deal</text>
  <text x="310" y="250" font-family="Outfit, sans-serif" font-size="16" font-weight="bold" fill="#f1f4f9">Electronics Special</text>
  <text x="310" y="275" font-family="sans-serif" font-size="20" font-weight="bold" fill="#10b981">R 1,299.00</text>
  <rect x="310" y="340" width="180" height="35" rx="6" fill="#2563eb"/>
  <text x="360" y="362" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fff">Compare Deals</text>

  <rect x="540" y="105" width="220" height="300" rx="10" fill="#182238" stroke="rgba(255,255,255,0.08)"/>
  <rect x="560" y="125" width="180" height="100" rx="8" fill="#0b1220"/>
  <text x="600" y="180" font-family="sans-serif" font-size="14" fill="#f59e0b">Store C Deal</text>
  <text x="560" y="250" font-family="Outfit, sans-serif" font-size="16" font-weight="bold" fill="#f1f4f9">Household Supplies</text>
  <text x="560" y="275" font-family="sans-serif" font-size="20" font-weight="bold" fill="#10b981">R 129.99</text>
  <rect x="560" y="340" width="180" height="35" rx="6" fill="#2563eb"/>
  <text x="610" y="362" font-family="sans-serif" font-size="12" font-weight="bold" fill="#fff">Compare Deals</text>
</svg>
`);

const MYDEVPORTFOLIO_IMG = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#0b1220"/>
  <rect x="20" y="20" width="760" height="410" rx="12" fill="#111a2e" stroke="#2563eb" stroke-width="1.5" stroke-opacity="0.4"/>
  <rect x="40" y="40" width="180" height="370" rx="10" fill="#182238"/>
  <circle cx="130" cy="90" r="30" fill="#2563eb"/>
  <text x="118" y="98" font-family="sans-serif" font-size="20" font-weight="bold" fill="#fff">MM</text>
  <text x="75" y="145" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#f1f4f9">Marvin Mathebula</text>
  <text x="80" y="165" font-family="sans-serif" font-size="11" fill="#7c8aa0">Software Engineer</text>
  <rect x="60" y="200" width="140" height="28" rx="6" fill="#2563eb" fill-opacity="0.2"/>
  <text x="80" y="218" font-family="sans-serif" font-size="12" fill="#2563eb">● Projects</text>

  <rect x="240" y="40" width="520" height="370" rx="10" fill="#0b1220"/>
  <text x="270" y="80" font-family="Outfit, sans-serif" font-size="22" font-weight="bold" fill="#f1f4f9">What I've built</text>
  <rect x="270" y="105" width="220" height="270" rx="8" fill="#182238"/>
  <rect x="270" y="105" width="220" height="110" rx="8" fill="#111a2e"/>
  <text x="290" y="240" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#f1f4f9">CropPlanner</text>
  <rect x="510" y="105" width="220" height="270" rx="8" fill="#182238"/>
  <rect x="510" y="105" width="220" height="110" rx="8" fill="#111a2e"/>
  <text x="530" y="240" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#f1f4f9">CompareIt</text>
</svg>
`);

const STUDENT_MGMT_IMG = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#0b1220"/>
  <rect x="20" y="20" width="760" height="410" rx="12" fill="#111a2e" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.4"/>
  <rect x="40" y="40" width="720" height="44" rx="8" fill="#182238"/>
  <text x="60" y="67" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#10b981">🎓 Student Management System — JEE &amp; JSF Backend</text>

  <rect x="40" y="105" width="220" height="80" rx="8" fill="#182238"/>
  <text x="60" y="135" font-family="sans-serif" font-size="11" fill="#7c8aa0">TOTAL STUDENTS</text>
  <text x="60" y="168" font-family="Outfit, sans-serif" font-size="24" font-weight="bold" fill="#10b981">1,248</text>

  <rect x="290" y="105" width="220" height="80" rx="8" fill="#182238"/>
  <text x="310" y="135" font-family="sans-serif" font-size="11" fill="#7c8aa0">ACTIVE COURSES</text>
  <text x="310" y="168" font-family="Outfit, sans-serif" font-size="24" font-weight="bold" fill="#2563eb">42</text>

  <rect x="540" y="105" width="220" height="80" rx="8" fill="#182238"/>
  <text x="560" y="135" font-family="sans-serif" font-size="11" fill="#7c8aa0">PASS RATE</text>
  <text x="560" y="168" font-family="Outfit, sans-serif" font-size="24" font-weight="bold" fill="#14b8a6">94.2%</text>

  <rect x="40" y="205" width="720" height="200" rx="8" fill="#182238"/>
  <text x="60" y="235" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#f1f4f9">Enrolled Students &amp; Timetable Grades</text>
  <line x1="60" y1="250" x2="740" y2="250" stroke="rgba(255,255,255,0.1)"/>
  <text x="60" y="280" font-family="monospace" font-size="12" fill="#b6c0d1">STU-2026-001  |  Marvin Mathebula  |  Computer Science  |  Grade: Distinction (A+)</text>
  <text x="60" y="310" font-family="monospace" font-size="12" fill="#b6c0d1">STU-2026-002  |  Sarah Johnson     |  Software Eng      |  Grade: Distinction (A)</text>
</svg>
`);

const DSDFLEETMANAGEMENTSYSTEM_IMG = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#0b1220"/>
  <rect x="20" y="20" width="760" height="410" rx="12" fill="#111a2e" stroke="#2563eb" stroke-width="1.5" stroke-opacity="0.4"/>
  <rect x="40" y="40" width="720" height="44" rx="8" fill="#182238"/>
  <circle cx="60" cy="62" r="6" fill="#ef4444"/>
  <circle cx="78" cy="62" r="6" fill="#f59e0b"/>
  <circle cx="96" cy="62" r="6" fill="#10b981"/>
  <text x="120" y="67" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#2563eb">🚚 DSD Fleet Management System — Gov. Vehicle Tracking</text>
  <text x="650" y="67" font-family="monospace" font-size="12" fill="#10b981">● LIVE DEMO</text>

  <rect x="40" y="100" width="345" height="180" rx="10" fill="#182238" stroke="rgba(255,255,255,0.08)"/>
  <text x="60" y="128" font-family="Outfit, sans-serif" font-size="14" font-weight="600" fill="#f1f4f9">Real-Time GPS Tracking</text>
  <rect x="60" y="145" width="305" height="115" rx="8" fill="#0b1220"/>
  <circle cx="130" cy="200" r="5" fill="#2563eb"/>
  <circle cx="220" cy="175" r="5" fill="#10b981"/>
  <circle cx="290" cy="220" r="5" fill="#f59e0b"/>
  <path d="M130 200 Q 175 160 220 175 T 290 220" stroke="#2563eb" stroke-width="1.5" fill="none" stroke-opacity="0.4"/>
  <text x="70" y="245" font-family="monospace" font-size="10" fill="#7c8aa0">3 vehicles active — Region: Gauteng</text>

  <rect x="415" y="100" width="345" height="180" rx="10" fill="#182238" stroke="rgba(255,255,255,0.08)"/>
  <text x="435" y="128" font-family="Outfit, sans-serif" font-size="14" font-weight="600" fill="#f1f4f9">AI Assistant — Nikita</text>
  <rect x="435" y="145" width="305" height="35" rx="8" fill="#0b1220"/>
  <text x="450" y="167" font-family="sans-serif" font-size="11" fill="#b6c0d1">"Which vehicles need service this week?"</text>
  <rect x="435" y="188" width="270" height="35" rx="8" fill="#2563eb" fill-opacity="0.15"/>
  <text x="450" y="210" font-family="sans-serif" font-size="11" fill="#60a5fa">2 vehicles due — GP-441 &amp; GP-902</text>

  <rect x="40" y="295" width="720" height="115" rx="10" fill="#182238" stroke="rgba(255,255,255,0.08)"/>
  <text x="60" y="325" font-family="Outfit, sans-serif" font-size="14" font-weight="600" fill="#f1f4f9">Role-Based Access &amp; Fleet Status</text>
  <line x1="60" y1="340" x2="740" y2="340" stroke="rgba(255,255,255,0.1)"/>
  <text x="60" y="365" font-family="monospace" font-size="12" fill="#b6c0d1">Admin — Full fleet visibility  |  Dispatcher — Regional data only  |  Driver — Own vehicle only</text>
  <text x="60" y="390" font-family="monospace" font-size="12" fill="#b6c0d1">GP-441 (Bakkie)  —  Active  —  Last ping: 2 min ago</text>
</svg>
`);

const ELITECARWASH_IMG = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#0b1220"/>
  <rect x="20" y="20" width="760" height="410" rx="12" fill="#111a2e" stroke="#0ea5e9" stroke-width="1.5" stroke-opacity="0.4"/>
  <rect x="40" y="40" width="720" height="44" rx="8" fill="#182238"/>
  <circle cx="60" cy="62" r="6" fill="#ef4444"/>
  <circle cx="78" cy="62" r="6" fill="#f59e0b"/>
  <circle cx="96" cy="62" r="6" fill="#10b981"/>
  <text x="120" y="67" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#0ea5e9">🚗 Elite Car Wash — Booking &amp; Management</text>
  <text x="650" y="67" font-family="monospace" font-size="12" fill="#10b981">● LIVE DEMO</text>

  <rect x="40" y="100" width="345" height="150" rx="10" fill="#182238" stroke="rgba(255,255,255,0.08)"/>
  <text x="60" y="128" font-family="Outfit, sans-serif" font-size="14" font-weight="600" fill="#f1f4f9">Today's Bookings</text>
  <rect x="60" y="145" width="305" height="30" rx="6" fill="#0b1220"/>
  <text x="75" y="165" font-family="sans-serif" font-size="11" fill="#b6c0d1">09:00 — Full Valet — Bay 2</text>
  <rect x="60" y="182" width="305" height="30" rx="6" fill="#0b1220"/>
  <text x="75" y="202" font-family="sans-serif" font-size="11" fill="#b6c0d1">10:30 — Express Wash — Bay 1</text>
  <rect x="60" y="219" width="305" height="20" rx="10" fill="#0ea5e9" fill-opacity="0.2" stroke="#0ea5e9" stroke-opacity="0.4"/>
  <text x="75" y="233" font-family="Outfit, sans-serif" font-size="10" font-weight="500" fill="#38bdf8">+ New booking via online checkout</text>

  <rect x="415" y="100" width="345" height="150" rx="10" fill="#182238" stroke="rgba(255,255,255,0.08)"/>
  <text x="435" y="128" font-family="Outfit, sans-serif" font-size="14" font-weight="600" fill="#f1f4f9">Payments &amp; Loyalty</text>
  <text x="435" y="165" font-family="sans-serif" font-size="26" fill="#10b981">R 249.00</text>
  <text x="435" y="185" font-family="sans-serif" font-size="11" fill="#7c8aa0">Paid via Yoco — Full Valet</text>
  <rect x="435" y="200" width="305" height="35" rx="6" fill="#10b981" fill-opacity="0.15"/>
  <text x="450" y="222" font-family="Outfit, sans-serif" font-size="12" font-weight="500" fill="#34d399">★ Loyalty: 8/10 washes — 2 to go free</text>

  <rect x="40" y="265" width="720" height="145" rx="10" fill="#182238" stroke="rgba(255,255,255,0.08)"/>
  <text x="60" y="295" font-family="Outfit, sans-serif" font-size="14" font-weight="600" fill="#f1f4f9">Live Weather &amp; Service Tracking</text>
  <line x1="60" y1="310" x2="740" y2="310" stroke="rgba(255,255,255,0.1)"/>
  <text x="60" y="335" font-family="monospace" font-size="12" fill="#b6c0d1">Witbank — 26°C ☀️ — Clear, good wash conditions</text>
  <text x="60" y="360" font-family="monospace" font-size="12" fill="#b6c0d1">Bay 2 — In progress — Est. 12 min remaining</text>
</svg>
`);

const ACADEMICCALCULATOR_IMG = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450">
  <rect width="800" height="450" fill="#0b1220"/>
  <rect x="20" y="20" width="760" height="410" rx="12" fill="#111a2e" stroke="#2563eb" stroke-width="1.5" stroke-opacity="0.4"/>
  <rect x="40" y="40" width="720" height="44" rx="8" fill="#182238"/>
  <circle cx="60" cy="62" r="6" fill="#ef4444"/>
  <circle cx="78" cy="62" r="6" fill="#f59e0b"/>
  <circle cx="96" cy="62" r="6" fill="#10b981"/>
  <text x="120" y="67" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#2563eb">🎓 Academic Calculator — Grade Tracking &amp; Planning</text>
  <text x="650" y="67" font-family="monospace" font-size="12" fill="#10b981">● LIVE DEMO</text>

  <rect x="40" y="100" width="220" height="150" rx="10" fill="#182238" stroke="rgba(255,255,255,0.08)"/>
  <text x="60" y="128" font-family="sans-serif" font-size="11" fill="#7c8aa0">CURRENT GPA</text>
  <text x="60" y="165" font-family="Outfit, sans-serif" font-size="30" font-weight="bold" fill="#2563eb">3.7</text>
  <text x="60" y="185" font-family="sans-serif" font-size="11" fill="#7c8aa0">out of 4.0</text>
  <rect x="60" y="210" width="180" height="20" rx="10" fill="#182238" stroke="#2563eb" stroke-opacity="0.4"/>
  <rect x="60" y="210" width="150" height="20" rx="10" fill="#2563eb" fill-opacity="0.3"/>
  <text x="70" y="224" font-family="sans-serif" font-size="9" fill="#93c5fd">92% to Distinction</text>

  <rect x="280" y="100" width="480" height="150" rx="10" fill="#182238" stroke="rgba(255,255,255,0.08)"/>
  <text x="300" y="128" font-family="Outfit, sans-serif" font-size="14" font-weight="600" fill="#f1f4f9">Grade Trend Over Time</text>
  <path d="M300 210 L 360 195 L 420 200 L 480 175 L 540 165 L 600 150 L 660 145 L 720 130" stroke="#10b981" stroke-width="2.5" fill="none"/>
  <circle cx="720" cy="130" r="4" fill="#10b981"/>
  <text x="300" y="238" font-family="monospace" font-size="10" fill="#7c8aa0">Semester progress — trending up ↑</text>

  <rect x="40" y="265" width="345" height="145" rx="10" fill="#182238" stroke="rgba(255,255,255,0.08)"/>
  <text x="60" y="295" font-family="Outfit, sans-serif" font-size="14" font-weight="600" fill="#f1f4f9">Modules</text>
  <text x="60" y="322" font-family="monospace" font-size="11" fill="#b6c0d1">Data Structures — 88% (A)</text>
  <text x="60" y="345" font-family="monospace" font-size="11" fill="#b6c0d1">Software Eng — 91% (A+)</text>
  <text x="60" y="368" font-family="monospace" font-size="11" fill="#b6c0d1">Database Prog — 79% (B+)</text>

  <rect x="415" y="265" width="345" height="145" rx="10" fill="#182238" stroke="rgba(255,255,255,0.08)"/>
  <text x="435" y="295" font-family="Outfit, sans-serif" font-size="14" font-weight="600" fill="#f1f4f9">AI Assistant — Nikita</text>
  <rect x="435" y="310" width="305" height="32" rx="8" fill="#0b1220"/>
  <text x="450" y="330" font-family="sans-serif" font-size="11" fill="#b6c0d1">"What do I need on the final to pass?"</text>
  <rect x="435" y="350" width="270" height="32" rx="8" fill="#2563eb" fill-opacity="0.15"/>
  <text x="450" y="371" font-family="sans-serif" font-size="11" fill="#60a5fa">You need 58% or higher — you're on track!</text>
</svg>
`);

export const PROJECTS = [
  {
    id: 'p1',
    name: 'Smart Crop Planner',
    desc: 'Spring Boot farm management platform for small-scale farmers — weather-based planting recommendations, yield prediction, expense tracking, and analytics.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    demo: '',
    github: 'https://github.com/marvin54-hub/cropplanner',
    status: 'active',
    screenshots: [CROPPLANNER_IMG],
  },
  {
    id: 'p2',
    name: 'DSD Fleet Management System',
    desc: 'DSD Fleet Management System: a South Africa`s Department of Social Development, a full-stack vehicle fleet management platform for government use, featuring role-based data isolation, real-time GPS tracking, and an integrated AI assistant(Nikita). Built with Spring Boot, React, and PostgreSQL.',
    tags: ['React.js', 'Java', 'Spring Boot', 'PostgreSQL'],
    demo: 'https://dsd-fleet-management-system.vercel.app',
    github: 'https://github.com/marvin54-hub',
    status: 'active',
    screenshots: [DSDFLEETMANAGEMENTSYSTEM_IMG],
  },
  {
    id: 'p3',
    name: 'Elite Car Wash',
    desc: 'A comprehensive car wash booking and management platform built from the ground up for Witbank Elite Car Wash. The system handles the full customer journey from online booking to payment, service tracking, and loyalty rewards while giving staff and administrators a powerful real-time management dashboard.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Thymeleaf', 'JavaScript', 'EmailJS', 'Yoco Online Checkout API', 'Google Maps iframe embedded', 'Open-Meteo API', 'EJB'],
    demo: 'https://elite-carwash-gl09.onrender.com',
    github:'https://github.com/marvin54-hub/Elite-Carwash',
    status: 'active',
    screenshots: [ELITECARWASH_IMG],
  },
  {
    id: 'p4',
    name: 'Academic Calculator',
    desc: 'Academic Calculator is a full-stack web app for tracking grades, predicting outcomes, and planning coursework. It features real user accounts (bcrypt + JWT sessions), an AI-powered academic assistant(Nikita) built on Google`s Gemini API, exportable grade history (PDF/CSV), dark mode, and a full settings suite including account management and privacy controls.',
    tags: ['React', 'Express.js', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'Google Gemini API', 'bcrypt', 'JWT', 'PDFKit', 'CSV Export'],
    demo: 'https://academic-calculator-five.vercel.app',
    github: 'https://github.com/marvin54-hub/Academic-Calculator',
    status: 'active',
    screenshots: [ACADEMICCALCULATOR_IMG],
  },
  {
    id: 'p5',
    name: 'myDevPortfolio',
    desc: 'Personal developer portfolio built as a fully componentised React + Vite application with an in-page admin panel for live content editing.',
    tags: ['React.js', 'Vite', 'JavaScript'],
    demo: 'https://marvin54-hub.github.io/myportfolio/',
    github: 'https://github.com/marvin54-hub/myportfolio',
    status: 'active',
    screenshots: [MYDEVPORTFOLIO_IMG],
  },
]

export const SKILLS = [
  { id: 'sk1', name: 'Languages',      icon: 'ti-code',       chips: ['Java', 'Kotlin', 'JavaScript', 'CSS', 'SQL'] },
  { id: 'sk2', name: 'Frameworks',     icon: 'ti-components', chips: ['Spring Boot', 'JEE', 'React.js', 'React Native'] },
  { id: 'sk3', name: 'Database',       icon: 'ti-database',   chips: ['MySQL', 'PostgreSQL', 'SQL', 'Firebase'] },
  { id: 'sk4', name: 'Tools',          icon: 'ti-tools',      chips: ['VS Code', 'IntelliJ IDEA', 'NetBeans', 'Git', 'GitHub', 'Vercel', 'Firebase'] },
  { id: 'sk5', name: 'Concepts',       icon: 'ti-bulb',       chips: ['System Design', 'OOP', 'SOLID', 'SDLC', 'REST APIs', 'MVC'] },
]
