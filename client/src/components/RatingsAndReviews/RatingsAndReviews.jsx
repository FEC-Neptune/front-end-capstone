import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Characteristics from './Characteristics.jsx';
import AddReviewModal from './AddReviewModal.jsx';
import { getReviews, getReviewsMeta, fetchProducts } from '../../lib/requestHelpers.js';
import { FaChevronDown } from 'react-icons/fa';
import DropDownSort from './DropDownSort.jsx';
import star from '../../assets/stars/star.png';

const RatingsAndReviews = ({ product }) => {

  const [currentSort, setCurrentSort] = useState('relevance');
  const [reviews, setReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [metaData, setMetaData] = useState(null);
  const [activeStars, setActiveStars] = useState([]);

  const [ratings, setRatings] = useState(null);
  const [productName, setProductName] = useState('');
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = ['relevance', 'helpfulness', 'newest'];

  useEffect(() => {
    getReviews(product, currentSort)
      .then((reviews) => {
        setReviews(reviews);
        return reviews;
      })
      .then((reviews) => {
        let array = reviews.slice(0, 2);
        setVisibleReviews(array);
      })
      .then(() => {
        return getReviewsMeta(product);
      })
      .then(({ data }) => {
        setMetaData(data);
        return data;
      })
      .then((data) => {
        setRatings(data.ratings);
      })
      .then(() => {
        fetchProducts(product);
      })
      .then((name) => {
        setProductName(name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   return getReviews(product)
  //     .then((reviews) => {
  //       setReviews(reviews);
  //     })
  //     .then(() =>{
  //       let array = reviews.slice(0, 2);
  //       setVisibleReviews(array);
  //     })
  //     .then(() => {
  //       console.log('VISIBLE', visibleReviews);
  //       return getReviewsMeta(product);
  //     })
  //     .then(({ data }) => {
  //       setReviewsMeta(data);
  //     })
  //     .then(() => {
  //       return fetchProducts(product);
  //     })
  //     .then(({name}) => {
  //       setProductName(name);
  //     })
  //     .catch((err) => {
  //       throw (err);
  //     });
  // }, []);

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

    visibleReviews.forEach((review) => {
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



  return (
    <>
      <div id="ratings-and-reviews">

        <div id="main-title">RATINGS AND REVIEWS</div>

        <section className="breakdown-and-reviews">
          <div className="breakdown-and-characteristics">
            <RatingBreakdown ratings={ratings} sortReviews={sortReviews} metaData={metaData} setReviews={setReviews} activeStars={activeStars} removeAllFilters={removeAllFilters} />
            <Characteristics metaData={metaData} />
          </div>

          {/* <div id="reviewsListAndButtons">
            <div id="listSortHeading">{reviews.length} reviews, sorted by <span className="sort-word" onClick={() => {
              setDropDownOpen(!dropDownOpen);
            }}>{currentSort} ∨</span></div>
            <DropDownSort setCurrentSort={setCurrentSort} onClose={setDropDownOpen} currentSort={currentSort} sortOptions={sortOptions} open={dropDownOpen} />
            {reviews.length > 0 && <ReviewsList visibleReviews={visibleReviews} setVisibleReviews={setVisibleReviews} reviews={reviews} />}

            <div id="bottomButtons">
              {reviews.length !== visibleReviews.length && <button className="reviewButton" onClick={addReviews}>MORE REVIEWS</button>}
              {reviewsMeta && !isOpen && <button className="reviewButton" onClick={() => {
                setIsOpen(true);
              }}>ADD REVIEW +</button>}
              <AddReviewModal product={product} productName={productName} metaData={reviewsMeta} open={isOpen} onClose={() => {
                setIsOpen(false);
              }} />
            </div>

          </div> */}
        </section>

      </div>
    </>
  );
};

export default RatingsAndReviews;