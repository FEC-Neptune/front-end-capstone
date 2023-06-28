import React from 'react';

const AddToCart = () => {
  return (
    <section id="add-to-cart">
      <div id="size-warning-container">
        <span id="size-warning">Please select a size</span>
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