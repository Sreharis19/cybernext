import React, { useEffect, useState } from 'react';
import logoImg from '../assets/img/logo.png'; // if you're using the image logo

const Header = ({ sitename }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Handle header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync body class with mobile nav state (template expects this)
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-nav-active');
    };
  }, [mobileNavOpen]);

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    // Close mobile menu after clicking a link (only matters on small screens)
    if (window.innerWidth < 1200) {
      setMobileNavOpen(false);
    }
  };

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        {/* Logo */}
        <a href="/" className="logo d-flex align-items-center me-auto" onClick={handleNavClick}>
          {logoImg ? (
            <img
              src={logoImg}
              alt={sitename || 'NextAIFusion'}
              className="img-fluid"
              style={{ maxHeight: '40px' }}
            />
          ) : (
            <h1 className="sitename">{sitename}</h1>
          )}
        </a>

        {/* Nav */}
        <nav
          id="navmenu"
          className={`navmenu ${mobileNavOpen ? 'navmenu-active' : ''}`}
        >
          <ul>
            <li>
              <a href="/" className="active" onClick={handleNavClick}>
                Home
              </a>
            </li>
            <li>
              <a href="/#about" onClick={handleNavClick}>
                About
              </a>
            </li>
            <li>
              <a href="/#services" onClick={handleNavClick}>
                Services
              </a>
            </li>
            <li>
              <a href="/courses" onClick={handleNavClick}>
                Courses
              </a>
            </li>
          </ul>

          {/* Hamburger button */}
          <button
            type="button"
            className="mobile-nav-toggle d-xl-none"
            onClick={toggleMobileNav}
            aria-label="Toggle navigation"
          >
            <i className={mobileNavOpen ? 'bi bi-x' : 'bi bi-list'}></i>
          </button>
        </nav>

        <a className="cta-btn" href="#contact" onClick={handleNavClick}>
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;
