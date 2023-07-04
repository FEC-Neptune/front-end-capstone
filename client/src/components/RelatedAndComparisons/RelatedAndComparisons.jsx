import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchProducts } from '../../lib/requestHelpers.js';
import Related from './Related.jsx';
import Outfit from './Outfit.jsx';

const RelatedAndComparisons = ( { currentProduct, setCurrentProduct } ) => {
  const [prodArr, setProdArr] = useState([]);
  const [currentThumbnail, setCurrentThumbnail] = useState('');
  const [relatedIndex, setRelatedIndex] = useState(0);
  const [outfitIndex, setOutfitIndex] = useState(0);
  const [relatedPosition, setRelatedPosition] = useState();
  const [outfitPosition, setOutfitPosition] = useState();

  useEffect(() => {
    let relArr = [];
    if (prodArr.length === 0) {
      fetchProducts(currentProduct, 'related')
        .then(res => {
          const promise = res.map(product => fetchProducts(product));
          return Promise.all(promise);
        })
        .then(products => {
          const relArr = [...new Set(products.map(JSON.stringify))].map(JSON.parse);
          setProdArr(relArr);
        })
        .catch(err => {
          throw err;
        });
    }
  }, []);

  const scrollToCard = (cardIndex, buttonClass) => {
    const cardWidth = 239.9;
    buttonClass.includes('related') ? setRelatedPosition(cardIndex * cardWidth) : setOutfitPosition(cardIndex * cardWidth);
  };

  const handleLeftClick = () => {
    const buttonClass = event.target.className;
    const arrLength = prodArr.length;

    if (buttonClass.includes('related')) {
      if (-arrLength !== relatedIndex) {
        setRelatedIndex((prevIndex) => {
          const newIndex = prevIndex - 1;
          scrollToCard(newIndex, buttonClass);
          return newIndex;
        });
      }
    } else {
      if (-arrLength !== outfitIndex + 1) {
        setOutfitIndex((prevIndex) => {
          const newIndex = prevIndex - 1;
          scrollToCard(newIndex, buttonClass);
          return newIndex;
        });
      }
    }
  };

  const handleRightClick = () => {
    const buttonClass = event.target.className;
    if (buttonClass.includes('related')) {
      if (relatedIndex !== 0) {
        setRelatedIndex((prevIndex) => {
          const newIndex = prevIndex + 1;
          scrollToCard(newIndex, buttonClass);
          return newIndex;
        });
      }
    } else {
      if (outfitIndex !== 0) {
        setOutfitIndex((prevIndex) => {
          const newIndex = prevIndex + 1;
          scrollToCard(newIndex, buttonClass);
          return newIndex;
        });
      }
    }
  };

  return (
    <div id='widget'>
      <div className='carousel-title-container' id='related-title-container' style={{
        transform: `translateX(${-relatedPosition}px)`,
        transition: 'transform .5s ease-in-out',
      }}><div className='carousel-title'>Related Items</div></div>
      <Related setCurrentProduct={setCurrentProduct} currentProduct={currentProduct} products={prodArr} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} scrollPosition={relatedPosition}/>
      <div className='carousel-title-container' id='outfit-title-container' style={{
        transform: `translateX(${-outfitPosition}px)`,
        transition: 'transform .5s ease-in-out',
      }}><div className='carousel-title'>Your Outfit</div></div>
      <Outfit setCurrentProduct={setCurrentProduct} currentProduct={currentProduct} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} scrollPosition={outfitPosition}/>
    </div>
  );

};

export default RelatedAndComparisons;