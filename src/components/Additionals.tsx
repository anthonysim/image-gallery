import '../styling/Additionals.scss';

function Additionals() {
  return (
    <div>
      <ul className="additionals">
        <li className="additionals__item">About Value</li>|
        <li className="additionals__item">Steamworks</li>|
        <li className="additionals__item">Jobs</li>|
        <li className="additionals__item">Steam Distribution</li>|
        <li className="additionals__item">Gift Cards</li>|
        <li className="additionals__item">
          <img src="https://steam-fec.s3.amazonaws.com/images/ico_facebook.gif" alt="fb logo" />
          <span>&nbsp;&nbsp;Steam</span>
        </li>|
        <li className="additionals__item">
          <img src="https://steam-fec.s3.amazonaws.com/images/ico_twitter.gif" alt="twitter logo" />
          <span>&nbsp;&nbsp;@steam</span>
        </li>
      </ul>
    </div>
  );
}

export default Additionals;