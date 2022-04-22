import { useState } from 'react';
import Signin from './Signin';
import Modal from './Modal';

import data from '../images/images.json';
import { } from '../utils/Timer';
import '../styling/ImageGallery.scss';

function ImageGallery() {
  const [state, setState] = useState(0);
  // const [modal, setModal] = useState(false);

  function OpenModel() {
    const modal = document.querySelector(".modal__dialog")! as HTMLElement;
    modal.setAttribute("open", "");
  }

  function thumbHandler(e: React.ChangeEvent<any>) {
    const selectedId: number = Number(e.target.getAttribute("data-index"));

    const images = document.querySelector(".thumbs")! as HTMLUListElement;

    for (let i = 0; i < images.children.length; i++) {
      let current = images.children[i].classList;
      let isSelected = current.contains("thumbs__img--selected");

      if (isSelected) {
        current.remove("thumbs__img--selected");
      }

      if (i === selectedId) {
        current.add("thumbs__img--selected");
      }
    }
    setState(selectedId);
  }

  return (
    <div>
      <br />
      <br />
      <div >

        {/* Modal */}
        <Modal />

        {/* main image */}
        <div>
          <img
            onClick={() => OpenModel()}
            className="main"
            src={data[state].main}
            alt="main pic"
            tabIndex={0} />
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
                  alt="thumbail pic"
                  tabIndex={0} />
              </li>

              : <li key={item.id}
                className="thumbs__img">
                <img
                  data-index={item.id}
                  src={item.thumb}
                  onClick={(e: React.ChangeEvent<any>) => thumbHandler(e)}
                  alt="thumbail pic"
                  tabIndex={0} />
              </li>
          })}
        </ul>
      </div>
      <Signin />
    </div>
  );
}

export default ImageGallery;