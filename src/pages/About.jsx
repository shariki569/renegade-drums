import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ADDRESS, EMAIL, FB_URL, PHONE, PHONE_TEL, SLOGAN } from '../constants'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Renegade Drums and Percussions</title>
        <meta name="description" content={`About Renegade Drums and Percussions — ${SLOGAN}. Local marching band and tribal percussion from Cebu City.`} />
      </Helmet>

      <main id="main" className="subpage">
        <div className="wrapper page_hero">
          <p className="page_eyebrow">About Us</p>
          <h1>Renegade Drums and Percussions</h1>
          <p className="page_lead">&ldquo;{SLOGAN}&rdquo;</p>
        </div>

        <div className="wrapper main_body">
          <article className="main_content">
            <h2>Who we are</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2>What we stand for</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <div className="hero_cta">
              <Link className="btn_primary" to="/galleries">View galleries</Link>
              <Link className="btn_ghost" to="/videos">Watch videos</Link>
            </div>
          </article>
          <aside className="main_side">
            <h3>Visit &amp; contact</h3>
            <p>{ADDRESS}</p>
            <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            <p><a href={`tel:${PHONE_TEL}`}>{PHONE}</a></p>
            <p><a href={FB_URL} target="_blank" rel="noopener noreferrer">Facebook page</a></p>
            <figure className="side_figure">
              <img src="https://images.unsplash.com/photo-1461360228754-6e81c26b440c?auto=format&fit=crop&w=900&q=80" alt="Marching band performers" width="600" height="400" />
            </figure>
          </aside>
        </div>
      </main>
    </>
  )
}