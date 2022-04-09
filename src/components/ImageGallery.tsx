import { useState } from 'react';
import Signin from './Signin';
import data from '../images/images.json';
import '../styling/ImageGallery.scss';

function ImageGallery() {
  const [state, setState] = useState(0);

  function thumbHandler(e: React.ChangeEvent<any>) {
    const id = e.target.getAttribute("data-index");
    setState(id);
  }

  return (
    <div>
      <br />
      <br />
      <div >
        <img
          className="main"
          src={data[state].main}
          alt="main pic" />

        <ul className="thumbs">
          {data?.map(item =>
            <li key={item.id} >
              <img
                data-index={item.id}
                src={item.thumb}
                onClick={(e: React.ChangeEvent<any>) => thumbHandler(e)}
                alt="thumbail pic" />
            </li>
          )}
        </ul>
      </div>
      <Signin />
    </div>
  );
}

export default ImageGallery;