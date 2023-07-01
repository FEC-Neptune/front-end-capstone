import React, { useState } from 'react';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
};
const OVERLAY_STYLES = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
};

const AddReviewModal = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  return (
    <>
      <div style={OVERLAY_STYLES}/>
      <div style={MODAL_STYLES}>
        <input placeHolder="Overall Rating"></input>
        <input placeHolder="Do you recommend this product?"></input>
        <input placeHolder="Summary"></input>
        <input placeHolder="Review"></input>
        <input placeHolder="Nickname"></input>
        <input placeHolder="Your Email"></input>
        <button onClick={onClose} >Submit</button>
      </div>
    </>
  );
};

export default AddReviewModal;