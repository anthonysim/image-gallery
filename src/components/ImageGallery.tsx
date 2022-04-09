import { useState, useEffect } from 'react';
import Signin from './Signin';
import data from '../images/images.json';
import '../styling/ImageGallery.scss';

function ImageGallery() {
  const [state, setState] = useState(data);

  console.log(state);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="imageGallery">

        {state?.map(item => {
          return <div key={item.id}>
            <img src={item.thumb} alt="thumbail pic" />
          </div>
        })}
      </div>

      <Signin />
    </div>
  );
}

export default ImageGallery;