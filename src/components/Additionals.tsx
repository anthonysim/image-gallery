import '../styling/Additionals.scss';

function Additionals() {
  return (
    <div>
      <ul className="additionals">
        <li className="additionals__item" tabIndex={0}>About Value</li>|
        <li className="additionals__item" tabIndex={0}>Steamworks</li>|
        <li className="additionals__item" tabIndex={0}>Jobs</li>|
        <li className="additionals__item" tabIndex={0}>Steam Distribution</li>|
        <li className="additionals__item" tabIndex={0}>Gift Cards</li>|
        <li className="additionals__item">
          <img src="https://steam-fec.s3.amazonaws.com/images/ico_facebook.gif" alt="fb logo" />
          <span tabIndex={0}>&nbsp;&nbsp;Steam</span>
        </li>|
        <li className="additionals__item">
          <img src="https://steam-fec.s3.amazonaws.com/images/ico_twitter.gif" alt="twitter logo" />
          <span tabIndex={0}>&nbsp;&nbsp;@steam</span>
        </li>
      </ul>
    </div>
  );
}

export default Additionals;