import { useRef } from 'react'
import Modal from './Modal'

export default function CV({ cv, setCv, open, setOpen, isAdmin }) {
  const fileRef = useRef(null)

  function loadFile(file) {
    if (!file || file.type !== 'application/pdf') return
    if (file.size > 10 * 1024 * 1024) { alert('File too large — max 10MB'); return }
    const reader = new FileReader()
    reader.onload = e => setCv({ file: e.target.result, fileName: file.name, url: '' })
    reader.readAsDataURL(file)
  }

  const src  = cv.file || cv.url
  const name = cv.fileName || 'Marvin_Mathebula_CV.pdf'

  return (
    <>
      <section id="cv" className="section">
        <div className="s-eyebrow" style={{ marginBottom: 32 }}>06 — CV / Resume</div>
        <div className="cv-card">
          <div>
            <div className="cv-title">Download my CV</div>
            <div className="cv-sub">
              Get a copy of my full curriculum vitae — education, skills, projects, and contact details in one document.
            </div>
            {src && (
              <div className="cv-file-bar">
                <i className="ti ti-check" />
                <span>{cv.fileName || cv.url}</span>
              </div>
            )}
          </div>
          <div className="cv-actions">
            {/* Download button — always visible to everyone */}
            {src && (
              <a className="btn-v cv" href={src} download={name}>
                <i className="ti ti-download" /> Download CV
              </a>
            )}
            {/* Upload button — only visible in admin mode */}
            {isAdmin && (
              <button className="btn-v outline" onClick={() => setOpen(true)}>
                <i className="ti ti-upload" /> Upload CV
              </button>
            )}
            {/* If no CV uploaded yet and not admin, show nothing */}
            {!src && !isAdmin && (
              <span style={{
                fontSize: 13,
                color: 'var(--text3)',
                fontFamily: "'JetBrains Mono',monospace",
              }}>
                CV coming soon
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Upload modal — only mounted in admin mode */}
      {isAdmin && (
        <Modal isOpen={open} onClose={() => setOpen(false)} title="Upload CV / Resume">
          <div
            className="cv-drop"
            onClick={() => fileRef.current?.click()}
            onDragOver={e => e.preventDefault()}
            onDrop={e => { e.preventDefault(); loadFile(e.dataTransfer.files?.[0]) }}
          >
            <i className="ti ti-file-type-pdf" style={{ fontSize: 36, color: 'var(--violet)', display: 'block', marginBottom: 10 }} />
            <div style={{ fontSize: 14, color: 'var(--text2)' }}>Click or drag your PDF here</div>
            <div style={{ fontSize: 11, color: 'var(--text3)', fontFamily: "'JetBrains Mono',monospace", marginTop: 6 }}>
              PDF only · max 10MB
            </div>
            <input
              ref={fileRef}
              type="file"
              accept=".pdf"
              style={{ display: 'none' }}
              onChange={e => loadFile(e.target.files?.[0])}
            />
          </div>
          {cv.fileName && (
            <div style={{
              marginTop: 12, padding: '10px 14px',
              background: 'var(--success-bg)',
              border: '1px solid rgba(16,185,129,.3)',
              borderRadius: 'var(--r)',
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: 12, color: 'var(--success)',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <i className="ti ti-check" />
              <span>{cv.fileName}</span>
            </div>
          )}
          <div style={{ marginTop: 16 }}>
            <label>Or paste a public link (Google Drive, Dropbox, etc.)</label>
            <input
              type="url"
              value={cv.url}
              placeholder="https://drive.google.com/uc?export=download&id=…"
              onChange={e => setCv({ file: '', fileName: '', url: e.target.value })}
            />
          </div>
          <div className="modal-actions">
            <button className="m-btn" onClick={() => setOpen(false)}>Done</button>
          </div>
        </Modal>
      )}
    </>
  )
}
