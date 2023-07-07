import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { fetchProducts } from '../../lib/requestHelpers.js';
import _ from 'lodash';

const ComparisonsModal = ({modalToggle, closeModal, isOpen, currentProduct, compareProduct}) => {

  const [product, setProduct] = useState('');
  const [compArr, setCompArr] = useState([]);

  useEffect(() => {
    fetchProducts(currentProduct)
      .then(res => setProduct(res))
      .catch(err => console.log(err));
  }, [currentProduct]);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    fetchProducts(currentProduct)
      .then(res => {
        const comparisonsArr = [...new Set(res.features.concat(compareProduct.features).map(JSON.stringify))].map(JSON.parse);
        setCompArr(comparisonsArr);
      })
      .catch(err => {
        console.log(err);
      });
  }, [compareProduct]);

  const featureCheck = (product, inputFeature) => {
    let value;
    if (product) {
      product.features.forEach(feature => {
        if (feature.feature === inputFeature) {
          value = feature.value;
        }
      });
    }
    return value;
  };


  const modalStyles = {
    display: isOpen ? 'block' : 'none',
  };

  return (
    <div id='modal-container' style={modalStyles} onClick={() => closeModal()}>
      <div id='comparisons-modal'>
        <table id='comparisons-table'>
          <thead className='th'>
            <tr className='tr'>
              <td className='td'>{compareProduct.name}</td>
              <td className='td'>Comparison</td>
              <td className='td'>{product.name}</td>
            </tr>
          </thead>
          <tbody className='tb'>
            {compArr.map((comparison) => {
              if (comparison) {
                if (comparison.feature) {
                  const compValue = featureCheck(compareProduct, comparison.feature);
                  const value = featureCheck(product, comparison.feature);
                  return (
                    <tr className='tr' key={comparison.feature}>
                      <td className='td'>{compValue !== undefined ? compValue : ''}</td>
                      <td className='td'>{comparison.feature}</td>
                      <td className='td'>{value !== undefined ? value : ''}</td>
                    </tr>
                  );
                }
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

};

export default ComparisonsModal;