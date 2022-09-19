import React, { useState } from 'react';
import Slider from 'react-slick';
import {
  Button,
  Col,
  Container,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

import img1 from '../../assets/images/home/hp1-ouverture.png';
import img2 from '../../assets/images/home/hp-2.png';
import img3 from '../../assets/images/home/hp-3.png';
import img4 from '../../assets/images/home/hp-4.png';
import img5 from '../../assets/images/home/hp-5.png';

// Feature Card

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
    title: 'Pour les Professionels',
    caption: 'Category leading brand experiences that have meaning.',
  },
  {
    iconClass: 'uil uil-crosshair',
    title: 'Pour les Particulier',
    caption: 'Category leading brand experiences that have meaning.',
  },
  {
    iconClass: 'uil uil-search',
    title: 'Preparer son TOEIC',
    caption: 'Category leading brand experiences that have meaning.',
  },
];

//............

const images = [img1, img2, img3, img4, img5];

const Section = () => {
  const [modal, setModal] = useState(false);
  const [keyboard, setKeyboard] = useState(true);

  const [imageIndex, setImageIndex] = useState(0);

  // code for modal
  const toggle = () => setModal(!modal);

  const changeKeyboard = (e) => {
    setKeyboard(e.currentTarget.checked);
  };
  // fin code modal

  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </div>
    );
  };

  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </div>
    );
  };

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 3,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <section className="bg-home6" id="Accueil">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="text-center">
              <h6 className="sub-title mb-3"></h6>
              <h1 className="mb-4 audaciatitre">
                BIENVENUE A <br /> AUDACIA <br /> BUSINESS SCHOOL
              </h1>
              {/* <p className="text-muted fs-17">
                S'engager ensemble pour reussir
              </p> */}
              <div className="mt-4 pt-2">
                <Button
                  color="audaciablue"
                  className="ms-lg-1 image-popup home6text "
                  onClick={toggle}
                >
                  <strong>S'inscrire</strong>
                </Button>

                {/* Fin du Modal  */}
              </div>
            </div>
          </Col>
        </Row>

        {/* Swiper Start */}
        <Row className="mt-4 pt-3">
          <Col lg={12}>
            <div className="swiper-container homeslider pb-5">
              <div className="swiper-wrapper mt-4">
                <Slider {...settings}>
                  {images.map((item, key) => (
                    <div
                      key={key}
                      className={
                        key === imageIndex
                          ? 'layslide activeLaySlide'
                          : 'layslide'
                      }
                    >
                      <img src={item} alt={item} className="Layimg img-fluid" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Modal Inscription  */}
      <Modal
        isOpen={modal}
        toggle={toggle}
        className=""
        backdrop="static"
        keyboard={keyboard}
      >
        <ModalHeader toggle={toggle} className="Modal__header">
          Formulaire d'inscription
        </ModalHeader>
        <ModalBody>
          <form action="https://formspree.io/f/xrgdpqql" method="POST">
            <div className="Modal">
              <div className="mb-4 position-relative">
                <label htmlFor="Nom" className="form-label">
                  <strong>Nom*</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Nom"
                  placeholder="Nom Prenom"
                  name="nom"
                />
              </div>
              <div className="mb-4 position-relative">
                <label htmlFor="Email" className="form-label">
                  <strong>Email*</strong>
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
                  <strong> Numero*</strong>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="Telephone"
                  name="Numero"
                  placeholder="Numero de telephone"
                />
              </div>
              <div className="mb-4 position-relative">
                <label htmlFor="telephone" className="form-label">
                  <strong>Formation Choisie*</strong>
                </label>
                <select
                  name="Formation Choisie"
                  className="form-control"
                  id="Formation"
                >
                  <option value="null">Choisir la formation</option>
                  <option value="Assitant(e) Ressources Humaines">
                    Assitant(e) Ressources Humaines
                  </option>
                  <option value="Creer votre entreprise">
                    Creer votre entreprise
                  </option>
                  <option value="Directeur d'etablissement de l'economie sociale">
                    Directeur d'etablissement de l'economie sociale
                  </option>
                  <option value="Mobilité International">
                    Mobilité International
                  </option>
                  <option value="Manager de centre de profit">
                    Manager de centre de profit
                  </option>
                  <option value="Passerelles vers les financements européens">
                    Passerelles vers les financements européens
                  </option>
                  <option value="TOEIC">TOEIC</option>
                </select>
              </div>
              <div className="pt-2 modal__submit">
                <button
                  type="submit"
                  className="btn btn-audaciablue w-100 audaciabutton  "
                >
                  <strong>S'Inscrire </strong>
                </button>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </section>
  );
};

export default Section;
