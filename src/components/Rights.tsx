import '../styling/Rights.scss';

function Rights() {
  return (
    <div>
      <ul className="rights">
        <li className="rights__items">
          <img src="https://steam-fec.s3.amazonaws.com/images/footerLogo_valve_new.png" alt="steam logo" width="90" height="25" />
        </li>
        <li className="rights__items rights__items--desc">
          <div>
            © 2021 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the 2 US and other countries
            <div>
              VAT included in all prices where applicable.
              <strong>
                Privacy Policy | Legal | Steam Subscriber Agreement | Refunds
              </strong>
            </div>
          </div>
        </li>
        <li className="rights__items rights__items--right">
          <img src="https://steam-fec.s3.amazonaws.com/images/logo_steam_footer.png" alt="steam logo" width="90" height="30" />
        </li>
      </ul>
    </div >
  );
}

export default Rights;