import React from 'react';
import defaultHeroBg from '../assets/img/hero-bg.jpg';

const Hero = ({
  id = 'hero',
  title = 'Welcome to Nextaifusion',
  subtitle = 'Building the Future of Inclusive Agentic AI Talent',
  ctaLabel = 'Learn More',
  ctaHref = '#about',
  background
}) => {
  const bg = background || defaultHeroBg;

  return (
    <section id={id} className="hero section dark-background">
      <img src={bg} alt="Hero Background" data-aos="fade-in" />

      <div className="container d-flex flex-column align-items-center">
        <h2 data-aos="fade-up" data-aos-delay="100">{title}</h2>
        <p data-aos="fade-up" data-aos-delay="200">{subtitle}</p>

        {ctaLabel && ctaHref && (
          <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
            <a href={ctaHref} className="btn-get-started">
              {ctaLabel}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
