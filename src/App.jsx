import { useRef } from 'react'
import { Routes, Route } from 'react-router'

import './styles/App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import { Kazan, Portraiture, Boneboy, Newsletters } from './pages/Projects.jsx'
import { TransitionProvider } from './context/TransitionContext.jsx'
import TransitionComponent from './components/Transition.jsx'


export default function App() {
  // const [count, setCount] = useState(0)
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portraitureRef = useRef(null);
  const kazanRef = useRef(null);
  const boneboyRef = useRef(null);
  const newslettersRef = useRef(null);

  return (
    <TransitionProvider>
      <Routes>
        <Route
          path="/" 
          element={
            <TransitionComponent nodeRef={homeRef}>
                <Home ref={homeRef}/>
            </TransitionComponent>
          } 
        />
        <Route 
          path="/portfolio/" 
          element={
            <TransitionComponent nodeRef={homeRef}>
                <Home ref={homeRef}/>
            </TransitionComponent>
          } 
        />
        <Route 
          path="/about" 
          element={
            <TransitionComponent nodeRef={aboutRef}>
                <About ref={aboutRef}/>
            </TransitionComponent>
          } 
        />
        <Route 
          path="/portraiture" 
          element={
            <TransitionComponent nodeRef={portraitureRef}>
                <Portraiture ref={portraitureRef}/>
            </TransitionComponent>
          } 
        />
        <Route 
          path="/kazan" 
          element={
            <TransitionComponent nodeRef={kazanRef}>
                <Kazan ref={kazanRef}/>
            </TransitionComponent>
          } 
        />
        <Route 
          path="/boneboy" 
          element={
            <TransitionComponent nodeRef={boneboyRef}>
                <Boneboy ref={boneboyRef}/>
            </TransitionComponent>
          } 
        />
        <Route 
          path="/newsletters" 
          element={
            <TransitionComponent nodeRef={newslettersRef}>
                <Newsletters ref={newslettersRef}/>
            </TransitionComponent>
          } 
        />
      </Routes>
    </TransitionProvider>

  )
}

