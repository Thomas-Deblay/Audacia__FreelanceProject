import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';

import img1 from '../assets/images/blog/blog-1.jpg';
import img2 from '../assets/images/blog/blog--2.jpg';
import img3 from '../assets/images/blog/blog-3.jpg';
import img4 from '../assets/images/blog/blog-2.jpg';

import img5 from '../assets/images/users/img-5.jpg';
import img6 from '../assets/images/users/img-6.jpg';
import img7 from '../assets/images/users/img-7.jpg';

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
    imgsrc1: img3,
    title: 'Assitant(e) Ressources Humaines',
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
    title: 'Directeur d’établissement de l’Economie Sociale',
    subtitle: 'Titre professionnel niveau 6',
    imgsrc2: img7,
    name: 'Formateur',
    time: '800 heures',
  },
  {
    key: 'International',
    imgsrc1: img1,
    title: 'Mobilité Internationale',
    subtitle: 'Développez vos compétences grâce à Erasmus Pro',
    imgsrc2: img7,
    name: 'Formateur',
    time: '1 année',
  },
  {
    key: 'managerdecentredeprofit',
    imgsrc1: img4,
    title: 'Manager de Centre de Profit',
    subtitle: 'Apprenez à animer une structure économique',
    imgsrc2: img7,
    name: 'Formateur',
    time: '805 heures',
  },
  {
    key: 'passerellesversfinanceseuro',
    imgsrc1: img3,
    title: 'Passerelles vers les Financements Européens',
    subtitle:
      'Apprenez à construire et suivre vos projets Européens (FSE,FEDER...)',
    imgsrc2: img7,
    name: 'Formateur',
    time: '21 heures',
  },
  {
    key: 'TOEIC',
    imgsrc1: img3,
    title: 'TOEIC',
    subtitle: 'Préparez votre examen dans les meilleurs conditions',
    imgsrc2: img7,
    name: 'Formateur',
    time: '105 heures',
  },
];

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

          <Row>
            {/* Blog Component Start*/}

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
