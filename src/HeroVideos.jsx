import { useEffect, useRef, useState } from 'react'
import { HERO_CLIPS } from './data/media'

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
    setActive((current) => (current + 1) % HERO_CLIPS.length)
  }

  const clip = HERO_CLIPS[active]

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
          {HERO_CLIPS.map((item, index) => (
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
