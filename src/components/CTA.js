import React, { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

const CTA = () => {
  const [modal, setModal] = useState(false);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);

  const changeKeyboard = (e) => {
    setKeyboard(e.currentTarget.checked);
  };

  return (
    <React.Fragment>
      <section className="bg-cta">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="header-title text-center">
                <h2>Commencez l'aventure dès maintenant avec nous</h2>

                <div className="mt-4">
                  <Button color="success" onClick={toggle} className="mt-2">
                    S'inscrire
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
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
          <form action="https://formspree.io/f/xeqdezwy" method="POST">
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
    </React.Fragment>
  );
};

export default CTA;
