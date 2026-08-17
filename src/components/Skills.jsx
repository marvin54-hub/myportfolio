import { useState } from 'react'
import Modal from './Modal'
import TagsInput from './TagsInput'

const uid = () => 'id' + Math.random().toString(36).slice(2, 9)
const blank = { id: '', name: '', icon: 'ti-code', chips: [] }

export default function Skills({ skills, setSkills, isAdmin }) {
  const [open, setOpen]   = useState(false)
  const [draft, setDraft] = useState(blank)
  const isEditing = Boolean(draft.id)

  function openAdd()    { setDraft(blank); setOpen(true) }
  function openEdit(sg) { setDraft({ ...sg }); setOpen(true) }

  function save() {
    if (!draft.name.trim()) { alert('Category name is required.'); return }
    if (isEditing) {
      setSkills(skills.map(s => s.id === draft.id ? draft : s))
    } else {
      setSkills([...skills, { ...draft, id: uid() }])
    }
    setOpen(false)
  }

  function remove() {
    if (!confirm('Delete this category?')) return
    setSkills(skills.filter(s => s.id !== draft.id))
    setOpen(false)
  }

  return (
    <section id="skills" className="section">
      <div className="s-head">
        <div className="s-head-left">
          <div className="s-eyebrow">05 — Skills</div>
          <h2 className="s-title">My <span>toolkit</span>.</h2>
        </div>
        {/* Add category only in admin mode */}
        {isAdmin && (
          <button className="s-edit-btn" onClick={openAdd}>
            <i className="ti ti-plus" /> Add category
          </button>
        )}
      </div>

      <div className="skills-grid">
        {skills.map(sg => (
          <div className="skill-card" key={sg.id}>
            <div className="skill-card-head">
              <div className="skill-card-title">{sg.name}</div>
              <i className={`ti ${sg.icon} skill-icon`} />
            </div>
            <div className="skill-chips">
              {sg.chips.map(c => <span className="skill-chip" key={c}>{c}</span>)}
            </div>
            {/* Edit button only in admin mode */}
            {isAdmin && (
              <div style={{ marginTop: 14 }}>
                <button className="ibtn" onClick={() => openEdit(sg)}>
                  <i className="ti ti-edit" /> Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {isAdmin && (
        <Modal isOpen={open} onClose={() => setOpen(false)} title={isEditing ? 'Edit category' : 'Add skill category'}>
          <label>Category name</label>
          <input value={draft.name} onChange={e => setDraft({ ...draft, name: e.target.value })} placeholder="e.g. Frameworks" />
          <label>Skills (Enter or comma to add)</label>
          <TagsInput tags={draft.chips} setTags={chips => setDraft({ ...draft, chips })} placeholder="Add skill…" />
          <div className="modal-actions">
            {isEditing && (
              <div className="modal-del">
                <button className="m-btn danger" onClick={remove}>
                  <i className="ti ti-trash" /> Delete
                </button>
              </div>
            )}
            <button className="m-btn" onClick={() => setOpen(false)}>Cancel</button>
            <button className="m-btn primary" onClick={save}>Save</button>
          </div>
        </Modal>
      )}
    </section>
  )
}
