/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import working1 from '../assets/img/working-1.jpg';
import working2 from '../assets/img/working-2.jpg';
import working3 from '../assets/img/working-3.jpg';
import working4 from '../assets/img/working-4.jpg';

const tabs = [
  {
    id: 1,
    icon: 'bi-diagram-3',
    title: 'AI-Powered Workflow Orchestration',
    content:
      'At the core of NextAIFusion is an agentic automation framework that turns manual, spreadsheet-driven processes into intelligent workflows. We combine multi-agent AI, IoT data and human-in-the-loop controls so organisations can orchestrate safe, explainable automation across operations – from compressed-air optimisation to knowledge work.',
    image: working1,
    benefits: [
      'Trigger-driven automation from chat, sensors, alerts or APIs',
      'Context- and memory-aware agents that can reason across steps, not just run single tasks',
      'Secure tool integration for data processing, validation, enrichment and reporting',
      'Architectures that scale from pilot projects to production, aligned with compliance and industry standards'
    ]
  },
  {
    id: 2,
    icon: 'bi-box-seam',
    title: 'Mentorship & Talent Development',
    content:
      'NextAIFusion is not just a platform – it is an academy. We provide 1:1 and small-cohort mentorship for learners, professionals and founders who want to build and deploy agentic workflows in the real world, with a strong focus on energy, manufacturing and secure automation.',
    image: working2,
    benefits: [
      'Tailored learning paths in agentic AI, workflow design and data-aware automation',
      'Hands-on coaching using tools like n8n, vector databases and observability stacks',
      'Support on turning SmartAirFusion-style R&D projects into production-ready systems',
      'Inclusive mentoring for career-changers and underrepresented talent entering AI & automation'
    ]
  },
  {
    id: 3,
    icon: 'bi-brightness-high',
    title: 'Employer & Industry Engagement',
    content:
      'We actively connect NextAIFusion learners and builders with organisations who are ready to adopt agentic AI – from SME manufacturers to digital-first teams. Our goal is to close the gap between what industry needs and what the next generation of automation professionals can deliver.',
    image: working3,
    benefits: [
      'Partnerships with employers exploring AI-powered optimisation and industrial decarbonisation',
      'Showcasing of learner projects, including energy- and efficiency-focused automation pilots',
      'Talent pipelines for roles that blend operations, data and AI automation skills',
      'Co-designed use cases so organisations can trial agentic workflows with low risk and high learning value'
    ]
  },
  {
    id: 4,
    icon: 'bi-command',
    title: 'Hybrid Learning & Live Labs',
    content:
      'Our hybrid learning model blends self-paced content with live “build labs” where participants ship real workflows. From SmartAirFusion-style monitoring agents to multi-agent orchestration for back-office tasks, everything is anchored in practical, industry-grounded scenarios.',
    image: working4,
    benefits: [
      'Cohort-based courses on agent lifecycle management, orchestration patterns and monitoring',
      'Hands-on labs using real data sources (IoT, APIs, knowledge bases) and modern AI tooling',
      'Live sessions that connect technical concepts to Net Zero, productivity and workforce transformation goals',
      'Progress tracking that values both technical mastery and safe, responsible deployment practices'
    ]
  }
];

const Features = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="features" className="features section">
      <div className="container section-title" data-aos="fade-up">
        <h2>NextAIFusion Services</h2>
        <p>
          Agentic automation, academy programmes and industry partnerships –
          everything we do is geared towards building a practical, inclusive
          path into the next wave of AI-powered workflows.
        </p>
      </div>

      <div className="container">
        <ul
          className="nav nav-tabs row d-flex"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {tabs.map((tab) => (
            <li key={tab.id} className="nav-item col-3">
              <button
                className={`nav-link w-100 text-center ${
                  activeTab === tab.id ? 'active show' : ''
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={`bi ${tab.icon}`}></i>
                <h4 className="d-none d-lg-block">{tab.title}</h4>
              </button>
            </li>
          ))}
        </ul>

        <div
          className="tab-content"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane fade ${
                activeTab === tab.id ? 'active show' : ''
              }`}
            >
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>{tab.title}</h3>
                  <p className="fst-italic">{tab.content}</p>
                  <ul>
                    {tab.benefits.map((benefit, idx) => (
                      <li key={idx}>
                        <i className="bi bi-check2-all"></i> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src={tab.image}
                    alt={tab.title}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
