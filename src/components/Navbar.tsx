import '../styling/Navbar.scss';

function Navbar() {
  return (
    <div >
      <ul className="navbar">
        <li className="navbar__item">Your Store</li>
        <li className="navbar__item">Browse</li>
        <li className="navbar__item">Points Store</li>
        <li className="navbar__item">News</li>
        <li className="navbar__item">Steam Labs</li>
      </ul>
    </div>
  );
}

export default Navbar;