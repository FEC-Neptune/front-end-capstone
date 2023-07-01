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
      console.log('removing');
      let array = activeStars;
      array.splice(newStarIndex, 1);
      setActiveStars(array);
    } else {
      console.log('adding');
      let array = activeStars;
      array.push(newStar);
      setActiveStars(array);
    }
    console.log('ACTIVE STARS:', activeStars);
    reviews.forEach((review) => {
      if (activeStars.includes(review.rating)) {
        resultArray.push(review);
      }
    });

    setVisibleReviews(resultArray);
  };

  return (
    <>
      <div id="mainTitle">RATINGS AND REVIEWS</div>
      <div id="ratingsAndReviews">

        <section id="breakdown">
          {reviews.length > 0 &&
            <div>
              {reviewsMeta && <RatingBreakdown sortReviews={sortReviews} metaData={reviewsMeta} reviews={reviews} setReviews={setReviews}/>}
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
          <AddReviewModal reviewsMeta={reviewsMeta} open={isOpen} onClose={() => {
            setIsOpen(false);
          }} >Here is a Modal!</AddReviewModal>
        </div>
      </div>
    </>
  );
};

export default RatingsAndReviews;