import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/main.css';

import favicon from './assets/img/favicon.png';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Clients from './components/Clients';
import Features from './components/Features';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import Preloader from './components/Preloader';

import Courses from './pages/Courses'; // ⬅️ new page

function Home() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Clients />
      <Features />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}

function App() {
  const sitename = 'NextAI Fusion';

  useEffect(() => {
    document.title = sitename;

    const setFavicon = (iconPath) => {
      let link = document.querySelector("link[rel*='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'shortcut icon';
        document.head.appendChild(link);
      }
      link.href = iconPath;
    };

    setFavicon(favicon);

    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, [sitename]);

  return (
    <>
      <Header sitename={sitename} />

      {/* Page content switches here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>

      <Footer />
      <ScrollTop />
      <Preloader />
    </>
  );
}

export default App;
