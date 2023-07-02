import React, { useState } from 'react';
import { parseISO } from 'date-fns';
import { FaStar } from 'react-icons/fa';


const ReviewTile = ({ review }) => {
  let readableDate = parseISO(review.date.slice(0, 10)).toString();
  const [isVerified, setIsVerified] = useState(false);
  return (
    <div className="reviewTile">
      <div className="reviewHeading">
        <div className="reviewRating">
          {[...Array(review.rating)].map(() => {
            return <FaStar size={16} />;
          })}
        </div>
        <div className="reviewName">{isVerified && '***'}
          {review.reviewer_name}, {`${readableDate.slice(4, 10)}, ${readableDate.slice(10, 15)}`}
        </div>
      </div>

      <div className="review">
        <div className="reviewSummary">
          Summary: {review.summary}
        </div>
        <div className="reviewBody">
          Body: {review.body}
        </div>
        {review.photos.map((photo) => {
          return <img className="thumbnail" src={photo.url} width="50" height="50" key={photo.url}></img>;
        })}
        {review.recommend && <div>~CHECKMARK~ I recommend this product</div>}
        {review.response && <div>
          <div className="responseText">Response:</div>
          <div className="response"> {review.response}</div>
        </div>}
        <div>Was this review helpful?</div>
        <div className="helpful">
          <div>Yes</div>{review.helpfulness && review.helpfulness}
          <div>No</div>{review.nothelpful && review.nothelpful}
        </div>
      </div>
    </div>
  );
};

export default ReviewTile;