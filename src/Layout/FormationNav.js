import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Container,
  NavbarToggler,
  NavLink,
  Button,
} from 'reactstrap';
import Scrollspy from 'react-scrollspy';

//import images
import logoLight from '../assets/images/logoAudiaciaLight.png';
import logoDark from '../assets/images/logoHome3.png';
import logoREESS from '../assets/images/LogoMFRMOIRANS.png';
import { Link } from 'react-router-dom';

const NavBar = ({ isDark, isFormationId }) => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [navClass, setnavClass] = useState('');

  const toggle = () => setisOpenMenu(!isOpenMenu);

  useEffect(() => {
    window.addEventListener('scroll', scrollNavigation, true);
  });

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavClass('nav-sticky');
    } else {
      setnavClass('');
    }
  }

  const isDarkClass = isDark ? 'navbar-light' : '';

  return (
    <React.Fragment>
      <span>
        <nav
          className={
            'navbar navbar-expand-lg fixed-top ' +
            isDarkClass +
            ' sticky ' +
            navClass
          }
          id="navbar"
        >
          <Container style={{ paddingRight: '65px' }}>
            <Link className="navbar-brand logo text-uppercase" to="/">
              {isDark ? (
                <>
                  <img
                    src={logoDark}
                    className="logo-light"
                    alt=""
                    height="80"
                    style={{ paddingTop: '10px' }}
                  />
                  <img
                    src={logoDark}
                    className="logo-dark"
                    alt=""
                    height="40"
                  />
                </>
              ) : (
                <>
                  <img
                    src={logoDark}
                    className="logo-dark"
                    alt=""
                    height="80"
                  />
                  <img
                    src={logoLight}
                    className="logo-light "
                    alt=""
                    height="60"
                  />
                </>
              )}
            </Link>
            <Link className="navbar-brand logo text-uppercase" to="/">
              {isFormationId == 'directeurdetablissementecosociale' ? (
                <>
                  <img
                    src={logoREESS}
                    className="logo-light"
                    alt=""
                    height="80"
                    style={{ paddingTop: '10px' }}
                  />
                  <img
                    src={logoREESS}
                    className="logo-dark"
                    alt=""
                    height="40"
                  />
                </>
              ) : (
                <></>
              )}
            </Link>
            <NavbarToggler
              className="navbar-toggler"
              type="button"
              onClick={toggle}
            >
              <i className="mdi mdi-menu"></i>
            </NavbarToggler>
            <Collapse
              isOpen={isOpenMenu}
              className="navbar-collapse"
              id="navbarNav"
            >
              <Scrollspy
                offset={-18}
                items={['Accueil']}
                currentClassName="active"
                className="navbar-nav ms-auto navbar-center"
                id="mySidenav"
              >
                <li className="nav-item">
                  <NavLink href="/#Accueil">Accueil</NavLink>
                </li>
              </Scrollspy>
            </Collapse>
          </Container>
        </nav>
      </span>
    </React.Fragment>
  );
};

export default NavBar;
