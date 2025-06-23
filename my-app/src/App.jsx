import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import gorilla from './assets/portraiture/gorilla.png'
import pattern from './assets/kazan/pattern.png'
import stomach from './assets/boneboy/stomach.png'
import covers from './assets/newsletters/covers.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>kendall wada</h1>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <div className="thumbnailContainer">
          <img src={gorilla} className="thumbnail portraiture" alt="Portraiture Thumbnail" />
        </div>
        <div className="thumbnailContainer">
          <img src={pattern} className="thumbnail kazan" alt="Kazan Thumbnail" />
        </div>
        <div className="thumbnailContainer">
          <img src={stomach} className="thumbnail boneboy" alt="Boneboy Thumbnail" />
        </div>
        <div className="thumbnailContainer">
          <img src={covers} className="thumbnail newsletters" alt="Newsletters Thumbnail" />
        </div>      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR. Hello World!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
