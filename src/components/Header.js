import React, { useState, useEffect } from "react";
import LogoLeboncoin from "../assets/images/logoLeboncoin.png";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={LogoLeboncoin} alt="logo" />
        Déposer une annonce Rechercher Se connecter
      </div>
    </div>
  );
};
export default Header;
