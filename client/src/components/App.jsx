import React, {useState} from 'react';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import Overview from './overview/Overview.jsx';
import RelatedAndComparisons from './RelatedAndComparisons/RelatedAndComparisons.jsx';




const App = () => {

  const [product, setProduct] = useState(40348);

  return (
    <div id="body-container">
      <nav>
        <h1><span>galaxy</span>commerce</h1>
      </nav>
      <section id="container">
        <Overview productId={product} />
        <RelatedAndComparisons currentProduct={product} setCurrentProduct={setProduct}/>
        <RatingsAndReviews product={product}/>
      </section>
    </div>
  );
};

export default App;