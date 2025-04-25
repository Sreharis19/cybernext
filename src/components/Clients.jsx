import React from 'react';
import {
  FaUsers,
  FaUniversity,
  FaBriefcase,
  FaBuilding,
  FaChalkboardTeacher
} from 'react-icons/fa';

const collaborators = [
  {
    title: 'Community Outreach',
    description: 'Impact of We',
    icon: <FaUsers size={30} className="mb-2" style={{ color: '#000' }} />
  },
  {
    title: 'Local Government',
    description: 'Chelmsford City Council, Essex County Council',
    icon: <FaBuilding size={30} className="mb-2" style={{ color: '#000' }} />
  },
  {
    title: 'Education Providers',
    description: 'Chelmsford College, Anglia Ruskin University',
    icon: <FaUniversity size={30} className="mb-2" style={{ color: '#000' }} />
  },
  {
    title: 'Job Centres and Local Employers',
    description: 'Various local job centres and employers',
    icon: <FaBriefcase size={30} className="mb-2" style={{ color: '#000' }} />
  },
  {
    title: 'Training Content',
    description: 'Quantonova (subcontracted delivery partner)',
    icon: <FaChalkboardTeacher size={30} className="mb-2" style={{ color: '#000' }} />
  }
];

const Clients = () => (
  <section id="clients" className="clients section light-background py-5">
    <div className="container" data-aos="fade-up">
      <h2 className="section-title text-center mb-5">Our Collaborators</h2>

      <div className="marquee-wrapper overflow-hidden position-relative">
        <div
          className="d-flex marquee-content"
          style={{
            animation: 'scroll-left 25s linear infinite',
            minWidth: 'fit-content',
            gap: '2rem'
          }}
        >
          {collaborators.concat(collaborators).map((c, i) => (
            <div
              key={i}
              className="client-card text-center p-4 rounded shadow-sm"
              style={{
                minWidth: '360px',
                background: '#f8f9fa',
                border: '1px solid #ddd'
              }}
            >
              {c.icon}
              <h5
                className="fw-semibold mb-2"
                style={{
                  whiteSpace: 'nowrap'
                }}
              >
                {c.title}
              </h5>
              <p className="text-muted mb-0">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <style>{`
      @keyframes scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </section>
);

export default Clients;
