import { Link } from "react-router"

export default function Header () {
  console.log(location);
  location.reload;
    return (
      <header>  
        <nav>
          <dl className="navList">
            <dt>
              {/* {location.hash == "#/about" ? <div/> : <Link to="/about">About</Link> } */}
              <Link to="/about">About</Link>
            </dt>
            <dt>
              {/* {location.hash == "#/" || location.hash == "" ? <div/> : <Link to="/">Home</Link> } */}
              <Link to="/">Home</Link>
            </dt>
          </dl>
        </nav>
      </header>
    )
}