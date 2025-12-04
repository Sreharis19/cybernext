import React, { useEffect, useState } from 'react';
import logoImg from '../assets/img/logo.png'; // ⬅️ add this import

const Header = ({ sitename }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        {/* Logo now uses an image instead of text */}
        <a href="/" className="logo d-flex align-items-center me-auto">
          <img
            src={logoImg}
            alt={sitename || 'NextAIFusion'}
            className="img-fluid"
            style={{ maxHeight: '40px' }} // adjust height as you like
          />
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="cta-btn" href="#contact">
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
