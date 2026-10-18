import React from 'react';

// Hub sits at the centre of a 400x300 canvas; nodes lie on an ellipse around it.
const HUB = { x: 200, y: 150 };

const nodes = [
  { id: 'agents', label: 'AI Agents', icon: 'bi-robot', x: 200, y: 42, inbound: false },
  { id: 'smartair', label: 'SmartAirFusion', icon: 'bi-wind', x: 328, y: 96, inbound: true },
  { id: 'agentforge', label: 'AgentForge', icon: 'bi-briefcase', x: 328, y: 204, inbound: false },
  { id: 'academy', label: 'Academy', icon: 'bi-mortarboard', x: 200, y: 258, inbound: false },
  { id: 'human', label: 'Human-in-the-loop', icon: 'bi-person-check', x: 72, y: 204, inbound: true },
  { id: 'data', label: 'IoT & Data', icon: 'bi-broadcast', x: 72, y: 96, inbound: true }
];

const pct = (v, total) => `${(v / total) * 100}%`;

const AboutIllustration = () => (
  <div
    className="about-illustration rounded-4 mb-4"
    role="img"
    aria-label="Next AI Fusion connects AI agents, IoT data, people, SmartAirFusion, AgentForge and the Academy"
  >
    <svg viewBox="0 0 400 300" className="about-illustration-svg" aria-hidden="true">
      <defs>
        <pattern id="ai-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.08)" />
        </pattern>
        <radialGradient id="ai-hub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff7a50" />
          <stop offset="100%" stopColor="#ff4a17" />
        </radialGradient>
        <radialGradient id="ai-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,74,23,0.35)" />
          <stop offset="100%" stopColor="rgba(255,74,23,0)" />
        </radialGradient>
      </defs>

      <rect width="400" height="300" fill="url(#ai-dots)" />
      <circle cx={HUB.x} cy={HUB.y} r="110" fill="url(#ai-glow)" />

      {/* Links between neighbouring nodes */}
      {nodes.map((n, i) => {
        const next = nodes[(i + 1) % nodes.length];
        return (
          <line
            key={`ring-${n.id}`}
            x1={n.x}
            y1={n.y}
            x2={next.x}
            y2={next.y}
            className="about-illustration-ring"
          />
        );
      })}

      {/* Spokes from hub to each node, with a data pulse travelling along each */}
      {nodes.map((n, i) => {
        const path = n.inbound
          ? `M${n.x} ${n.y} L${HUB.x} ${HUB.y}`
          : `M${HUB.x} ${HUB.y} L${n.x} ${n.y}`;
        return (
          <g key={`spoke-${n.id}`}>
            <path d={path} className="about-illustration-spoke" />
            <circle r="3.5" className="about-illustration-pulse">
              <animateMotion dur="2.8s" begin={`${i * 0.45}s`} repeatCount="indefinite" path={path} />
            </circle>
          </g>
        );
      })}

      {/* Hub */}
      <circle cx={HUB.x} cy={HUB.y} r="46" className="about-illustration-orbit" />
      <circle cx={HUB.x} cy={HUB.y} r="36" className="about-illustration-halo" />
      <circle cx={HUB.x} cy={HUB.y} r="30" fill="url(#ai-hub)" />
    </svg>

    <div className="about-illustration-hub" style={{ left: pct(HUB.x, 400), top: pct(HUB.y, 300) }}>
      <i className="bi bi-cpu"></i>
      <span>Next AI Fusion</span>
    </div>

    {nodes.map((n, i) => (
      <div
        key={n.id}
        className="about-illustration-node"
        style={{ left: pct(n.x, 400), top: pct(n.y, 300) }}
      >
        <div className="about-illustration-node-inner" style={{ animationDelay: `${i * 0.6}s` }}>
          <span className="about-illustration-icon">
            <i className={`bi ${n.icon}`}></i>
          </span>
          <span className="about-illustration-label">{n.label}</span>
        </div>
      </div>
    ))}

    <style>{`
      .about-illustration {
        position: relative;
        aspect-ratio: 4 / 3;
        overflow: hidden;
        background: linear-gradient(135deg, #14172e 0%, #241a3d 55%, #2e1530 100%);
        box-shadow: 0 10px 30px rgba(20, 23, 46, 0.25);
      }
      .about-illustration-svg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
      }
      .about-illustration-ring {
        stroke: rgba(255, 255, 255, 0.1);
        stroke-width: 1;
      }
      .about-illustration-spoke {
        fill: none;
        stroke: rgba(255, 122, 80, 0.45);
        stroke-width: 1.5;
        stroke-dasharray: 4 6;
        animation: ai-dash 1.6s linear infinite;
      }
      .about-illustration-pulse {
        fill: #ffd2c2;
        filter: drop-shadow(0 0 4px #ff4a17);
      }
      .about-illustration-orbit {
        fill: none;
        stroke: rgba(255, 255, 255, 0.35);
        stroke-width: 1.2;
        stroke-dasharray: 3 7;
        transform-box: fill-box;
        transform-origin: center;
        animation: ai-spin 18s linear infinite;
      }
      .about-illustration-halo {
        fill: none;
        stroke: rgba(255, 74, 23, 0.6);
        stroke-width: 2;
        transform-box: fill-box;
        transform-origin: center;
        animation: ai-breathe 2.8s ease-in-out infinite;
      }
      .about-illustration-hub {
        position: absolute;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        pointer-events: none;
        line-height: 1.1;
      }
      .about-illustration-hub i { font-size: clamp(1rem, 3.4vw, 1.4rem); }
      .about-illustration-hub span {
        font-size: clamp(0.5rem, 1.6vw, 0.62rem);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        text-align: center;
        max-width: 4.5em;
      }
      .about-illustration-node {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .about-illustration-node-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.3rem;
        animation: ai-float 4s ease-in-out infinite;
      }
      .about-illustration-icon {
        display: grid;
        place-items: center;
        width: clamp(2rem, 7vw, 2.75rem);
        height: clamp(2rem, 7vw, 2.75rem);
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.25);
        color: #ff7a50;
        font-size: clamp(0.9rem, 3vw, 1.2rem);
        backdrop-filter: blur(4px);
        box-shadow: 0 0 0 4px rgba(255, 74, 23, 0.08);
      }
      .about-illustration-label {
        font-size: clamp(0.6rem, 1.9vw, 0.75rem);
        font-weight: 600;
        color: rgba(255, 255, 255, 0.85);
        white-space: nowrap;
      }
      @keyframes ai-dash { to { stroke-dashoffset: -20; } }
      @keyframes ai-spin { to { transform: rotate(360deg); } }
      @keyframes ai-breathe {
        0%, 100% { transform: scale(1); opacity: 0.9; }
        50% { transform: scale(1.18); opacity: 0.3; }
      }
      @keyframes ai-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
      @media (prefers-reduced-motion: reduce) {
        .about-illustration-spoke,
        .about-illustration-orbit,
        .about-illustration-halo,
        .about-illustration-node-inner { animation: none; }
        .about-illustration-pulse { display: none; }
      }
    `}</style>
  </div>
);

export default AboutIllustration;
