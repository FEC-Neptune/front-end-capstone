import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchProducts } from '../../lib/requestHelpers.js';
import Related from './Related.jsx';
import Outfit from './Outfit.jsx';
import ComparisonsModal from './ComparisonsModal.jsx';

const RelatedAndComparisons = ( { currentProduct, setCurrentProduct } ) => {
  const [prodArr, setProdArr] = useState([]);
  const [currentThumbnail, setCurrentThumbnail] = useState('');
  const [relatedIndex, setRelatedIndex] = useState(0);
  const [outfitIndex, setOutfitIndex] = useState(0);
  const [relatedPosition, setRelatedPosition] = useState();
  const [outfitPosition, setOutfitPosition] = useState();
  const [compareProduct, setCompareProduct] = useState('');
  const [mainCompareProduct, setMainCompareProduct] = useState('');
  const [modalToggle, setModalToggle] = useState(false);
  const [outfits, setOutfits] = useState([]);

  const openModal = () => setModalToggle(true);
  const closeModal = () => setModalToggle(false);

  const visArrows = (arrowClass) => {
    arrowClass.forEach(arrow => {
      arrow.style.visibility = 'visible';
      arrow.style.transition = 'opacity 500ms ease-in';
      arrow.style.opacity = 1;
    });
  };

  const disArrows = (arrowClass) => {
    arrowClass.forEach(arrow => {
      arrow.style.visibility = 'hidden';
      arrow.style.transition = 'opacity 500ms ease-in';
      arrow.style.opacity = 0;
    });
  };

  useEffect(() => {
    const rightArrows = document.querySelectorAll('.right-arrow-button');
    const leftArrows = document.querySelectorAll('.left-arrow-button');
    disArrows(rightArrows);
    visArrows(leftArrows);

    let relArr = [];
    setRelatedPosition(0);
    setRelatedIndex(0);
    setOutfitIndex(0);
    setOutfitPosition(0);
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
  }, [currentProduct]);

  const scrollToCard = (cardIndex, buttonClass) => {
    const cardWidth = 239.9;
    buttonClass.includes('related') ? setRelatedPosition(cardIndex * cardWidth) : setOutfitPosition(cardIndex * cardWidth);
  };

  const handleLeftClick = () => {
    const rightArrowsRel = document.querySelectorAll('.right-arrow-related');
    const rightArrowsOut = document.querySelectorAll('.right-arrow-outfit');
    const buttonClass = event.target.className;
    const arrLength = prodArr.length;

    if (buttonClass.includes('related')) {
      visArrows(rightArrowsRel);
      setRelatedIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        scrollToCard(newIndex, buttonClass);
        return newIndex;
      });
    } else {
      visArrows(rightArrowsOut);
      setOutfitIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        scrollToCard(newIndex, buttonClass);
        return newIndex;
      });
    }
    if (buttonClass.includes('related') && (-arrLength >= relatedIndex - 1) && (relatedIndex <= -4) || (buttonClass.includes('outfit')) && (-outfits.length >= outfitIndex) && (outfitIndex <= -4) || (buttonClass.includes('outfit')) && !outfits.length && (outfitIndex === -4)) {
      event.target.style.visibility = 'hidden';
      event.target.style.transition = 'opacity 500ms ease-in, visibility 0ms ease-in 500ms';
      event.target.style.opacity = 0;
    }
  };

  const handleRightClick = () => {
    const leftArrowsRel = document.querySelectorAll('.left-arrow-related');
    const leftArrowsOut = document.querySelectorAll('.left-arrow-outfit');
    const buttonClass = event.target.className;

    if (buttonClass.includes('related')) {
      visArrows(leftArrowsRel);
      setRelatedIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        scrollToCard(newIndex, buttonClass);
        return newIndex;
      });
    } else {
      if (outfitIndex !== 0) {
        visArrows(leftArrowsOut);
        setOutfitIndex((prevIndex) => {
          const newIndex = prevIndex + 1;
          scrollToCard(newIndex, buttonClass);
          return newIndex;
        });
      }
    }
    if ((outfitIndex === -1 && buttonClass.includes('outfit')) || (relatedIndex === -1 && buttonClass.includes('related'))) {
      event.target.style.visibility = 'hidden';
      event.target.style.transition = 'opacity 500ms ease-in, visibility 0ms ease-in 500ms';
      event.target.style.opacity = 0;
    }
  };

  return (
    <div id='widget'>
      <div className='carousel-title-container' id='related-title-container' style={{
        transform: `translateX(${-relatedPosition}px)`,
        transition: 'transform .5s ease-in-out',
      }}><div className='carousel-title'>Related Items</div></div>
      <Related modalToggle={modalToggle} openModal={openModal} closeModal={closeModal} setCompareProduct={setCompareProduct} setCurrentProduct={setCurrentProduct} currentProduct={currentProduct} products={prodArr} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} scrollPosition={relatedPosition}/>
      <div className='carousel-title-container' id='outfit-title-container' style={{
        transform: `translateX(${-outfitPosition}px)`,
        transition: 'transform .5s ease-in-out',
      }}><div className='carousel-title'>Your Outfit</div></div>
      <Outfit setOutfits={setOutfits} outfits={outfits} setCurrentProduct={setCurrentProduct} currentProduct={currentProduct} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick} scrollPosition={outfitPosition}/>
      <ComparisonsModal isOpen={modalToggle} closeModal={closeModal} currentProduct={currentProduct} compareProduct={compareProduct}/>
    </div>
  );

};

export default RelatedAndComparisons;