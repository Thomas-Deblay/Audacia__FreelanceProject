import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import Iconoption from '../Iconoption.js';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import VerifiedIcon from '@mui/icons-material/Verified';
import SearchIcon from '@mui/icons-material/Search';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EuroIcon from '@mui/icons-material/Euro';
import AccessibleIcon from '@mui/icons-material/Accessible';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

// BlogCard

const DescriptionErasmus = ({ text, icon }) => {
  return (
    <React.Fragment>
      <section className="section" id="descriptionFormation">
        <Container>
          <Row className="justify-content-left description">
            <Col lg={8}>
              <div className="header-title  mb-5">
                <h3>A Propos de ce programme Erasmus</h3>
                <div className="descriptiontext">
                  <br />
                  <h6>🎯 Objectifs du programme</h6>
                  <p className="title-desc text-muted mt-3">
                    <ul>
                      <li>
                        <strong>Renforcer l’employabilité</strong> des jeunes à
                        travers une mobilité professionnelle de{' '}
                        <strong>3,5 mois en Sardaigne</strong>.
                      </li>
                      <li>
                        <strong>Favoriser l’apprentissage linguistique</strong>{' '}
                        en anglais et italien,
                        <strong> en compétences numériques</strong>, tout en
                        découvrant une nouvelle culture.
                      </li>
                      <li>
                        <strong>Acquérir des compétences clés</strong> dans les
                        secteurs de l’
                        <strong>économie sociale et / ou du tourisme</strong>.
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="descriptiontext">
                  <h6>📅 Dates des séjours en Sardaigne</h6>
                  <p className="title-desc text-muted mt-3">
                    <ul>
                      <li>
                        <strong>Groupe 1</strong> : du{' '}
                        <strong>16 avril au 2 août 2025</strong>
                      </li>
                      <li>
                        <strong>Groupe 2</strong> : du{' '}
                        <strong>22 août au 11 décembre 2025</strong>
                      </li>
                    </ul>
                    💡{' '}
                    <em>
                      Avant le départ, chaque participant suit une formation
                      préparatoire obligatoire.
                    </em>
                  </p>
                </div>
                <div className="descriptiontext">
                  <h6>📚 Formation préalable obligatoire</h6>
                  <p className="title-desc text-muted mt-3">
                    <strong>Objectif</strong> : Préparer les participants aux
                    missions professionnelles et à l’intégration culturelle.
                  </p>
                </div>
                <div className="descriptiontext">
                  <h6>💻 Contenu de la formation</h6>
                  <p className="title-desc text-muted mt-3">
                    ✔ <strong>Formation linguistique</strong> (anglais et
                    initiation à l’italien) via la plateforme digitale{' '}
                    <strong>OLS</strong> de l’Union Européenne. <br />✔{' '}
                    <strong>Compétences numériques</strong> via la plateforme{' '}
                    <strong>OLS</strong>. <br />✔{' '}
                    <strong>Sensibilisation interculturelle</strong> et aux
                    valeurs de l’Union Européenne. <br />✔{' '}
                    <strong>Séminaire spécialisé</strong> sur les secteurs de l’
                    <strong>économie sociale et du tourisme</strong>.
                  </p>
                </div>
                <div className="descriptiontext">
                  <h6>🗓 Dates de formation</h6>
                  <p className="title-desc text-muted mt-3">
                    <ul>
                      <li>
                        <strong>Groupe 1</strong> : du{' '}
                        <strong>10 mars au 11 avril 2025</strong>
                      </li>
                      <li>
                        <strong>Groupe 2</strong> : du{' '}
                        <strong>8 juillet au 18 août 2025</strong>
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="descriptiontext">
                  <h6>💼 Missions professionnelles en Sardaigne</h6>
                  <p className="title-desc text-muted mt-3">
                    Chaque participant effectuera un{' '}
                    <strong>stage de 3,5 mois</strong> dans une structure locale
                    en Sardaigne.
                  </p>
                  <br />
                  <h6>🔹 Exemples de missions</h6>
                  <p className="title-desc text-muted mt-3">
                    {' '}
                    ✔ <strong>Assistant administratif</strong> dans une ONG{' '}
                    <br /> ✔ <strong>Agent d’accueil</strong> au sein du{' '}
                    <strong>Parc Naturel Régional</strong>. <br /> ✔{' '}
                    <strong>
                      Agent au sein d’une association de voile traditionnelle et
                      de sauvegarde du patrimoine
                    </strong>
                    . <br /> <br />
                    💡{' '}
                    <em>
                      Une immersion totale pour développer des compétences
                      professionnelles et une meilleure compréhension du milieu
                      de l'économie sociale et du tourisme !
                    </em>
                  </p>
                </div>
                <div className="descriptiontext">
                  <h6>Thèmes du projet</h6>
                  <p className="title-desc text-muted mt-3">
                    <ul>
                      <li>Inclusion et diversité</li>
                      <li>Economie sociale et tourisme</li>
                      <li>Développement durable et éco-responsabilité</li>
                      <li>Education numérique</li>
                    </ul>
                  </p>
                </div>
                <div className="descriptiontext">
                  <h6>✅ Critères d’éligibilité</h6>
                  <p className="title-desc text-muted mt-3">
                    <ul>
                      <li>
                        <strong>Âge</strong> : Entre 18 et 30 ans
                      </li>
                      <li>
                        <strong>Niveau d’études</strong> : Diplôme niveau 4
                        (Baccalauréat ou équivalent)
                      </li>
                      <li>
                        <strong>Motivation</strong> : Intérêt fort pour
                        l’économie sociale et le tourisme
                      </li>
                      <li>
                        <strong>Engagement</strong> : Volonté de vivre une
                        expérience à l’étranger et d’apprendre de nouvelles
                        compétences
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="descriptiontext">
                  <h6>📝 Procédure de sélection</h6>
                  <p className="title-desc text-muted mt-3">
                    <ul>
                      <li>
                        Pré-sélection sur dossier (CV + lettre de motivation)
                      </li>
                      <li>
                        <strong>Entretien individuel</strong> avec le jury de
                        sélection
                      </li>
                      <li>
                        Décision finale et notification des résultats aux
                        candidats retenus
                      </li>
                    </ul>
                  </p>
                </div>
                <br />
                <p className=" text-muted mt-3">
                  📌 <em>Le nombre de places est limité !</em>
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="descriptionI  ">
                <div className="descriptionIcons">
                  <VerifiedIcon className="descriptionIcons__Icon" />{' '}
                  <div className="descriptionIcons__IconText">
                    <h2> Type de programme</h2>
                    <p>Sardaigne, Italie</p>
                  </div>
                </div>
                <div className="descriptionIcons">
                  <SearchIcon className="descriptionIcons__Icon" />{' '}
                  <div className="descriptionIcons__IconText">
                    <h2> Groupe cible</h2>
                    <p>18 à 30 ans, titulaires du baccalauréat ou équivalent</p>
                  </div>
                </div>
                {/* Creer un componennt Icon3 et faire icon.icon3 && <Icon3 titre=icon.icon3[0] soustitre=icon.icon3[1] /> */}
                {icon.icon3 && (
                  <Iconoption titre={icon.icon3[0]} subtext={icon.icon3[1]} />
                )}
                <div className="descriptionIcons">
                  <AccessTimeIcon className="descriptionIcons__Icon" />{' '}
                  <div className="descriptionIcons__IconText">
                    <h2> Durée du programme</h2>
                    <p>5 mois</p>
                  </div>
                </div>
                {/* <div className="descriptionIcons">
                  <EuroIcon className="descriptionIcons__Icon" />{' '}
                  <div className="descriptionIcons__IconText">
                    <h2> {icon.icon5[0]}</h2>
                    <p>{icon.icon5[1]}</p>
                  </div>
                </div> */}
                <div className="descriptionIcons">
                  <CalendarMonthIcon className="descriptionIcons__Icon" />{' '}
                  <div className="descriptionIcons__IconText">
                    <h2> Prochaines sessions</h2>
                    <p>à partir du 10 mars 2025</p>
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

export default DescriptionErasmus;
