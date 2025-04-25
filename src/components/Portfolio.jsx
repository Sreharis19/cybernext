import React from 'react';
import app1 from '../assets/img/portfolio/why.jpeg';
import app2 from '../assets/img/portfolio/goals.jpeg';

const portfolioItems = [
  {
    id: 1,
    img: app1,
    title: 'Why CyberNext?',
    bullets: [
      'Endorsed by the Cyber Local Steering Group (East of England)',
      'Complements national initiatives like CyberFirst by focusing on adult learners',
      'Delivers scalable, replicable models of inclusive digital training'
    ]
  },
  {
    id: 2,
    img: app2,
    title: 'Our Impact Goals',
    bullets: [
      'Equip 30-50 individuals with job-ready cybersecurity skills',
      'Develop replicable curriculum and toolkits',
      'Build a sustainable, community-led mentorship network',
      'Support at least two additional Cyber Local regions within 24 months'
    ]
  }
];

const Portfolio = () => (
  <section id="portfolio" className="portfolio section">
    <div className="container section-title" data-aos="fade-up">
      <h2>CyberNext Highlights</h2>
      <p>Discover what sets us apart and where we're headed</p>
    </div>

    <div className="container">
      <div className="row gy-4 gx-4 justify-content-center">
        {portfolioItems.map(item => (
          <div key={item.id} className="col-md-5" data-aos="fade-up">
            <div
              className="p-4 rounded-4 shadow-sm h-100"
              style={{ backgroundColor: '#f8f9fa', borderLeft: '4px solid #ff4a17' }}
            >
              <h4 className="fw-semibold">{item.title}</h4>
              <ul className="mt-3 mb-0">
                {item.bullets.map((b, i) => (
                  <li key={i} className="text-muted">{b}</li>
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
