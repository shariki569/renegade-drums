import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Galleries from './pages/Galleries'
import Videos from './pages/Videos'
import Book from './pages/Book'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/galleries" element={<Galleries />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/book" element={<Book />} />
      </Route>
    </Routes>
  )
}

export default App