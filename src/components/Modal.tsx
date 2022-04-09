import '../styling/Modal.scss';

const Modal = () => {

  function closeModalHandler() {
    const modal = document.querySelector(".modal__dialog")! as HTMLElement;
    modal.removeAttribute("open");
  }

  return (
    <div className="modal">
      <dialog
        className="modal__dialog">
        <h1>Title</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis odio nemo sint blanditiis, voluptatum perspiciatis nostrum harum placeat sit rerum!</p>
        <button className="modal__close" onClick={closeModalHandler}>Close Button</button>
      </dialog>
    </div>
  );
}

export default Modal;