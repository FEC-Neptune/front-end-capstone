import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import { TOKEN } from '../../../../config.js';
import axios from 'axios';


const Overview = () => {

  const [currentProduct, setCurrentProduct] = useState({});
  const [currentStyle, setCurrentStyle] = useState({})
  const [productStyles, setProductStyles] = useState([]);

  useEffect(() => {
    getProduct(40344);
  }, []);

  const getProduct = (id) => {
    var url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/' + id;

    axios({
      method: 'get',
      url: url,
      headers: {
        'Authorization': TOKEN
      }
    })
      .then((res) => {
        setCurrentProduct(res.data);
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

    axios({
      method: 'get',
      url: url,
      headers: {
        'Authorization': TOKEN
      }
    })
      .then((res) => {
        setProductStyles(res.data.results);
        return res.data.results;
      })
      .then((styles) => {
        setCurrentStyle(findDefaultStyle);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const findDefaultStyle = (styles) => {
    if (styles.length) {
      for (var i = 0; i < styles.length; i++) {
        if (style['default?']) {
          return style;
        }
      }
      return style[0];
    }
  };

  return (
    <section id="overview">
      <ImageGallery />
      <aside>
        <ProductInformation product={currentProduct} style={currentStyle} />
        <StyleSelector />
        <AddToCart />
      </aside>
    </section>
  );
};

export default Overview;