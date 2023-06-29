import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchProducts } from '../../lib/requestHelpers.js';
import Related from './Related.jsx';
import Outfit from './Outfit.jsx';

const RelatedAndComparisons = () => {
  const [prodArr, setProdArr] = useState([]);
  const [currentThumbnail, setCurrentThumbnail] = useState('');

  useEffect(() => {
    fetchProducts()
      .then(res => setProdArr(res))
      .catch(err => {
        throw (err);
      });
  }, []);



  return (
    <div id='widget'>
      <Related products={prodArr} fetchProducts={fetchProducts} />
      <Outfit outfitItems={prodArr} />
    </div>
  );

};

export default RelatedAndComparisons;