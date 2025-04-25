import React from 'react';
import heroBg from '../assets/img/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <img src={heroBg} alt="Hero Background" data-aos="fade-in" />

      <div className="container d-flex flex-column align-items-center">
        <h2 data-aos="fade-up" data-aos-delay="100">Welcome to CyberNext</h2>
        <p data-aos="fade-up" data-aos-delay="200">Building the Future of Inclusive Cybersecurity Talent</p>
        <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
          <a href="#about" className="btn-get-started">Learn More</a>
        </div> 
      </div>
    </section>
  );
};

export default Hero;
