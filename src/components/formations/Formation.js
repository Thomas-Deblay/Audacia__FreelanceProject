import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormationNav from '../../Layout/FormationNav';
import Section from './Section';
import Description from './Description';

const BlogData = {
  Assistantressrouceshumaine: {
    key: 'Manager',

    title: 'Assitant(e) Ressources Humaines',
    subtitle: 'Titre professionnel niveau 5',

    name: 'Formateur',
    time: '400 heures',
    description: {
      text: [
        " Etre capable de : \n - Assurer le suivi des dossiers individuels, établit les déclarations obligatoires, préparer les éléments de paie, traiter des données statistiques.\n- Participer aux processus de recrutement, intervenir sur tout ou partie des étapes de recrutement depuis l'analyse du poste jusqu'à l'intégration du salarié.\n- Participer à l'élaboration du plan de formation et en assurer le suivi administratif.\n- Favoriser les relations sociales au quotidien et alerter son hiérarchique sur des situations potentiellement conflictuelles. ",
        'Demandeurs d’emploi, salariés, professionnel en reconversion.',
        '- Bacheliers, motivés par la gestion des Ressources Humaines ou\n- demandeur d’emploi ou salariés de niveau bac ayant 2 ans d’expérience dans le domaine des ressources humaines.\n- Motivé par les langues étrangères, anglais : niveau B1',
      ],
      icon: {
        icon1: ['Type de formation', 'diplomante / certifiante RNCP 6161'],
        icon2: ['Filière', 'gestion d’entreprise'],
        icon3: ['Niveau de sortie de la formation', 'niveau 5'],
        icon4: ['Durée de la formation', '840heures'],
        icon5: ['Coût de la Formation', '7 900 euros'],
        icon6: ['Prochaines sessions', 'janvier 2023'],

        icon7: [
          'Accessibilité handicap',
          'Notre site répond aux conditions d’accessibilité',
        ],
      },
    },
  },

  Creervotreentreprise: {
    key: 'Creervotreentreprise',

    title: 'Créer votre entreprise',
    subtitle: 'Formation certifiante',

    name: 'Formateur',
    time: '70 heures',
    description: {
      text: [
        'Évaluer la faisabilité et la viabilité de son projet de création d’entreprise.\nAppréhender les problématiques financières et comptables.\nDéfinir la structure juridique la plus appropriée à son activité et en mesurer les incidences fiscales et sociales.\nAcquérir les bases fondamentales pour créer et démarrer une entreprise.',
        'Demandeurs d’emploi, salariés.',
        'Niveau 4 (baccalauréat)',
      ],
      icon: {
        icon1: ['Type de formation', 'Non diplômante'],
        icon2: ['Filière', 'gestion d’entreprise'],
        icon3: null,
        icon4: ['Durée de la formation', '70 heures'],
        icon5: ['Coût de la Formation', '3 150 euros'],
        icon6: ['Prochaines sessions', 'Février2023'],
        icon7: [
          'Accessibilité handicap',
          'Notre site répond aux conditions d’accessibilité',
        ],
      },
    },
  },
  directeurdetablissementecosociale: {
    key: 'directeurdetablissementecosociale',

    title: 'Directeur d’établissement de l’Economie Sociale',
    subtitle: 'Titre professionnel niveau 6',

    name: 'Formateur',
    time: '105 heures',
    description: {
      text: [
        " Etre capable de : \n - Assurer le suivi des dossiers individuels, établit les déclarations obligatoires, préparer les éléments de paie, traiter des données statistiques.\n- Participer aux processus de recrutement, intervenir sur tout ou partie des étapes de recrutement depuis l'analyse du poste jusqu'à l'intégration du salarié.\n- Participer à l'élaboration du plan de formation et en assurer le suivi administratif.\n- Favoriser les relations sociales au quotidien et alerter son hiérarchique sur des situations potentiellement conflictuelles. ",
        'Demandeurs d’emploi, salariés, professionnel en reconversion.',
        '- Bacheliers, motivés par la gestion des Ressources Humaines ou\n- demandeur d’emploi ou salariés de niveau bac ayant 2 ans d’expérience dans le domaine des ressources humaines.\n- Motivé par les langues étrangères, anglais : niveau B1',
      ],
      icon: {
        icon1: ['Type de formation', 'diplômante, certifiante RNCP 15263'],
        icon2: ['Filière', 'gestion d’entreprise'],
        icon3: ['Niveau de sortie de la formation', 'niveau 6'],
        icon4: ['Durée de la formation', '800heures'],
        icon5: ['Coût de la Formation', '9 900 euros'],
        icon6: ['Prochaines sessions', 'janvier 2023'],

        icon7: [
          'Accessibilité handicap',
          'Notre site répond aux conditions d’accessibilité',
        ],
      },
    },
  },
  International: {
    key: 'International',

    title: 'Mobilité Internationale',
    subtitle: 'Développez vos compétences grâce à Erasmus Pro',

    name: 'Formateur',
    time: '105 heures',
    description: {
      text: [
        " Etre capable de : \n - Assurer le suivi des dossiers individuels, établit les déclarations obligatoires, préparer les éléments de paie, traiter des données statistiques.\n- Participer aux processus de recrutement, intervenir sur tout ou partie des étapes de recrutement depuis l'analyse du poste jusqu'à l'intégration du salarié.\n- Participer à l'élaboration du plan de formation et en assurer le suivi administratif.\n- Favoriser les relations sociales au quotidien et alerter son hiérarchique sur des situations potentiellement conflictuelles. ",
        'Demandeurs d’emploi, salariés, professionnel en reconversion.',
        '- Bacheliers, motivés par la gestion des Ressources Humaines ou\n- demandeur d’emploi ou salariés de niveau bac ayant 2 ans d’expérience dans le domaine des ressources humaines.\n- Motivé par les langues étrangères, anglais : niveau B1',
      ],
      icon: {
        icon1: ['Type de formation', 'Stage en entreprise à l’étranger'],
        icon2: ['Filière', 'Langues étrangères'],
        icon3: null,
        icon4: ['Durée de la formation', '1 année'],
        icon5: ['Coût de la Formation', 'Prise en charge ERASMUS'],
        icon6: ['Prochaines sessions', 'Février2023'],

        icon7: [
          'Accessibilité handicap',
          'Notre site répond aux conditions d’accessibilité',
        ],
      },
    },
  },
  managerdecentredeprofit: {
    key: 'managerdecentredeprofit',

    title: 'Manager de Centre de Profit',
    subtitle: 'Apprenez à animer une structure économique',

    name: 'Formateur',
    time: '105 heures',
    description: {
      text: [
        ' Animer une structure économique dans ses dimensions humaine, commerciale, production et financière et organiser le fonctionnement de la structure en conformité avec les objectifs qui lui sont donnés. ',
        'Demandeurs d’emploi, salariés, professionnel en reconversion.',
        '- Bacheliers, motivés par la gestion d’entreprise ou\n- demandeur d’emploi ou salariés de niveau bac ayant 2 ans d’expérience dans ce domaine.\n- Motivé par les langues étrangères, anglais : niveau B1',
      ],
      icon: {
        icon1: ['Type de formation', 'diplômante, certifiante RNCP 35646'],
        icon2: ['Filière', 'gestion d’entreprise'],
        icon3: ['Niveau de sortie de la formation', 'niveau 6'],
        icon4: ['Durée de la formation', '805 heures'],
        icon5: ['Coût de la Formation', '8 500 euros'],
        icon6: ['Prochaines sessions', 'janvier 2023'],

        icon7: [
          'Accessibilité handicap',
          'Notre site répond aux conditions d’accessibilité',
        ],
      },
    },
  },
  passerellesversfinanceseuro: {
    key: 'passerellesversfinanceseuro',

    title: 'Passerelles vers les Financements Européens',
    subtitle: 'Passerelles vers les Financements Européens',

    name: 'Formateur',
    time: '105 heures',
    description: {
      text: [
        'Comprendre la politique de cohésion économique, sociale et territoriale de l’Union Européenne, ses instruments financiers, sa mise en œuvre en Martinique\nConnaitre les étapes du montage de projet européen et savoir rédiger une demande de subvention - FSE / FEDER\nConnaître les étapes du montage de projet Européen (suite) et ses outils de suivi - FSE / FEDER ',
        'Demandeurs d’emploi, salariés.',
        'Notions de gestion d’entreprise, comptabilité',
      ],
      icon: {
        icon1: ['Type de formation', 'Non diplômante'],
        icon2: ['Filière', 'gestion d’entreprise'],
        icon3: null,
        icon4: ['Durée de la formation', '21 heures'],
        icon5: ['Coût de la Formation', '2 450 euros'],
        icon6: ['Prochaines sessions', 'Février 2023'],

        icon7: [
          'Accessibilité handicap',
          'Notre site répond aux conditions d’accessibilité',
        ],
      },
    },
  },
  TOEIC: {
    key: 'TOEIC',

    title: 'TOEIC',
    subtitle: 'Préparez votre examen dans les meilleurs conditions',

    name: 'Formateur',
    time: '105 heures',
    description: {
      text: [
        'Acquérir les compétences linguistiques professionnelle permettant de travailler dans le secteur/domaine visé\nIntégrer/ valider un programme universitaire\nPostuler à une offre d’emploi dans n’importe quel domaine\nMaîtriser les bases grammaticale/ la communication écrite et orale\nObtenir la certification TOEIC',
        'Demandeurs d’emploi, salariés.',
        'Niveau d’Anglais : A2',
      ],
      icon: {
        icon1: ['Type de formation', 'test'],
        icon2: ['Filière', 'Langues étrangères'],
        icon3: null,
        icon4: ['Durée de la formation', '40 heures'],
        icon5: ['Coût de la Formation', '3190 euros'],
        icon6: ['Prochaines sessions', 'Février 2023'],

        icon7: [
          'Accessibilité handicap',
          'Notre site répond aux conditions d’accessibilité',
        ],
      },
    },
  },
};

function Formation() {
  const { formationId } = useParams();
  const Form = BlogData[formationId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //const [roomDetails, setRoomDetails] = useState(null);

  //useEffect(() => {
  //if(formationId){

  //  }
  //}, [formationId])

  console.log(BlogData[formationId].description);

  return (
    <React.Fragment>
      <FormationNav isDark={true} />
      <Section
        title={BlogData[formationId].title}
        subtitle={BlogData[formationId].subtitle}
      />
      <Description
        text={BlogData[formationId].description.text}
        icon={BlogData[formationId].description.icon}
      />
    </React.Fragment>
  );
}

export default Formation;
