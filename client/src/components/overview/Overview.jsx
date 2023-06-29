import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import {fetchProducts} from '../../lib/requestHelpers.js';
import {findDefaultStyle} from '../../lib/overviewHelpers.js';
import axios from 'axios';


const Overview = ({ productId }) => {

  const [currentProduct, setCurrentProduct] = useState({});
  const [style, setStyle] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [reviewsData, setreviewsData] = useState({});
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [expandedView, setExpandedView] = useState(false);

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
  }, []);

  return (
    <section id="overview">
      <ImageGallery style={style} activeImageIndex={activeImageIndex} setActiveImageIndex={setActiveImageIndex} expandedView={expandedView} setExpandedView={setExpandedView} />
      { !expandedView ? (
        <aside>
          <ProductInformation product={currentProduct} style={style} reviewsData={reviewsData} />
          <StyleSelector productStyles={productStyles} style={style} setStyle={setStyle} />
          <AddToCart style={style} />
        </aside>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Overview;