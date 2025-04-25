import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Enquiries</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-lg-12">
                <div className="info-item text-center" data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-geo-alt" style={{ display: 'block', margin: '0 auto' }}></i>
                  <h3>Address</h3>
                  <p>37 Parkinson Drive, Chelmsford, CM1 3GU</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-item text-center" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-building" style={{ display: 'block', margin: '0 auto' }}></i>
                  <h3>Company ID</h3>
                  <p>16159859</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-item text-center" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-envelope" style={{ display: 'block', margin: '0 auto' }}></i>
                  <h3>Email Us</h3>
                  <p>info@nextaifusion.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <div className="section-title text-center">
              <h3 className="display-4">Join Us</h3>
              <p className="fs-6">Want to partner with us, support the next generation of cyber professionals, or join our programme?</p>
            </div>
          </div>


          {/* <div className="col-lg-6">
            <form className="php-email-form" data-aos="fade-up" data-aos-delay="500">
              <div className="row gy-4">
                <div className="col-md-6"><input type="text" name="name" className="form-control" placeholder="Your Name" required /></div>
                <div className="col-md-6"><input type="email" name="email" className="form-control" placeholder="Your Email" required /></div>
                <div className="col-md-12"><input type="text" name="subject" className="form-control" placeholder="Subject" required /></div>
                <div className="col-md-12"><textarea name="message" rows="4" className="form-control" placeholder="Message" required></textarea></div>
                <div className="col-md-12 text-center"><button type="submit">Send Message</button></div>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
