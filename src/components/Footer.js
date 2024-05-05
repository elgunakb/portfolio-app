import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MailchimpForm from './MailchimpForm';
import logo from '../assets/img/logoooo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from '../assets/img/github-mark-white.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/elgunekberli/"
                target="_blank"
              >
                <img src={navIcon1} alt="Linkedin_logo" />
              </a>
              <a href="https://github.com/elgunakb" target="_blank">
                <img src={github} alt="Github_logo" />
              </a>
            </div>
            <p>Copyright 2024.&copy;</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
