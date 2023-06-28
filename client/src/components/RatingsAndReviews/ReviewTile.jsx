import React, { useState } from 'react';
import { parseISO } from 'date-fns';

const ReviewTile = ({ review }) => {
  let readableDate = parseISO(review.date.slice(0, 10)).toString();
  const [isVerified, setIsVerified] = useState(false);
  return (
    <>
      <div>
        Rating: {review.rating}
      </div>
      <div>{isVerified && '***'}
        {review.reviewer_name}, {`${readableDate.slice(4, 10)}, ${readableDate.slice(10, 15)}`}
      </div>
      <div className="review summary">
        Summary: {review.summary}
      </div>
      <div className="review body">
        Body: {review.body}
      </div>
    </>
  );
};

export default ReviewTile;