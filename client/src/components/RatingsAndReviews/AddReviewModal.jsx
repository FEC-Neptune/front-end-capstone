import React, { useState } from 'react';
import StarRating from './StarRating.jsx';
import PhotoForm from './PhotoForm.jsx';
import { addReview } from '../../lib/requestHelpers.js';
import { characteristicsKey } from '../../lib/ratingsAndReviewsHelpers.js';

const AddReviewModal = ({ open, onClose, metaData, product, returnReviewsMeta, productName }) => {

  const [photos, setPhotos] = useState([]);
  const [errorList, setErrorList] = useState([]);
  const [photoFormOpen, setPhotoFormOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [characteristics, setCharacteristics] = useState({});

  if (!open) {
    return null;
  }

  let characteristicsArray = [];

  for (let key in metaData.characteristics) {
    characteristicsArray.push(key);
  }

  const validateAndSubmit = () => {
    event.preventDefault();
    let array = [];
    if (!rating) {
      array.push('Overall Rating');
    }
    if (recommend === null) {
      array.push('Recommend Yes or No');
    }
    if (body.length < 50) {
      array.push('A review of at least 50 characters');
    }
    if (!nickname) {
      array.push('Your nickname');
    }
    if (!validateEmail(email)) {
      array.push('A valid email');
    }

    // characteristicsArray.forEach((char) => {
    //   if (characteristics.keys().indexOf(char) === -1) {
    //     array.push(`An entry for ${char}`);
    //   }
    // });

    setErrorList(array);
    console.log(array);
    console.log('ERRORS', errorList);
    // if (errorList.length === 0) {
    //   const requestBody = {
    //     'product_id': product,
    //     'rating': rating,
    //     'summary': summary,
    //     'body': body,
    //     'recommend': recommend,
    //     'name': nickname,
    //     'email': email,
    //     'photos': [],
    //     'characteristics': characteristics
    //   };
    //   console.log('REQUEST BODY', requestBody);
    //   addReview(requestBody);
    //   setDefaultStates();
    //   onClose();
    // }
  };

  const setDefaultStates = () => {
    setRating(0);
    setRecommend(null);
    setSummary('');
    setBody('');
    setNickname('');
    setEmail('');
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  return (
    <div onClick={onClose} id="modalBackground">
      <div onClick={(e) => {
        e.stopPropagation();
      }} id="modalContainer">
        <form>

          <div id="modalHeading">
            <div id="writeReview">
              <h1>Write Your Review</h1>
              <h2>About The {productName}</h2>
            </div>
            <button id="closeModal" onClick={onClose}> X </button>
          </div>

          <div id="overallRating">
            <h2 className="reviewHeading">Overall Rating</h2>
            <StarRating rating={rating} setRating={setRating} />
          </div>

          <div id="recommendQuestion">
            <h2 className="reviewHeading">Do you recommend this product?</h2>
            <div id="recommendation">
              <input onClick={() => setRecommend(true)} type="radio" id="recommendYes" name="recommendQuestion" ></input>
              <label htmlFor="recommendYes">Yes</label>
              <input onClick={() => setRecommend(false)} type="radio" id="recommendNo" name="recommendQuestion" ></input>
              <label htmlFor="recommendNo">No</label>
            </div>
          </div>

          <div id="reviewCharacteristics">
            <h2>Please describe your experience with the product</h2>
            <div id="characteristics">
              {characteristicsArray.map((char, i) => {
                return (
                  <div key={i}>
                    <div>{char}</div>
                    <div id="options">
                      {characteristicsKey[char].options.map((option, i) => {
                        let index = i + 1;
                        return (
                          <div id="option" key={i}>
                            <input onClick={() => {
                              const obj = characteristics;
                              obj[characteristicsKey[char].id] = index;
                              setCharacteristics(obj);
                              console.log(characteristics);
                            }} type="radio" name={char} id={index} value={option} />
                            <label htmlFor={option} >{option}</label>
                          </div>
                        );


                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div id="reviewSummary">
            <h2 className="reviewHeading">Please submit a summary of your review</h2>
            <textarea onChange={(e) => setSummary(e.target.value)} maxLength="60" placeholder="Example: Best purchase ever!" className="reviewInput" rows="1" cols="60"></textarea>
          </div>

          <div id="reviewBody">
            <h2 className="reviewHeading">Please submit a detailed review</h2>
            <textarea onChange={(e) => setBody(e.target.value)} maxLength="1000" className="reviewInput" rows="4" cols="50"></textarea>
            <div id="bodyCount" >Minimum {body.length < 50 ? 'required characters left: ' + (50 - body.length) : 'reached'} </div>
          </div>

          <div id="reviewPhotos">
            <div id="photos">
              {photos.map((photo) => {
                return <img className="thumbnail" src={photo.url} width="50" height="50" key={photo.url}></img>;
              })}
            </div>
            <button id="addPhoto" onClick={() => setPhotoFormOpen(true)} id="addPhoto">Add photo</button>
            <PhotoForm open={photoFormOpen} />
          </div>

          <div id="nickname">
            <h2 className="reviewHeading">Please submit a nickname</h2>
            <input onChange={(e) => setNickname(e.target.value)} maxLength="60" className="reviewInput" placeholder="Example: jackson11!" ></input>
            <h4>For privacy reasons, do not user your full name or email address</h4>
          </div>

          <div id="email">
            <h2 className="reviewHeading">Please enter your email</h2>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="jackson11@gmail.com" maxLength="60" className="reviewInput"></input>
            <h4>For authentication reasons, you will not be emailed</h4>
          </div>

          <div id="errors">
            {errorList.length > 0 &&
              <div>
                <div id="errorMessage">You must enter the following:</div>
                <div id="errorList">
                  {errorList.map((error, i) => {
                    return <div key={i}>*{error}*</div>;
                  })}
                </div>
              </div>
            }
          </div>

          <button onClick={validateAndSubmit} id="submitButton" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddReviewModal;