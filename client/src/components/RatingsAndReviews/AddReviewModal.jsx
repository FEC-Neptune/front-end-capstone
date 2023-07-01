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

const AddReviewModal = ({ open, onClose, reviewsMeta }) => {
  if (!open) {
    return null;
  }
  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div className="modalBackground" style={MODAL_STYLES}>
        <div className="modalContainer" >
          <button onClick={onClose}> X </button>

          <div className="modalTitle">
            <h2>Submit a new review</h2>
          </div>

          <div className="overallRating">
            <h2>Overall Rating</h2>
            <input type="radio" id="oneStar" name="overallRating"></input>
            <label for="oneStar">One Star - Poor</label>
            <input type="radio" id="twoStar" name="overallRating" ></input>
            <label for="twoStar">Two Star - Fair</label>
            <input type="radio" id="threeStar" name="overallRating" ></input>
            <label for="threeStar">Three Star - Average</label>
            <input type="radio" id="fourStar" name="overallRating" ></input>
            <label for="fourStar">Four Star - Good</label>
            <input type="radio" id="fiveStar" name="overallRating" ></input>
            <label for="fiveStar">Five Star - Great</label>
          </div>

          <div className="recommendQuestion">
            <h2>Do you recommend this product?</h2>
            <input type="radio" id="recommendYes" name="recommendQuestion" ></input>
            <label for="Four Star">Yes</label>
            <input type="radio" id="recommendNo" name="recommendQuestion" ></input>
            <label for="Five Star">No</label>
          </div>

          <div className="reviewSummary">
            <h2>Please submit a summary of your review</h2>
            <textarea className="summaryText" rows="4" cols="50"></textarea>
          </div>

          <div className="reviewBody">
            <h2>Please submit a detailed review</h2>
            <textarea className="bodyText" rows="4" cols="50"></textarea>
          </div>

          <div className="nickname">
            <h2>Please submit a nickname</h2>
            <input className="nicknameText"></input>
          </div>

          <div className="email">
            <h2>Please enter your email</h2>
            <input className="emailText"></input>
          </div>

          <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default AddReviewModal;