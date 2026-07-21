import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SLOGAN, VIDEO_CLIPS } from '../constants'

export default function Videos() {
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
              <p>Replace files in <code>public/videos/</code> with your own recordings when ready.</p>
            </div>
            <div className="video_grid">
              {VIDEO_CLIPS.map((clip) => (
                <section key={clip.src} className="video_card">

                  <video
                    src={clip.src}
                    poster={clip.poster}
                    controls
                    playsInline
                    preload="metadata"
                  />

                  <h3>{clip.title}</h3>
                  <p>{clip.desc}</p>
                </section>
              ))}
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