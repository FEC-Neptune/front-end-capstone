import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import axios from 'axios';


const Overview = () => {

  const [currentProduct, setCurrentProduct] = useState({});
  const [productStyles, setProductStyles] = useState({});

  useEffect(() => {
    getProduct(40344);
  }, []);

  const getProduct = (id) => {
    var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/' + id;

    axios.get(url)
      .then((res) => {
        setCurrentProduct(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .then(() => {
        getProductStyles(id);
      });
  };

  const getProductStyles = (id) => {
    var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/' + id + '/styles';

    axios.get(url)
      .then((res) => {
        setProductStyles(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section id="overview">
      <ImageGallery />
      <aside>
        <ProductInformation currentProduct={currentProduct} productStyles={productStyles} />
        <StyleSelector />
        <AddToCart />
      </aside>
    </section>
  );
};

export default Overview;