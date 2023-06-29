import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import {fetchProducts} from '../../lib/requestHelpers.js';
import {findDefaultStyle} from '../../lib/overviewHelpers.js';
import axios from 'axios';


const Overview = () => {

  const [productId, setProductId] = useState(40344);
  const [currentProduct, setCurrentProduct] = useState({});
  const [style, setStyle] = useState({});
  const [productStyles, setProductStyles] = useState([]);

  useEffect(() => {
    fetchProducts(productId)
      .then((res) => setCurrentProduct(res))
      .then(() => {
        fetchProducts(productId, 'styles')
          .then((res) => {
            setProductStyles(res.results);
            return res.results;
          })
          .then((res) => {
            setStyle(findDefaultStyle(res));
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, [productId]);

  return (
    <section id="overview">
      <ImageGallery />
      <aside>
        <ProductInformation product={currentProduct} style={style} />
        <StyleSelector productStyles={productStyles} style={style} setStyle={setStyle} />
        <AddToCart />
      </aside>
    </section>
  );
};

export default Overview;