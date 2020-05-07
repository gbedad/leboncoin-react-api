import React, { useState } from "react";
import axios from "axios";

const Sign_up = () => {
  const [data, setData] = useState({});
  const userSignUp = async () => {
    const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/user/sign_up",
      {
        email: "farid@lereacteur.io",
        username: "Farid",
        password: "azerty",
      }
    );
    /*     setData(response.data);
    userSignUp(); */
    console.log(response);
  };
};

export default Sign_up;
