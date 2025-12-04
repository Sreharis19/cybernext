import React from 'react';
import app1 from '../assets/img/portfolio/why.jpeg';
import app2 from '../assets/img/portfolio/goals.jpeg';

const portfolioItems = [
  {
    id: 1,
    img: app1,
    title: 'Why NextAIFusion?',
    bullets: [
      'Agentic Automation Academy focused on real-world workflows, not just theory',
      'Built on applied R&D, including Innovate UK–funded SmartAirFusion for SME manufacturers',
      'Bridges the gap between operations, data and AI by combining product builds with talent development'
    ]
  },
  {
    id: 2,
    img: app2,
    title: 'Our Impact Goals',
    bullets: [
      'Equip 50+ builders, operators and leaders with agentic automation skills over the next 24 months',
      'Co-design and deploy pilot workflows that deliver measurable energy, productivity or quality gains',
      'Create reusable playbooks, templates and toolchains for manufacturing and knowledge-work use cases',
      'Grow an inclusive community of mentors, partners and alumni who can scale NextAIFusion across sectors and regions'
    ]
  }
];

const Portfolio = () => (
  <section id="portfolio" className="portfolio section">
    <div className="container section-title" data-aos="fade-up">
      <h2>NextAIFusion Highlights</h2>
      <p>What defines our academy, our products, and the impact we&apos;re aiming for.</p>
    </div>

    <div className="container">
      <div className="row gy-4 gx-4 justify-content-center">
        {portfolioItems.map((item) => (
          <div key={item.id} className="col-md-5" data-aos="fade-up">
            <div
              className="p-4 rounded-4 shadow-sm h-100"
              style={{
                backgroundColor: '#f8f9fa',
                borderLeft: '4px solid #ff4a17'
              }}
            >
              <h4 className="fw-semibold">{item.title}</h4>
              <ul className="mt-3 mb-0">
                {item.bullets.map((b, i) => (
                  <li key={i} className="text-muted">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
