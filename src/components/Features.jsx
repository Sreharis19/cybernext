import React, { useState } from 'react';
import working1 from '../assets/img/working-1.jpg';
import working2 from '../assets/img/working-2.jpg';
import working3 from '../assets/img/working-3.jpg';
import working4 from '../assets/img/working-4.jpg';

const tabs = [
  {
    id: 1,
    icon: 'bi-binoculars',
    title: 'Cyber Bootcamps',
    content: 'Entry-level training in cybersecurity fundamentals, ethical hacking, and AI-driven security',
    image: working1,
    benefits: [
      'Hands-on labs and real-world scenarios',
      'Career-ready portfolio projects',
      'Certification exam preparation'
    ]
  },
  {
    id: 2,
    icon: 'bi-box-seam',
    title: 'Mentorship',
    content: 'One-on-one support from cybersecurity professionals',
    image: working2,
    benefits: [
      'Personalised career guidance',
      'Industry networking opportunities',
      'Continuous skill development plans'
    ]
  },
  {
    id: 3,
    icon: 'bi-brightness-high',
    title: 'Employer Engagement',
    content: 'Direct job placement support, recruitment fairs, and career events.',
    image: working3,
    benefits: [
      'Direct introductions to hiring managers',
      'Access to exclusive job listings',
      'Preparation workshops for interviews'
    ]
  },
  {
    id: 4,
    icon: 'bi-command',
    title: 'Hybrid Learning',
    content: 'Flexible delivery that blends online modules and in-person sessions.',
    image: working4,
    benefits: [
      'Self-paced online materials',
      'Interactive in-person workshops',
      'Seamless progress tracking'
    ]
  }
];

const Features = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="features" className="features section">
      <div className="container">
        <ul className="nav nav-tabs row d-flex" data-aos="fade-up" data-aos-delay="100">
          {tabs.map(tab => (
            <li key={tab.id} className="nav-item col-3">
              <button
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
          {tabs.map(tab => (
            <div
              key={tab.id}
              className={`tab-pane fade ${activeTab === tab.id ? 'active show' : ''}`}
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
                  <img src={tab.image} alt={tab.title} className="img-fluid" />
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
