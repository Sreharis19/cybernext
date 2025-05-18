/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import ModalComponent from './ModalComponent';

const services = [
  {
    id: 1,
    icon: 'bi-chat-dots',
    title: 'Conversational Workflow Initiation',
    description: 'Trigger automated workflows from natural language inputs using intelligent chat agents.',
    details: [
      'Real-time response to incoming messages',
      'Routing based on intent detection and classification',
      'Serves as entry point for downstream logic'
    ]
  },
  {
    id: 2,
    icon: 'bi-gear-wide-connected',
    title: 'Multi-Agent AI Fusion Framework',
    description: 'Deploy collaborative AI agents to orchestrate complex operational workflows across systems.',
    details: [
      'Semi-autonomous decision making across agents',
      'Real-time orchestration of memory, tools, and models'
    ]
  },
  {
    id: 3,
    icon: 'bi-cpu',
    title: 'Dynamic Task Automation Engine',
    description: 'Leverage modular AI tools to execute defined tasks with precision and contextual awareness.',
    details: [
      'Tool agents for task-specific processing',
      'Parallelized and sequential task execution models',
      'Customizable workflows per business logic'
    ]
  },
  {
    id: 4,
    icon: 'bi-collection',
    title: 'Persistent Context Memory System',
    description: 'Maintain memory across sessions to preserve context, state, and intent history.',
    details: [
      'Context retention between workflow steps',
      'Supports both temporary and long-term memory modes',
      'Enables richer, more coherent automation'
    ]
  },
  {
    id: 5,
    icon: 'bi-diagram-3',
    title: 'Modular Toolchain Integration',
    description: 'Attach, remove, or swap workflow tools seamlessly without disrupting core architecture.',
    details: [
      'Plug-and-play support for validation, enrichment, storage, etc.',
      'Optional agents can be toggled on/off',
      'Maintains loose coupling across tools'
    ]
  },
  {
    id: 6,
    icon: 'bi-database-add',
    title: 'Automated Data Capture & Insertion',
    description: 'AI agents extract key information and insert into databases or structured knowledge stores.',
    details: [
      'Auto-maps extracted content to schema',
      'Supports MongoDB, SQL, and cloud storage',
      'Ensures data persistence and traceability'
    ]
  },
  {
    id: 7,
    icon: 'bi-patch-check',
    title: 'Quality Assurance Validation Agent',
    description: 'An optional QA layer to validate outputs before final delivery or storage.',
    details: [
      'Rule-based or model-driven validation',
      'Supports custom business logic checks',
      'Can be deactivated without impacting pipeline'
    ]
  },
  {
    id: 8,
    icon: 'bi-book',
    title: 'Knowledge Base Enhancement Agent',
    description: 'An auxiliary tool to enrich workflows using internal or external knowledge repositories.',
    details: [
      'Pulls relevant knowledge context into workflows',
      'Improves decision accuracy with reference data',
      'Supports static and dynamic knowledge bases'
    ]
  },
  {
    id: 9,
    icon: 'bi-layers',
    title: 'Agent Extensibility Layer',
    description: 'Easily extend or upgrade AI agents within existing architectures without downtime.',
    details: [
      'Hot-swappable agents and tools',
      'Backward-compatible API design',
      'Supports rapid innovation cycles'
    ]
  },
  {
    id: 10,
    icon: 'bi-diagram-2',
    title: 'End-to-End Workflow Orchestration',
    description: 'Combine all components into a cohesive automation pipeline powered by AI-driven decision logic.',
    details: [
      'Unified control over trigger, memory, tools, and output',
      'Supports linear, conditional, and parallel workflows',
      'Full observability across agent interactions'
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
