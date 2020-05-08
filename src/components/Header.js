import React from "react";
import { useHistory, Link } from "react-router-dom";
import Cookies from "js-cookie";

import LogoLeboncoin from "../assets/images/logoLeboncoin.png";
const Header = ({ user, setUser }) => {
  const history = useHistory();
  return (
    <div className="header">
      <div>
        <img src={LogoLeboncoin} alt="logo" />
        Déposer une annonce Rechercher
        {user ? (
          <button
            onClick={() => {
              // when clicking on button, disconnect and remove cookie
              Cookies.remove("userToken");
              setUser(null);
              history.push("/");
            }}
          >
            Se deconnecter
          </button>
        ) : (
          <Link to="/log_in">Se connecter</Link>
        )}
      </div>
    </div>
  );
};
export default Header;
