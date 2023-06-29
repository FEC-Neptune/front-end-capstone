import React, { useState, useEffect } from 'react';

const AddToCart = ({style}) => {

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQty, setSelectedQty] = useState(0);
  const [warning, setWarning] = useState(false);

  // Todo
  // handle change (size and qty)
  // on submit
  // map options to available sizes for style
  // map qty to available qty for selected size
  // import api helper to post to add to cart API

  return (
    <section id="add-to-cart">
      <div id="size-warning-container">
        { warning ? (
          <span id="size-warning">Please select a size</span>
        ) : (
          <></>
        )}
      </div>
      <div id="cart-form-container">
        <form>
          <div id="select-container">
            <select id="size-select">
              <option value="A nice size">A nice size</option>
            </select>
            <select id="qty-select">
              <option value="-">-</option>
            </select>
          </div>
          <button type="submit" id="add-to-cart-button">Add To Cart +</button>
        </form>
      </div>
    </section>
  );
};

export default AddToCart;