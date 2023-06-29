import { useState } from 'react';
import { useEffect } from 'react';
import { fetchProducts } from '../../lib/requestHelpers.js';

const CurrentImage = ( { product } ) => {

  const [currentThumbnail, setCurrentThumbnail] = useState('');

  useEffect(() => {
    fetchProducts(product.id, 'styles')
      .then(res => {
        const nullUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';
        const url = res.results[0]?.photos[0]?.thumbnail_url;
        url ? setCurrentThumbnail(url) : setCurrentThumbnail(nullUrl);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='thumbnail-container'>
    <img className='thumbnail' src={currentThumbnail} alt='Related product thumbnail image'/>
    </div>
  );

};

export default CurrentImage;