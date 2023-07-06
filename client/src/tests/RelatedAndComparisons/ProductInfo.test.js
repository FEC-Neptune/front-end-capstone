import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductInfo from '../../components/RelatedAndComparisons/ProductInfo.jsx';

describe('ProductInfoComponent', () => {
  it('Renders component', () => {
    const props = {
      product: {
        'id': 40349,
        'campus': 'hr-rfp',
        'name': 'Pumped Up Kicks',
        'slogan': 'Faster than a just about anything',
        'description': 'The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.',
        'category': 'Kicks',
        'default_price': '89.00',
        'created_at': '2021-08-13T14:38:44.509Z',
        'updated_at': '2021-08-13T14:38:44.509Z',
        'features': [
          {
            'feature': 'Sole',
            'value': 'Rubber'
          },
          {
            'feature': 'Material',
            'value': 'FullControlSkin'
          },
          {
            'feature': 'Mid-Sole',
            'value': 'ControlSupport Arch Bridge'
          },
          {
            'feature': 'Stitching',
            'value': 'Double Stitch'
          }
        ]
      }
    };
    render(<ProductInfo { ...props }/>);
    var element = document.querySelector('.info-container');
    expect(element).toBeInTheDocument();
  });
});