import React from 'react';
import CountUp from 'react-countup';
import { Col, Container, Row } from 'reactstrap';

// import achivements from '../assets/images/achivements.jpg';

const FeatureCard = (props) => {
  return (
    <>
      <Col lg={4} md={6}>
        <div className="feature-box mt-3 mt-lg-0">
          <div className="d-flex">
            <div className="feature-icon flex-shrink-0">
              <i className={props.iconClass}></i>
            </div>
            <div className="feature-content ms-3 flex-grow-1">
              <h6 className="fs-17 mb-1">{props.title}</h6>
              <p className="text-muted mb-0">{props.caption}</p>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

const FeatureData = [
  {
    iconClass: 'uil uil-analytics',
    title: 'Bachelor Management Commercial',
    caption: 'Bac +3',
  },
  {
    iconClass: 'uil uil-crosshair',
    title: 'Responsable Centre de Profit',
    caption: 'Bac +2',
  },
  {
    iconClass: 'uil uil-search',
    title: 'Formations Courtes',
    caption: '',
  },
];

const Counter = () => {
  return (
    <React.Fragment>
      <section className="section bg-light">
        {/* <!-- START FEATURE --> */}
        <Container>
          <br />
          <br />
          <div className="bg-feature">
            <Row className="justify-content-center">
              {/* Feature Start */}
              {FeatureData.map((item, key) => (
                <FeatureCard
                  key={key}
                  iconClass={item.iconClass}
                  title={item.title}
                  caption={item.caption}
                />
              ))}
              {/* Feature End */}
            </Row>
          </div>
          {/* <!--end bg-feature--> */}
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Counter;
