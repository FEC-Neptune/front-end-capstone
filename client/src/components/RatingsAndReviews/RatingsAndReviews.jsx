import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import NewReviewForm from './NewReviewForm.jsx';
import AddReview from './AddReview.jsx';
import Characteristics from './Characteristics.jsx';
import AddReviewModal from './AddReviewModal.jsx';
import { getReviews, getReviewsMeta } from '../../lib/requestHelpers.js';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';


const RatingsAndReviews = ({ product }) => {

  const [reviews, setReviews] = useState([]);
  const [reviewsMeta, setReviewsMeta] = useState('');
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeStars, setActiveStars] = useState([]);

  const returnReviewsMeta = () => {
    return reviewsMeta;
  };


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
    if ((newStarIndex !== -1) && activeStars[0] === newStar) {
      setActiveStars([]);
      setVisibleReviews(reviews.slice(0, 2));
      return;
    } else if (newStarIndex !== -1) {
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

  const removeAllFilters = () => {
    setActiveStars([]);
    setVisibleReviews(reviews.slice(0, 2));
  };

  const convertRatingToStars = (rating) => {
    let fullStars = Math.floor(rating);
    let remainder = 5 - rating;
    let emptyStars = Math.floor(remainder);
    let partial = remainder - emptyStars;

    const renderStar = (type) =>{
      if (type === 'full') {
        return <FaStar />;
      } else if (type === 'half') {
        return <FaStarHalfAlt />;
      } else if (type === 'empty') {
        return <FaRegStar />;
      }
    };

    let stars = [];

    for (let i = 0; i < fullStars; i ++) {
      stars.push(renderStar('full'));
    }
    if (partial) {
      stars.push(renderStar('half'));
    }
    for (let j = 0; j < emptyStars; j ++) {
      stars.push(renderStar('empty'));
    }
    return stars;
  };

  return (
    <>
      <div id="ratingsAndReviews">

        <div id="mainTitle">RATINGS AND REVIEWS</div>

        <section id="breakdownAndReviews">
          {reviews.length > 0 &&
            <div id="breakdownAndCharacteristics">
              {reviewsMeta && <RatingBreakdown convertRatingToStars={convertRatingToStars} sortReviews={sortReviews} metaData={reviewsMeta} reviews={reviews} setReviews={setReviews} activeStars={activeStars} removeAllFilters={removeAllFilters}/>}
              {reviewsMeta && <Characteristics metaData={reviewsMeta} />}
            </div>}

          <div id="reviewsListAndButtons">
            <div id="listSortHeading">{reviews.length} reviews, sorted by relevance</div>
            {reviews.length > 0 && <ReviewsList convertRatingToStars={convertRatingToStars} visibleReviews={visibleReviews} setVisibleReviews={setVisibleReviews} reviews={reviews} />}

            <div id="bottomButtons">
              {reviews.length !== visibleReviews.length && <button className="reviewButton" onClick={addReviews}>MORE REVIEWS</button>}
              {reviewsMeta && !isOpen && <button className="reviewButton" onClick={() => {
                setIsOpen(true);
              }}>ADD REVIEW +</button>}
              <AddReviewModal returnReviewsMeta={returnReviewsMeta} product={product} metaData={reviewsMeta} open={isOpen} onClose={() => {
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