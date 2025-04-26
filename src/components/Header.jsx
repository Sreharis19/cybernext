import React, { useEffect, useState } from 'react';

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
      className={`header d-flex align-items-center fixed-top ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="#hero" className="logo d-flex align-items-center me-auto">
          <h1 className="sitename">{sitename}</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="cta-btn" href="#contact">Contact</a>
      </div>
    </header>
  );
};

export default Header;
