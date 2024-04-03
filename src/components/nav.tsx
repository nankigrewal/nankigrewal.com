import * as React from 'react'
import { Link } from 'gatsby'
import '../components/backgrounds.css';

const NavBar = () => {
  return (
    <nav>
      <ul className="flex justify-center space-x-4 p-5 text-black">
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
