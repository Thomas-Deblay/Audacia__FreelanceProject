import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';

// BlogCard

const Description = ({ description }) => {
  return (
    <React.Fragment>
      <section className="section" id="blog">
        <Container>
          <Row className="justify-content-center">
            <Col lg={3}>
              <div className="header-title text-center mb-5">
                <p className="text-uppercase text-muted mb-2">Actualite</p>
                <h3>Nos Formations</h3>
                <div className="title-border mt-3"></div>
                <p className="title-desc text-muted mt-3">Testing</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Description;
