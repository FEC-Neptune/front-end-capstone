import React, { useState } from 'react';
import StarRating from './StarRating.jsx';

const AddReviewModal = ({ open, onClose, metaData, product }) => {
  if (!open) {
    return null;
  }

  return (
    <div id="modalBackground">
      <div id="modalContainer">
        <form>
          <div id="modalHeading">
            <div id="writeReview">
              <h1>Write Your Review</h1>
              <h2>About The {product.name}</h2>
            </div>
            <button id="closeModal" onClick={onClose}> X </button>
          </div>

          <div id="overallRating">
            <h2 className="reviewHeading">Overall Rating</h2>
            <StarRating />
          </div>

          <div id="recommendQuestion">
            <h2 className="reviewHeading">Do you recommend this product?</h2>
            <div id="recommendation">
              <input required type="radio" id="recommendYes" name="recommendQuestion" ></input>
              <label for="Four Star">Yes</label>
              <input type="radio" id="recommendNo" name="recommendQuestion" ></input>
              <label for="Five Star">No</label>
            </div>
          </div>

          <div id="reviewCharacteristics">

          </div>

          <div id="reviewSummary">
            <h2 className="reviewHeading">Please submit a summary of your review</h2>
            <textarea placeholder="Example: Best Purchase Ever!" className="reviewInput" rows="1" cols="60"></textarea>
          </div>

          <div id="reviewBody">
            <h2 className="reviewHeading">Please submit a detailed review</h2>
            <textarea required className="reviewInput" rows="4" cols="50"></textarea>
          </div>

          <div id="reviewPhotos"></div>

          <div id="nickname">
            <h2 className="reviewHeading">Please submit a nickname</h2>
            <input required className="reviewInput"></input>
          </div>

          <div id="email">
            <h2 className="reviewHeading">Please enter your email</h2>
            <input required className="reviewInput"></input>
          </div>

          <button id="submitButton" type="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddReviewModal;