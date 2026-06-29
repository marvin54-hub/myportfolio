export default function Hero({ profile, cvSrc, cvFileName }) {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const firstName = profile.name.split(' ')[0] || 'Marvin'
  const lastName  = profile.name.split(' ').slice(1).join(' ') || 'Mathebula'

  return (
    <section id="hero" className="hero-section">
      <div style={{ width: '100%' }}>
        <div className="hero-badge">Available for work · 2026 Graduate</div>
        <h1 className="hero-h1">
          <span className="name-violet">{firstName}</span><br />
          <span className="name-coral">{lastName}.</span>
        </h1>
        <p className="hero-sub">
          I build robust, scalable applications using{' '}
          <strong>Java, Spring Boot</strong> and <strong>JEE</strong> on the backend, with{' '}
          <strong>React.js</strong> on the frontend. Focused on clean architecture and systems that scale.
        </p>
        <div className="hero-actions">
          <button className="btn-v primary" onClick={() => scrollTo('projects')}>
            <i className="ti ti-code" /> View projects
          </button>
          {cvSrc && (
            <a className="btn-v cv" href={cvSrc} download={cvFileName || 'Marvin_Mathebula_CV.pdf'}>
              <i className="ti ti-download" /> Download CV
            </a>
          )}
          <button className="btn-v outline" onClick={() => scrollTo('contact')}>
            <i className="ti ti-send" /> Get in touch
          </button>
        </div>
        <div className="hero-stats">
          <div><div className="stat-num v">4+</div><div className="stat-label">Projects built</div></div>
          <div><div className="stat-num c">2026</div><div className="stat-label">Graduate year</div></div>
          <div><div className="stat-num g">Now</div><div className="stat-label">Available</div></div>
        </div>
      </div>
    </section>
  )
}
