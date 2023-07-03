import React, {useState} from 'react';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import Overview from './overview/Overview.jsx';
import RelatedAndComparisons from './RelatedAndComparisons/RelatedAndComparisons.jsx';




const App = () => {

  const [product, setProduct] = useState(40348);

  return (
    <section id="container">
      <p>Hello Neptune</p>
      <Overview productId={product} />
      <RelatedAndComparisons currentProduct={product} setCurrentProduct={setProduct}/>
      <RatingsAndReviews product={product} setProduct={setProduct}/>
    </section>
  );
};

export default App;