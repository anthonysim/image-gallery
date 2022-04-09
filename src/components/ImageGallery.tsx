import { useState, useEffect } from 'react';
import Signin from './Signin';
import data from '../images/images.json';
import '../styling/ImageGallery.scss';
import { Sign } from 'crypto';

function ImageGallery() {
  const [state, setState] = useState(data);

  console.log(state);
  return (
    <div>
      <div className="imageGallery">
        <div className="imageGallery__thumb">
          {state?.map(item => {
            return <div key={item.id}>
              <img src={item.thumb} alt="thumbail pic" />
            </div>
          })}
        </div>
      </div>
      <Signin />
    </div>
  );
}

export default ImageGallery;