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
            <p>At CyberNext, we believe that a secure digital future is built on diverse talent and innovation. We are dedicated to closing the cybersecurity skills gap by empowering underrepresented groups, including women, career changers, and individuals from disadvantaged backgrounds, to thrive in high-growth tech careers. </p>
            <p>Through our locally-focused initiatives, we aim to support the growth of regional cybersecurity ecosystems, ensuring inclusive and accessible opportunities for all. Together, we can shape a more secure and equitable digital world.</p>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
              CyberNext is committed to:
              </p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i> Addressing the acute cybersecurity skills shortage in the UK.</li>
                <li><i className="bi bi-check-circle-fill"></i> Enabling access to high-growth tech careers for women, career changers, and individuals from disadvantaged backgrounds.</li>
                <li><i className="bi bi-check-circle-fill"></i> Supporting regional cyber ecosystem growth through inclusive, locally embedded delivery.</li>
              </ul>
              <p>
              An innovation-led cybersecurity skills accelerator designed to bridge the UK's critical digital skills gaps while empowering under-represented communities.
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
