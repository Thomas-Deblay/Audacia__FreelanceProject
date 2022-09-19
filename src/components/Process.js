import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const ProcessCard = (props) => {
  return (
    <React.Fragment>
      <Col lg={3} md={6}>
        <div className="process-box text-center">
          <div className="process-count text-white mt-4">
            <h3 className="process-number">{props.number}</h3>
          </div>

          <div className="process-content bg-light mt-5 rounded p-4">
            <h5 className="fs-18">{props.step}</h5>
            <p className="text-muted mb-0">{props.caption}</p>
          </div>
        </div>
        {/* <!--end process-box--> */}
      </Col>
    </React.Fragment>
  );
};

// Process Data

const ProcessData = [
  {
    number: '01',
    step: 'Inscription',
    caption: "Renvoi du formulaire d'inscription par mail",
  },
  {
    number: '02',
    step: 'Diagnositc',
    caption:
      'Rendez-vous téléphonique avec le consultant pour cibler vos attentes',
  },
  {
    number: '03',
    step: 'La Formation',
    caption: 'Avec des exposés théoriques et des exercices pratiques',
  },
  {
    number: '04',
    step: 'Vos Perspectives',
    caption: "Vos perspectives d'avenir en sortie de formation",
  },
];

const Process = () => {
  return (
    <React.Fragment>
      <section className="bg-process section" id="process">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="header-title text-center">
                <h3>De L'inscription à la formation</h3>
                <div className="title-border mt-3"></div>
                <p className="title-desc text-muted mt-3">
                  Un accompagnement personalisé dès votre demande d'inscription
                  pour cibler vos besoins et objectifs et vous conseiller sur la
                  formation la plus adaptée à ces derniers.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 pt-2">
            {/* Process Component Start */}

            {ProcessData.map((value, idx) => (
              <ProcessCard
                key={idx}
                number={value.number}
                step={value.step}
                caption={value.caption}
                isShow={value.isShow}
              />
            ))}

            {/* Process Component End */}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Process;
