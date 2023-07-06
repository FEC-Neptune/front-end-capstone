import * as React from 'react';
import { render, screen, act} from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrentImage from '../../components/RelatedAndComparisons/CurrentImage.jsx';
import { fetchProducts } from '../../lib/requestHelpers.js';

jest.mock('../../lib/requestHelpers.js', () => ({
  fetchProducts: jest.fn()
}));

describe('CurrentImageComponent', () => {
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

    render(<CurrentImage { ...props }/>);
    var element = document.querySelector('.thumbnail-container');
  });

  it('fetches and updates the currentThumbnail state', (done) => {
    const product = {
      id: 40349
    };
    const mockResponse = {
      results: [
        {
          photos: [
            {
              thumbnail_url:
                'https://example.com/thumbnail.jpg'
            }
          ]
        }
      ]
    };

    fetchProducts.mockResolvedValueOnce(mockResponse);

    act(() => {
      render(<CurrentImage product={product} />);
    });

    setImmediate(() => {
      expect(fetchProducts).toHaveBeenCalledWith(40349, 'styles');
      expect(screen.getByAltText('Related product thumbnail image')).toBeInTheDocument();
      expect(screen.getByAltText('Related product thumbnail image')).toHaveAttribute(
        'src',
        'https://example.com/thumbnail.jpg'
      );

      done();
    });
  });
});


