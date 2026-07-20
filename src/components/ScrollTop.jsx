import React from 'react';

const ScrollTop = () => (
  <button
    type="button"
    id="scroll-top"
    className="scroll-top d-flex align-items-center justify-content-center"
    aria-label="Scroll to top"
    style={{ border: 'none', padding: 0, cursor: 'pointer' }}
  >
    <i className="bi bi-arrow-up-short"></i>
  </button>
);

export default ScrollTop;
