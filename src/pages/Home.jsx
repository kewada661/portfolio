import { useContext } from 'react'
import { Outlet, Link } from 'react-router'

import gorilla from '../assets/portraiture/gorilla.png'
import pattern from '../assets/kazan/pattern.png'
import stomach from '../assets/boneboy/stomach.png'
import covers from '../assets/newsletters/covers.png'

import TransitionContext from '../context/TransitionContext'

export default function Home ({ ref }) {
  const { toggleContainerId } = useContext(TransitionContext)

  // const handleContainerClick = (id) => {
  //   containerRef.current = document.getElementById(id);
  //   // console.log(id);
  // }
    return (
    <>
      <div ref={ref}>
        <div className="thumbnailContainer" id="portraitureContainer">
          <Link to="/portraiture">
              <img src={gorilla} className="thumbnail portraiture" alt="Portraiture Thumbnail" />
          </Link>
        </div>
        <div className="thumbnailContainer" id="kazanContainer">
          <Link to="/kazan" >
           <img src={pattern} className="thumbnail kazan" alt="Kazan Thumbnail" />
          </Link>
        </div>
        <div className="thumbnailContainer" id="boneboyContainer">
          <Link to="/boneboy">
            <img src={stomach} className="thumbnail boneboy" alt="Boneboy Thumbnail" />
          </Link>
        </div>
        <div className="thumbnailContainer" id="newslettersContainer">
          <Link to="/newsletters">
            <img src={covers} className="thumbnail newsletters" alt="Newsletters Thumbnail" />
          </Link>
        </div>
      </div>
      <Outlet/>
    </>
  )
}