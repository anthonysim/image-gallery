import { useState } from 'react';
import Signin from './Signin';
import data from '../images/images.json';
import '../styling/ImageGallery.scss';

function ImageGallery() {
  const [state, setState] = useState(0);

  function thumbHandler(e: React.ChangeEvent<any>) {
    const selectedId = e.target.getAttribute("data-index");

    const images = document.querySelector(".thumbs")! as HTMLUListElement;

    for (let image of images.children) {
      console.log(images);
    }


    setState(selectedId);
  }

  return (
    <div>
      <br />
      <br />
      <div >

        {/* main image */}
        <div>
          <img
            className="main"
            src={data[state].main}
            alt="main pic" />
        </div>

        {/* thumbnail images */}
        <ul className="thumbs">
          {data?.map(item => {
            return item.id === 0 ?

              <li key={item.id}
                className="thumbs__img thumbs__img--selected">
                <img
                  data-index={item.id}
                  src={item.thumb}
                  onClick={(e: React.ChangeEvent<any>) => thumbHandler(e)}
                  alt="thumbail pic" />
              </li>

              : <li key={item.id}
                className="thumbs__img">
                <img
                  data-index={item.id}
                  src={item.thumb}
                  onClick={(e: React.ChangeEvent<any>) => thumbHandler(e)}
                  alt="thumbail pic" />
              </li>
          })}
        </ul>
      </div>
      <Signin />
    </div>
  );
}

export default ImageGallery;