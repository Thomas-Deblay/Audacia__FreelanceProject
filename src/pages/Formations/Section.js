import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Section = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <React.Fragment>
      <div>
        <p>page des Formations</p>
      </div>
    </React.Fragment>
  );
};

export default Section;
