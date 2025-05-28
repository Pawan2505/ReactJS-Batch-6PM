import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-dark p-2 d-flex justify-content-between">
      <Link to="/" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        About
      </Link>
      <Link to="/services" style={{ textDecoration: "none" }}>
        Services
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        Contact Us
      </Link>
    </nav>
  );
}

export default Navbar