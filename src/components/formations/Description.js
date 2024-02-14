import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import Iconoption from './Iconoption.js';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import VerifiedIcon from '@mui/icons-material/Verified';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EuroIcon from '@mui/icons-material/Euro';
import AccessibleIcon from '@mui/icons-material/Accessible';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

// BlogCard

const Description = ({ text, icon }) => {
  return (
    <React.Fragment>
      <section className="section" id="descriptionFormation">
        <Container>
          <Row className="justify-content-left description">
            <Col lg={8}>
              <div className="header-title  mb-5">
                <h3>A Propos de la formation</h3>
                <div className="descriptiontext">
                  <h6>Objectifs</h6>
                  <p className="title-desc text-muted mt-3">{text[0]}</p>
                </div>
                <div className="descriptiontext">
                  <h6>Public visé</h6>
                  <p className="title-desc text-muted mt-3">{text[1]}</p>
                </div>
                <div className="descriptiontext">
                  <h6>Pré requis</h6>
                  <p className="title-desc text-muted mt-3">{text[2]}</p>
                </div>
                {text[3] && (
                  <div className="descriptiontext">
                    <h6>Modalités pédagogiques</h6>
                    <p className="title-desc text-muted mt-3">{text[3]}</p>
                  </div>
                )}
                {text[4] && (
                  <div className="descriptiontext">
                    <h6>Modalités d'évaluation </h6>
                    <p className="title-desc text-muted mt-3">{text[4]}</p>
                  </div>
                )}
              </div>
            </Col>
            <Col lg={4}>
              <div className="descriptionI  ">
                <div className="descriptionIcons">
                  <VerifiedIcon className="descriptionIcons__Icon" />{' '}
                  <div className="descriptionIcons__IconText">
                    <h2> {icon.icon1[0]}</h2>
                    <p>{icon.icon1[1]}</p>
                  </div>
                </div>
                <div className="descriptionIcons">
                  <SearchIcon className="descriptionIcons__Icon" />{' '}
                  <div className="descriptionIcons__IconText">
                    <h2> {icon.icon2[0]}</h2>
                    <p>{icon.icon2[1]}</p>
                  </div>
                </div>
                {/* Creer un componennt Icon3 et faire icon.icon3 && <Icon3 titre=icon.icon3[0] soustitre=icon.icon3[1] /> */}
                {icon.icon3 && (
                  <Iconoption titre={icon.icon3[0]} subtext={icon.icon3[1]} />
                )}
                <div className="descriptionIcons">
                  <AccessTimeIcon className="descriptionIcons__Icon" />{' '}
                  <div className="descriptionIcons__IconText">
                    <h2> {icon.icon4[0]}</h2>
                    <p>{icon.icon4[1]}</p>
                  </div>
                </div>
                <div className="descriptionIcons">
                  <EuroIcon className="descriptionIcons__Icon" />{' '}
                  <div className="descriptionIcons__IconText">
                    <h2> {icon.icon5[0]}</h2>
                    <p>{icon.icon5[1]}</p>
                  </div>
                </div>
                <div className="descriptionIcons">
                  <CalendarMonthIcon className="descriptionIcons__Icon" />{' '}
                  <div className="descriptionIcons__IconText">
                    <h2> {icon.icon6[0]}</h2>
                    <p>{icon.icon6[1]}</p>
                  </div>
                </div>
                <div className="descriptionIcons">
                  <AccessibleIcon className="descriptionIcons__Icon" />{' '}
                  <div className="descriptionIcons__IconText">
                    <h2> {icon.icon7[0]}</h2>
                    <p>{icon.icon7[1]}</p>
                  </div>
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
