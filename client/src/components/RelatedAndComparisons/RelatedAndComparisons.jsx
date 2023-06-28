import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchProducts } from '../../lib/requestHelpers.js';
import Related from './Related.jsx';

const RelatedAndComparisons = () => {
  const [prodArr, setProdArr] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(res => setProdArr(res))
      .catch(err => {
        throw (err);
      });
  }, []);



  return (
    <div>
      <Related products={prodArr} />
      <div>Outfit Component</div>
    </div>
  );

};

export default RelatedAndComparisons;