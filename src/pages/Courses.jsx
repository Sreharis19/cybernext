/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Hero from '../components/Hero';

import courseImg1 from '../assets/img/c1.png';
import courseImg2 from '../assets/img/c2.png';
import courseImg3 from '../assets/img/c3.jpg';

// Change this to whatever hero image you want for the courses page
import coursesHeroBg from '../assets/img/courses-hero-bg.jpg';

const tabs = [
  {
    id: 1,
    icon: 'bi-mortarboard',
    title: 'n8n Agent Foundations: Automation to Autonomy',
    level: 'Beginner',
    duration: '4 Weeks (Part-time, 40 hours total)',
    targetAudience: 'Ops Managers, Marketers, No-Code Enthusiasts',
    price: 1599,
    originalPrice: 2199,
    focus:
      'Move from simple linear automations (Zapier-style) to reasoning AI agents using n8n’s Advanced AI nodes.',
    image: courseImg1,
    prerequisites:
      'No coding required; basic understanding of workflows (If/Then logic).',
    curriculum: [
      {
        title: 'Week 1: The n8n Ecosystem & AI Nodes',
        points: [
          'Cloud vs self-hosted n8n setup (Docker basics).',
          'Understanding the AI Agent node vs a standard LLM chain.',
          'Connecting Google Calendar and Gmail nodes as autonomous tools.'
        ]
      },
      {
        title: 'Week 2: Memory & Context',
        points: [
          'Window buffer memory for conversation continuity.',
          'Structured output with Output Parser for clean JSON to Sheets/Excel.'
        ]
      },
      {
        title: 'Week 3: Practical Agent Building',
        points: [
          'Project: Smart Personal Assistant that reads emails, detects intent, drafts replies, and schedules meetings.'
        ]
      },
      {
        title: 'Week 4: Deployment',
        points: [
          'Triggering agents via webhooks from a website or Slack command.',
          'Handling hallucinations and API failures with retry logic.'
        ]
      }
    ]
  },
  {
    id: 2,
    icon: 'bi-cpu',
    title: 'AI Architect: Building RAG Agents with n8n & Supabase',
    level: 'Builder',
    duration: '12 Weeks (80 hours total)',
    targetAudience: 'System Integrators, Technical Founders, Data Analysts',
    price: 2466,
    originalPrice: 3066, // no explicit discount given
    focus:
      'Build “knowledgeable” agents that read company data from vector databases and respond with grounded, verifiable answers.',
    image: courseImg2,
    techStack: 'n8n, Supabase (pgvector), Pinecone/Weaviate (alternatives).',
    curriculum: [
      {
        title: 'Weeks 1–2: Vector Database Fundamentals',
        points: [
          'Supabase setup with Postgres + pgvector.',
          'Using n8n Embeddings node (OpenAI/Cohere) to create vectors.',
          'Building an ingestion pipeline from Google Drive PDFs into Supabase.'
        ]
      },
      {
        title: 'Weeks 3–4: RAG in n8n',
        points: [
          'Configuring Vector Store node to query Supabase before answering.',
          'Swapping providers: Pinecone and Qdrant integration patterns.'
        ]
      },
      {
        title: 'Weeks 5–6: Advanced Tooling & Verification',
        points: [
          'Hybrid search: combining keyword and semantic search.',
          'Hallucination checks with a verifier LLM step.'
        ]
      },
      {
        title: 'Weeks 7–8: Capstone Project',
        points: [
          'Build a Customer Support Super-Bot using Supabase docs, order status API, and CRM updates in one conversation.'
        ]
      }
    ]
  },
  {
    id: 3,
    icon: 'bi-diagram-3',
    title: 'Enterprise Multi-Agent Orchestration',
    level: 'Advanced',
    duration: '6 Weeks (60 hours total)',
    targetAudience: 'CTOs, Automation Engineers, Solution Architects',
    price: 2499,
    originalPrice: 3999,
    focus:
      'Design complex systems where multiple n8n workflows act as specialised agents in a swarm architecture with human-in-the-loop control.',
    image: courseImg3,
    curriculum: [
      {
        title: 'Week 1: Supervisor–Worker Pattern',
        points: [
          'Sub-workflows via Execute Workflow node as specialist agents (e.g. Coder, Writer).',
          'Router chains using LLMs to classify intent and route tasks.'
        ]
      },
      {
        title: 'Week 2: Database State Management',
        points: [
          'Persistent state in Supabase SQL tables for long-running tasks.',
          'Human-in-the-loop using Wait nodes with Slack/Email approvals.'
        ]
      },
      {
        title: 'Week 3: Advanced Vector Operations',
        points: [
          'Metadata filtering (e.g. only HR-tagged docs).',
          'Multi-modal RAG with vectorised image descriptions for search.'
        ]
      },
      {
        title: 'Week 4: Monitoring & Production',
        points: [
          'Connecting to LangFuse/LangSmith for observability and cost tracking.',
          'Queue management and scaling strategies in n8n.'
        ]
      },
      {
        title: 'Weeks 5–6: Master Project',
        points: [
          'Build an Autonomous RFP Response Team with multiple agents for reading PDFs, drafting answers, pricing, and supervisor approval before emailing.'
        ]
      }
    ]
  }
];

// Formspree contact form dedicated to the courses page
const CourseContactForm = () => {
  const [state, handleSubmit] = useForm('xyzrpwvk'); // your Formspree form ID

  if (state.succeeded) {
    return (
      <p className="alert alert-success mt-3">
        Thanks for your interest in Next AI Fusion: The Agentic Automation Academy!
        We&apos;ll be in touch shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="php-email-form">
      <div className="row gy-4">
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="course" className="form-label">
            Course you&apos;re interested in
          </label>
          <select id="course" name="course" className="form-select">
            <option value="">Select a course</option>
            {tabs.map((tab) => (
              <option key={tab.id} value={tab.title}>
                {tab.title}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="5"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="col-12 text-end">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={state.submitting}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

const Courses = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Ensure we always start from the top when navigating to /courses
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main">
      {/* HERO: Next AI Fusion branding */}
      <Hero
        id="courses-hero"
        title="Next AI Fusion: The Agentic Automation Academy"
        subtitle="From no-code agents to enterprise multi-agent orchestration with n8n, Supabase, and vector search."
        ctaLabel="Explore Courses"
        ctaHref="#courses"
        background={coursesHeroBg}
      />

      {/* COURSES (Features-style tabs) */}
      <section id="courses" className="features section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Courses</h2>
          <p>
            Three progressive learning paths — Foundations, Architect, and Enterprise —
            designed for builders of the next wave of AI-powered automation.
          </p>
        </div>

        <div className="container">
          {/* Tabs header */}
          <ul
            className="nav nav-tabs row d-flex"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-item col-4">
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

          {/* Tab content */}
          <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab-pane fade ${
                  activeTab === tab.id ? 'active show' : ''
                }`}
              >
                <div className="row">
                  {/* Text / details */}
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <h3>{tab.title}</h3>

                    {/* Pricing highlight */}
                    <div className="d-flex flex-wrap align-items-center mb-3">
                      {tab.originalPrice && (
                        <span className="badge bg-success me-2">
                          Launch offer
                        </span>
                      )}
                      <span className="fs-4 fw-bold text-primary me-2 mb-0">
                        £{tab.price.toLocaleString('en-GB')}
                      </span>
                      {tab.originalPrice && (
                        <span className="text-muted text-decoration-line-through">
                          £{tab.originalPrice.toLocaleString('en-GB')}
                        </span>
                      )}
                    </div>

                    <p className="mb-1">
                      <strong>Level:</strong> {tab.level}
                    </p>
                    <p className="mb-1">
                      <strong>Duration:</strong> {tab.duration}
                    </p>
                    <p className="mb-2">
                      <strong>Ideal for:</strong> {tab.targetAudience}
                    </p>

                    {tab.prerequisites && (
                      <p className="mb-2">
                        <strong>Prerequisites:</strong> {tab.prerequisites}
                      </p>
                    )}
                    {tab.techStack && (
                      <p className="mb-2">
                        <strong>Tech Stack:</strong> {tab.techStack}
                      </p>
                    )}

                    <p className="fst-italic">{tab.focus}</p>

                    <h5 className="mt-3">Curriculum Outline</h5>
                    <ul>
                      {tab.curriculum.map((block, idx) => (
                        <li key={idx}>
                          <strong>{block.title}</strong>
                          <ul className="mt-1">
                            {block.points.map((pt, i) => (
                              <li key={i}>{pt}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>

                    <a href="#contact" className="btn btn-outline-primary mt-3">
                      Enquire about this course
                    </a>
                  </div>

                  {/* Image */}
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

      {/* CONTACT FORM section for course enquiries */}
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Course Enquiries</h2>
            <p>
              Have questions about pricing, cohort dates, or which pathway is right for you?
              Share a few details and we&apos;ll follow up with options.
            </p>
          </div>

          <div className="row gy-4 justify-content-center">
            <div className="col-lg-8">
              <CourseContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses;
