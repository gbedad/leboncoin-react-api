import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (checkbox) {
      if (password === confirmPassword) {
        const response = await axios.post(
          "https://leboncoin-api.herokuapp.com/user/sign_up",
          { email: email, username: username, password: password }
        );
        console.log(response.data);
        Cookies.set("userToken", response.data.token, { expires: 300 });
        setUser(response.data.token);
        history.push("/");
      } else {
        alert("Veuillez saisir deux passwords identiques");
      }
    } else {
      alert("Veuillez accepter les conditions générales");
    }
  };

  return (
    <div className="signup">
      <div className="pourquoi">
        <h2>Pourquoi créer un compte ?</h2>
        <ul>
          <li>
            <h4>Gagnez du temps</h4>
            <p>
              Gagnez du temps Publiez vos annonces rapidement, avec vos
              informations pré-remplies chaque fois que vous souhaitez déposer
              une nouvelle annonce.
            </p>
          </li>
          <li>
            <h4>Soyez les premiers informés</h4>
            <p>
              Soyez les premiers informés Créez des alertes Immo ou Emploi et ne
              manquez jamais l’annonce qui vous intéresse.
            </p>
          </li>
          <li>
            <h4>Visibilité</h4>
            <p>
              Visibilité Suivez les statistiques de vos annonces (nombre de fois
              où votre annonce a été vue, nombre de contacts reçus).
            </p>
          </li>
        </ul>
      </div>
      <div className="form">
        <div className="create">
          <form onSubmit={handleSubmit}>
            <h2>Créez un compte</h2>
            <div className="input-field">
              <div>
                <span>Pseudo *</span>
                <input
                  type="text"
                  name="pseudo"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  placeholder="Pseudo"
                  required
                />
              </div>

              <div>
                <span>email *</span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  placehaolder="Email"
                  required
                />
              </div>

              <div className="password">
                <div>
                  <span>Password *</span>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    placeholder="Password"
                    required
                  />
                </div>

                <div>
                  <span>Confirm password *</span>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="checked">
                <input
                  type="checkbox"
                  name="check"
                  onChange={() => {
                    setCheckbox(!checkbox);
                  }}
                  required
                />
                <p>
                  « J’accepte les{" "}
                  <span>
                    Conditions Générales de Vente et les Conditions Générales
                    d’Utilisation
                  </span>{" "}
                  »
                </p>
              </div>
            </div>

            <div className="submit">
              <button className="btn blue darken-3" type="submit">
                Créer mon Compte Personnel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
