import React from 'react';
import { Link } from 'react-router-dom';
import innovateLogo from '../assets/img/inoovate.png';
import smartAirPoster from '../assets/img/projects/smartairfusion-poster.jpg';
import agentForgeLogo from '../assets/img/partners/agentforge-logo-white.png';

const smartAirStats = [
  { value: '96.8%', label: 'Leak-detection accuracy' },
  { value: '0', label: 'False positives across 35 no-leak cases' },
  { value: '< 87 s', label: 'Sensor-to-prediction latency' },
  { value: '£7k–£12.5k', label: 'Indicative annual savings (30 kW system)' }
];

const agentForgeHighlights = [
  'Work-Sample Bank of real SME challenges in data, automation and ML',
  'Frontier Tech Assessment Hub with collaborative SME hiring panels',
  'Agentic AI Recruitment Engine matching proven skills to local employers',
  'Live roles for candidates on our job portal, rjobs.co.uk'
];

const InnovateProjects = () => (
  <section id="projects" className="innovate-projects section light-background">
    <div className="container section-title" data-aos="fade-up">
      <h2>Our Innovate UK Projects</h2>
      <p>
        Funded R&amp;D that puts agentic AI to work – cutting energy waste in UK manufacturing
        and opening work-validated routes into frontier tech careers.
      </p>
    </div>

    <div className="container">
      <div className="text-center mb-5" data-aos="fade-up">
        <img src={innovateLogo} alt="Innovate UK" className="innovate-projects-logo" />
      </div>

      <div className="row gy-4">
        {/* SmartAirFusion */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div className="innovate-project-card h-100">
            <div className="row g-4">
              <div className="col-sm-5">
                <a
                  href={smartAirPoster}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="innovate-project-poster"
                  title="Open the full SmartAirFusion poster"
                >
                  <img src={smartAirPoster} alt="SmartAirFusion project research poster" className="img-fluid" />
                  <span><i className="bi bi-arrows-fullscreen"></i> View poster</span>
                </a>
              </div>
              <div className="col-sm-7">
                <span className="innovate-project-tag">Innovate UK Project 10169549</span>
                <h3>SmartAirFusion</h3>
                <p className="innovate-project-subtitle">
                  Agentic AI-driven compressed air optimisation for energy-efficient SME manufacturing.
                </p>
                <p>
                  UK manufacturing SMEs waste 20–40% of compressed-air energy through undetected leaks
                  and poor compressor sequencing. SmartAirFusion is a lightweight, explainable
                  multi-agent framework that works with sparse existing signals and keeps a human in
                  the loop for every decision.
                </p>
              </div>
            </div>

            <div className="row g-3 mt-2">
              {smartAirStats.map((s) => (
                <div key={s.label} className="col-6">
                  <div className="innovate-project-stat">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="innovate-project-note mt-3 mb-0">
              In partnership with Taka Digital, University of Bedfordshire and Anglia Ruskin University.
              Feasibility-stage results using the MetroPT-3 dataset and simulated SME scenarios.
            </p>
          </div>
        </div>

        {/* AgentForge */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div className="innovate-project-card h-100 d-flex flex-column">
            <div className="innovate-project-logo-band">
              <img src={agentForgeLogo} alt="AgentForge Talent Engine" />
            </div>
            <span className="innovate-project-tag align-self-start">TechFirst Local Fund grant recipient</span>
            <h3 className="visually-hidden">AgentForge Talent Engine</h3>
            <p className="innovate-project-subtitle">
              Bridging the UK&apos;s frontier-technology skills gap with work-validated hiring.
            </p>
            <p>
              AgentForge helps SMEs identify, assess and recruit entry-level AI talent. Instead of
              filtering CVs, candidates prove what they can do on real challenges co-developed with
              employers, delivered with Quantidium AI.
            </p>
            <a
              href="https://www.gov.uk/government/publications/techlocal/techfirst-local-fund-grant-recipients#next-ai-fusion-ltd"
              className="innovate-project-grant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-patch-check-fill"></i>
              <span>
                <strong>UK Government grant recipient</strong> – Next AI Fusion Ltd is listed on GOV.UK
                as a TechFirst Local Fund recipient: 30 local jobs in the East of England.{' '}
                <u>View on GOV.UK</u>
              </span>
            </a>
            <ul className="innovate-project-list">
              {agentForgeHighlights.map((h) => (
                <li key={h}>
                  <i className="bi bi-check2-all"></i> {h}
                </li>
              ))}
            </ul>

            <div className="d-flex flex-wrap gap-3 mt-auto pt-3">
              <Link to="/agentforge" className="innovate-project-btn">
                Explore AgentForge <i className="bi bi-arrow-right"></i>
              </Link>
              <a
                href="https://www.rjobs.co.uk"
                className="innovate-project-btn innovate-project-btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit rjobs.co.uk <i className="bi bi-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style>{`
      .innovate-projects-logo { max-width: 220px; width: 100%; height: auto; }
      .innovate-project-card {
        background: #fff;
        border-radius: 1rem;
        border-top: 4px solid #ff4a17;
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
        padding: 2rem;
      }
      .innovate-project-card h3 { font-weight: 700; margin: 0.5rem 0; }
      .innovate-project-tag {
        display: inline-block;
        font-size: 0.8rem;
        font-weight: 600;
        color: #ff4a17;
        background: rgba(255, 74, 23, 0.08);
        border-radius: 50px;
        padding: 0.25rem 0.75rem;
      }
      .innovate-project-logo-band {
        background: linear-gradient(135deg, #14172e 0%, #241a3d 100%);
        border-radius: 0.75rem;
        padding: 1.5rem 2rem;
        margin-bottom: 1.25rem;
        text-align: center;
      }
      .innovate-project-logo-band img { width: 100%; max-width: 320px; height: auto; }
      .innovate-project-subtitle { font-weight: 600; color: #444; margin-top: 0.75rem; }
      .innovate-project-poster {
        display: block;
        position: relative;
        border-radius: 0.75rem;
        overflow: hidden;
        border: 1px solid #e5e5e5;
        max-height: 340px;
      }
      .innovate-project-poster img { width: 100%; object-fit: cover; object-position: top; }
      .innovate-project-poster span {
        position: absolute;
        left: 0; right: 0; bottom: 0;
        padding: 0.5rem;
        text-align: center;
        font-size: 0.85rem;
        color: #fff;
        background: rgba(0, 0, 0, 0.6);
      }
      .innovate-project-stat {
        background: #f8f9fa;
        border-radius: 0.75rem;
        padding: 0.75rem 1rem;
        height: 100%;
      }
      .innovate-project-stat strong { display: block; font-size: 1.4rem; color: #ff4a17; }
      .innovate-project-stat span { font-size: 0.85rem; color: #666; }
      .innovate-project-note { font-size: 0.8rem; font-style: italic; color: #777; }
      .innovate-project-grant {
        display: flex;
        gap: 0.6rem;
        align-items: flex-start;
        background: rgba(255, 74, 23, 0.06);
        border-left: 3px solid #ff4a17;
        border-radius: 0.5rem;
        padding: 0.75rem 1rem;
        margin-bottom: 1rem;
        font-size: 0.9rem;
        color: #444;
      }
      .innovate-project-grant i { color: #ff4a17; font-size: 1.2rem; line-height: 1.2; }
      .innovate-project-grant:hover { color: #222; background: rgba(255, 74, 23, 0.1); }
      .innovate-project-list { list-style: none; padding: 0; }
      .innovate-project-list li { padding: 0.35rem 0 0.35rem 1.75rem; position: relative; }
      .innovate-project-list i { position: absolute; left: 0; top: 0.35rem; color: #ff4a17; font-size: 1.2rem; }
      .innovate-project-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.6rem 1.4rem;
        border-radius: 50px;
        font-weight: 600;
        background: #ff4a17;
        color: #fff;
        border: 2px solid #ff4a17;
      }
      .innovate-project-btn:hover { background: #e63e0f; border-color: #e63e0f; color: #fff; }
      .innovate-project-btn-outline { background: transparent; color: #ff4a17; }
      .innovate-project-btn-outline:hover { background: #ff4a17; color: #fff; }
    `}</style>
  </section>
);

export default InnovateProjects;
