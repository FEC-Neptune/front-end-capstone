import React, { useState, useEffect } from 'react';
import { addToCart } from '../../lib/requestHelpers.js';
import { createArrayFromInt } from '../../lib/overviewHelpers.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddToCart = ({style}) => {

  const [selectedSku, setSelectedSku] = useState('');
  const [selectedQty, setSelectedQty] = useState(0);
  const [flashMessage, setFlashMessage] = useState('');
  const [skus, setSkus] = useState([]);
  const [qty, setQty] = useState([]);

  useEffect(() => {
    if (!!style.skus) {
      setSkus(style.skus);
    }
  }, [style]);

  const handleSizeInput = (e) => {
    var sku = e.target.value;
    setSelectedQty(1);
    setSelectedSku(sku);
    if (sku !== '') {
      setFlashMessage('');
      setQty(createArrayFromInt(skus[sku].quantity));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedSku === '') {
      setFlashMessage('Please select a size');
    } else {
      addToCart(selectedSku, selectedQty)
        .then((res) => {
          setSelectedSku('');
          setFlashMessage('Item added to cart');
        })
        .catch((err) => {
          console.error(err);
        });
    }

  };

  return (
    <section id="add-to-cart">
      <div id="cart-flash-container">
        <span id="cart-flash-text">{flashMessage}</span>
      </div>
      <div id="cart-form-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div id="select-container">
            <select id="size-select" value={selectedSku} onChange={(e) => handleSizeInput(e)}>
              <option value="">Select a size</option>
              { !style ? (
                <></>
              ) : (
                Object.keys(skus).map((sku) => {
                  var size = skus[sku].size;
                  return (
                    <option key={sku} value={sku}>{size}</option>
                  );
                })
              )}
            </select>
            { selectedSku === '' ? (
              <select id="qty-select" onClick={() => setFlashMessage('Please select a size')}>
                <option value="">&ndash;</option>
              </select>
            ) : (
              <select id="qty-select" value={selectedQty} onChange={(e) => setSelectedQty(e.target.value)}>
                { qty.map((num) => {
                  if (num === 1) {
                    return (
                      <option key={`qty-${num}`} value={num}>{num}</option>
                    );
                  } else {
                    return (
                      <option key={`qty-${num}`} value={num}>{num}</option>
                    );
                  }
                })}
              </select>
            )}
          </div>
          <button type="submit" id="add-to-cart-button">Add To Cart <FontAwesomeIcon icon={faPlus} /></button>
        </form>
      </div>
    </section>
  );
};

export default AddToCart;