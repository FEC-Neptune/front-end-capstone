import React from 'react';

const PhotoForm = ({open}) => {

  if (!open) {
    return null;
  }

  return (
    <div>
      Photo Form
    </div>

  );
};

export default PhotoForm;