import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import axios from "axios";

const CheckoutForm = ({ title, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleSubmit = async (event) => {
    event.preventDefault();

    // On récupère ici les données bancaires que l'utilisateur rentre
    const cardElement = elements.getElement(CardElement);
    // Demande de création d'un token via l'API Stripe
    cardElement.on("change", function (event) {});
    // On envoie les données bancaires dans la requête
    const stripeResponse = await stripe.createToken(cardElement, {
      name: "L'id de l'acheteur",
    });
    console.log(stripeResponse);

    const token = stripeResponse.token.id;
    // Une fois le token reçu depuis l'API Stripe
    // Requête vers notre serveur
    // On envoie le token reçu depuis l'API Stripe
    const response = await axios.post(
      "https://leboncoin-api.herokuapp.com/payment",
      {
        token,
        amount,
        title,
      }
    );
    console.log(response.data);

    // Si la réponse du serveur est favorable, la transaction a eu lieu
    if (response.data.status === "succeeded") {
      setCompleted(false);
    }
  };
  return (
    <>
      {!completed ? (
        <form onSubmit={handleSubmit}>
          <CardElement
            onChange={(event) => {
              if (event.complete) {
                setIsLoading(false);
              }
            }}
          />
          <button
            className="paiement"
            type="submit"
            disabled={isLoading ? true : false}
          >
            Procéder au paiement
          </button>
        </form>
      ) : (
        <span>Paiement effectué ! </span>
      )}
    </>
  );
};
export default CheckoutForm;
