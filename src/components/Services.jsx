/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import ModalComponent from './ModalComponent';

const services = [
  {
    id: 1,
    icon: 'bi-chat-dots',
    title: 'Conversational Agent Entry Points',
    description:
      'Design front-door chat interfaces that trigger safe, auditable agentic workflows for operations, support and energy optimisation.',
    details: [
      'Real-time response to operator or customer messages across chat, web and internal tools',
      'Intent detection and routing into the right NextAIFusion workflow or agent team',
      'Acts as a supervised “front agent” for SmartAirFusion-style monitoring and alerting flows'
    ]
  },
  {
    id: 2,
    icon: 'bi-gear-wide-connected',
    title: 'Multi-Agent Fusion Framework',
    description:
      'Deploy collaborative AI agents that work together across data, IoT and business systems to deliver end-to-end automation.',
    details: [
      'Semi-autonomous decision-making across specialist agents (e.g. monitoring, diagnostics, reporting)',
      'Coordinated orchestration of memory, tools and models for industrial and back-office use cases',
      'Patterns proven in NextAIFusion projects such as SmartAirFusion for compressed-air optimisation'
    ]
  },
  {
    id: 3,
    icon: 'bi-cpu',
    title: 'Dynamic Task Automation Engine',
    description:
      'Turn repetitive, high-friction tasks into resilient workflows that combine AI reasoning with clear guardrails.',
    details: [
      'Task-specific tool agents for validation, data entry, summarisation and notification',
      'Support for both parallel and sequential execution to fit real operational processes',
      'Configurable business rules so teams stay in control of what agents can and cannot do'
    ]
  },
  {
    id: 4,
    icon: 'bi-collection',
    title: 'Persistent Context & Memory Layer',
    description:
      'Give agents the ability to “remember” what matters across sessions, assets and sites without losing governance.',
    details: [
      'Context retention between workflow steps and across long-running projects',
      'Short-term and long-term memory modes aligned with data retention policies',
      'Richer, more coherent behaviour for agents analysing plant performance, incidents or customer histories'
    ]
  },
  {
    id: 5,
    icon: 'bi-diagram-3',
    title: 'Modular Toolchain Integration',
    description:
      'Plug NextAIFusion into the systems you already use – from IoT platforms and CRMs to ERPs and data warehouses.',
    details: [
      'Plug-and-play connectors for validation, enrichment, storage and notifications',
      'Optional agents and tools that can be toggled on/off without redesigning the whole workflow',
      'Loose coupling so organisations can evolve their tech stack while keeping core agent logic stable'
    ]
  },
  {
    id: 6,
    icon: 'bi-database-add',
    title: 'Automated Data Capture & Insertion',
    description:
      'Use agents to collect, clean and store the signals your teams need – from sensor data to PDFs and email.',
    details: [
      'Structured extraction of key information from documents, logs and streams',
      'Support for SQL, NoSQL and cloud-native stores such as Supabase and data lakes',
      'Traceable, auditable pipelines that feed analytics, dashboards and compliance reporting'
    ]
  },
  {
    id: 7,
    icon: 'bi-patch-check',
    title: 'Quality & Safety Validation Layer',
    description:
      'Add a final checkpoint before actions are applied in the real world, keeping humans in the loop where it matters.',
    details: [
      'Rule-based and model-driven validation of outputs before they reach customers or production systems',
      'Support for custom business logic checks (e.g. safety, regulatory, energy thresholds)',
      'Can be enabled or disabled per workflow without breaking the wider agent architecture'
    ]
  },
  {
    id: 8,
    icon: 'bi-book',
    title: 'Knowledge & Playbook Enrichment',
    description:
      'Fuse internal know-how, manuals and best-practice playbooks into every agentic workflow.',
    details: [
      'Retrieval-augmented workflows that pull the right guidance at the right step',
      'Better decisions using curated internal knowledge plus external standards and guidance',
      'Supports both static documentation and continuously updated knowledge bases'
    ]
  },
  {
    id: 9,
    icon: 'bi-layers',
    title: 'Agent Extensibility & Upgrades',
    description:
      'Evolve your agents as models, tools and requirements change – without starting from scratch.',
    details: [
      'Hot-swappable agents and tools with backward-compatible interfaces',
      'Versioned workflows so teams can experiment safely and roll back if needed',
      'Supports rapid innovation cycles while protecting live operations'
    ]
  },
  {
    id: 10,
    icon: 'bi-diagram-2',
    title: 'End-to-End Orchestration Design',
    description:
      'Work with NextAIFusion to design complete agentic systems – from trigger to decision to action – tailored to your context.',
    details: [
      'Unified view of triggers, memory, tools and outputs across your automation landscape',
      'Support for linear, conditional and multi-agent swarm workflows',
      'Deep observability of agent interactions to support governance, debugging and optimisation'
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
        <h2>NextAIFusion Services Studio</h2>
        <p>
          Alongside our Agentic Automation Academy, NextAIFusion works with
          partners to design, build and scale real-world agentic workflows.
        </p>
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
                  <h4 className="title">
                    <a
                      href="#"
                      className="stretched-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      {svc.title}
                    </a>
                  </h4>
                  {svc.description && (
                    <p className="description">{svc.description}</p>
                  )}
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
