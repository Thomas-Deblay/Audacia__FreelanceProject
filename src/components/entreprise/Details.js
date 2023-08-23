import React from 'react';
import { Container, Col, Row } from 'reactstrap';

// BlogCard

const Details = () => {
  return (
    <React.Fragment>
      <section className="section " id="details" style={{ paddingbottom: 0 }}>
        <Container>
          <Row className="justify-content-center">
            <Col className="mb-5 pb-5" lg={7}>
              <div className="header-title text-center">
                <h3>
                  Recrutez vos salariés sur mesure & Profitez des avantages
                  FISCAUX et FINANCIERS
                </h3>
                <div className="title-border mt-3"></div>
                <p
                  className="title-desc text-muted mt-3"
                  style={{ textAlign: 'left' }}
                >
                  • Former de nouveaux salariés et ainsi adapter leurs
                  compétences aux besoins de l’entreprise, <br /> <br /> • Aide
                  de 6000 € maximum pour tout contrat d’apprentissage signé
                  jusqu’à la fin de l’année 2023, <br />
                  <br /> • Réduction des coûts salariaux pour l’entreprise,{' '}
                  <br />
                  <br /> • Prise en charge par l’OPCO des frais de formation,{' '}
                  <br />
                  <br /> • Absence de prise en compte dans les effectifs de
                  l’entreprise des titulaires des contrats de
                  professionnalisation jusqu’aux termes des contrats, <br />
                  <br /> • Diverses aides et exonérations pour les alternants
                  handicapés
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Details;
