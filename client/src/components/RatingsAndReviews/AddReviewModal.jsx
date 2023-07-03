import React, { useState } from 'react';
import StarRating from './StarRating.jsx';
import PhotoForm from './PhotoForm.jsx';

const AddReviewModal = ({ open, onClose, metaData, product, returnReviewsMeta, productName }) => {

  const [photos, setPhotos] = useState([]);
  const [errorList, setErrorList] = useState([]);
  const [photoFormOpen, setPhotoFormOpen] = useState(false);
  const [rating, setRating] = useState(null);
  const [recommend, setRecommend] = useState(null);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  if (!open) {
    return null;
  }

  let array = [];
  for (let keys in metaData.characteristics) {
    array.push(keys);
  }

  const validateAndSubmit = () => {
    event.preventDefault();
    console.log('validating');
  };

  const openPhotoForm = () => {
    console.log('photoForm');
  };

  return (
    <div onClick={onClose} id="modalBackground">
      <div onClick={(e) => {
        e.stopPropagation();
      }}id="modalContainer">
        <form id="reviewForm" onSubmit={validateAndSubmit}>
          <div id="modalHeading">
            <div id="writeReview">
              <h1>Write Your Review</h1>
              <h2>About The {productName}</h2>
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

          <div id="reviewPhotos">
            <div id="photos">
              {photos.map((photo) => {
                return <img className="thumbnail" src={photo.url} width="50" height="50" key={photo.url}></img>;
              })}
            </div>
            <button onClick={() => setPhotoFormOpen(true)} id="addPhoto">Add photo</button>
            <PhotoForm open={photoFormOpen} />
          </div>

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

          <div id="errors">
            <div id="errorMessage">You must enter the following:</div>
            <div id="errorList">
              {errorList.map((error) => {
                return <div>{error}</div>;
              })}
            </div>
          </div>

          <button id="submitButton" type="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddReviewModal;