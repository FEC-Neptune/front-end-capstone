import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';


const Overview = () => {
  return (
    <section id="overview">
      <ImageGallery />
      <aside>
        <ProductInformation />
        <StyleSelector />
        <AddToCart />
      </aside>
    </section>
  );
};

export default Overview;