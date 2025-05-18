/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import aboutImg1 from '../assets/img/about.jpg';
import aboutImg2 from '../assets/img/about-2.jpg';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3>Our Mission</h3>
            <img src={aboutImg1} className="img-fluid rounded-4 mb-4" alt="About" />
            <p>At CyberNext, we believe a secure and intelligent digital future is built on both innovation and inclusive opportunity. By combining advanced AI-driven workflow automation with deep cybersecurity expertise, we are bridging the talent gap and future-proofing the tech workforce.</p>

            <p>We are committed to empowering underrepresented groups — including women, career changers, and individuals from disadvantaged backgrounds — to succeed in high-growth fields like cybersecurity and AI systems engineering. Through locally-focused programs and hands-on training in secure automation, we help cultivate resilient regional tech ecosystems where everyone has a pathway to thrive.</p>

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                CyberNext is committed to:
              </p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i> Tackling the UK’s cybersecurity and intelligent automation skills shortage through hands-on, industry-relevant training.</li>
                <li><i className="bi bi-check-circle-fill"></i> Expanding access to high-growth tech careers — particularly in cybersecurity and AI — for women, career changers, and underrepresented individuals.</li>
                <li><i className="bi bi-check-circle-fill"></i> Strengthening regional cyber and AI ecosystems through inclusive, locally embedded programs.</li>
              </ul>
              <p>
                An innovation-led skills accelerator combining cybersecurity and AI-powered automation — designed to close the UK’s critical digital skills gaps while empowering diverse talent to lead in tomorrow’s tech landscape.
              </p>

              <div className="position-relative mt-4">
                <img src={aboutImg2} className="img-fluid rounded-4" alt="About Video" />
                {/* <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
