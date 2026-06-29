import { useState, useRef } from 'react'
import Modal from './Modal'
import TagsInput from './TagsInput'

const uid = () => 'id' + Math.random().toString(36).slice(2, 9)
const blank = { id: '', name: '', desc: '', tags: [], demo: '', github: '', status: 'active', screenshot: '' }
const STATUS_LABEL = { active: 'ACTIVE', wip: 'IN PROGRESS', archived: 'ARCHIVED' }

export default function Projects({ projects, setProjects, isAdmin }) {
  const [open, setOpen]   = useState(false)
  const [draft, setDraft] = useState(blank)
  const shotRef = useRef(null)
  const isEditing = Boolean(draft.id)

  function openAdd()   { setDraft(blank); setOpen(true) }
  function openEdit(p) { setDraft({ ...p }); setOpen(true) }

  function save() {
    if (!draft.name.trim()) { alert('Project name is required.'); return }
    if (isEditing) {
      setProjects(projects.map(p => p.id === draft.id ? draft : p))
    } else {
      setProjects([...projects, { ...draft, id: uid() }])
    }
    setOpen(false)
  }

  function remove(projId) {
    if (!confirm('Delete this project?')) return
    setProjects(projects.filter(p => p.id !== projId))
    setOpen(false)
  }

  function loadShot(file) {
    if (!file) return
    const reader = new FileReader()
    reader.onload = e => setDraft(d => ({ ...d, screenshot: e.target.result }))
    reader.readAsDataURL(file)
  }

  return (
    <section id="projects" className="section">
      <div className="s-head">
        <div className="s-head-left">
          <div className="s-eyebrow">04 — Projects</div>
          <h2 className="s-title">What I've <span>built</span>.</h2>
        </div>
        {/* Add project button only in admin mode */}
        {isAdmin && (
          <button className="s-edit-btn" onClick={openAdd}>
            <i className="ti ti-plus" /> Add project
          </button>
        )}
      </div>

      <div className="proj-grid">
        {projects.map(p => (
          <div className="proj-card" key={p.id}>
            {p.screenshot
              ? <img className="proj-img" src={p.screenshot} alt={`${p.name} screenshot`} />
              : (
                <div className="proj-img-empty">
                  <i className="ti ti-photo-off" style={{ fontSize: 22 }} />
                  <span>NO SCREENSHOT</span>
                </div>
              )
            }
            <div className="proj-body">
              <div className="proj-top">
                <div className="proj-name">{p.name}</div>
                <span className={`proj-status ${p.status}`}>
                  {STATUS_LABEL[p.status] || p.status.toUpperCase()}
                </span>
              </div>
              <div className="proj-desc">{p.desc}</div>
              <div className="proj-stack">
                {p.tags.map(t => <span className="proj-tag" key={t}>{t}</span>)}
              </div>
              <div className="proj-links">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="proj-link">
                    <i className="ti ti-external-link" /> DEMO
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                    <i className="ti ti-brand-github" /> CODE
                  </a>
                )}
                {/* Edit button only in admin mode */}
                {isAdmin && (
                  <button className="ibtn" style={{ marginLeft: 'auto' }} onClick={() => openEdit(p)}>
                    <i className="ti ti-edit" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add another card only in admin mode */}
      {isAdmin && (
        <button className="add-proj" onClick={openAdd} style={{ marginTop: 16 }}>
          <i className="ti ti-plus" style={{ fontSize: 22 }} />
          <span>Add another project</span>
        </button>
      )}

      {isAdmin && (
        <Modal isOpen={open} onClose={() => setOpen(false)} title={isEditing ? 'Edit project' : 'Add project'}>
          <label>Project name</label>
          <input value={draft.name} onChange={e => setDraft({ ...draft, name: e.target.value })} placeholder="e.g. CropPlanner" />

          <label>Description</label>
          <textarea value={draft.desc} onChange={e => setDraft({ ...draft, desc: e.target.value })} placeholder="What does it do?" />

          <label>Tech stack (Enter or comma to add)</label>
          <TagsInput tags={draft.tags} setTags={tags => setDraft({ ...draft, tags })} placeholder="Add tech…" />

          <label>Screenshot (optional)</label>
          <div
            className="shot-drop"
            onClick={() => shotRef.current?.click()}
            onDragOver={e => e.preventDefault()}
            onDrop={e => { e.preventDefault(); loadShot(e.dataTransfer.files?.[0]) }}
          >
            <i className="ti ti-photo-up" style={{ fontSize: 28, color: 'var(--text3)', display: 'block', marginBottom: 8 }} />
            <div style={{ fontSize: 13, color: 'var(--text2)' }}>Click or drag image here</div>
            <div style={{ fontSize: 11, color: 'var(--text3)', fontFamily: "'JetBrains Mono',monospace", marginTop: 4 }}>PNG, JPG, WEBP</div>
            <input ref={shotRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={e => loadShot(e.target.files?.[0])} />
          </div>
          {draft.screenshot && (
            <>
              <img src={draft.screenshot} alt="Preview" className="shot-preview" />
              <button
                onClick={() => setDraft({ ...draft, screenshot: '' })}
                style={{ marginTop: 6, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text3)', fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: 1 }}
              >
                ✕ REMOVE SCREENSHOT
              </button>
            </>
          )}

          <label>Demo URL</label>
          <input type="url" value={draft.demo} onChange={e => setDraft({ ...draft, demo: e.target.value })} placeholder="https://…" />

          <label>GitHub URL</label>
          <input type="url" value={draft.github} onChange={e => setDraft({ ...draft, github: e.target.value })} placeholder="https://github.com/…" />

          <label>Status</label>
          <select value={draft.status} onChange={e => setDraft({ ...draft, status: e.target.value })}>
            <option value="active">Active / Live</option>
            <option value="wip">In progress</option>
            <option value="archived">Archived</option>
          </select>

          <div className="modal-actions">
            {isEditing && (
              <div className="modal-del">
                <button className="m-btn danger" onClick={() => remove(draft.id)}>
                  <i className="ti ti-trash" /> Delete
                </button>
              </div>
            )}
            <button className="m-btn" onClick={() => setOpen(false)}>Cancel</button>
            <button className="m-btn primary" onClick={save}>Save project</button>
          </div>
        </Modal>
      )}
    </section>
  )
}
