import React, {useState} from 'react';

const AddReviewModal = ({open, onClose}) => {
  if (!open) {
    return null;
  }
  return (
    <div>
      <button onClick={onClose} >Submit</button>
    </div>
  );
};

export default AddReviewModal;