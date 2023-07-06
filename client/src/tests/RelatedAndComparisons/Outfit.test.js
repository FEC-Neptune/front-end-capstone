import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Outfit from '../../components/RelatedAndComparisons/Outfit.jsx';
import { fetchProducts } from '../../lib/requestHelpers.js';
import Cookies from 'js-cookie';

jest.mock('js-cookie', () => ({
  get: jest.fn(),
  set: jest.fn()
}));

jest.mock('../../lib/requestHelpers.js', () => ({
  fetchProducts: jest.fn()
}));

describe('OutfitComponent', () => {

  beforeEach(() => {
    Cookies.get.mockReset();
    Cookies.set.mockReset();
    fetchProducts.mockReset();
  });

  it('Renders component with add outfit button', () => {
    const outfitItems = [];
    const currentProduct = 40349;
    const setCurrentProduct = jest.fn();

    render(
      <Outfit
        outfitClick={jest.fn()}
        outfitItems={outfitItems}
        handleLeftClick={jest.fn()}
        handleRightClick={jest.fn()}
        scrollPosition={0}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
      />
    );

    const addOutfitButton = screen.getByText('+');
    const element = document.querySelector('#outfit-carousel');

    expect(element).toBeInTheDocument();
    expect(addOutfitButton).toBeInTheDocument();
  });

});
