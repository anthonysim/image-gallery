import Rights from './Rights';
import Additionals from './Additionals';
import '../styling/Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__horizontalLine" ></div>
      <ul className="footer__btn">
        <li className="footer__btn__item">ABOUT STEAM</li>
        <li className="footer__btn__item">ABOUT VALVE</li>
        <li className="footer__btn__item">HELP</li>
        <li className="footer__btn__item">NEWS FEEDS</li>
      </ul>
      <div className="footer__horizontalLine" ></div>
      <Rights />
      <div className="footer__horizontalLine" ></div>
      <Additionals />
    </div>
  );
}

export default Footer;
