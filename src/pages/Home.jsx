import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import HeroVideos from '../HeroVideos'
import { FB_URL, EMAIL, PHONE, PHONE_TEL, SLOGAN } from '../constants'

const ABOUT_IMG = '/about-img.jpg'
const TRIBAL1 = '/pahugyaw-2026.jpg'
const TRIBAL2 = '/cmc-power-generators.jpg'
const TRIBAL3 = '/miss-kittymae-jewels.jpg'
const FEAT1 = '/feat1.jpg'
const FEAT2 = '/feat2.jpg'
const FEAT3 = '/feat3.jpg'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Renegade Drums and Percussions | Marching Band · Cebu City</title>
        <meta name="description" content={`Renegade Drums and Percussions — ${SLOGAN}. Marching band and tribal percussion for Sinulog and Cebu City events.`} />
      </Helmet>

      <main id="main">
        <section className="hero" aria-label="Performance highlights">
          <HeroVideos />
          <div className="hero_shade" aria-hidden="true"></div>
          <div className="wrapper hero_content">
            <h1 className="brand_name">Renegade Drums and Percussions</h1>
            <p className="hero_slogan">&ldquo;{SLOGAN}&rdquo;</p>
            <p className="hero_line">Cebu City Drum and Bugle Corps. &amp; tribal percussion — made for Sinulog, fiestas, and the street.</p>
            <div className="hero_cta">
              <Link className="btn_primary" to="/book">Book the band</Link>
              <Link className="btn_ghost" to="/about">About Us</Link>
            </div>
          </div>
        </section>

        <div className="wrapper main_body">
          <article className="main_content">
            <h2>Not a rock kit — a marching line</h2>
            <p>
              Renegade Drums and Percussions is a local Philippine marching band from Cebu City.
              Think parade cadence, Sinulog energy, field drills, fiestas, and processions — the sound of snare cracks,
              booming bass, sparkling lyre, and bright bugle calls cutting through the street.
            </p>
            <p>
              We line up the way a typical Pinoy banda does: double drums on the front line,
              bass drum and lyre at the center, bugles holding the back. Tight, loud, and made for the road.
            </p>
            <p>
              We also bring tribal percussion — barrel, djembe, hi-hats, cowbell, timbale, conga, and bongo —
              for cultural shows, school programs, and events that need that rooted pulse beyond the parade line.
            </p>
            <p><Link className="text_link" to="/about">Read more about us</Link> · <Link className="text_link" to="/galleries">See the gallery</Link> · <Link className="text_link" to="/videos">Watch videos</Link></p>
          </article>
          <aside className="main_side">
            <h3>Home base</h3>
            <p>1 Villagonzalo St<br />Cebu, Cebu City<br />Philippines</p>
            <figure className="side_figure">
              <img src={ABOUT_IMG} alt="Drumline marchers with snare drums" width="600" height="400" />
            </figure>
          </aside>
        </div>
      </main>

      <div id="bottom1">
        <div className="wrapper btm1_con">
          <div className="btm1_info">
            <h2>Where you'll hear us</h2>
            <p>From Sinulog roads to school fields — Renegade shows up loud, tight, and ready.</p>
          </div>
          <div className="btm1_boxes">
            <section>
              <figure>
                <img src={FEAT1} alt="Sinulog festival street performance" width="700" height="460" />
              </figure>
              <h3>Sinulog festivals</h3>
              <p>Cebu’s biggest celebration — we bring parade punch for Sinulog routes, contingency drills, and festival heat.</p>
            </section>
            <section>
              <figure>
                <img src={FEAT2} alt="Fiesta and civic parade performance" width="700" height="460" />
              </figure>
              <h3>Parades &amp; fiestas</h3>
              <p>Barangay fiestas, town celebrations, and civic marches that need that classic banda volume.</p>
            </section>
            <section>
              <figure>
                <img src={FEAT3} alt="School program and cultural show" width="700" height="460" />
              </figure>
              <h3>Schools &amp; shows</h3>
              <p>Campus programs, processions, and cultural stages — marching grit or tribal percussion on call.</p>
            </section>
          </div>
        </div>
      </div>

      <div id="bottom3">
        <div className="wrapper btm3_con">
          <div className="btm3_info">
            <h2>Tribal clients &amp; bookings</h2>
            <p>Tribal percussion sets for corporate launches, blessings, and special openings across Cebu.</p>
          </div>
          <div className="btm3_boxes">
            <section>
              <figure className="photo_slot">
                
                <img src={TRIBAL1} alt="Pahugyaw 2026" width="700" height="460" />
              </figure>
              <h3>Pahugyaw 2026</h3>
              <p>Cebu Landmasters, Inc. — held at Oakridge Pavilion.</p>
            </section>
            <section>
              <figure className="photo_slot">
                <img src={TRIBAL2} alt="CMC Power Generators" width="700" height="460" />
              </figure>
              <h3>CMC Power Generators</h3>
              <p>Ribbon-cutting ceremony and house blessing.</p>
            </section>
            <section>
              <figure className="photo_slot">
                <img src={TRIBAL3} alt="Miss Kittymae Jewels" width="700" height="460" />
              </figure>
              <h3>Miss Kittymae Jewels</h3>
              <p>Renegade Drums and Percussions brought the energy and excitement to Iino Day 2026 at Maribago Blue Water Resort!</p>
            </section>
          </div>
        </div>
      </div>

      <div id="bottom2">
        <div className="wrapper btm2_con">
          <div className="btm2_info">
            <h2>Book the banda</h2>
            <p>Sinulog festivals, parades, fiestas, school events, processions, and tribal percussion sets — reach out and we answer the call.</p>
            <div className="hero_cta">
              <Link className="btn_primary" to="/book">Open booking form</Link>
            </div>
          </div>
          <div className="btm2_flex">
            <section>
              <h3>Email</h3>
              <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            </section>
            <section>
              <h3>Phone</h3>
              <p><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></p>
            </section>
            <section>
              <h3>Social</h3>
              <p><a href={FB_URL} target="_blank" rel="noopener noreferrer">Facebook page</a></p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}