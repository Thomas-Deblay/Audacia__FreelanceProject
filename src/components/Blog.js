import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';

import img1 from '../assets/images/blog/ressourceshumaines.jpg';
import img2 from '../assets/images/blog/creervotreentreprise.jpg';
import img3 from '../assets/images/blog/structureeconomiesociale.jpg';
import img4 from '../assets/images/blog/international.jpg';

import img5 from '../assets/images/blog/managercentredeprofit.jpg';
import img6 from '../assets/images/blog/financementeuro.jpg';
import img7 from '../assets/images/blog/toeic.jpg';
import img8 from '../assets/images/blog/socleconnaissance.jpg';
import img9 from '../assets/images/blog/applicationdroitsocialindiv.png';

import mfr from '../assets/images/LogoQualiopiActionsdeFormation.png';

// BlogCard

const BlogCard = (props) => {
  return (
    <React.Fragment>
      <Col lg={4}>
        <div className="blog-box box-shadow rounded mt-4 p-3">
          <div className="blog-img">
            <img src={props.imgsrc} className="img-fluid rounded" alt="" />
            <div className="read-more">
              <Link
                to={{
                  pathname: `/formations/${props.link}`,
                }}
              >
                <i className="mdi mdi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="mt-4 ">
            <Link
              to={{
                pathname: `/formations/${props.link}`,
              }}
              className="primary-link"
            >
              <h5 className="fs-19 mb-1 FormationCard__title">{props.title}</h5>
            </Link>
            <p className="text-muted mt-2">{props.subtitle}</p>
            <div className="d-flex align-items-center justify-content-between">
              {/*<div className="d-flex align-items-center">
                <img
                  src={props.imgsrc2}
                  alt=""
                  height="45"
                  className="rounded-circle me-2"
                />
                <p className="text-muted mb-0">{props.name}</p>
  </div>*/}
              <p className="mb-0 float-end text-muted">
                <i className="mdi mdi-clock-time-four-outline align-middle me-1 text-primary"></i>{' '}
                {props.time}
              </p>
            </div>
          </div>
        </div>
        {/* <!--end blog--> */}
      </Col>
    </React.Fragment>
  );
};

// Blog Data

const BlogData = [
  {
    key: 'Assistantressrouceshumaine',
    imgsrc1: img1,
    title: 'Gérer les ressources humaines',
    subtitle: 'Titre professionnel niveau 5',
    imgsrc2: img5,
    name: 'Formateur',
    time: '840 heures',
  },
  {
    key: 'Creervotreentreprise',
    imgsrc1: img2,
    title: 'Créer votre entreprise',
    subtitle: 'Formation certifiante',
    imgsrc2: img6,
    name: 'Formateur',
    time: '70 heures',
  },
  {
    key: 'directeurdetablissementecosociale',
    imgsrc1: img3,
    title:
      "Bachelor Responsable D'établissement de l'économie Sociale et Solidaire ",
    subtitle: 'Titre professionnel niveau 6',
    imgsrc2: img7,
    name: 'Formateur',
    time: '600 heures',
  },
  {
    key: 'managerdecentredeprofit',
    imgsrc1: img5,
    title: 'Développez vos compétences de Manager ',
    subtitle: 'Titre professionnel niveau 5',
    imgsrc2: img7,
    name: 'Formateur',
    time: '805 heures',
  },
  {
    key: 'passerelleversfinanceseuro',
    imgsrc1: img6,
    title: 'Obtenez des financements Européens',
    subtitle:
      'Apprenez à construire et suivre vos projets Européens (FEDER, FSE+, EUROPE CRÉATIVE)',
    imgsrc2: img7,
    name: 'Formateur',
    time: '21 heures',
  },
  {
    key: 'TOEIC',
    imgsrc1: img7,
    title: 'Obtenez  le TOEIC dans le cadre de votre formation',
    subtitle: 'Préparez votre examen dans les meilleures conditions',
    imgsrc2: img7,
    name: 'Formateur',
    time: '105 heures',
  },
  {
    key: 'CleA',
    imgsrc1: img8,
    title: 'Socle de Connaissances & Compétences Clés',
    subtitle: 'Accélérez votre retour à l’emploi ou évoluez en entreprise',
    imgsrc2: img7,
    name: 'Formateur',
    time: '105 heures',
  },
  {
    key: 'Applicationdudroitsocialindividuel',
    imgsrc1: img9,
    title: 'Application du droit social individuel',
    subtitle: "Disposer d'une méthode de recherche en droit du travail",
    imgsrc2: img5,
    name: 'Formateur',
    time: "jusqu'à 42 heures",
  },
];

const Erasmus = {
  key: 'International',
  imgsrc1: img4,
  title: 'Action KA122- VET- Projet de Mobilité courte durée Italie',
  subtitle: 'Séjour entièrement pris en charge en Italie en 2025',
  imgsrc2: img7,
  name: 'Formateur',
  time: '4 mois',
};

const Blog = () => {
  return (
    <React.Fragment>
      <section className="section" id="Formations">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="header-title text-center mb-5">
                <p className="text-uppercase text-muted mb-2">Nos formations</p>
                <h1>S'engager ensemble pour réussir</h1>
                <div className="title-border mt-3"></div>
                <p className="title-desc text-muted mt-3"></p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={2}>
              <div className="img">
                <a
                  href="https://drive.google.com/file/d/1L7oDMPMqIxdQNXLvVvLO5cyyFQ_wC55K/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={mfr}
                    className="img-fluid entreprise__logomfr "
                    alt="Logo Qualiopi Actions de Formation"
                  />
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            {/* Blog Component Start*/}
            {/* =============
            ERASMUS EUROPEAN BLOG CARD FIRST 
            ====================*/}
            <BlogCard
              link={Erasmus.key}
              imgsrc={Erasmus.imgsrc1}
              title={Erasmus.title}
              subtitle={Erasmus.subtitle}
              imgsrc2={Erasmus.imgsrc2}
              name={Erasmus.name}
              time={Erasmus.time}
            />

            {/* =============
            ------- All other blog cards ---------
            ====================*/}

            {BlogData.map((value, idx) => (
              <BlogCard
                key={idx}
                link={value.key}
                imgsrc={value.imgsrc1}
                title={value.title}
                subtitle={value.subtitle}
                imgsrc2={value.imgsrc2}
                name={value.name}
                time={value.time}
              />
            ))}

            {/* Blog Component End*/}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Blog;
