import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/main.css';

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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Clients />
        <Features />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
      <Preloader />
    </>
  );
}

export default App;
