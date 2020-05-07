import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell, faEye, faClock } from "@fortawesome/free-regular-svg-icons";
library.add(faBell, faEye, faClock);

const SignUp = () => {
  const [userSignup, setUserSignup] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setUserSignup({
      ...userSignup,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://leboncoin-api.herokuapp.com/user/sign_up", userSignup)
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="signup">
      <div className="pourquoi">
        <h2>Pourquoi créer un compte ?</h2>
        <ul>
          <li>
            <span>
              <FontAwesomeIcon icon="eye" />
            </span>
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
        <form className="create" onSubmit={handleSubmit}>
          <h2>Créez un compte</h2>
          <div className="input-field">
            <input
              type="email"
              name="email"
              value={userSignup.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="username"
              value={userSignup.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              value={userSignup.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              value={userSignup.confirmPassword}
              onChange={handleChange}
              required
            />
            <input
              type="checkbox"
              name="check"
              /* value={userSignup.confirmPassword} */
              onChange={handleChange}
              required
            />
          </div>

          <div className="submit">
            <button className="btn blue darken-3" type="submit">
              Créer mon Compte Personnel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
