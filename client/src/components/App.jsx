import React from 'react';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import Overview from './overview/Overview.jsx';
import RelatedAndComparisons from './RelatedAndComparisons/RelatedAndComparisons.jsx';


const App = () => {

  return (
    <>
      <p>Hello world</p>
      <Overview />
      <RelatedAndComparisons />
      <RatingsAndReviews />
    </>
  );
};

export default App;