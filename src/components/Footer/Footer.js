import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* ======= Footer ======= */}
<footer id="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="footer-info">
            <h3>Medicio</h3>
            <p>
              A108 Adam Street <br />
              NY 535022, USA<br /><br />
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com<br />
            </p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="icofont-twitter" /></a>
              <a href="#" className="facebook"><i className="icofont-facebook" /></a>
              <a href="#" className="instagram"><i className="icofont-instagram" /></a>
              <a href="#" className="linkedin"><i className="icofont-linkedin" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
            <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 footer-newsletter">
          <h4>Our Newsletter</h4>
          <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          <form action method="post">
            <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
      © Copyright <strong><span>Medicio</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      {/* All the links in the footer should remain intact. */}
      {/* You can delete the links only if you purchased the pro version. */}
      {/* Licensing information: https://bootstrapmade.com/license/ */}
      {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/medicio-free-bootstrap-theme/ */}
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</footer>{/* End Footer */}

        </div>
    )
}

export default Footer
