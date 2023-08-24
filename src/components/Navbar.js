import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HashLink as Link } from 'react-router-hash-link';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className="navbar navbar-expand-md navbar-light  fixed-top"
      style={{ backgroundColor: '#c9c5c3' }}
    >
      <div className="container">
        <a class="navbar-brand text-white" href="#home">
          <b>TAMILNADU TOURISM</b>
        </a>
        <button
          className="navbar-toggler text-white"
          type="button"
          onClick={handleNav}
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
        <div className={`collapse navbar-collapse ${nav ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto fw-bolder">
            <li className="nav-item">
              <Link smooth to="#home" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="#placetovisit" className="nav-link text-white">
                Place To Visit
              </Link>
            </li>

            <li className="nav-item">
              <Link
                smooth
                to="#besttimetovisit"
                className="nav-link text-white"
              >
                Best Time To Visit
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="#packages" className="nav-link text-white">
                Packages
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="#destination" className="nav-link text-white">
                Destination
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth to="#food" className="nav-link text-white">
                Food
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
