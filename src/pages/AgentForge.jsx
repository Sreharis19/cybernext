/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import challengeImg from '../assets/img/services-1.jpg';
import workSampleImg from '../assets/img/working-2.jpg';
import assessmentHubImg from '../assets/img/about-2.jpg';
import engineImg from '../assets/img/services-3.jpg';
import impactImg from '../assets/img/working-4.jpg';

import techfirstLogo from '../assets/img/partners/techfirst-lockup-black.png';

const solutionTabs = [
  {
    id: 1,
    icon: 'bi-kanban',
    title: 'Work-Sample Bank',
    tagline: 'Real work, not a CV line.',
    content:
      'Participants complete real-world technical challenges co-developed with SMEs — data analysis, automation workflows, machine learning experimentation and digital modelling. Every output is stored in a structured Work-Sample Bank, giving employers transparent, verifiable evidence of what a candidate can actually do.',
    image: workSampleImg,
    points: [
      'Practical challenges mirror genuine SME problems, not abstract tests',
      'Structured, comparable evidence of capability — not just a qualification',
      'Portfolio grows with every completed challenge, ready to share with employers'
    ]
  },
  {
    id: 2,
    icon: 'bi-people',
    title: 'Frontier Tech Assessment Hub',
    tagline: 'SMEs shape the challenges, then review the talent.',
    content:
      'SMEs contribute industry-specific challenges and sit on collaborative hiring panels to review candidate portfolios together. This lets employers observe real performance in a practical context before ever making an offer — reducing recruitment risk and replacing guesswork with evidence.',
    image: assessmentHubImg,
    points: [
      'Employer-authored challenges keep assessment grounded in real industry needs',
      'Collaborative panels bring multiple SMEs together to review talent pools',
      'Lower-risk hiring — capability is observed before employment begins'
    ]
  },
  {
    id: 3,
    icon: 'bi-cpu',
    title: 'Agentic AI Recruitment Engine',
    tagline: 'Infrastructure that matches capability to opportunity.',
    content:
      'A new recruitment infrastructure built around Agentic AI systems moves hiring away from CV-based filtering and toward work-validated pathways — matching demonstrated skills to the SMEs that need them, and coordinating structured cohorts of early-career talent with local employers.',
    image: engineImg,
    points: [
      'Agentic AI systems support matching, scheduling and structured cohort delivery',
      'Built and operated by Next AI Fusion and Quantidium AI',
      'Designed to scale across regions and sectors as a repeatable blueprint'
    ]
  }
];

const processSteps = [
  {
    icon: 'bi-clipboard-data',
    step: '01',
    title: 'Complete Real Challenges',
    description:
      'Candidates tackle practical AI tasks — data analysis, automation, ML experimentation and digital modelling — built with SME input.'
  },
  {
    icon: 'bi-kanban',
    step: '02',
    title: 'Build a Work-Sample Portfolio',
    description:
      'Every completed challenge is captured in the Work-Sample Bank as verifiable, comparable evidence of technical capability.'
  },
  {
    icon: 'bi-people',
    step: '03',
    title: 'SME Hiring Panel Review',
    description:
      'Local employers review portfolios through collaborative hiring panels at the Frontier Tech Assessment Hub — before any offer is made.'
  },
  {
    icon: 'bi-briefcase',
    step: '04',
    title: 'Matched, Mentored & Hired',
    description:
      'Candidates are matched with SMEs adopting frontier technology, supported by structured mentoring into their first tech role.'
  }
];

const policyTags = [
  'Modern Industrial Strategy',
  'AI Opportunities Action Plan',
  'Growth and Skills Levy',
  'Local Skills Improvement Plans',
  'UK Government AI Labour Market Survey 2025'
];

const AgentForgeContactForm = () => {
  const [state, handleSubmit] = useForm('xyzrpwvk');

  if (state.succeeded) {
    return (
      <p className="alert alert-success mt-3">
        Thanks for your interest in AgentForge Talent Engine! We&apos;ll be in touch shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="php-email-form">
      <div className="row gy-4">
        <div className="col-md-6">
          <label htmlFor="af-name" className="form-label">Your Name</label>
          <input id="af-name" type="text" name="name" className="form-control" required />
        </div>

        <div className="col-md-6">
          <label htmlFor="af-email" className="form-label">Email Address</label>
          <input id="af-email" type="email" name="email" className="form-control" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="col-md-6">
          <label htmlFor="af-role" className="form-label">I am a&hellip;</label>
          <select id="af-role" name="role" className="form-select">
            <option value="">Select an option</option>
            <option value="SME / Employer">SME / Employer wanting to hire or set a challenge</option>
            <option value="Candidate">Graduate / career-switcher wanting to join a cohort</option>
            <option value="Partner">Delivery or funding partner</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="af-org" className="form-label">Organisation (if applicable)</label>
          <input id="af-org" type="text" name="organisation" className="form-control" />
        </div>

        <div className="col-12">
          <label htmlFor="af-message" className="form-label">Message</label>
          <textarea id="af-message" name="message" className="form-control" rows="5" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <div className="col-12 text-end">
          <button type="submit" className="btn btn-primary" disabled={state.submitting}>
            Get in touch
          </button>
        </div>
      </div>
    </form>
  );
};

const AgentForge = () => {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main agentforge-page">
      {/* HERO */}
      <section id="agentforge-hero" className="agentforge-hero dark-background">
        <div className="agentforge-hero-chevrons" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="container position-relative">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9" data-aos="fade-up">
              <span className="agentforge-badge">
                <i className="bi bi-chevron-right"></i> Funded under the TechFirst programme
              </span>
              <h1 className="mt-4">AgentForge Talent Engine</h1>
              <p className="agentforge-hero-subtitle">
                Bridging the UK&apos;s frontier-technology skills gap — enabling SMEs to identify,
                assess and recruit entry-level AI talent through Agentic AI-powered, work-validated
                hiring pathways.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3 mt-4" data-aos="fade-up" data-aos-delay="150">
                <a href="#solution" className="btn-get-started">See how it works</a>
                <a href="#contact" className="agentforge-btn-outline">Partner with us</a>
              </div>
            </div>
          </div>

          {/* KPI strip */}
          <div className="row agentforge-stats gy-4 mt-5" data-aos="fade-up" data-aos-delay="200">
            <div className="col-md-4">
              <div className="agentforge-stat-card">
                <div className="agentforge-stat-number">97%</div>
                <p>of UK organisations report gaps in AI and technical skills</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="agentforge-stat-card">
                <div className="agentforge-stat-number">35%</div>
                <p>of employers struggle to fill roles due to candidates lacking practical experience</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="agentforge-stat-card">
                <div className="agentforge-stat-number">0</div>
                <p>CVs required to prove capability — candidates are assessed on demonstrated work</p>
              </div>
            </div>
          </div>
          <p className="agentforge-stat-source" data-aos="fade-up" data-aos-delay="250">
            Source: UK Government AI Labour Market Survey 2025
          </p>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section id="challenge" className="agentforge-challenge section">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <span className="agentforge-eyebrow"><i className="bi bi-chevron-right"></i> The Challenge</span>
              <h2 className="agentforge-h2">A growing disconnect between talent and SME opportunity</h2>
              <p>
                The UK is facing a growing disconnect between early-career talent and the needs of SMEs
                adopting frontier technologies such as Artificial Intelligence. Many SMEs lack the
                resources to create entry-level roles or structured training, so graduates and
                career-switchers often struggle to secure their first technology role.
              </p>
              <p>
                Traditional recruitment relies heavily on academic qualifications or prior experience,
                creating a persistent barrier between talent and employment — even as demand for
                software developers, data professionals and IT business analysts keeps growing.
              </p>
              <ul className="agentforge-checklist">
                <li><i className="bi bi-check-circle-fill"></i> SMEs lack the resources to build structured entry-level pathways</li>
                <li><i className="bi bi-check-circle-fill"></i> CV-first hiring filters out capable graduates and career-switchers</li>
                <li><i className="bi bi-check-circle-fill"></i> Bootcamps build skills but rarely bridge into real employment</li>
              </ul>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
              <div className="agentforge-image-frame">
                <img src={challengeImg} className="img-fluid" alt="SME team analysing skills and hiring data" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section id="solution" className="agentforge-solution features section light-background">
        <div className="container section-title" data-aos="fade-up">
          <span className="agentforge-eyebrow"><i className="bi bi-chevron-right"></i> The Solution</span>
          <h2>AgentForge Talent Engine</h2>
          <p>
            An Agentic AI-enabled recruitment infrastructure that replaces CV-based filtering with
            work-validated hiring — built by Next AI Fusion and Quantidium AI.
          </p>
        </div>

        <div className="container">
          <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay="100">
            {solutionTabs.map((tab) => (
              <li key={tab.id} className="nav-item col-4">
                <button
                  type="button"
                  className={`nav-link w-100 text-center ${activeTab === tab.id ? 'active show' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <i className={`bi ${tab.icon}`}></i>
                  <h4 className="d-none d-lg-block">{tab.title}</h4>
                </button>
              </li>
            ))}
          </ul>

          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            {solutionTabs.map((tab) => (
              <div key={tab.id} className={`tab-pane fade ${activeTab === tab.id ? 'active show' : ''}`}>
                <div className="row align-items-center">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>{tab.title}</h3>
                    <p className="fst-italic">{tab.tagline}</p>
                    <p>{tab.content}</p>
                    <ul>
                      {tab.points.map((pt, idx) => (
                        <li key={idx}><i className="bi bi-check2-all"></i> {pt}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <div className="agentforge-image-frame">
                      <img src={tab.image} alt={tab.title} className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="agentforge-process services-2 section">
        <div className="container section-title" data-aos="fade-up">
          <span className="agentforge-eyebrow"><i className="bi bi-chevron-right"></i> How It Works</span>
          <h2>From first challenge to first job</h2>
          <p>A structured, work-based pathway from technical challenge to full-time employment.</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {processSteps.map((step, idx) => (
              <div
                key={step.title}
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={`${100 * (idx + 1)}`}
              >
                <div className="service-item d-flex position-relative h-100 flex-column">
                  <span className="agentforge-step-number">{step.step}</span>
                  <i className={`bi ${step.icon} icon flex-shrink-0`}></i>
                  <h4 className="title">{step.title}</h4>
                  <p className="description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="agentforge-impact section light-background">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="150">
              <div className="agentforge-image-frame">
                <img src={impactImg} className="img-fluid" alt="Early-career professionals celebrating a successful hiring outcome" />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up">
              <span className="agentforge-eyebrow"><i className="bi bi-chevron-right"></i> Why It Matters</span>
              <h2 className="agentforge-h2">A blueprint for the UK&apos;s frontier tech workforce</h2>
              <p>
                By enabling individuals to demonstrate real-world AI capability while helping SMEs
                access skilled talent, AgentForge creates new entry-level jobs, accelerates AI
                adoption across the SME economy, and supports regional workforce development.
              </p>
              <ul className="agentforge-checklist">
                <li><i className="bi bi-check-circle-fill"></i> New entry-level jobs in frontier technology sectors</li>
                <li><i className="bi bi-check-circle-fill"></i> Faster AI adoption across the local SME economy</li>
                <li><i className="bi bi-check-circle-fill"></i> A scalable model designed to expand across regions and sectors</li>
                <li><i className="bi bi-check-circle-fill"></i> A sustainable, domestic pipeline of frontier technology talent</li>
              </ul>

              <div className="agentforge-tags mt-4">
                {policyTags.map((tag) => (
                  <span key={tag} className="agentforge-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY PARTNERS */}
      <section id="partners" className="agentforge-partners section">
        <div className="container section-title" data-aos="fade-up">
          <span className="agentforge-eyebrow"><i className="bi bi-chevron-right"></i> Delivered By</span>
          <h2>Built by an experienced delivery team</h2>
          <p>Combining AI platform development, data science and applied analytics.</p>
        </div>

        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-5 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="agentforge-partner-card h-100">
                <span className="agentforge-partner-role">Lead Partner</span>
                <h3 className="agentforge-partner-name">Next AI Fusion</h3>
                <p>
                  Building on flagship work including SmartAirFusion: Agentic AI-Driven Compressed Air
                  Optimisation, Next AI Fusion leads the design of the AgentForge digital platform and
                  coordinates SME engagement across cohorts.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="agentforge-partner-card h-100">
                <span className="agentforge-partner-role">Delivery Partner</span>
                <h3 className="agentforge-partner-name">Quantidium AI</h3>
                <p>
                  Bringing deep expertise in data science and applied analytics, Quantidium AI
                  supports the design of work-sample challenges and the assessment infrastructure
                  behind the Frontier Tech Assessment Hub.
                </p>
              </div>
            </div>
          </div>

          <div className="agentforge-funding-strip mt-5" data-aos="fade-up" data-aos-delay="300">
            <p className="agentforge-funding-caption">AgentForge Talent Engine is delivered as part of</p>
            <img
              src={techfirstLogo}
              alt="Funded by UK Government — TechFirst"
              className="agentforge-funding-logo"
            />
          </div>
        </div>
      </section>

      {/* CONTACT / GET INVOLVED */}
      <section id="contact" className="agentforge-contact contact section light-background">
        <div className="container section-title" data-aos="fade-up">
          <span className="agentforge-eyebrow"><i className="bi bi-chevron-right"></i> Get Involved</span>
          <h2>Join AgentForge</h2>
          <p>
            Whether you&apos;re an SME ready to set a challenge and hire, or a graduate or
            career-switcher ready to prove what you can do — tell us a little about yourself.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center mb-5">
            <div className="col-md-6 col-lg-4">
              <div className="info-item text-center h-100">
                <i className="bi bi-briefcase" style={{ display: 'block', margin: '0 auto' }}></i>
                <h3>For SMEs</h3>
                <p>Contribute a challenge, join a hiring panel, or take on work-validated talent.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="info-item text-center h-100">
                <i className="bi bi-mortarboard" style={{ display: 'block', margin: '0 auto' }}></i>
                <h3>For Candidates</h3>
                <p>Complete real challenges, build your Work-Sample portfolio, and get matched to a local SME.</p>
              </div>
            </div>
          </div>

          <div className="row gy-4 justify-content-center">
            <div className="col-lg-8">
              <AgentForgeContactForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .agentforge-hero {
          position: relative;
          min-height: 100vh;
          padding: 150px 0 90px 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          background: radial-gradient(120% 140% at 15% 10%, #2a1660 0%, #14092e 45%, #05030f 100%);
        }
        .agentforge-hero > .container { width: 100%; }
        @media (max-width: 768px) {
          .agentforge-hero { min-height: unset; padding: 130px 0 70px 0; }
        }
        .agentforge-hero-chevrons {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .agentforge-hero-chevrons span {
          position: absolute;
          border-style: solid;
          border-width: 40px 0 40px 60px;
          border-color: transparent transparent transparent rgba(94, 209, 221, 0.12);
        }
        .agentforge-hero-chevrons span:nth-child(1) { top: 8%; right: 6%; transform: scale(2.4); }
        .agentforge-hero-chevrons span:nth-child(2) { bottom: 4%; right: 22%; transform: scale(1.4) rotate(8deg); border-color: transparent transparent transparent rgba(113, 71, 220, 0.18); }
        .agentforge-hero-chevrons span:nth-child(3) { top: 40%; left: -4%; transform: scale(1.8) rotate(-6deg); border-color: transparent transparent transparent rgba(158, 238, 242, 0.08); }

        .agentforge-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #cdb8ff;
          background: color-mix(in srgb, #7147DC, transparent 78%);
          border: 1px solid color-mix(in srgb, #9EEEF2, transparent 55%);
        }
        .agentforge-badge i { color: #5ED1DD; }

        .agentforge-hero h1 {
          font-family: var(--heading-font);
          font-size: 52px;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
        }
        @media (max-width: 768px) {
          .agentforge-hero h1 { font-size: 34px; }
        }
        .agentforge-hero-subtitle {
          max-width: 720px;
          margin: 18px auto 0 auto;
          font-size: 18px;
          color: color-mix(in srgb, #ffffff, transparent 20%);
        }

        .agentforge-hero .btn-get-started {
          background: linear-gradient(90deg, #5ED1DD, #9EEEF2);
          color: #0b1330;
          font-weight: 700;
          font-size: 16px;
          letter-spacing: normal;
          display: inline-flex;
          align-items: center;
          padding: 12px 30px;
          border-radius: 50px;
          border: 2px solid transparent;
          transition: 0.3s;
          text-transform: none;
          box-shadow: 0 10px 26px rgba(94, 209, 221, 0.25);
        }
        .agentforge-hero .btn-get-started:hover {
          background: linear-gradient(90deg, #9EEEF2, #5ED1DD);
          color: #0b1330;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(94, 209, 221, 0.35);
        }

        .agentforge-btn-outline {
          display: inline-flex;
          align-items: center;
          font-size: 16px;
          padding: 12px 28px;
          border-radius: 50px;
          border: 2px solid #ffffff;
          color: #ffffff;
          font-weight: 600;
          transition: 0.3s;
        }
        .agentforge-btn-outline:hover {
          background: #ffffff;
          color: #14092e;
        }

        .agentforge-stats { --bs-gutter-x: 1.5rem; }
        .agentforge-stat-card {
          height: 100%;
          padding: 28px 22px;
          border-radius: 14px;
          text-align: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(4px);
        }
        .agentforge-stat-card p {
          margin: 8px 0 0 0;
          color: color-mix(in srgb, #ffffff, transparent 15%);
          font-size: 14.5px;
          line-height: 1.5;
        }
        .agentforge-stat-number {
          font-family: var(--heading-font);
          font-size: 46px;
          font-weight: 800;
          background: linear-gradient(90deg, #5ED1DD, #9EEEF2);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .agentforge-stat-source {
          text-align: center;
          margin: 20px 0 0 0;
          font-size: 12.5px;
          color: color-mix(in srgb, #ffffff, transparent 45%);
        }

        .agentforge-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--accent-color);
          margin-bottom: 12px;
        }
        .agentforge-eyebrow i { color: #7147DC; }

        .agentforge-h2 {
          font-family: var(--heading-font);
          font-weight: 800;
          color: var(--heading-color);
          margin-bottom: 18px;
        }

        .agentforge-image-frame {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 18px 40px rgba(20, 9, 46, 0.15);
        }
        .agentforge-image-frame img { display: block; width: 100%; }
        .agentforge-image-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 18px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
        }

        .agentforge-checklist { list-style: none; padding: 0; margin: 18px 0 0 0; }
        .agentforge-checklist li { padding-bottom: 12px; display: flex; align-items: flex-start; gap: 10px; }
        .agentforge-checklist i { color: var(--accent-color); margin-top: 4px; flex-shrink: 0; }

        .agentforge-step-number {
          position: absolute;
          top: 18px;
          right: 22px;
          font-family: var(--heading-font);
          font-size: 26px;
          font-weight: 800;
          color: color-mix(in srgb, var(--default-color), transparent 88%);
        }

        .agentforge-tags { display: flex; flex-wrap: wrap; gap: 10px; }
        .agentforge-tag {
          font-size: 12.5px;
          font-weight: 600;
          padding: 7px 14px;
          border-radius: 30px;
          background: color-mix(in srgb, #4E259E, transparent 92%);
          color: #4E259E;
          border: 1px solid color-mix(in srgb, #4E259E, transparent 78%);
        }

        .agentforge-partner-card {
          padding: 34px 30px;
          border-radius: 16px;
          background: var(--surface-color);
          border: 1px solid color-mix(in srgb, var(--default-color), transparent 88%);
          transition: 0.3s;
        }
        .agentforge-partner-card:hover {
          border-color: var(--accent-color);
          transform: translateY(-4px);
        }
        .agentforge-partner-role {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--accent-color);
          margin-bottom: 8px;
        }
        .agentforge-partner-name {
          font-family: var(--heading-font);
          font-weight: 800;
          margin-bottom: 12px;
          color: var(--heading-color);
        }

        .agentforge-funding-strip {
          text-align: center;
          padding: 46px 24px;
          border-radius: 16px;
          background: var(--surface-color);
          border: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
        }
        .agentforge-funding-caption {
          margin: 0 0 22px 0;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: color-mix(in srgb, var(--default-color), transparent 35%);
        }
        .agentforge-funding-logo {
          width: 100%;
          max-width: 380px;
          height: auto;
        }
      `}</style>
    </main>
  );
};

export default AgentForge;
