import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/user/log_in",
      { email: email, password: password }
    );
    console.log(response.data);
  };

  return (
    <div>
      Login page
      <div className="form">
        <form className="create" onSubmit={handleSubmit}>
          <h2>Connexion</h2>
          <div className="input-field">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />
          </div>

          <div className="submit">
            <button
              onClick={() => {
                const token =
                  "JczHBrhe3Ixffzs01umaeHD4E33j5JSey3I0edJfTvBnOdigUMISCRGDqyM6u0oX";
                Cookies.set("userToken", token, { expires: 300 });
                setUser(token);
                history.push("/");
              }}
            >
              Se connecter
            </button>
          </div>
        </form>
        <button
          onClick={() => {
            history.push("/sign_up");
          }}
        >
          Créer un compte
        </button>
      </div>
    </div>
  );
};
export default Login;
