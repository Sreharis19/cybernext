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
    content: 'At the heart of our platform lies a cutting-edge AI orchestration framework that leverages multi-agent systems to automate and streamline complex workflows. Built to integrate conversational triggers, memory-aware logic, and toolchain agents, this service allows organizations to transition from manual processes to intelligent, self-evolving automation pipelines — all while adhering to cybersecurity best practices for secure deployment.',
    image: working1,
    benefits: [
      'Trigger-driven automation using chat inputs, alerts, or APIs',
      'Persistent memory and contextual decision-making between agents',
      'Secure integration of tool agents for tasks like data processing, validation, and enrichment',
      'Customizable architecture that scales with business and compliance needs'
    ]
  },
  {
    id: 2,
    icon: 'bi-box-seam',
    title: 'Mentorship',
    content: 'We offer dedicated one-on-one mentorship designed for learners, professionals, and startups seeking to grow in AI, cybersecurity, or both. Our mentors guide participants in areas such as secure AI system design, ethical hacking with automation tools, multi-agent deployment strategies, and career alignment with the future of intelligent systems.',
    image: working2,
    benefits: [
      'Tailored learning paths in cybersecurity, AI architecture, and agent design',
      'Hands-on coaching in secure automation practices',
      'Mentorship in building production-grade, secure AI workflows',
      'Regular guidance from dual-discipline experts (AI + Cybersecurity)'
    ]
  },
  {
    id: 3,
    icon: 'bi-brightness-high',
    title: 'Employer Engagement',
    content: 'We actively bridge the gap between skilled talent and forward-thinking employers across cybersecurity and AI sectors. Through job fairs, hiring pipelines, and showcase events, we help employers connect with candidates proficient in workflow automation, multi-agent systems, and secure digital operations — competencies critical to modern enterprise infrastructure.',
    image: working3,
    benefits: [
      'Connections to employers seeking AI automation and cyber-aware professionals',
      'Showcasing of agent-powered solutions at employer meetups',
      'Access to candidates with dual expertise in orchestration and cybersecurity',
      'Preparation for roles involving secured infrastructure and intelligent tooling'
    ]
  },
  {
    id: 4,
    icon: 'bi-command',
    title: 'Hybrid Learning',
    content: 'Our hybrid learning model blends flexible online modules with live, hands-on instruction. Curriculum spans both cybersecurity and AI-powered systems, with labs focused on real-world applications such as securing AI pipelines, deploying ethical hacking simulations, and building agent-based workflow engines with end-to-end encryption and compliance.',
    image: working4,
    benefits: [
      'Courses on secure automation workflows and agent lifecycle management',
      'Hands-on labs in ethical hacking, secure tool integration, and model sandboxing',
      'Live sessions covering AI/cyber cross-functional practices and case studies',
      'Progress tracking tied to both technical mastery and security-readiness'
    ]
  }
];



const Features = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="features" className="features section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
      </div>
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
