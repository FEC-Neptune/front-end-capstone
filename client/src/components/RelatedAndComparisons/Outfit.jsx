import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card.jsx';
import { fetchProducts } from '../../lib/requestHelpers.js';
import Cookies from 'js-cookie';

const Outfit = ( {outfitClick, outfitItems, handleLeftClick, handleRightClick, scrollPosition, currentProduct, setCurrentProduct} ) => {
  const [outfits, setOutfits] = useState([]);

  const outfitIdArray = [];
  const outfitArray = [];

  useEffect(() => {
    if (Cookies.get('User_Outfit')) {
      setOutfits(JSON.parse(Cookies.get('User_Outfit')));
    }
  }, []);

  const handleOutfitClick = () => {
    if (outfitIdArray.indexOf(currentProduct === -1)) {
      outfitIdArray.push(currentProduct);
      fetchProducts(currentProduct)
        .then(res => {
          outfitArray.push(res);
          setOutfits(outfitArray);
          Cookies.set('User_Outfit', JSON.stringify(outfitArray));
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <div className='carousel' id='outfit-carousel'>
        <div className='cards-container' id='outfit-cards-container' style={{
          transform: `translateX(${scrollPosition}px)`,
          transition: 'transform 0.5s ease-in-out',
        }}>
          <div className='card-container add-outfit-button-card' >
            <button className='add-outfit-button' onClick={() => handleOutfitClick()}>+</button>
          </div>
          {outfits.map((product) =>
            <div onClick={() => setCurrentProduct(product.id)} className='card-container outfit-card-container' key={product.id} >
              <Card product={product} key={product.id}/>
              <button className='action-button outfit-action-button' >X</button>
            </div>
          )}
        </div>
        <button className='arrow-button left-arrow-button left-arrow-outfit' onClick={handleLeftClick}></button>
        <button className='arrow-button right-arrow-button right-arrow-outfit' onClick={handleRightClick}></button>
      </div>
    </div>
  );
};

export default Outfit;