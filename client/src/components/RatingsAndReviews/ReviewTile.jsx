import React, { useState } from 'react';
import { parseISO } from 'date-fns';

const ReviewTile = ({review}) => {
  let readableDate = parseISO(review.date.slice(0, 10)).toString();
  const [isVerified, setIsVerified] = useState(false);
  return (
    <div className="reviewTile">
      <div>
        Rating: {review.rating}
      </div>
      <div className="reviewerName">{isVerified && '***'}
        {review.reviewer_name}, {`${readableDate.slice(4, 10)}, ${readableDate.slice(10, 15)}`}
      </div>
      <div className="review Summary">
        Summary: {review.summary}
      </div>
      <div className="review Bod">
        Body: {review.body}
      </div>
      {review.photos.map((photo) => {
        return <img className="thumbnail" src={photo.url} width="50" height="50" key={photo.url}></img>;
      })}
      {review.recommend && <div>~CHECKMARK~ I recommend this product</div>}
      {review.response && <div>Response: {review.response}</div> }
      <div>Was this review helpful?</div>
      <div>Yes</div>{review.helpfulness && review.helpfulness}
      <div>No</div>{review.nothelpful && review.nothelpful}
    </div>
  );
};

export default ReviewTile;