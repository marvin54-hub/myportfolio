import { useState, useRef, useEffect } from 'react'
import Modal from './Modal'
import TagsInput from './TagsInput'

const uid = () => 'id' + Math.random().toString(36).slice(2, 9)

const blank = {
  id: '', name: '', desc: '',
  tags: [], demo: '', github: '',
  status: 'active', screenshots: [],
}

const STATUS_LABEL = { active: 'ACTIVE', wip: 'IN PROGRESS', archived: 'ARCHIVED' }

/* ── EXPANDED IMAGE VIEWER MODAL ───────────── */
function ImageViewer({ images, initialIdx = 0, onClose }) {
  const [idx, setIdx] = useState(initialIdx)
  const imgs = Array.isArray(images) ? images.filter(Boolean) : []

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && imgs.length > 1) {
        setIdx(i => (i - 1 + imgs.length) % imgs.length)
      }
      if (e.key === 'ArrowRight' && imgs.length > 1) {
        setIdx(i => (i + 1) % imgs.length)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [imgs.length, onClose])

  if (imgs.length === 0) return null

  function prev(e) {
    if (e) e.stopPropagation()
    setIdx(i => (i - 1 + imgs.length) % imgs.length)
  }

  function next(e) {
    if (e) e.stopPropagation()
    setIdx(i => (i + 1) % imgs.length)
  }

  return (
    <div className="viewer-overlay" onClick={onClose}>
      <div className="viewer-container" onClick={e => e.stopPropagation()}>
        {/* Close X Symbol Button */}
        <button className="viewer-close" onClick={onClose} title="Close image viewer (Esc)">
          <i className="ti ti-x" />
        </button>

        {/* Left Arrow (<) to scroll previous image */}
        {imgs.length > 1 && (
          <button className="viewer-arrow viewer-arrow-left" onClick={prev} title="Previous image (<)">
            <i className="ti ti-chevron-left" />
          </button>
        )}

        {/* Image Display */}
        <div className="viewer-img-box">
          <img src={imgs[idx]} alt={`Screenshot ${idx + 1}`} className="viewer-img" />
        </div>

        {/* Right Arrow (>) to scroll next image */}
        {imgs.length > 1 && (
          <button className="viewer-arrow viewer-arrow-right" onClick={next} title="Next image (>)">
            <i className="ti ti-chevron-right" />
          </button>
        )}

        {/* Image Counter */}
        {imgs.length > 1 && (
          <div className="viewer-counter">{idx + 1} / {imgs.length}</div>
        )}
      </div>
    </div>
  )
}

/* ── IMAGE CAROUSEL ─────────────────────────── */
function Carousel({ images }) {
  const [idx, setIdx] = useState(0)
  const [viewerOpen, setViewerOpen] = useState(false)
  const trackRef = useRef(null)

  const imgs = Array.isArray(images)
    ? images.filter(Boolean)
    : (typeof images === 'string' && images ? [images] : [])

  if (imgs.length === 0) {
    return (
      <div className="proj-img-empty">
        <i className="ti ti-photo-off" style={{ fontSize: 22 }} />
        <span>NO SCREENSHOTS</span>
      </div>
    )
  }

  function prev(e) {
    e.stopPropagation()
    setIdx(i => (i - 1 + imgs.length) % imgs.length)
  }

  function next(e) {
    e.stopPropagation()
    setIdx(i => (i + 1) % imgs.length)
  }

  // touch support
  let touchStartX = 0
  function onTouchStart(e) { touchStartX = e.touches[0].clientX }
  function onTouchEnd(e) {
    const dx = e.changedTouches[0].clientX - touchStartX
    if (dx < -40) next(e)
    else if (dx > 40) prev(e)
  }

  return (
    <>
      <div
        className="carousel"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={() => setViewerOpen(true)}
        title="Click to observe image"
        style={{ cursor: 'pointer' }}
      >
        {/* image strip */}
        <div className="carousel-track" ref={trackRef}>
          {imgs.map((src, i) => (
            <img
              key={i}
              className={`carousel-slide${i === idx ? ' active' : ''}`}
              src={src}
              alt={`Screenshot ${i + 1}`}
            />
          ))}
        </div>

        {/* Hover zoom hint badge for recruiters */}
        <div className="carousel-zoom-hint">
          <i className="ti ti-zoom-in" /> Click to expand
        </div>

        {imgs.length > 1 && (
          <>
            {/* left / right arrows */}
            <button
              className="carousel-btn carousel-btn-left"
              onClick={prev}
              aria-label="Previous image"
            >
              <i className="ti ti-chevron-left" />
            </button>
            <button
              className="carousel-btn carousel-btn-right"
              onClick={next}
              aria-label="Next image"
            >
              <i className="ti ti-chevron-right" />
            </button>

            {/* dot indicators */}
            <div className="carousel-dots">
              {imgs.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${i === idx ? ' active' : ''}`}
                  onClick={e => { e.stopPropagation(); setIdx(i) }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>

            {/* counter */}
            <div className="carousel-counter">{idx + 1} / {imgs.length}</div>
          </>
        )}
      </div>

      {viewerOpen && (
        <ImageViewer
          images={imgs}
          initialIdx={idx}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </>
  )
}

/* ── HELPER: READ & COMPRESS IMAGE ──────────── */
function readAndCompressImage(file, maxDimension = 1200, quality = 0.85) {
  return new Promise(resolve => {
    if (!file || !file.type.startsWith('image/')) {
      resolve(null)
      return
    }
    const reader = new FileReader()
    reader.onerror = () => resolve(null)
    reader.onload = e => {
      const dataUrl = e.target?.result
      if (!dataUrl) {
        resolve(null)
        return
      }

      const img = new Image()
      img.onerror = () => resolve(dataUrl)
      img.onload = () => {
        try {
          let { width, height } = img
          if (width <= maxDimension && height <= maxDimension && file.size < 300 * 1024) {
            resolve(dataUrl)
            return
          }

          if (width > maxDimension || height > maxDimension) {
            if (width > height) {
              height = Math.round((height * maxDimension) / width)
              width = maxDimension
            } else {
              width = Math.round((width * maxDimension) / height)
              height = maxDimension
            }
          }

          const canvas = document.createElement('canvas')
          canvas.width = width
          canvas.height = height
          const ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0, width, height)

          try {
            const webpData = canvas.toDataURL('image/webp', quality)
            if (webpData && webpData.startsWith('data:image/webp')) {
              resolve(webpData)
              return
            }
          } catch { }

          const jpegData = canvas.toDataURL('image/jpeg', quality)
          resolve(jpegData || dataUrl)
        } catch (err) {
          console.error('Compression error, falling back to original:', err)
          resolve(dataUrl)
        }
      }
      img.src = dataUrl
    }
    reader.readAsDataURL(file)
  })
}

/* ── SCREENSHOT UPLOAD MANAGER (admin) ─────── */
function ScreenshotManager({ screenshots, setScreenshots }) {
  const fileRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  const shots = Array.isArray(screenshots)
    ? screenshots.filter(Boolean)
    : (typeof screenshots === 'string' && screenshots ? [screenshots] : [])

  async function loadFiles(filesInput) {
    const files = Array.from(filesInput || [])
    if (files.length === 0) return
    setIsUploading(true)

    try {
      const promises = files.map(file => readAndCompressImage(file))
      const results = await Promise.all(promises)
      const validImages = results.filter(Boolean)

      if (validImages.length > 0) {
        setScreenshots(prev => {
          const current = Array.isArray(prev)
            ? prev
            : (typeof prev === 'string' && prev ? [prev] : [])
          return [...current, ...validImages]
        })
      }
    } catch (err) {
      console.error('Error uploading images:', err)
      alert('Failed to process uploaded image(s): ' + (err?.message || 'Unknown error'))
    } finally {
      setIsUploading(false)
    }
  }

  function remove(i) {
    setScreenshots(prev => {
      const current = Array.isArray(prev)
        ? prev
        : (typeof prev === 'string' && prev ? [prev] : [])
      return current.filter((_, idx) => idx !== i)
    })
  }

  function moveLeft(i) {
    if (i === 0) return
    setScreenshots(prev => {
      const current = Array.isArray(prev)
        ? [...prev]
        : (typeof prev === 'string' && prev ? [prev] : [])
      if (i <= 0 || i >= current.length) return current
        ;[current[i - 1], current[i]] = [current[i], current[i - 1]]
      return current
    })
  }

  function moveRight(i) {
    setScreenshots(prev => {
      const current = Array.isArray(prev)
        ? [...prev]
        : (typeof prev === 'string' && prev ? [prev] : [])
      if (i < 0 || i >= current.length - 1) return current
        ;[current[i], current[i + 1]] = [current[i + 1], current[i]]
      return current
    })
  }

  return (
    <div className="shot-manager">
      {/* upload drop zone */}
      <div
        className={`shot-drop${isDragging ? ' dragover' : ''}${isUploading ? ' loading' : ''}`}
        onClick={() => fileRef.current?.click()}
        onDragOver={e => { e.preventDefault(); setIsDragging(true) }}
        onDragLeave={e => { e.preventDefault(); setIsDragging(false) }}
        onDrop={e => {
          e.preventDefault()
          setIsDragging(false)
          if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            loadFiles(Array.from(e.dataTransfer.files))
          }
        }}
      >
        <i className="ti ti-photo-up" style={{ fontSize: 28, color: 'var(--text3)', display: 'block', marginBottom: 8 }} />
        <div style={{ fontSize: 13, color: 'var(--text2)' }}>
          {isUploading ? 'Processing images…' : 'Click or drag images here'}
        </div>
        <div style={{ fontSize: 11, color: 'var(--text3)', fontFamily: "'JetBrains Mono',monospace", marginTop: 4 }}>
          PNG, JPG, WEBP · select multiple at once
        </div>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={e => {
            if (e.target.files && e.target.files.length > 0) {
              const fileList = Array.from(e.target.files)
              loadFiles(fileList)
            }
            e.target.value = ''
          }}
        />
      </div>

      {/* thumbnail grid with reorder / remove controls */}
      {shots.length > 0 && (
        <div className="shot-thumb-grid">
          {shots.map((src, i) => (
            <div className="shot-thumb" key={i}>
              <img src={src} alt={`Screenshot ${i + 1}`} className="shot-thumb-img" />
              <div className="shot-thumb-overlay">
                <button
                  className="shot-thumb-btn"
                  onClick={() => moveLeft(i)}
                  disabled={i === 0}
                  title="Move left"
                >
                  <i className="ti ti-arrow-left" />
                </button>
                <button
                  className="shot-thumb-btn del"
                  onClick={() => remove(i)}
                  title="Remove"
                >
                  <i className="ti ti-trash" />
                </button>
                <button
                  className="shot-thumb-btn"
                  onClick={() => moveRight(i)}
                  disabled={i === shots.length - 1}
                  title="Move right"
                >
                  <i className="ti ti-arrow-right" />
                </button>
              </div>
              <div className="shot-thumb-num">{i + 1}</div>
            </div>
          ))}
        </div>
      )}
      {shots.length > 0 && (
        <div style={{ fontSize: 11, color: 'var(--text3)', fontFamily: "'JetBrains Mono',monospace", marginTop: 8 }}>
          {shots.length} image{shots.length !== 1 ? 's' : ''} · drag arrows to reorder
        </div>
      )}
    </div>
  )
}

/* ── MAIN PROJECTS COMPONENT ────────────────── */
export default function Projects({ projects, setProjects, isAdmin }) {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState(blank)
  const isEditing = Boolean(draft.id)

  function openAdd() {
    setDraft(blank)
    setOpen(true)
  }

  function openEdit(p) {
    let screenshots = []
    if (Array.isArray(p.screenshots)) {
      screenshots = p.screenshots.filter(Boolean)
    } else if (typeof p.screenshots === 'string' && p.screenshots) {
      screenshots = [p.screenshots]
    } else if (typeof p.screenshot === 'string' && p.screenshot) {
      screenshots = [p.screenshot]
    }
    setDraft({ ...p, screenshots })
    setOpen(true)
  }

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

  // migrate old single screenshot → array on render
  function getScreenshots(p) {
    if (!p) return []
    if (Array.isArray(p.screenshots) && p.screenshots.length > 0) return p.screenshots
    if (p.screenshot) return [p.screenshot]
    return []
  }

  const projList = Array.isArray(projects) ? projects : []

  return (
    <section id="projects" className="section">
      <div className="s-head">
        <div className="s-head-left">
          <div className="s-eyebrow">04 — Projects</div>
          <h2 className="s-title">What I've <span>built</span>.</h2>
        </div>
        {isAdmin && (
          <button className="s-edit-btn" onClick={openAdd}>
            <i className="ti ti-plus" /> Add project
          </button>
        )}
      </div>

      <div className="proj-grid">
        {projList.map(p => {
          if (!p) return null
          const imgs = getScreenshots(p)
          const tags = Array.isArray(p.tags) ? p.tags : []
          const statusStr = p.status ? String(p.status) : 'active'
          return (
            <div className="proj-card" key={p.id || Math.random()}>
              {/* ── CAROUSEL ── */}
              <Carousel images={imgs} />

              <div className="proj-body">
                <div className="proj-top">
                  <div className="proj-name">{p.name || 'Untitled Project'}</div>
                  <span className={`proj-status ${statusStr}`}>
                    {STATUS_LABEL[statusStr] || statusStr.toUpperCase()}
                  </span>
                </div>
                <div className="proj-desc">{p.desc}</div>
                <div className="proj-stack">
                  {tags.map(t => <span className="proj-tag" key={t}>{t}</span>)}
                </div>
                <div className="proj-links">
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="proj-link">
                      <i className="ti ti-external-link" /> View Project
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-link">
                      <i className="ti ti-brand-github" /> View Project
                    </a>
                  )}
                  {isAdmin && (
                    <button className="ibtn" style={{ marginLeft: 'auto' }} onClick={() => openEdit(p)}>
                      <i className="ti ti-edit" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {isAdmin && (
        <button className="add-proj" onClick={openAdd} style={{ marginTop: 16 }}>
          <i className="ti ti-plus" style={{ fontSize: 22 }} />
          <span>Add another project</span>
        </button>
      )}

      {isAdmin && (
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title={isEditing ? 'Edit project' : 'Add project'}
        >
          <label>Project name</label>
          <input
            value={draft.name}
            onChange={e => setDraft({ ...draft, name: e.target.value })}
            placeholder="e.g. CropPlanner"
          />

          <label>Description</label>
          <textarea
            value={draft.desc}
            onChange={e => setDraft({ ...draft, desc: e.target.value })}
            placeholder="What does it do?"
          />

          <label>Tech stack (Enter or comma to add)</label>
          <TagsInput
            tags={draft.tags}
            setTags={tags => setDraft({ ...draft, tags })}
            placeholder="Add tech…"
          />

          <label>Screenshots (multiple allowed)</label>
          <ScreenshotManager
            screenshots={draft.screenshots || []}
            setScreenshots={next => {
              setDraft(prevDraft => {
                const currentShots = Array.isArray(prevDraft.screenshots)
                  ? prevDraft.screenshots
                  : (typeof prevDraft.screenshots === 'string' && prevDraft.screenshots ? [prevDraft.screenshots] : [])
                const newShots = typeof next === 'function' ? next(currentShots) : next
                return { ...prevDraft, screenshots: newShots }
              })
            }}
          />

          <label>Demo URL</label>
          <input
            type="url"
            value={draft.demo}
            onChange={e => setDraft({ ...draft, demo: e.target.value })}
            placeholder="https://…"
          />

          <label>GitHub URL</label>
          <input
            type="url"
            value={draft.github}
            onChange={e => setDraft({ ...draft, github: e.target.value })}
            placeholder="https://github.com/…"
          />

          <label>Status</label>
          <select
            value={draft.status}
            onChange={e => setDraft({ ...draft, status: e.target.value })}
          >
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
