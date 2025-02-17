import React from 'react';

import certificate from '../assets/images/home/qualipo-certificate.png';
import { Container, Row, Col } from 'reactstrap';

const SkillCard = (props) => {
  return (
    <React.Fragment>
      <div className="mt-4">
        <p className="fw-bold mb-2">{props.title}</p>
        <div className="progress">
          <div
            className="progress-bar rounded"
            style={{ width: props.percentage }}
          >
            <p className="progress-value fs-15 fw-bold">{props.percentage}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

// Skill Data

const SkillData = [
  {
    title: 'Personalisation de votre parcours',
    percentage: '100%',
  },
  {
    title: 'Theorie',
    percentage: '60%',
  },
  {
    title: 'Pratique',
    percentage: '40%',
  },
  {
    title: 'Satisfaction en sortie de formation',
    percentage: '94%',
  },
];

const Certificate = () => {
  return (
    <React.Fragment>
      <section className="section bg-light" id="Certificate">
        <Container>
          <Row className="justify-content-center">
            <Col lg={11}>
              <div className="header-title text-center mb-5">
                <p className="text-uppercase text-muted mb-2">Qualiopi</p>
                <h1>Certification </h1>
                <div className="title-border mt-3"></div>
                <p className="title-desc text-muted mt-3"></p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="about-img" lg={8}>
              <img
                src={certificate}
                className="img-fluid rounded box-shadow"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Certificate;
