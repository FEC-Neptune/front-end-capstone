import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import NewReviewForm from './NewReviewForm.jsx';
import AddReview from './AddReview.jsx';
import Characteristics from './Characteristics.jsx';
import AddReviewModal from './AddReviewModal.jsx';
import { getReviews, getReviewsMeta } from '../../lib/requestHelpers.js';


const RatingsAndReviews = ({ product, setProduct }) => {

  const [reviews, setReviews] = useState([]);
  const [reviewsMeta, setReviewsMeta] = useState('');
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeStars, setActiveStars] = useState([]);

  useEffect(() => {
    getReviews(product)
      .then((reviews) => {
        setReviews(reviews);
      })
      .then(() => {
        return getReviewsMeta(product);
      })
      .then(({ data }) => {
        setReviewsMeta(data);
      })
      .catch((err) => {
        throw (err);
      });
  }, []);

  const addReviews = () => {
    var index = visibleReviews.length;
    setVisibleReviews(reviews.slice(0, index + 2));
  };

  const sortReviews = (newStar) => {
    let resultArray = [];
    let newStarIndex = activeStars.indexOf(newStar);
    if (newStarIndex !== -1) {
      let array = activeStars;
      array.splice(newStarIndex, 1);
      setActiveStars(array);
    } else {
      let array = activeStars;
      array.push(newStar);
      setActiveStars(array);
    }
    reviews.forEach((review) => {
      if (activeStars.includes(review.rating)) {
        resultArray.push(review);
      }
    });
    setVisibleReviews(resultArray);
  };

  return (
    <>
      <div id="ratingsAndReviews">

        <div id="mainTitle">RATINGS AND REVIEWS</div>

        <section id="breakdownAndReviews">
          {reviews.length > 0 &&
            <div id="breakdownAndCharacteristics">
              {reviewsMeta && <RatingBreakdown sortReviews={sortReviews} metaData={reviewsMeta} reviews={reviews} setReviews={setReviews} />}
              {reviewsMeta && <Characteristics metaData={reviewsMeta} />}
            </div>}

          <div id="reviewsListAndButtons">
            <div id="listSortHeading">{reviews.length} reviews, sorted by relevance</div>
            {reviews.length > 0 && <ReviewsList visibleReviews={visibleReviews} setVisibleReviews={setVisibleReviews} reviews={reviews} />}

            <div id="bottomButtons">
              {reviews.length !== visibleReviews.length && <button className="reviewButton" onClick={addReviews}>MORE REVIEWS</button>}
              {!isOpen && <button className="reviewButton" onClick={() => {
                setIsOpen(true);
              }}>ADD REVIEW +</button>}
              <AddReviewModal reviewsMeta={reviewsMeta} open={isOpen} onClose={() => {
                setIsOpen(false);
              }} />
            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default RatingsAndReviews;