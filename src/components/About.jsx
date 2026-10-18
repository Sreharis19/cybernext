/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import aboutImg2 from '../assets/img/inoovate.png';
import AboutIllustration from './AboutIllustration';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          {/* Left column */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3>About Next AI Fusion</h3>
            <AboutIllustration />
            <p>
              Next AI Fusion is CyberNext&apos;s agentic automation initiative – bringing
              together multi-agent AI, workflow orchestration and real-world
              operations to help organisations move beyond simple scripts and
              into autonomous, explainable automation.
            </p>

            <p>
              We focus on applied, high-impact use cases where intelligent
              agents, IoT data and human-in-the-loop design can unlock both
              productivity and sustainability. That spans everything from
              agentic automation academies and upskilling programmes to
              full-stack AI products co-designed with industry partners.
            </p>
          </div>

          {/* Right column */}
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                Our Innovate UK–funded projects &amp; mission:
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle-fill"></i>{' '}
                  Delivering <strong>SmartAirFusion</strong>, an agentic
                  AI-driven compressed-air optimisation platform for SME
                  manufacturers – combining IoT sensors, edge–cloud analytics
                  and multi-agent reasoning to monitor, predict faults and
                  optimise systems in real time.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>{' '}
                  Helping UK factories cut compressed-air energy waste by
                  <strong> 10–30% per site</strong>, reduce CO₂ emissions and
                  meet tightening energy-efficiency and compliance pressures,
                  while keeping solutions affordable for SMEs.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>{' '}
                  Delivering <strong>AgentForge Talent Engine</strong>, which
                  helps SMEs recruit entry-level AI talent through real,
                  work-validated challenges – with live roles for candidates
                  on our job portal,{' '}
                  <a href="https://www.rjobs.co.uk" target="_blank" rel="noopener noreferrer">
                    rjobs.co.uk
                  </a>
                  .
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>{' '}
                  Turning this R&amp;D into practical learning and talent
                  pathways through Next AI Fusion – equipping operators,
                  engineers and technologists to design, deploy and govern
                  agentic AI workflows safely across manufacturing and beyond.
                </li>
              </ul>

              <p>
                Backed by Innovate UK, SmartAirFusion and AgentForge show how
                intelligent automation can drive real energy savings, new
                skills and Net Zero–aligned growth for UK industry.{' '}
                <a href="#projects">See our projects below</a>. NextAi Fusion is building on this foundation to
                create a portfolio of agentic automation products and learning
                experiences for the next generation of builders.
              </p>

              <div className="position-relative mt-4">
                <img
                  src={aboutImg2}
                  className="img-fluid rounded-4"
                  alt="About Next AI Fusion"
                />
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
