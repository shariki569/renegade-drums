import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ADDRESS, BOOKING_EMAIL, EMAIL, FB_URL, PHONE, PHONE_TEL, SLOGAN } from '../constants'

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  location: '',
  message: '',
}

export default function Book() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')

  function update(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email.'
    if (!form.phone.trim()) next.phone = 'Phone is required.'
    if (!form.eventType) next.eventType = 'Select an event type.'
    if (!form.eventDate) next.eventDate = 'Event date is required.'
    if (!form.location.trim()) next.location = 'Location is required.'
    if (!form.message.trim()) next.message = 'Tell us a bit about the booking.'
    return next
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const next = validate()
    if (Object.keys(next).length) {
      setErrors(next)
      setStatus('idle')
      setSubmitError('')
      return
    }

    setErrors({})
    setSubmitError('')
    setStatus('sending')

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${BOOKING_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Renegade booking: ${form.eventType} — ${form.name}`,
          _template: 'table',
          name: form.name,
          email: form.email,
          phone: form.phone,
          eventType: form.eventType,
          eventDate: form.eventDate,
          location: form.location,
          message: form.message,
        }),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === 'false' || data.success === false) {
        throw new Error(data.message || 'Could not send booking request.')
      }

      setStatus('sent')
      setForm(INITIAL)
    } catch (err) {
      setStatus('error')
      setSubmitError(err.message || 'Something went wrong. Try again or email us directly.')
    }
  }

  return (
    <>
      <Helmet>
        <title>Book Us | Renegade Drums and Percussions</title>
        <meta name="description" content={`Book Renegade Drums and Percussions — ${SLOGAN}. Marching band and tribal percussion for Cebu events.`} />
      </Helmet>

      <main id="main" className="subpage">
        <div className="wrapper page_hero">
          <p className="page_eyebrow">Book Us</p>
          <h1>Book the banda</h1>
          <p className="page_lead">Sinulog, fiestas, parades, school events, and tribal sets — send a request and we&rsquo;ll get back to you.</p>
        </div>

        <div className="wrapper main_body">
          <article className="main_content">
            <h2>Booking request</h2>
            <p>Fill in the form and we&rsquo;ll email your request to the band.</p>

            {status === 'sent' && (
              <p className="form_success" role="status">
                Request received — the line&rsquo;s locked in. We&rsquo;ll hit you back soon with the details. Keep the beat ready.
              </p>
            )}

            {status === 'error' && (
              <p className="form_error form_banner" role="alert">{submitError}</p>
            )}

            <form className="book_form" onSubmit={handleSubmit} noValidate>
              <div className="form_row">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={update} aria-invalid={!!errors.name} disabled={status === 'sending'} />
                {errors.name && <span className="form_error">{errors.name}</span>}
              </div>

              <div className="form_grid">
                <div className="form_row">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={update} aria-invalid={!!errors.email} disabled={status === 'sending'} />
                  {errors.email && <span className="form_error">{errors.email}</span>}
                </div>
                <div className="form_row">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update} aria-invalid={!!errors.phone} disabled={status === 'sending'} />
                  {errors.phone && <span className="form_error">{errors.phone}</span>}
                </div>
              </div>

              <div className="form_grid">
                <div className="form_row">
                  <label htmlFor="eventType">Event type</label>
                  <select id="eventType" name="eventType" value={form.eventType} onChange={update} aria-invalid={!!errors.eventType} disabled={status === 'sending'}>
                    <option value="">Select type</option>
                    <option value="sinulog">Sinulog / festival</option>
                    <option value="parade">Parade / procession</option>
                    <option value="fiesta">Fiesta</option>
                    <option value="school">School event</option>
                    <option value="tribal">Tribal percussion</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.eventType && <span className="form_error">{errors.eventType}</span>}
                </div>
                <div className="form_row">
                  <label htmlFor="eventDate">Event date</label>
                  <input id="eventDate" name="eventDate" type="date" value={form.eventDate} onChange={update} aria-invalid={!!errors.eventDate} disabled={status === 'sending'} />
                  {errors.eventDate && <span className="form_error">{errors.eventDate}</span>}
                </div>
              </div>

              <div className="form_row">
                <label htmlFor="location">Event location</label>
                <input id="location" name="location" type="text" placeholder="Venue or city" value={form.location} onChange={update} aria-invalid={!!errors.location} disabled={status === 'sending'} />
                {errors.location && <span className="form_error">{errors.location}</span>}
              </div>

              <div className="form_row">
                <label htmlFor="message">Details</label>
                <textarea id="message" name="message" rows="5" placeholder="Date window, package preference, guest count, etc." value={form.message} onChange={update} aria-invalid={!!errors.message} disabled={status === 'sending'} />
                {errors.message && <span className="form_error">{errors.message}</span>}
              </div>

              <button className="btn_primary" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send request'}
              </button>
            </form>
          </article>

          <aside className="main_side">
            <h3>Or reach us directly</h3>
            <p>{ADDRESS}</p>
            <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            <p><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></p>
            <p><a href={FB_URL} target="_blank" rel="noopener noreferrer">Facebook page</a></p>
          </aside>
        </div>
      </main>
    </>
  )
}
