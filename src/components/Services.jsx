/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import ModalComponent from './ModalComponent';

const services = [
  {
    id: 1,
    icon: 'bi-robot',
    title: 'AI Agent Building Workshops',
    description: 'Hands-on sessions teaching how to develop intelligent task agents and virtual assistants, tailored for workplace automation.'
  },
  {
    id: 2,
    icon: 'bi-gear-wide-connected',
    title: 'Multi-Agent AI Fusion Solutions',
    description: 'Collaborative systems combining several AI agents to automate complex workflows across different environments.',
    details: [
      'Semi-independent agents making real-time decisions based on context',
      'Enhanced adaptability in business logic and systems orchestration'
    ]
  },
  {
    id: 3,
    icon: 'bi-clipboard2-pulse',
    title: 'AI-Based Automation & Workflow Streamlining',
    description: 'Intelligent automation offerings to streamline IT operations, automate repetitive tasks, and build custom workflows using visual builders.'
  },
  {
    id: 4,
    icon: 'bi-lightning-charge',
    title: 'Advanced AI Fusion Capabilities',
    details: [
      'Contextual Awareness: Multi-agent frameworks adapting to real-time input',
      'Goal-Oriented Collaboration: Agents negotiating, prioritizing, and co-developing outcomes',
      'Cross-Domain Integration: Fusion across cybersecurity, healthcare, property, aerospace'
    ]
  },
  {
    id: 5,
    icon: 'bi-bezier',
    title: 'R&D-Driven Innovation Modules',
    details: [
      'AI in Drug Discovery: ML tools for compound screening, predictive modeling, bioinformatics',
      'Smart Property Management Systems: Predictive maintenance, energy optimization, tenant experience automation',
      'AI in Satellite Engineering: Enhanced data processing, fault detection, autonomous mission planning'
    ]
  },
  {
    id: 6,
    icon: 'bi-emoji-smile',
    title: 'Human Factors & Behaviour Change',
    details: [
      'Behaviour Change',
      'Co-creation',
      'Behavioural Economics',
      'User Personas',
      'Ethics',
      'Cognitive & Psychosocial',
      'Cyberpsychology'
    ]
  },
  {
    id: 7,
    icon: 'bi-shield-lock',
    title: 'Trust Management that People Embrace',
    details: [
      'Risk Management',
      'Conformity Assessment',
      'Sectoral Security',
      'AI Trustworthiness',
      'Incident Handling',
      'Self-Audit',
      'Cybersecurity Training'
    ]
  },
  {
    id: 8,
    icon: 'bi-bar-chart-line',
    title: 'Business & Research Innovation',
    details: [
      'Business Plans',
      'Project Management',
      'Financial Monitoring',
      'Innovation Research',
      'Standard & Legislations',
      'Communication Strategies',
      'Customized Training'
    ]
  }
];

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <section id="services" className="services-2 section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Emerging Services</h2>
        <p>In addition to our core training programme, We also provide:</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((svc, idx) => (
            <div
              key={svc.id}
              className="col-md-6"
              data-aos="fade-up"
              data-aos-delay={`${100 * (idx + 1)}`}
              onClick={() => handleOpenModal(svc)}
              style={{ cursor: 'pointer' }}
            >
              <div className="service-item d-flex position-relative h-100">
                <i className={`bi ${svc.icon} icon flex-shrink-0`}></i>
                <div>
                  <h4 className="title"><a href="#" className="stretched-link" onClick={(e) => e.preventDefault()}>{svc.title}</a></h4>
                  {svc.description && <p className="description">{svc.description}</p>}
                  {svc.details && (
                    <ul className="description ps-3">
                      {svc.details.map((detail, didx) => (
                        <li key={didx}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ModalComponent
          show={showModal}
          handleClose={handleCloseModal}
          content={selectedService}
        />
      )}
    </section>
  );
};

export default Services;
