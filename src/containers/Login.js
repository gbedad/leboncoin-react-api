import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Login = ({ setUserToken }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    /*     const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/user/log_in",
      { email: email, password: password }
    );
    console.log(response.data); */
  };

  return (
    <div className="login">
      <div className="form">
        <form className="create" onSubmit={handleSubmit}>
          <div className="modalTitle">
            <span>Connexion</span>
          </div>

          <div className="input-field">
            <span>Email *</span>
            <div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <span>Password *</span>
            <div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="submit">
            <button
              onClick={async () => {
                const response = await axios.post(
                  "https://leboncoin-api.herokuapp.com/user/log_in",
                  { email: email, password: password }
                );
                console.log(response.data.token, response.data.username);

                setUserToken(response.data.token);
                Cookies.set("userToken", response.data.token, { expires: 300 });
                history.push("/");
              }}
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
      <div>
        <div className="noaccount">Vous n'avez pas encore de compte ?</div>
        <div className="submit">
          <button
            onClick={() => {
              history.push("/sign_up");
            }}
          >
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
