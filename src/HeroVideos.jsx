import { useEffect, useRef, useState } from 'react'

const HIGHLIGHTS = [
  {
    src: '/videos/highlight-1.mp4',
    poster: 'https://images.unsplash.com/photo-1461360228754-6e81c26b440c?auto=format&fit=crop&w=1600&q=80',
    label: 'On the march',
  },
  {
    src: '/videos/highlight-2.mp4',
    poster: 'https://images.unsplash.com/photo-1571333252851-f59ed4b7f4f8?auto=format&fit=crop&w=1600&q=80',
    label: 'Drumline drive',
  },
  {
    src: '/videos/highlight-3.mp4',
    poster: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1600&q=80',
    label: 'Bugle & brass',
  },
  {
    src: '/videos/highlight-4.mp4',
    poster: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1600&q=80',
    label: 'Bugle & brass',
  },
]

export default function HeroVideos() {
  const [active, setActive] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.load()
    const play = video.play()
    if (play && typeof play.catch === 'function') play.catch(() => {})
  }, [active])

  function goTo(index) {
    setActive(index)
  }

  function handleEnded() {
    setActive((current) => (current + 1) % HIGHLIGHTS.length)
  }

  const clip = HIGHLIGHTS[active]

  return (
    <div className="hero_videos" aria-label="Performance highlight videos">
      <div className="hero_figure">
        <video
          key={clip.src}
          ref={videoRef}
          className="hero_video"
          src={clip.src}
          poster={clip.poster}
          muted
          playsInline
          autoPlay
          preload="auto"
          onEnded={handleEnded}
        />
      </div>
      <div className="hero_video_meta">
        <p className="hero_video_label">{clip.label}</p>
        <div className="hero_video_dots" role="tablist" aria-label="Highlight clips">
          {HIGHLIGHTS.map((item, index) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Play clip: ${item.label}`}
              className={index === active ? 'is_active' : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}