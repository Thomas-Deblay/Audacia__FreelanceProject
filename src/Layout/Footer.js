import React from 'react';
import logolight from '../assets/images/logoAudiaciaLight.png';
import { Col, Container, Row, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const ListCard = (props) => {
  return (
    <React.Fragment>
      <div className={props.isList ? 'col-lg-4 col-md-6' : 'col-lg-2 col-md-6'}>
        <div className={props.isShow ? 'mt-4 ps-0 ps-lg-5' : 'mt-4'}>
          <h6 className="text-white text-uppercase fs-16">{props.title}</h6>
          <ul className="list-unstyled footer-link mt-3 mb-0">
            {props.isChildList.map((Item, key) => (
              <li key={key}>
                <NavLink href={`/#${Item.link}`}>{Item.subList}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

const ListData = [
  {
    title: 'Navigation',
    isList: false,
    isShow: false,
    isChildList: [
      { id: 1, subList: 'Accueil', link: 'Accueil' },
      { id: 2, subList: 'Nos Formations', link: 'Formations' },
      { id: 3, subList: 'A propos', link: 'Apropos' },
      { id: 4, subList: 'Contact', link: 'contact' },
    ],
  },
];

const ListIconData = [
  {
    iconClass: 'mdi mdi-facebook',
  },
  {
    iconClass: 'mdi mdi-linkedin',
  },
  {
    iconClass: 'mdi mdi-pinterest',
  },
  {
    iconClass: 'mdi mdi-twitter',
  },
];

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bg-footer">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="mt-4">
                <Link to="/">
                  <img src={logolight} alt="" height="35" />
                </Link>
                <p className="text-white-50 mt-3 pt-2 mb-0 ">
                  "A joint commitment to success"
                </p>
                {/* <div className="mt-4">
                  <ul className="list-inline footer-social">
                
                    {ListIconData.map((item, key) => (
                      <li className="list-inline-item" key={key}>
                        <Link to="/#">
                          <i className={item.iconClass}></i>
                        </Link>
                      </li>
                    ))}
                    
                  </ul>
                </div> */}
              </div>
            </Col>

            {/* Footer List Start*/}

            {ListData.map((item, key) => (
              <ListCard
                key={key}
                isList={item.isList}
                isShow={item.isShow}
                title={item.title}
                isChildList={item.isChildList}
              />
            ))}
            {/* Footer List End*/}

            <Col lg={6}>
              <div className="mt-4 footer__actualite">
                <h6 className="text-white text-uppercase fs-16">Actualite</h6>
                <div className="mt-3 mb-0">
                  <div className="d-flex">
                    <i className="mdi mdi-twitter text-white-50 float-start"></i>
                    <div className="flex-grow-1">
                      <p className="text-white-50 ps-3">
                        Ouverture de votre campus le 9 janvier 2023
                      </p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="d-flex">
                      <i className="mdi mdi-twitter text-white-50 float-start"></i>
                      <div className="flex-grow-1">
                        <p className="text-white-50 ps-3">
                          Les inscriptions aux formations sont ouverte
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
