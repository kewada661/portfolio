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
      <Route path="/" element={<Home />} />
      <Route path="/portfolio/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portraiture" element={<Portraiture />} />
      <Route path="/kazan" element={<Kazan />} />
      <Route path="/boneboy" element={<Boneboy />} />
      <Route path="/newsletters" element={<Newsletters />} />
    </Routes>
  )
}

