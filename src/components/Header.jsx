export default function Header () {
    return (
      <header>  
        <nav>
          <dl className="navList">
            <dt>
              {location.pathname != "/portfolio/about" ? <a href="/portfolio/about">About</a> : <div/> }
            </dt>
            <dt>
              {location.pathname != "/portfolio/" ? <a href="/portfolio/">Home</a> : <div/> }
            </dt>
          </dl>
        </nav>
      </header>
    )
}