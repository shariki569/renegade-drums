import { useEffect, useRef, useState } from 'react'
import { AUDIO_SRC } from '../data/media'

function formatTime(sec) {
  if (!Number.isFinite(sec)) return '0:00'
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function AudioPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.55)

  useEffect(() => {
    const el = audioRef.current
    if (!el) return
    el.volume = volume
  }, [volume])

  useEffect(() => {
    const el = audioRef.current
    if (!el) return

    let unlocked = false

    function tryPlay() {
      if (!el || unlocked) return
      el.muted = false
      el.volume = volume
      return el.play()
        .then(() => {
          unlocked = true
          setPlaying(true)
        })
        .catch(() => {
          setPlaying(false)
        })
    }

    function unlock() {
      tryPlay()?.finally(() => {
        if (unlocked) {
          window.removeEventListener('pointerdown', unlock)
          window.removeEventListener('keydown', unlock)
        }
      })
    }

    tryPlay()
    window.addEventListener('pointerdown', unlock)
    window.addEventListener('keydown', unlock)

    return () => {
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
    }
  }, [])

  function togglePlay() {
    const el = audioRef.current
    if (!el) return
    if (el.paused) {
      el.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    } else {
      el.pause()
      setPlaying(false)
    }
  }

  function onSeek(e) {
    const el = audioRef.current
    if (!el) return
    const next = Number(e.target.value)
    el.currentTime = next
    setCurrent(next)
  }

  return (
    <div className="audio_bar" role="region" aria-label="Background music">
      <video
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        autoPlay
        playsInline
        preload="auto"
        className="audio_src"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 0)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime || 0)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      <div className="wrapper audio_bar_con">
        <button type="button" className="audio_play" onClick={togglePlay} aria-label={playing ? 'Pause music' : 'Play music'}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <div className="audio_meta">
          <p className="audio_label">Now playing · Renegade line</p>
          <div className="audio_progress">
            <span>{formatTime(current)}</span>
            <input
              type="range"
              className="audio_seek"
              min="0"
              max={duration || 0}
              step="0.1"
              value={current}
              onChange={onSeek}
              aria-label="Seek"
            />
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        <label className="audio_vol">
          <span>Vol</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            aria-label="Volume"
          />
        </label>
      </div>
    </div>
  )
}
