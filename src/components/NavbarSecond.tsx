import '../styling/NavbarSecond.scss';

function NavbarSecond() {
  return (
    <div >
      <ul className="navbarSecond">
        <li className="navbarSecond__item" tabIndex={0}>Your Store</li>
        <li className="navbarSecond__item" tabIndex={0}>Browse</li>
        <li className="navbarSecond__item" tabIndex={0}>Points Store</li>
        <li className="navbarSecond__item" tabIndex={0}>News</li>
        <li className="navbarSecond__item" tabIndex={0}>Steam Labs</li>
      </ul>
    </div>
  );
}

export default NavbarSecond;