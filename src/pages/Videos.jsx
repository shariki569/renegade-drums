import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SLOGAN } from '../constants'
import { VIDEO_TABS } from '../data/media.min.js'

export default function Videos() {
  const [activeTab, setActiveTab] = useState(VIDEO_TABS[0].id)
  const current = VIDEO_TABS.find((tab) => tab.id === activeTab) || VIDEO_TABS[0]

  return (
    <>
      <Helmet>
        <title>Videos | Renegade Drums and Percussions</title>
        <meta name="description" content={`Watch Renegade Drums and Percussions highlight videos — marching band and percussion play. ${SLOGAN}.`} />
      </Helmet>

      <main id="main" className="subpage">
        <div className="wrapper page_hero">
          <p className="page_eyebrow">Videos</p>
          <h1>Watch us play</h1>
          <p className="page_lead">Highlight clips from drills, street sets, and the Renegade sound.</p>
        </div>

        <div id="bottom3">
          <div className="wrapper btm3_con">
            <div className="btm3_info">
              <h2>Performance clips</h2>
              <div className="video_tabs" role="tablist" aria-label="Video categories">
                {VIDEO_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={tab.id === activeTab}
                    aria-controls={`panel-${tab.id}`}
                    className={tab.id === activeTab ? 'is_active' : undefined}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <div
              className="video_grid"
              role="tabpanel"
              id={`panel-${current.id}`}
              aria-labelledby={`tab-${current.id}`}
            >
              {current.clips.length > 0 ? (
                current.clips.map((clip) => (
                  <section key={clip.src} className="video_card">
                    <figure>
                      <video
                        src={clip.src}
                        poster={clip.poster}
                        controls
                        playsInline
                        preload="metadata"
                      />
                    </figure>
                    <h3>{clip.title}</h3>
                    <p>{clip.desc}</p>
                  </section>
                ))
              ) : (
                <p className="video_empty">{current.label} clips coming soon.</p>
              )}
            </div>
            <div className="hero_cta" style={{ marginTop: '2rem' }}>
              <Link className="btn_primary" to="/galleries">Browse galleries</Link>
              <Link className="btn_ghost" to="/">Back home</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
