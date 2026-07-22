import { useEffect } from 'react'

const PROPERTY_ID = import.meta.env.VITE_TAWK_PROPERTY_ID
const WIDGET_ID = import.meta.env.VITE_TAWK_WIDGET_ID || 'default'

export default function TawkTo() {
  useEffect(() => {
    if (!PROPERTY_ID || document.getElementById('tawkto-script')) return

    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    const script = document.createElement('script')
    script.id = 'tawkto-script'
    script.async = true
    script.src = `https://embed.tawk.to/${PROPERTY_ID}/${WIDGET_ID}`
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')
    document.body.appendChild(script)
  }, [])

  return null
}
