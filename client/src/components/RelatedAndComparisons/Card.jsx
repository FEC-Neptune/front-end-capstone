import React from 'react';
import { useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import CurrentImage from './CurrentImage.jsx';

const Cards = ( { product, setCurrentProduct, stars } ) => {
  const [hoverToggle, setHoverToggle] = useState(false);

  const hoverOver = () => setHoverToggle(true);
  const hoverOut = () => setHoverToggle(false);

  return (
    <div className='card' onMouseEnter={hoverOver} onMouseLeave={hoverOut} onClick={ () => setCurrentProduct(product.id)}>
      <CurrentImage product={product} />
      <ProductInfo setCurrentProduct={setCurrentProduct} product={product} stars={stars} hoverToggle={hoverToggle} />
    </div>
  );

};

export default Cards;