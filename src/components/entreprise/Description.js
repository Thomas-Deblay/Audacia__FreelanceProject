import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import mfr from '../../assets/images/LogoMFRMOIRAN_pageEntreprise.png';

// BlogCard

const Description = () => {
  return (
    <React.Fragment>
      <section className="section ">
        <Container>
          <Row>
            <Col lg={10}>
              <div className="counter-box">
                <h4>
                  Titre Professionnel de niveau 6 (BAC +3/4), <br /> RNCP 34305
                </h4>
                <p className="text-muted mt-2">
                  <br /> Les entreprises de l’économie sociale et solidaire sont
                  organisées sous forme de : Associations, mutuelles,
                  coopératives, fondations, dans la culture, l’insertion, la
                  formation professionnelle, etc...)
                </p>
              </div>
            </Col>
            <Col lg={2}>
              <div className="img">
                <img
                  src={mfr}
                  className="img-fluid entreprise__logomfr "
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section className="section " id="descriptionEntreprise">
        <Container>
          <Row className="justify-content-center">
            <Col className="mb-5 " lg={7}>
              <div className="header-title text-center">
                <h3>Titre Professionnel de niveau 6 (BAC +3/4), RNCP 34305</h3>
                <div className="title-border mt-3"></div>
                <p className="title-desc text-muted mt-3">
                  Les entreprises de l’économie sociale et solidaire sont
                  organisées sous forme de : Associations, mutuelles,
                  coopératives, fondations, dans la culture, l’insertion, la
                  formation professionnelle, etc...)
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className="section bg-light " id="descriptionEntreprise2">
        <Container>
          <Row className="justify-content-center">
            <Col className="mb-5 pb-5" lg={7}>
              <div className="header-title text-center">
                <h3>OBJECTIFS</h3>
                <div className="title-border mt-3"></div>
                <p className="title-desc text-muted mt-3">
                  OPTIMISER LA GESTION DE VOTRE ENTREPRISE , FONCTIONNER EN MODE
                  PROJET & DIVERSIFIER LES SOURCES FINANCIÈRES DE VOTRE
                  ENTREPRISE
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center ">
            <Col lg={8}>
              <div className="header-title  mb-5">
                {/* <h3>A Propos de la formation</h3> */}
                <div className="descriptiontext">
                  <h6>Maîtriser la gestion administrative et financière</h6>
                  <p className="title-desc text-muted mt-3">
                    {' '}
                    Recherche de financements /RSO/ RSE/ qualité
                  </p>
                  <p className="title-desc text-muted mt-3">
                    {' '}
                    Organisation du travail
                  </p>
                  <p className="title-desc text-muted mt-3">
                    {' '}
                    Principes de la Comptabilité Générale
                  </p>
                  <p className="title-desc text-muted mt-3">
                    {' '}
                    Gestion des plannings
                  </p>
                </div>
                <div className="descriptiontext">
                  <h6>Dynamiser les Ressources humaines</h6>
                  <p className="title-desc text-muted mt-3">
                    {' '}
                    Conscience de soi et communication
                  </p>
                  <p className="title-desc text-muted mt-3">
                    {' '}
                    Le management et ses outils
                  </p>
                  <p className="title-desc text-muted mt-3"> Être manager</p>
                  <p className="title-desc text-muted mt-3"> Droit social</p>
                </div>
                <div className="descriptiontext">
                  <h6>
                    Gérer l’établissement dans le contexte socio économique
                  </h6>

                  <p className="title-desc text-muted mt-3">
                    {' '}
                    Découverte de l’ESS (son histoire, ses champs, ses
                    spécificités)
                  </p>
                  <p className="title-desc text-muted mt-3">
                    {' '}
                    Création d’un réseau professionnel
                  </p>
                  <p className="title-desc text-muted mt-3">
                    {' '}
                    Approche globale de l’organisation territoriale
                  </p>
                  <p className="title-desc text-muted mt-3">
                    {' '}
                    Analyse du contexte de l’environnement de l’établissement
                  </p>
                  <p className="title-desc text-muted mt-3">
                    {' '}
                    Politiques sociales
                  </p>
                </div>
                <div className="descriptiontext">
                  <h6>Manager un projet</h6>
                  <p className="title-desc text-muted mt-3">
                    {' '}
                    Développement d’activité (droit des structures, fiscalité
                    adaptée)
                  </p>
                  <p className="title-desc text-muted mt-3">
                    {' '}
                    Analyse marketing
                  </p>
                  <p className="title-desc text-muted mt-3">
                    {' '}
                    Diagnostics financiers, législatifs, ressources humaines,
                  </p>
                  <p className="title-desc text-muted mt-3"> Démarche projet</p>
                  <p className="title-desc text-muted mt-3">
                    {' '}
                    Montage et Gestion de projets Européens
                  </p>
                </div>
                <div className="descriptiontext">
                  <h6>
                    Sur 12 mois en alternance <br />
                    <br />
                    Conditions d’admission : Dossier de candidature, entretien
                    d’entrée <br />
                    <br />
                    Pré requis : titulaire d’un BAC+2 Public concerné ou VAP,
                    expérience en management d’équipe et/ ou de projet, projet
                    professionnel et réseaux existants dans le secteur visé.
                  </h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Description;
