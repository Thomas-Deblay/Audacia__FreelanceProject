import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

import { Link } from 'react-router-dom';
import { Col, Container, Row, Button } from 'reactstrap';

import download from '../../../assets/images/erasmus/erasmussardaigne2.png';

const SectionErasmus = ({ props }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <React.Fragment>
      <section className="bg-home5 overflow-hidden" id="home">
        <Container>
          <div className="position-relative" style={{ zIndex: '1' }}>
            <Row className="align-items-center">
              <Col xl={7}>
                <div>
                  <h6 className="sub-title mb-3 audaciaclass">
                    Audacia International
                  </h6>
                  <h1 className="mb-4">
                    Action KA1 VET Mobilité ERASMUS Pro - « FÉES »
                  </h1>
                  <p className="text-muted fs-17">
                    Une expérience professionnelle en Sardaigne
                  </p>
                  <div className="mt-1 pt-1">
                    <img src={download} alt="home-4" className="home-img" />
                  </div>
                </div>
              </Col>
              <Col xl={5}>
                <div className="subscribe-form box-shadow mt-4 mt-lg-0">
                  <div className="text-center mb-4 pb-2">
                    {/* <p className="text-muted text-uppercase mb-2">
                      Welcome to Zoric
                    </p> */}
                    <h4>Formulaire d'inscription</h4>
                  </div>
                  {/* --Real world form  */}
                  {/* <form action="https://formspree.io/f/mnqkvwgq" method="POST"> */}
                  {/* --TEST Form */}
                  <form action="https://formspree.io/f/xvojrlan" method="POST">
                    <div className="mb-4 position-relative">
                      <label htmlFor="Nom" className="form-label">
                        Nom*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Nom"
                        placeholder="Nom Prénom"
                        name="nom"
                      />
                    </div>
                    <div className="mb-4 position-relative">
                      <label htmlFor="Email" className="form-label">
                        Email*
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="Email"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                    <div className="mb-4 position-relative">
                      <label htmlFor="telephone" className="form-label">
                        Numéro*
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="Telephone"
                        name="Numéro"
                        placeholder="Numéro de téléphone"
                      />
                    </div>
                    {/* <div className="mb-3 position-relative">
                      <label
                        htmlFor="exampleFormControlTextarea4"
                        className="form-label"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea4"
                        rows="3"
                        placeholder="Enter message"
                      ></textarea>
                    </div> */}
                    <select
                      name="Formation Choisie"
                      id="Formation"
                      className="OptionInscriptionFormation"
                    >
                      <option value="Erasmus"></option>
                    </select>
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="btn btn-audaciablue w-100 audaciabutton Formation__btnInscription "
                      >
                        S'Inscrire au programme Erasmus+
                      </button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <div className="position-relative">
        <div className="shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="1440"
            height="150"
            preserveAspectRatio="none"
            viewBox="0 0 1440 250"
          >
            <g mask='url("#SvgjsMask1036")' fill="none">
              <path
                d="M 0,214 C 96,194 288,120.8 480,114 C 672,107.2 768,201.4 960,180 C 1152,158.6 1344,41.6 1440,7L1440 250L0 250z"
                fill="rgba(255, 255, 255, 1)"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1036">
                <rect width="1440" height="250" fill="#ffffff"></rect>
              </mask>
            </defs>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SectionErasmus;
