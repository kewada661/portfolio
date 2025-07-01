import { Outlet } from 'react-router'

import gorilla from '../assets/portraiture/gorilla.png'
import pattern from '../assets/kazan/pattern.png'
import stomach from '../assets/boneboy/stomach.png'
import covers from '../assets/newsletters/covers.png'

export default function Home () {
    return (
    <>
      <div>
        <h1 className="title">kendall wada</h1>
        <div className="thumbnailContainer">
          <a href="/portfolio/portraiture">
              <img src={gorilla} className="thumbnail portraiture" alt="Portraiture Thumbnail" />
          </a>
        </div>
        <div className="thumbnailContainer">
          <a href="/portfolio/kazan">
           <img src={pattern} className="thumbnail kazan" alt="Kazan Thumbnail" />
          </a>
        </div>
        <div className="thumbnailContainer">
          <a href="/portfolio/boneboy">
            <img src={stomach} className="thumbnail boneboy" alt="Boneboy Thumbnail" />
          </a>
        </div>
        <div className="thumbnailContainer">
          <a href="/portfolio/newsletters">
            <img src={covers} className="thumbnail newsletters" alt="Newsletters Thumbnail" />
          </a>
        </div>
      </div>
      <Outlet/>
    </>
  )
}