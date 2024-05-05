import React, { useEffect, useState } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import chart from '../assets/img/az_lvl.jpg';
import chart2 from '../assets/img/turkish_lvl.jpg';
import chart3 from '../assets/img/eng_lvl.jpg';
import chart4 from '../assets/img/rus-lvl.jpg';

const Newsletter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') {
      clearFields();
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf('@') > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
          <div >
            <img src={chart} />
            <img src={chart2} />
            <img src={chart3} />
            <img src={chart4} />
          </div>
      </div>
    </Col>
  );
};

export default Newsletter;
