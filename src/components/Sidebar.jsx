import { useEffect, useState } from 'react'

const NAV = [
  { id: 'hero',       icon: 'ti-home',      label: 'Home' },
  { id: 'about',      icon: 'ti-user',       label: 'About me' },
  { id: 'experience', icon: 'ti-briefcase',  label: 'Experience' },
  { id: 'education',  icon: 'ti-school',     label: 'Education' },
  { id: 'projects',   icon: 'ti-code',       label: 'Projects' },
  { id: 'skills',     icon: 'ti-cpu',        label: 'Skills' },
  { id: 'cv',         icon: 'ti-file-cv',    label: 'CV / Resume' },
  { id: 'contact',    icon: 'ti-mail',       label: 'Contact' },
]

export default function Sidebar({
  profile, cvSrc, cvFileName,
  onEditProfile, theme, onToggleTheme,
  isAdmin, onAdminLogin, onAdminLogout,
}) {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const ids = NAV.map(n => n.id)
    function onScroll() {
      let cur = 'hero'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 160) cur = id
      }
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const initials = profile.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()

  return (
    <aside className="sidebar">
      {/* Avatar — only clickable in admin mode */}
      <div
        className="avatar"
        onClick={isAdmin ? onEditProfile : undefined}
        title={isAdmin ? 'Edit profile' : undefined}
        style={{ cursor: isAdmin ? 'pointer' : 'default' }}
      >
        <div className="avatar-ring" />
        {initials}
      </div>

      <div className="sb-name">{profile.name}</div>
      <div className="sb-role">{profile.role}</div>
      <div className="sb-loc">
        <i className="ti ti-map-pin" style={{ fontSize: 13, color: 'var(--coral)' }} />
        {profile.location}
      </div>

      <nav className="nav">
        {NAV.map(n => (
          <button
            key={n.id}
            className={`nav-item${active === n.id ? ' active' : ''}`}
            onClick={() => scrollTo(n.id)}
          >
            <i className={`ti ${n.icon}`} />
            {n.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="social-row">
          {profile.github && (
            <a className="social-icon" href={profile.github} target="_blank" rel="noopener noreferrer" title="GitHub">
              <i className="ti ti-brand-github" />
            </a>
          )}
          {profile.linkedin && (
            <a className="social-icon" href={profile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <i className="ti ti-brand-linkedin" />
            </a>
          )}
          {profile.email && (
            <a className="social-icon" href={`mailto:${profile.email}`} title="Email">
              <i className="ti ti-mail" />
            </a>
          )}
          {cvSrc && (
            <a className="social-icon" href={cvSrc} download={cvFileName || 'Marvin_Mathebula_CV.pdf'} title="Download CV">
              <i className="ti ti-file-cv" />
            </a>
          )}
        </div>

        <button className="theme-btn" onClick={onToggleTheme}>
          <i className={`ti ${theme === 'dark' ? 'ti-sun' : 'ti-moon'}`} />
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>

        {/* Admin toggle — small and discreet at the very bottom */}
        {isAdmin ? (
          <button
            className="theme-btn"
            onClick={onAdminLogout}
            style={{ color: 'var(--coral)', borderColor: 'rgba(249,115,22,.3)' }}
          >
            <i className="ti ti-lock-open" /> Exit admin mode
          </button>
        ) : (
          <button
            className="theme-btn"
            onClick={onAdminLogin}
            style={{ opacity: .35, fontSize: 11 }}
            title="Admin login"
          >
            <i className="ti ti-lock" /> Admin
          </button>
        )}
      </div>
    </aside>
  )
}
