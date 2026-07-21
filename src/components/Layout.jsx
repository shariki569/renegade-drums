import { Link, NavLink, Outlet } from 'react-router-dom'
import { FB_URL, SLOGAN } from '../constants'
import mainLogo from '../assets/main-logo.jpg'
import AudioPlayer from './AudioPlayer'

export default function Layout() {
  return (
    <div className="page">
      <header id="banner">
        <div className="wrapper banner_con">
          <Link className="logo" to="/" aria-label="Renegade Drums and Percussions home">
            <figure className="logo_figure">
              <img src={mainLogo} alt="Renegade Drums" width="64" height="64" />
            </figure>
            <span className="logo_text">Renegade Drums</span>
          </Link>
          <nav className="banner_nav" aria-label="Primary">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/galleries">Galleries</NavLink>
            <NavLink to="/videos">Videos</NavLink>
            <NavLink to="/book">Book Us</NavLink>
          </nav>
        </div>
      </header>

      <div id="middle">
        <div className="wrapper middle_con">
          <nav className="middle_nav" aria-label="Secondary">
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/galleries">Galleries</NavLink>
            <NavLink to="/videos">Videos</NavLink>
            <NavLink to="/book">Book Us</NavLink>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer">Facebook</a>
          </nav>
        </div>
      </div>

      <Outlet />

      <footer id="footer">
        <div className="wrapper footer_con">
          <div className="footer_info">
            <p className="footer_brand">Renegade Drums and Percussions</p>
            <p className="footer_slogan">&ldquo;{SLOGAN}&rdquo;</p>
            <p className="footer_meta">1 Villagonzalo St, Cebu City · Marching Band &amp; Tribal Percussion</p>
            <nav className="footer_nav" aria-label="Footer">
              <Link to="/about">About Us</Link>
              <Link to="/galleries">Galleries</Link>
              <Link to="/videos">Videos</Link>
              <Link to="/book">Book Us</Link>
            </nav>
            <p className="footer_copy">&copy; {new Date().getFullYear()} Renegade Drums and Percussions. All rights reserved.</p>
          </div>
          <figure className="footer_logo">
            <img src={mainLogo} alt="Renegade Drums logo" width="120" height="120" />
          </figure>
        </div>
      </footer>

      <AudioPlayer />
    </div>
  )
}
