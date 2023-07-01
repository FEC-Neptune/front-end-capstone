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

  useEffect(() => {
    getReviews(product)
      .then((reviews) => {
        setReviews(reviews);
      })
      .then(() => {
        return getReviewsMeta(product);
      })
      .then(({ data }) => {
        console.log(data);
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



  return (
    <>
      <div id="mainTitle">RATINGS AND REVIEWS</div>
      <div id="ratingsAndReviews">

        <section id="breakdown">
          {reviews.length > 0 &&
            <div>
              {reviewsMeta && <RatingBreakdown metaData={reviewsMeta} />}
              {reviewsMeta && <Characteristics metaData={reviewsMeta} />}
            </div>}
        </section>

        <aside id="reviewsList">
          {reviews.length > 0 && <ReviewsList visibleReviews={visibleReviews} setVisibleReviews={setVisibleReviews} reviews={reviews} />}
        </aside>

        <div id="bottomButtons">
          {reviews.length !== visibleReviews.length && <button id="moreReviews" onClick={addReviews}>MORE REVIEWS</button>}

          {!isOpen && <button id="addReview" onClick={() => {
            setIsOpen(true);
          }}>ADD REVIEW +</button>}
          <AddReviewModal open={isOpen} onClose={() => {
            setIsOpen(false);
          }} >Here is a Modal!</AddReviewModal>
        </div>
      </div>
    </>
  );
};

export default RatingsAndReviews;