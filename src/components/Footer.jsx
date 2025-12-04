import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer dark-background" style={{ marginTop: '0', paddingBottom: '0', overflow: 'hidden' }}>
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="#hero" className="logo d-flex align-items-center">
              <span className="sitename">NextAI Fusion</span>
            </a>
            <div className="footer-contact pt-3">
              <p>37 Parkinson Drive, Chelmsford, CM1 3GU</p>
              <p className="mt-3"><strong>Company ID:</strong> <span>16159859</span></p>
              <p><strong>Email:</strong> <span>admin@nextaifusion.com</span></p>
            </div>
            <p>Together, let’s secure the future—for everyone.</p>
          </div>
        </div>
      </div>
      <div className="container text-center mt-4">
        <p>&copy; <strong className="sitename">NextAI Fusion</strong> All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
