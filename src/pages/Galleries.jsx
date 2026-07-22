import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import GalleryGrid from '../components/GalleryGrid'
import { SLOGAN } from '../constants'
import { DRUM_BUGLE_GALLERY, SINULOG_GALLERY, TRIBAL_GALLERY } from '../data/media'

export default function Galleries() {
  return (
    <>
      <Helmet>
        <title>Galleries | Renegade Drums and Percussions</title>
        <meta name="description" content={`Photo galleries of Renegade Drums and Percussions — marching band, tribal percussion, and Sinulog 2025 bookings. ${SLOGAN}.`} />
      </Helmet>

      <main id="main" className="subpage">
        <div className="wrapper page_hero">
          <p className="page_eyebrow">Galleries</p>
          <h1>Moments on the line</h1>
          <p className="page_lead">Parade snaps, drumline heat, and tribal percussion energy from the Renegade crew.</p>
        </div>

        <div id="bottom4">
          <div className="wrapper btm4_con">
            <div className="btm4_info">
              <h2>Renegade Drums and Percussions Sinulog 2025 Bookings</h2>
              <p>Real Renegade moments for Sinulog 2025 — book the band for Cebu&rsquo;s biggest festival season.</p>
            </div>
            <GalleryGrid items={SINULOG_GALLERY} className="btm4_boxes gallery_grid" label="Sinulog 2025 gallery" />
            <div className="hero_cta" style={{ marginTop: '1.75rem' }}>
              <Link className="btn_primary" to="/book">Book for Sinulog 2025</Link>
            </div>
          </div>
        </div>

        <div id="bottom1">
          <div className="wrapper btm1_con">
            <div className="btm1_info">
              <h2>Drum and Bugle</h2>
              <p>Parade lines, snare cracks, and bugle calls from the Renegade marching corps.</p>
            </div>
            <GalleryGrid items={DRUM_BUGLE_GALLERY} className="btm1_boxes gallery_grid" label="Drum and Bugle gallery" />
          </div>
        </div>

        <div id="bottom3">
          <div className="wrapper btm3_con">
            <div className="btm3_info">
              <h2>Tribal Percussions</h2>
              <p>Barrel, djembe, and rooted pulse from cultural shows and special bookings.</p>
            </div>
            <GalleryGrid items={TRIBAL_GALLERY} className="btm3_boxes gallery_grid" label="Tribal Percussions gallery" />
            <div className="hero_cta" style={{ marginTop: '2rem' }}>
              <Link className="btn_primary" to="/videos">Watch videos</Link>
              <Link className="btn_ghost" to="/about">About Us</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
