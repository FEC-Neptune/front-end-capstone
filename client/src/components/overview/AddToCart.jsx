import React from 'react';

const AddToCart = () => {
  return (
    <section id="add-to-cart">
      <div>
        <span>Please select a size</span>
      </div>
      <div>
        <form>
          <select>
            <option value="A nice style">A nice style</option>
          </select>
          <select>
            <option value="-">-</option>
          </select>
          <button type="submit">Add To Cart +</button>
        </form>
      </div>
    </section>
  );
};

export default AddToCart;