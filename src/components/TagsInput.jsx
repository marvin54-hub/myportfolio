import { useState } from 'react'

export default function TagsInput({ tags, setTags, placeholder = 'Add…' }) {
  const [val, setVal] = useState('')

  function add(raw) {
    const v = raw.trim()
    if (!v || tags.includes(v)) return
    setTags([...tags, v])
    setVal('')
  }

  function onKeyDown(e) {
    if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); add(val) }
    if (e.key === 'Backspace' && val === '' && tags.length) setTags(tags.slice(0, -1))
  }

  function onChange(e) {
    const v = e.target.value
    if (v.endsWith(',')) { add(v.slice(0, -1)) } else setVal(v)
  }

  return (
    <div className="tags-wrap" onClick={e => e.currentTarget.querySelector('input').focus()}>
      {tags.map(t => (
        <span className="t-chip" key={t}>
          {t}
          <button type="button" onClick={e => { e.stopPropagation(); setTags(tags.filter(x => x !== t)) }}>
            <i className="ti ti-x" />
          </button>
        </span>
      ))}
      <input value={val} placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown} />
    </div>
  )
}
