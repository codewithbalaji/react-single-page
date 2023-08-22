import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HashLink as Link } from 'react-router-hash-link';
import img from '../assets/img.png';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light  fixed-top bg-light ">
      <div className="container">
        <img className="small-logo bg-light" src={img} alt="" />
        <button
          className="navbar-toggler text-dark"
          type="button"
          onClick={handleNav}
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
        <div className={`collapse navbar-collapse ${nav ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto fw-bolder">
            <li className="nav-item">
              <Link smooth to="#home" className="nav-link text-dark">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="#career" className="nav-link text-dark">
                Career
              </Link>
            </li>

            <li className="nav-item">
              <Link smooth to="#about" className="nav-link text-dark">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="#contact" className="nav-link text-dark">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;