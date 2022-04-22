import '../styling/NavbarFirst.scss';

function NavbarFirst() {
  return (
    <div >
      <ul className="navbarFirst">
        <li className="navbarFirst__item"><img src="https://steam-fec.s3.amazonaws.com/images/logo_steam.svg" alt="steam logo" width="176" height="44" /></li>
        <li className="navbarFirst__item" tabIndex={0}>STORE</li>
        <li className="navbarFirst__item" tabIndex={0}>COMMUNITY</li>
        <li className="navbarFirst__item" tabIndex={0}>ABOUT</li>
        <li className="navbarFirst__item" tabIndex={0}>SUPPORT</li>
        <li className="navbarFirst__item navbarFirst__item--installSteam"></li>
        <li className="navbarFirst__item navbarFirst__item--right">
          <span className="navbarFirst__item__installSteam">Install Steam</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;login</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>language</span>
        </li>
      </ul>
    </div >
  );
}

export default NavbarFirst;