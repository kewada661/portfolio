import { Outlet, Link } from 'react-router'

import gorilla from '../assets/portraiture/gorilla.png'
import pattern from '../assets/kazan/pattern.png'
import stomach from '../assets/boneboy/stomach.png'
import covers from '../assets/newsletters/covers.png'

export default function Home ({ ref }) {
    return (
    <>
      <div ref={ref}>
        <div className="thumbnailContainer">
          <Link to="/portraiture">
              <img src={gorilla} className="thumbnail portraiture" alt="Portraiture Thumbnail" />
          </Link>
        </div>
        <div className="thumbnailContainer">
          <Link to="/kazan">
           <img src={pattern} className="thumbnail kazan" alt="Kazan Thumbnail" />
          </Link>
        </div>
        <div className="thumbnailContainer">
          <Link to="/boneboy">
            <img src={stomach} className="thumbnail boneboy" alt="Boneboy Thumbnail" />
          </Link>
        </div>
        <div className="thumbnailContainer">
          <Link to="/newsletters">
            <img src={covers} className="thumbnail newsletters" alt="Newsletters Thumbnail" />
          </Link>
        </div>
      </div>
      <Outlet/>
    </>
  )
}