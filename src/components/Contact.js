import React from 'react';
import { Col, Container, Row, Form, Label, Input, FormGroup } from 'reactstrap';

const Card = (props) => {
  return (
    <React.Fragment>
      <Col lg={3} md={6}>
        <div className="contact-info text-center mt-5">
          <div className="icon">
            <i className={props.iconClass}></i>
          </div>
          <div className="mt-4 pt-2">
            <h6 className="fs-17">{props.title}</h6>
            {props.isChildItem.map((item, key) => (
              <p className="text-muted mb-0" key={key}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
};

// Contact Data

const ContactData = [
  {
    title: 'Addresse',
    iconClass: 'mdi mdi-map-marker text-primary h4',
    isChildItem: ['Martinique'],
  },
  {
    title: 'Telephone',
    iconClass: 'mdi mdi-phone text-primary h4',
    isChildItem: ['Phone: +33686356249'],
  },
  {
    title: 'Contact',
    iconClass: 'mdi mdi-email text-primary h4',
    isChildItem: ['www.audacia.com', 'info.audaciabs@gmail.com'],
  },
  {
    title: "Horaires d'Ouverture",
    iconClass: 'mdi mdi-calendar-clock text-primary h4',
    isChildItem: ['Lundi-Vendredi: 8:00-17:00', 'Samedi-Dimanche: Fermé'],
  },
];

const Contact = () => {
  return (
    <React.Fragment>
      <section className="section" id="contact">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center mb-4">
                <p className="text-uppercase text-muted mb-2">Contact</p>
                <h3 className="text-uppercase">Restons en contact</h3>
                <div className="title-border mt-3"></div>
                <p className="title-desc text-muted mt-3">
                  Si vous avez des questions sur les formations, le deroule de
                  celle-ci, ou sur votre demande d'inscription, n'hesitez pas a
                  nous conacter. Nous vous accompagnerons dans vos demarches.
                </p>
              </div>
            </Col>
          </Row>

          {/*  */}

          <Row className="justify-content-center">
            {/* Contact Component Start */}

            {ContactData.map((value, idx) => (
              <Card
                key={idx}
                title={value.title}
                iconClass={value.iconClass}
                isChildItem={value.isChildItem}
              />
            ))}
            {/* Contact Component End */}
          </Row>

          <Row className="mt-5 pt-2 justify-content-center">
            <Col lg={9}>
              <div className="custom-form">
                {/* Real world form  */}
                <Form
                  action="https://formspree.io/f/xbjvywzr"
                  method="POST"
                  name="ContactForm"
                >
                  {/* --TEST form 
                <Form
                  action="https://formspree.io/f/mbjvywyr"
                  method="POST"
                  name="ContactForm"
                > */}
                  <p id="error-msg"></p>
                  <Row>
                    <Col lg={12}>
                      <FormGroup>
                        <div className="mb-3">
                          <Label for="name" className="form-label">
                            Nom Prénom* :
                          </Label>
                          <Input
                            name="Nom"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Entrer votre Nom"
                          />
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <FormGroup>
                        <div className="mb-3">
                          <Label for="email" className="form-label">
                            Email* :
                          </Label>
                          <Input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Entrer votre email"
                          />
                        </div>
                      </FormGroup>
                    </Col>

                    <Col lg={6}>
                      <FormGroup>
                        <div className="mb-3">
                          <Label for="number" className="form-label">
                            Télephone :
                          </Label>
                          <Input
                            type="number"
                            className="form-control"
                            name="numero"
                            id="number"
                            placeholder="Entrer votre numéro"
                          />
                        </div>
                      </FormGroup>
                    </Col>

                    <Col lg={12}>
                      <FormGroup>
                        <div className="mb-3">
                          <Label for="comments" className="form-label">
                            Message :
                          </Label>
                          <Input
                            type="textarea"
                            className="form-control"
                            placeholder="Laisser votre message ici"
                            name="message"
                            id="comments"
                            style={{ height: '100px' }}
                          />
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12}>
                      <FormGroup>
                        <div className="mt-3 text-end">
                          <input
                            type="submit"
                            id="submit"
                            name="Formulaire de contact"
                            className="submitBnt btn btn-primary"
                            value="Envoyer"
                          />
                          <div id="simple-msg"></div>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Contact;
