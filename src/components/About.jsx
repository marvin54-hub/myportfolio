import { useState } from 'react'
import Modal from './Modal'

export default function About({ about, setAbout, isAdmin }) {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState(about)

  function openEdit() { setDraft(about); setOpen(true) }

  function save() { setAbout(draft); setOpen(false) }

  return (
    <section id="about" className="section">
      <div className="s-head">
        <div className="s-head-left">
          <div className="s-eyebrow">01 — About me</div>
          <h2 className="s-title">Who I <span>am</span>.</h2>
        </div>
        {/* Only show Edit button in admin mode */}
        {isAdmin && (
          <button className="s-edit-btn" onClick={openEdit}>
            <i className="ti ti-edit" /> Edit
          </button>
        )}
      </div>

      <div className="about-grid">
        <div>
          <div className="about-bio">
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="tag-cloud">
            {about.tags.map(t => <span className="tag" key={t}>{t}</span>)}
          </div>
        </div>
        <div>
          <div className="fact-grid">
            <div className="fact-card"><div className="fact-val">2026</div><div className="fact-label">Graduate</div></div>
            <div className="fact-card"><div className="fact-val" style={{ color: 'var(--coral)' }}>4+</div><div className="fact-label">Projects</div></div>
            <div className="fact-card"><div className="fact-val" style={{ color: 'var(--success)' }}>TUT</div><div className="fact-label">University</div></div>
            <div className="fact-card"><div className="fact-val">PTA</div><div className="fact-label">Location</div></div>
          </div>
        </div>
      </div>

      {isAdmin && (
        <Modal isOpen={open} onClose={() => setOpen(false)} title="Edit about me">
          {draft.paragraphs.map((p, i) => (
            <div key={i}>
              <label>Paragraph {i + 1}</label>
              <textarea
                rows={3}
                value={p}
                onChange={e => {
                  const next = [...draft.paragraphs]
                  next[i] = e.target.value
                  setDraft({ ...draft, paragraphs: next })
                }}
              />
            </div>
          ))}
          <label>Tags (comma-separated)</label>
          <input
            value={draft.tags.join(', ')}
            onChange={e => setDraft({ ...draft, tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean) })}
          />
          <div className="modal-actions">
            <button className="m-btn" onClick={() => setOpen(false)}>Cancel</button>
            <button className="m-btn primary" onClick={save}>Save</button>
          </div>
        </Modal>
      )}
    </section>
  )
}
