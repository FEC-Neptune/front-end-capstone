import React, { useState } from 'react';
import StarRating from './StarRating.jsx';

const AddReviewModal = ({ open, onClose, metaData, product, returnReviewsMeta }) => {
  if (!open) {
    return null;
  }

  let array = [];
  for (let keys in metaData.characteristics) {
    array.push(keys);
  }

  return (
    <div id="modalBackground">
      <div id="modalContainer">
        <form>
          <div id="modalHeading">
            <div id="writeReview">
              <h1>Write Your Review</h1>
              <h2>About The {metaData.product_id}</h2>
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
            {array.map((char) => {
              return <div>{char}</div>;
            })}
          </div>

          <div id="reviewSummary">
            <h2 className="reviewHeading">Please submit a summary of your review</h2>
            <textarea maxlength="60" placeholder="Example: Best Purchase Ever!" className="reviewInput" rows="1" cols="60"></textarea>
          </div>

          <div id="reviewBody">
            <h2 className="reviewHeading">Please submit a detailed review</h2>
            <textarea maxlength="1000" required className="reviewInput" rows="4" cols="50"></textarea>
          </div>

          <div id="reviewPhotos"></div>

          <div id="nickname">
            <h2 className="reviewHeading">Please submit a nickname</h2>
            <input maxlength="60" required className="reviewInput" placeholder="Example: jackson11!" ></input>
            <h4>For privacy reasons, do not user your full name or email address</h4>
          </div>

          <div id="email">
            <h2 className="reviewHeading">Please enter your email</h2>
            <input placeholder="jackson11@gmail.com" maxlength="60" required className="reviewInput"></input>
            <h4>For authentication reasons, you will not be emailed</h4>
          </div>

          <button id="submitButton" type="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddReviewModal;