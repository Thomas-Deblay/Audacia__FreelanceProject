import React, { useEffect } from 'react';
import FormationNav from '../../Layout/FormationNav';
import Section from './Section';
import Recruter from './Recruter';
import Description from './Description';
import Details from './Details';

function Entreprise() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //const [roomDetails, setRoomDetails] = useState(null);

  //useEffect(() => {
  //if(formationId){

  //  }
  //}, [formationId])

  return (
    <React.Fragment>
      <FormationNav isDark={false} />
      <Section title="Titre" subtitle="Soustitre looooooooggg" />
      <Details />
      <Recruter />
      <Description />
    </React.Fragment>
  );
}

export default Entreprise;
