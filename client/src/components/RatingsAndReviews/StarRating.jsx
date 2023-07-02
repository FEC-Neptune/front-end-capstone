import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';


const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [ratingText, setRatingText] = useState(null);

  const ratingKey = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great'
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => setRating(index)}
            onMouseEnter={() => {
              setHover(index);
              setRatingText(ratingKey[index]);
            }}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">{<FaStar size={26} />}</span>
          </button>
        );
      })}
      <div className ="ratingText" >{ratingText}</div>
    </div>
  );
};

export default StarRating;

