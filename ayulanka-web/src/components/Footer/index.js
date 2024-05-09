import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="footer-title">Herbal Products, Inc.</h5>
            <p>Enhancing health, the natural way.</p>
          </Col>
          <Col md={4}>
            <h5 className="footer-title">Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: contact@herbalproducts.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Green Lane, Wellness City, Earth</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://twitter.com" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://instagram.com" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </Col>
        </Row>
        <div className="text-center mt-4">
          © 2024 Herbal Products, Inc. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
