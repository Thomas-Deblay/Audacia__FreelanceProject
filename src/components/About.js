import React from 'react';

import about from '../assets/images/1photo.jpg';
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

const About = () => {
  return (
    <React.Fragment>
      <section className="section bg-light" id="Apropos">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="header-title text-center mb-5">
                <p className="text-uppercase text-muted mb-2">A Propos</p>
                <h1>A propos de nous</h1>
                <div className="title-border mt-3"></div>
                <p className="title-desc text-muted mt-3"></p>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center g-3 g-lg-0">
            <Col className="about-img" lg={8}>
              <img
                src={about}
                className="img-fluid rounded box-shadow"
                alt=""
              />
            </Col>
            <Col lg={4}>
              <div className="skill-box bg-coloring p-4 rounded box-shadow">
                <p className="text-uppercase mb-1 coloring"></p>
                <h3 className="mb-2 audaciatitre2">
                  Audacia <br /> Ecole de Commerce
                </h3>
                <p className="text-muted">
                  À AUDACIA, nous avons à cœur d'aider nos étudiants à
                  s'améliorer grâce à des expériences pédagogiques originales au
                  delà des murs. Nous proposons aussi bien des cursus
                  certifiants ou diplômants de niveau Bac+2 à Bac+3. Ces cursus
                  sont partiellement bilingues et reconnus par l'Etat. Nous
                  accompagnons nos apprenants à se sentir suffisamment en
                  sécurité pour relever des défis et atteindre tous leurs
                  objectifs, aussi bien personnels que professionnels. Par nos
                  formations courtes, nous répondons aux besoins de salariés et
                  de demandeurs d'emploi. ​ Nous nous engageons à fournir à nos
                  étudiants des prestations et des ressources de qualité, afin
                  qu'ils puissent s'épanouir dans notre monde très
                  concurrentiel. 
                </p>

                {/* Skill Component Start 
                <div className="skills">
                  {SkillData.map((value, idx) => (
                    <SkillCard
                      key={idx}
                      title={value.title}
                      percentage={value.percentage}
                    />
                  ))}
                  {/* Skill Component End 
                </div>*/}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default About;
