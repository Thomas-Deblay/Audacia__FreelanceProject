import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';

// BlogCard

function Iconoption({ titre, subtext }) {
  return (
    <div className="descriptionIcons">
      <StarBorderIcon className="descriptionIcons__Icon" />
      <div className="descriptionIcons__IconText">
        <h2> {titre}</h2>
        <p>{subtext}</p>
      </div>
    </div>
  );
}

export default Iconoption;
