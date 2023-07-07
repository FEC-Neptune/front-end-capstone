import React, { useState, useEffect } from 'react';
import starEmpty from '../../assets/stars/star-empty.png';
import starFull from '../../assets/stars/star.png';
import starQuarter from '../../assets/stars/star-one-quarter.png';
import starHalf from '../../assets/stars/star-half.png';
import starThreeQuarters from '../../assets/stars/star-three-quarter.png';

const Stars = ({starRating}) => {

  const [starArray, setStarArray] = useState([]);

  useEffect(() => {

    if (!!starRating) {
      let tempStarArray = [];
      let fullStars = Math.floor(starRating);
      for (let i = 0; i < fullStars; i++) {
        tempStarArray.push(starFull);
      }

      if (fullStars !== 5) {
        if (starRating - fullStars === 0.25) {
          tempStarArray.push(starQuarter);
        } else if (starRating - fullStars === 0.5) {
          tempStarArray.push(starHalf);
        } else if (starRating - fullStars === 0.75) {
          tempStarArray.push(starThreeQuarters);
        }
      }

      while (tempStarArray.length !== 5) {
        tempStarArray.push(starEmpty);
      }

      setStarArray(tempStarArray);
    }


  }, [starRating]);

  if (starArray.length) {
    return (
      <>
        {starArray.map((starSrc, i) => {
          return (
            <div key={i} className="star-container">
              <img src={starSrc} />
            </div>
          );
        })}
      </>
    );
  } else {
    return (
      <></>
    );
  }
};

export default Stars;