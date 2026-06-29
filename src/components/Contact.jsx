import ContactForm from './ContactForm'

export default function Contact({ profile }) {
  const cards = [
    { href: `mailto:${profile.email}`, icon: 'ti-mail',           label: 'Email',    val: profile.email || '—' },
    { href: profile.github || '#',     icon: 'ti-brand-github',   label: 'GitHub',   val: (profile.github || '').replace('https://', '') },
    { href: profile.linkedin || '#',   icon: 'ti-brand-linkedin', label: 'LinkedIn', val: 'Marvin Mathebula' },
  ]

  return (
    <section id="contact" className="section">
      <div className="s-eyebrow" style={{ marginBottom: 32 }}>07 — Contact</div>

      {/* contact cards */}
      <div className="contact-grid">
        {cards.map(c => (
          <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="cc-icon"><i className={`ti ${c.icon}`} /></div>
            <div className="cc-label">{c.label}</div>
            <div className="cc-val">{c.val}</div>
            <div className="cc-arrow"><i className="ti ti-arrow-up-right" /></div>
          </a>
        ))}
      </div>

      {/* CTA panel */}
      <div className="contact-cta">
        <div>
          <h3>Let's build something<br />together.</h3>
          <p>Open to full-time roles, freelance projects, or just a conversation. Pretoria, South Africa — open to remote.</p>
        </div>
        <div className="cta-actions">
          <a href={`mailto:${profile.email}`} className="btn-v primary">
            <i className="ti ti-mail" /> Send an email
          </a>
          <a href={profile.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="btn-v outline">
            <i className="ti ti-brand-linkedin" /> Connect on LinkedIn
          </a>
        </div>
      </div>

      {/* ── EMAIL FORM ── */}
      <ContactForm />

      <div className="footer">© 2026 Marvin Mathebula · Pretoria, South Africa</div>
    </section>
  )
}
