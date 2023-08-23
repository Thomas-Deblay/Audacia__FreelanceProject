import React from 'react';
import CountUp from 'react-countup';
import { Col, Container, Row } from 'reactstrap';

import achivements from '../../assets/images/Entreprise.jpg';

const CounterData = [
  {
    endPoint: 485,
    iconClass: 'mdi mdi-heart',
    title: 'Happy Clients',
  },
  {
    endPoint: 536,
    iconClass: 'mdi mdi-layers',
    title: 'Projects Completed',
  },
  {
    endPoint: 1652,
    iconClass: 'mdi mdi-cloud-download',
    title: 'Files Downloaded',
  },
  {
    endPoint: 14652,
    iconClass: 'mdi mdi-code-not-equal-variant',
    title: 'Liens Of Code',
  },
];

const Counter = () => {
  return (
    <React.Fragment>
      <section className="section bg-light">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="counter-box">
                <h4>
                  <br /> <br /> RECRUTEZ <br /> <br /> un responsable de
                  structure de l’Economie Sociale et Solidaire, en alternance
                </h4>
                <p className="text-muted mt-2">
                  option gestion de projets européens
                </p>
              </div>
            </Col>

            <Col lg={6}>
              <div className="img">
                <img
                  src={achivements}
                  className="img-fluid box-shadow-lg rounded"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Counter;
