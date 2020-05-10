import React from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

import LogoLeboncoin from "../assets/images/logoLeboncoin.png";
const Header = ({ userToken, setUserToken }) => {
  const history = useHistory();
  return (
    <div className="header">
      <div className="subheader">
        <img src={LogoLeboncoin} alt="logo" />
        <div className="headersearch">
          <button className="announce">Déposer une annonce</button>
          <input className="search"></input>
        </div>

        <div>
          {!userToken ? (
            <button
              className="announce"
              onClick={() => {
                history.push("/log_in");
              }}
            >
              Se connecter
            </button>
          ) : (
            <button
              onClick={() => {
                // when clicking on button, disconnect and remove cookie
                Cookies.remove("userToken");
                setUserToken(null);
                history.push("/");
              }}
            >
              Se deconnecter
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
