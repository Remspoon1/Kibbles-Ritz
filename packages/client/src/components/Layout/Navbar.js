import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h3>
        <Link to='/'> Home </Link>
      </h3>
      <ul>
        <li><Link to="/map">Map</Link></li>
        <li><Link to='/signup'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar