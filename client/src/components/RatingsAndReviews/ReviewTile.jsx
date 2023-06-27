import React, {useState} from 'react';
import {parseISO} from 'date-fns';

const ReviewTile = ({ review }) => {
  let readableDate = parseISO(review.date.slice(0, 10)).toString();
  const [isVerified, setIsVerified] = useState(false);
  return (
    <>
      {isVerified && '***'}
      {review.reviewer_name}, {`${readableDate.slice(4, 10)}, ${readableDate.slice(10, 15)}`}
      <div className="review summary">
        {review.summary}
      </div>
      <div className="review body">
        {review.body}
      </div>
    </>
  );
};

export default ReviewTile;