import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const INIT = { from_name: '', from_email: '', subject: '', message: '' }

export default function ContactForm() {
  const formRef = useRef(null)
  const [fields, setFields]   = useState(INIT)
  const [status, setStatus]   = useState(null)   // null | 'sending' | 'success' | 'error'
  const [errMsg, setErrMsg]   = useState('')

  function onChange(e) {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function onSubmit(e) {
    e.preventDefault()

    // Basic validation
    if (!fields.from_name.trim() || !fields.from_email.trim() || !fields.message.trim()) {
      setStatus('error')
      setErrMsg('Please fill in all required fields.')
      return
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.from_email)
    if (!emailOk) {
      setStatus('error')
      setErrMsg('Please enter a valid email address.')
      return
    }

    setStatus('sending')
    setErrMsg('')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      setFields(INIT)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setErrMsg('Something went wrong. Please try emailing me directly.')
    }
  }

  return (
    <div className="contact-form-wrap">
      <div className="contact-form-title">Send me a message</div>
      <div className="contact-form-sub">
        Fill in the form below and I'll get back to you as soon as possible.
      </div>

      <form ref={formRef} onSubmit={onSubmit} noValidate>
        <div className="form-grid">

          <div className="form-field">
            <label htmlFor="cf-name">Your name *</label>
            <input
              id="cf-name"
              type="text"
              name="from_name"
              value={fields.from_name}
              onChange={onChange}
              placeholder="Jane Smith"
              autoComplete="name"
            />
          </div>

          <div className="form-field">
            <label htmlFor="cf-email">Your email *</label>
            <input
              id="cf-email"
              type="email"
              name="from_email"
              value={fields.from_email}
              onChange={onChange}
              placeholder="jane@example.com"
              autoComplete="email"
            />
          </div>

          <div className="form-field full">
            <label htmlFor="cf-subject">Subject</label>
            <input
              id="cf-subject"
              type="text"
              name="subject"
              value={fields.subject}
              onChange={onChange}
              placeholder="e.g. Job opportunity, Collaboration, Hello…"
            />
          </div>

          <div className="form-field full">
            <label htmlFor="cf-message">Message *</label>
            <textarea
              id="cf-message"
              name="message"
              value={fields.message}
              onChange={onChange}
              placeholder="Tell me what you have in mind…"
            />
          </div>

        </div>

        <div className="form-submit-row">
          {/* Status messages */}
          {status === 'success' && (
            <span className="form-status success">
              <i className="ti ti-circle-check" /> Message sent! I'll be in touch soon.
            </span>
          )}
          {status === 'error' && (
            <span className="form-status error">
              <i className="ti ti-alert-circle" /> {errMsg}
            </span>
          )}
          {!status && <span />}

          <button
            type="submit"
            className={`btn-v primary${status === 'sending' ? ' loading' : ''}`}
          >
            {status === 'sending' ? (
              <>
                <i className="ti ti-loader spin" /> Sending…
              </>
            ) : (
              <>
                <i className="ti ti-send" /> Send message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
