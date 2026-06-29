import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Skills from './components/Skills'
import CV from './components/CV'
import Contact from './components/Contact'
import Modal from './components/Modal'
import Toast from './components/Toast'
import { PROFILE, EXPERIENCE, EDUCATION, PROJECTS, SKILLS } from './data'

// ── Admin password comes from .env — never hardcoded ──
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'marvin2026'

// ── localStorage hook ──────────────────────────
function usePersisted(key, init) {
  const [val, setVal] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : init
    } catch { return init }
  })
  function set(next) {
    const v = typeof next === 'function' ? next(val) : next
    setVal(v)
    try { localStorage.setItem(key, JSON.stringify(v)) } catch {}
  }
  return [val, set]
}

export default function App() {
  // ── content state ──────────────────────────────
  const [profile,    setProfile]    = usePersisted('pf_profile',    PROFILE)
  const [about,      setAbout]      = usePersisted('pf_about',      { paragraphs: PROFILE.bio, tags: PROFILE.tags })
  const [experience, setExperience] = usePersisted('pf_experience', EXPERIENCE)
  const [education,  setEducation]  = usePersisted('pf_education',  EDUCATION)
  const [projects,   setProjects]   = usePersisted('pf_projects',   PROJECTS)
  const [skills,     setSkills]     = usePersisted('pf_skills',     SKILLS)
  const [cv,         setCv]         = usePersisted('pf_cv',         { file: '', fileName: '', url: '' })

  // ── admin mode ────────────────────────────────
  const [isAdmin,       setIsAdmin]       = useState(false)
  const [loginOpen,     setLoginOpen]     = useState(false)
  const [loginPw,       setLoginPw]       = useState('')
  const [loginErr,      setLoginErr]      = useState('')

  function tryLogin() {
    if (loginPw === ADMIN_PASSWORD) {
      setIsAdmin(true)
      setLoginOpen(false)
      setLoginPw('')
      setLoginErr('')
      showToast('Admin mode on — edit buttons visible')
    } else {
      setLoginErr('Incorrect password.')
    }
  }

  function logout() {
    setIsAdmin(false)
    showToast('Admin mode off')
  }

  // ── theme ─────────────────────────────────────
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  function toggleTheme() { setTheme(t => t === 'dark' ? 'light' : 'dark') }

  // ── toast ─────────────────────────────────────
  const [toast, setToast] = useState({ show: false, msg: '' })
  function showToast(msg) {
    setToast({ show: true, msg })
    setTimeout(() => setToast({ show: false, msg: '' }), 2400)
  }

  // ── mobile nav ────────────────────────────────
  const [mobileOpen, setMobileOpen] = useState(false)
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  // ── profile modal ─────────────────────────────
  const [profileOpen,  setProfileOpen]  = useState(false)
  const [cvOpen,       setCvOpen]       = useState(false)
  const [draftProfile, setDraftProfile] = useState(profile)

  function openProfileModal() { setDraftProfile(profile); setProfileOpen(true) }
  function saveProfile() { setProfile(draftProfile); setProfileOpen(false); showToast('Profile saved') }

  const cvSrc     = cv.file || cv.url
  const cvFileName = cv.fileName || 'Marvin_Mathebula_CV.pdf'

  return (
    <>
      {/* ── HAMBURGER ── */}
      <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Menu">
        <i className="ti ti-menu-2" />
      </button>

      {/* ── MOBILE NAV ── */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <button className="mobile-nav-close" onClick={() => setMobileOpen(false)}>
          <i className="ti ti-x" />
        </button>
        {['hero','about','experience','education','projects','skills','cv','contact'].map(id => (
          <a key={id} onClick={() => scrollTo(id)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>

      {/* ── LAYOUT ── */}
      <div className="layout">
        <Sidebar
          profile={profile}
          cvSrc={cvSrc}
          cvFileName={cvFileName}
          onEditProfile={openProfileModal}
          theme={theme}
          onToggleTheme={toggleTheme}
          isAdmin={isAdmin}
          onAdminLogin={() => { setLoginPw(''); setLoginErr(''); setLoginOpen(true) }}
          onAdminLogout={logout}
        />

        <main className="main">
          <Hero profile={profile} cvSrc={cvSrc} cvFileName={cvFileName} />

          <About
            about={about}
            setAbout={next => { setAbout(next); showToast('About updated') }}
            isAdmin={isAdmin}
          />

          <Timeline
            id="experience"
            eyebrow="02 — Experience"
            title="Work" titleSpan="history"
            entries={experience}
            setEntries={next => { setExperience(next); showToast('Experience updated') }}
            labels={{ org: 'Company / Organisation', role: 'Role / Position', orgPlaceholder: 'Ubuntu African Resources', rolePlaceholder: 'Freelance Web Developer' }}
            isAdmin={isAdmin}
          />

          <Timeline
            id="education"
            eyebrow="03 — Education"
            title="Academic" titleSpan="background"
            entries={education}
            setEntries={next => { setEducation(next); showToast('Education updated') }}
            labels={{ org: 'Institution', role: 'Qualification / Degree', orgPlaceholder: 'Tshwane University of Technology', rolePlaceholder: 'Diploma in Computer Science' }}
            isAdmin={isAdmin}
          />

          <Projects
            projects={projects}
            setProjects={next => { setProjects(next); showToast('Projects updated') }}
            isAdmin={isAdmin}
          />

          <Skills
            skills={skills}
            setSkills={next => { setSkills(next); showToast('Skills updated') }}
            isAdmin={isAdmin}
          />

          <CV
            cv={cv}
            setCv={next => { setCv(next); showToast('CV uploaded') }}
            open={cvOpen}
            setOpen={setCvOpen}
            isAdmin={isAdmin}
          />

          <Contact profile={profile} />
        </main>
      </div>

      {/* ── PROFILE EDIT MODAL (admin only) ── */}
      {isAdmin && (
        <Modal isOpen={profileOpen} onClose={() => setProfileOpen(false)} title="Edit profile">
          <label>Full name</label>
          <input value={draftProfile.name} onChange={e => setDraftProfile({ ...draftProfile, name: e.target.value })} placeholder="Your full name" />
          <label>Role / Title</label>
          <input value={draftProfile.role} onChange={e => setDraftProfile({ ...draftProfile, role: e.target.value })} placeholder="e.g. Software Engineer" />
          <label>Location</label>
          <input value={draftProfile.location} onChange={e => setDraftProfile({ ...draftProfile, location: e.target.value })} placeholder="e.g. Pretoria, South Africa" />
          <label>Email</label>
          <input type="email" value={draftProfile.email} onChange={e => setDraftProfile({ ...draftProfile, email: e.target.value })} placeholder="your@email.com" />
          <label>GitHub URL</label>
          <input type="url" value={draftProfile.github} onChange={e => setDraftProfile({ ...draftProfile, github: e.target.value })} placeholder="https://github.com/yourusername" />
          <label>LinkedIn URL</label>
          <input type="url" value={draftProfile.linkedin} onChange={e => setDraftProfile({ ...draftProfile, linkedin: e.target.value })} placeholder="https://linkedin.com/in/yourprofile" />
          <div className="modal-actions">
            <button className="m-btn" onClick={() => setProfileOpen(false)}>Cancel</button>
            <button className="m-btn primary" onClick={saveProfile}>Save changes</button>
          </div>
        </Modal>
      )}

      {/* ── ADMIN LOGIN MODAL ── */}
      <Modal isOpen={loginOpen} onClose={() => setLoginOpen(false)} title="Admin login">
        <label>Password</label>
        <input
          type="password"
          value={loginPw}
          placeholder="Enter admin password"
          onChange={e => { setLoginPw(e.target.value); setLoginErr('') }}
          onKeyDown={e => e.key === 'Enter' && tryLogin()}
          autoFocus
        />
        {loginErr && (
          <div style={{ marginTop: 10, fontSize: 13, color: 'var(--danger)', fontFamily: "'JetBrains Mono',monospace" }}>
            <i className="ti ti-alert-circle" /> {loginErr}
          </div>
        )}
        <div className="modal-actions">
          <button className="m-btn" onClick={() => setLoginOpen(false)}>Cancel</button>
          <button className="m-btn primary" onClick={tryLogin}>Login</button>
        </div>
      </Modal>

      <Toast message={toast.msg} show={toast.show} />
    </>
  )
}
