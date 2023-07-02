import React, { useState } from 'react';

const AddReviewModal = ({ open, onClose, reviewsMeta }) => {

  if (!open) {
    return null;
  }
  return (
    <div id="modalBackground">
      <div id="modalContainer">

        <div id="modalHeading">
          <h1>Submit a new review</h1>
          <button id="closeModal" onClick={onClose}> X </button>
        </div>

        <div id="overallRating">
          <h2 className="reviewHeading">Overall Rating</h2>
          <div id="chooseStar">

            <input className="radio" type="radio" id="oneStar" name="overallRating"></input>
            <label for="oneStar">1 Star - Poor</label>

            <input className="radio" type="radio" id="twoStar" name="overallRating" ></input>
            <label for="twoStar">2 Star - Fair</label>

            <input className="radio" type="radio" id="threeStar" name="overallRating" ></input>
            <label for="threeStar">3 Star - Average</label>


            <input className="radio" type="radio" id="fourStar" name="overallRating" ></input>
            <label for="fourStar">4 Star - Good</label>


            <input className="radio" type="radio" id="fiveStar" name="overallRating" ></input>
            <label for="fiveStar">5 Star - Great</label>

          </div>
        </div>

        <div id="recommendQuestion">
          <h2 className="reviewHeading">Do you recommend this product?</h2>
          <div id="recommendation">
            <input type="radio" id="recommendYes" name="recommendQuestion" ></input>
            <label for="Four Star">Yes</label>
            <input type="radio" id="recommendNo" name="recommendQuestion" ></input>
            <label for="Five Star">No</label>
          </div>
        </div>

        <div id="reviewSummary">
          <h2 className="reviewHeading">Please submit a summary of your review</h2>
          <textarea className="reviewInput" rows="4" cols="50"></textarea>
        </div>

        <div id="reviewBody">
          <h2 className="reviewHeading">Please submit a detailed review</h2>
          <textarea className="reviewInput" rows="4" cols="50"></textarea>
        </div>

        <div id="nickname">
          <h2 className="reviewHeading">Please submit a nickname</h2>
          <input className="reviewInput"></input>
        </div>

        <div id="email">
          <h2 className="reviewHeading">Please enter your email</h2>
          <input className="reviewInput"></input>
        </div>

        <button id="submitButton">Submit</button>
      </div>
    </div>
  );
};

export default AddReviewModal;