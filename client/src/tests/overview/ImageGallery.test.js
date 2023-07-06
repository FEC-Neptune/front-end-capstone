import React, {useState} from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import { productId, currentProduct, style, reviewsData, productStyles } from './overviewData.js';

import ImageGallery from '../../components/overview/ImageGallery.jsx';

// Tests to Add
// 1) Renders image
// 2) No error w/o image

describe('ImageGallery', function() {

  const Wrapper = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [expandedView, setExpandedView] = useState(false);
    return <ImageGallery product={productId} style={style} activeImageIndex={activeImageIndex} expandedView={expandedView} setActiveImageIndex={setActiveImageIndex} setExpandedView={setExpandedView} />;
  };

  beforeEach(() => {
    render(<Wrapper />);
  });

  it('should render the ImageGallery component', function() {
    expect(document.querySelector('.image-gallery')).toBeTruthy();
  });

  it('should render the ImageGallery component', function() {
    expect(document.getElementsByClassName('image-gallery')).toBeTruthy();
  });

  it('should render the thumbnail container', function() {
    expect(document.getElementById('thumbnail-container')).toBeTruthy();
  });

  it('should render thumbnails', function() {
    expect(document.getElementsByClassName('ig-thumbnail')).toBeTruthy();
  });

  it('should render svg icons', function() {
    expect(document.getElementsByClassName('ig-nav')).toBeTruthy();
  });

  it('should render the image navigation container', function() {
    expect(document.getElementById('image-nav-container')).toBeTruthy();
  });

  it('should render 7 thumbnails', function() {
    expect(document.getElementsByClassName('ig-thumbnail').length).toBe(7);
  });

  it('should toggle the expanded view when the clicked', function() {
    fireEvent.click(document.getElementById('image-gallery-default'));
    expect(document.getElementById('image-gallery-default')).toBeFalsy();
  });

  it('should toggle the expanded view when the clicked and then toggle zoom mode when clicked again', function() {
    fireEvent.click(document.getElementById('image-gallery-default'));
    expect(document.getElementById('image-gallery-expanded')).toBeTruthy();
    fireEvent.click(document.getElementById('image-gallery-expanded'));
    expect(document.getElementsByClassName('zoom-image')).toBeTruthy();
  });


  it('after toggling expanded view, elements should render', function() {
    fireEvent.click(document.getElementById('image-gallery-default'));
    expect(document.getElementById('image-gallery-default')).toBeFalsy();
    expect(document.getElementById('expanded-image-icon-container')).toBeTruthy();
    expect(document.getElementById('expanded-nav-container')).toBeTruthy();
    expect(document.getElementsByClassName('ig-thumbnail').length).toBeFalsy();
    expect(document.getElementsByClassName('svg-inline--fa fa-square fa-fw fa-xs ig-icons')).toBeTruthy();
    expect(document.getElementById('expanded-nav-minimize-container')).toBeTruthy();
    expect(document.getElementById('expanded-nav-chevron-container')).toBeTruthy();
  });

  it('after toggling zoom mode, elements should render', function() {
    fireEvent.click(document.getElementById('image-gallery-default'));
    fireEvent.click(document.getElementById('image-gallery-expanded'));
    expect(document.getElementById('image-gallery-default')).toBeFalsy();
    expect(document.getElementById('expanded-image-icon-container')).toBeFalsy();
    expect(document.getElementById('expanded-nav-container')).toBeFalsy();
    expect(document.getElementsByClassName('ig-thumbnail').length).toBeFalsy();
    expect(document.getElementsByClassName('svg-inline--fa fa-square fa-fw fa-xs ig-icons').length).toBeFalsy();
    expect(document.getElementById('expanded-nav-minimize-container')).toBeFalsy();
    expect(document.getElementById('expanded-nav-chevron-container')).toBeFalsy();
    expect(document.getElementsByClassName('image-zoom-container')).toBeTruthy();
    expect(document.getElementsByTagName('img')).toBeTruthy();
  });

});