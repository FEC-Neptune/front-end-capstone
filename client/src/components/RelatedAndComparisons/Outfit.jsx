import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card.jsx';
import { fetchProducts } from '../../lib/requestHelpers.js';
import Cookies from 'js-cookie';

const Outfit = ( {outfitClick, outfitItems, handleLeftClick, handleRightClick, scrollPosition, currentProduct, setCurrentProduct, outfits, setOutfits} ) => {
  const [outfitIDs, setOutfitIDs] = useState([]);

  useEffect(() => {
    if (Cookies.get('User_Outfit')) {
      setOutfits(JSON.parse(Cookies.get('User_Outfit')));
      setOutfitIDs(JSON.parse(Cookies.get('Outfit_IDs')));
    }
  }, []);

  const handleOutfitClick = () => {
    if (outfitIDs.indexOf(currentProduct) === -1) {
      setOutfitIDs(outfitIDs.concat(currentProduct));
      Cookies.set('Outfit_IDs', JSON.stringify(outfitIDs));
      fetchProducts(currentProduct)
        .then(res => {
          setOutfits(prevOutfits => prevOutfits.concat(res));
          Cookies.set('User_Outfit', JSON.stringify(outfits.concat(res)));
        })
        .catch(err => console.log(err));
    }
  };

  const removeOutfitClick = (productID) => {
    let shallowOutfits = outfits.filter(outfit => outfit.id !== productID);
    let shallowOutfitIDs = outfitIDs.filter(outfit => outfit !== productID);
    setOutfits(shallowOutfits);
    setOutfitIDs(shallowOutfitIDs);
    shallowOutfits.length > 0 ? Cookies.set('User_Outfit', JSON.stringify(shallowOutfits)) : Cookies.set('User_Outfit', []);
    shallowOutfitIDs.length > 0 ? Cookies.set('Outfit_IDs', JSON.stringify(shallowOutfitIDs)) : Cookies.set('Outfit_IDs', []);
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
            <div className='card-container outfit-card-container' key={product.id} >
              <Card product={product} key={product.id} setCurrentProduct={setCurrentProduct} />
              <button className='action-button outfit-action-button' aria-label='remove from outfit button' onClick={() => { removeOutfitClick(product.id); }} >X</button>
            </div>
          )}
        </div>
        <button className='arrow-button left-arrow-button left-arrow-outfit' aria-label='Left arrow outfit scroll' onClick={handleLeftClick}></button>
        <button className='arrow-button right-arrow-button right-arrow-outfit' aria-label='Right arrow outfit scroll' onClick={handleRightClick}></button>
      </div>
    </div>
  );
};

export default Outfit;