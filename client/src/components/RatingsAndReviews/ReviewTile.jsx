import React, { useState } from 'react';
import { parseISO } from 'date-fns';
import { FaStar, FaCheck } from 'react-icons/fa';
import { convertRatingToStars } from '../../lib/ratingsAndReviewsHelpers.js';

const updateHelpful = (choice) => {

};

const ReviewTile = ({ review }) => {
  let readableDate = parseISO(review.date.slice(0, 10)).toString();
  const [isVerified, setIsVerified] = useState(false);
  return (
    <div className="reviewTile">
      <div className="reviewHeading">
        <div className="reviewRating">
          {convertRatingToStars(review.rating)}
        </div>
        <div className="reviewName">{isVerified && '***'}
          {review.reviewer_name}, {`${readableDate.slice(4, 10)}, ${readableDate.slice(10, 15)}`}
        </div>
      </div>

      <div className="review" >
        <div className="reviewSummary">
          {review.summary}
        </div>
        <div className="reviewBody">
          {review.body}
        </div>
        {review.photos.map((photo) => {
          return <img className="thumbnail" src={photo.url} width="50" height="50" key={photo.url}></img>;
        })}
        {review.recommend && <div className="recommend"><FaCheck className="check"/><div>I recommend this product</div></div>}
        {review.response && <div>
          <div className="responseText">Response:</div>
          <div className="response"> {review.response}</div>
        </div>}
        <div>Was this review helpful?</div>
        <div className="helpful">
          <div className="helpfulButton" onClick={() => updateHelpful('helpful')} >Yes</div>{review.helpfulness && <div>({review.helpfulness})</div>}
          <div className="helpfulButton" onClick={() => updateHelpful('not')} >No</div>{review.nothelpful && <div>({review.nothelpful})</div>}
        </div>
      </div>
    </div>
  );
};

export default ReviewTile;