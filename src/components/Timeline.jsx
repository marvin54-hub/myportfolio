import { useState } from 'react'
import Modal from './Modal'

const uid = () => 'id' + Math.random().toString(36).slice(2, 9)
const blank = { id: '', org: '', role: '', period: '', desc: '' }

export default function Timeline({
  id, eyebrow, title, titleSpan,
  entries, setEntries, labels, isAdmin,
}) {
  const L = labels || { org: 'Organisation', role: 'Role / Position' }
  const [open, setOpen]   = useState(false)
  const [draft, setDraft] = useState(blank)
  const isEditing = Boolean(draft.id)

  function openAdd()    { setDraft(blank); setOpen(true) }
  function openEdit(e)  { setDraft(e); setOpen(true) }

  function save() {
    if (!draft.org || !draft.role) {
      alert(`${L.org} and ${L.role} are required.`)
      return
    }
    if (isEditing) {
      setEntries(entries.map(e => e.id === draft.id ? draft : e))
    } else {
      setEntries([...entries, { ...draft, id: uid() }])
    }
    setOpen(false)
  }

  function remove(entryId) {
    if (!confirm('Delete this entry?')) return
    setEntries(entries.filter(e => e.id !== entryId))
  }

  return (
    <section id={id} className="section">
      <div className="s-head">
        <div className="s-head-left">
          <div className="s-eyebrow">{eyebrow}</div>
          <h2 className="s-title">{title} <span>{titleSpan}</span>.</h2>
        </div>
        {/* Add button only visible in admin mode */}
        {isAdmin && (
          <button className="s-edit-btn" onClick={openAdd}>
            <i className="ti ti-plus" /> Add
          </button>
        )}
      </div>

      {entries.length === 0 ? (
        <div className="tl-empty">No entries yet.</div>
      ) : (
        <div className="timeline">
          {entries.map((e, i) => (
            <div className="tl-item" key={e.id}>
              <div className="tl-dot-col">
                <div className="tl-dot" />
                {i < entries.length - 1 && <div className="tl-line" />}
              </div>
              <div className="card" style={{ padding: 24 }}>
                <div className="tl-head">
                  <div className="tl-title">{e.role}</div>
                  <span className="tl-period">{e.period}</span>
                </div>
                <div className="tl-org">{e.org}</div>
                {e.desc && <div className="tl-desc">{e.desc}</div>}
                {/* Edit/Delete only visible in admin mode */}
                {isAdmin && (
                  <div className="tl-btns">
                    <button className="ibtn" onClick={() => openEdit(e)}>
                      <i className="ti ti-edit" /> Edit
                    </button>
                    <button className="ibtn del" onClick={() => remove(e.id)}>
                      <i className="ti ti-trash" /> Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {isAdmin && (
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title={isEditing ? `Edit entry` : `Add entry`}
        >
          <label>{L.org}</label>
          <input
            value={draft.org}
            onChange={e => setDraft({ ...draft, org: e.target.value })}
            placeholder={L.orgPlaceholder || ''}
          />
          <label>{L.role}</label>
          <input
            value={draft.role}
            onChange={e => setDraft({ ...draft, role: e.target.value })}
            placeholder={L.rolePlaceholder || ''}
          />
          <label>Date range</label>
          <input
            value={draft.period}
            onChange={e => setDraft({ ...draft, period: e.target.value })}
            placeholder="e.g. 2023 — 2026"
          />
          <label>Description</label>
          <textarea
            value={draft.desc}
            onChange={e => setDraft({ ...draft, desc: e.target.value })}
            placeholder="What did you do or study?"
          />
          <div className="modal-actions">
            {isEditing && (
              <div className="modal-del">
                <button className="m-btn danger" onClick={() => { remove(draft.id); setOpen(false) }}>
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
