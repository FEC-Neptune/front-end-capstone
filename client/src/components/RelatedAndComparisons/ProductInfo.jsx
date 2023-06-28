import React from 'react';
import { useState } from 'react';


const ProductInfo = () => {

  const [category, setCategory] = useState('N/A');
  const [name, setName] = useState('N/A');
  const [price, setPrice] = useState('N/A');
  const [rating, setRating] = useState('N/A');

  return (
    <div>
      <div>Category</div>
      <div>Name</div>
      <div>Price</div>
      <div>*****</div>
    </div>
  );
};

export default ProductInfo;