// import { useState } from 'react'
import { Routes, Route } from 'react-router'

import './styles/App.css'
import Navigation from './Navigation.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import { Kazan, Portraiture, Boneboy, Newsletters } from './pages/Projects.jsx'


export default function App() {
  // const [count, setCount] = useState(0)
  return (
    <Routes>
      <Route path="/portfolio" element={<Home />} />
      <Route path="/portfolio/about" element={<About />} />
      <Route path="/portfolio/portraiture" element={<Portraiture />} />
      <Route path="/portfolio/kazan" element={<Kazan />} />
      <Route path="/portfolio/boneboy" element={<Boneboy />} />
      <Route path="/portfolio/newsletters" element={<Newsletters />} />
    </Routes>
  )
}

