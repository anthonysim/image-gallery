import '../styling/NavbarFirst.scss';

function NavbarFirst() {
  return (
    <div >
      <ul className="navbarFirst">
        <li className="navbarFirst__item"><img src="https://steam-fec.s3.amazonaws.com/images/logo_steam.svg" alt="steam logo" width="176" height="44" /></li>
        <li className="navbarFirst__item">STORE</li>
        <li className="navbarFirst__item">COMMUNITY</li>
        <li className="navbarFirst__item">ABOUT</li>
        <li className="navbarFirst__item">SUPPORT</li>
      </ul>
    </div >
  );
}

export default NavbarFirst;