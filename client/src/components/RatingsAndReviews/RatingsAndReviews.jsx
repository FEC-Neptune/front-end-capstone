import React, {useState} from 'react';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import NewReviewForm from './NewReviewForm.jsx';

const RatingsAndReviews = () => {

  const [product, setProduct] = useState(40347);

  return (
    <>
      <h2>Ratings and Reviews</h2>
      <RatingBreakdown product={product} />
      <ReviewsList product={product} />
    </>
  );
};

export default RatingsAndReviews;