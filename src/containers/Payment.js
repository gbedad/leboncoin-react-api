import React from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
const Payment = () => {
  const location = useLocation();
  const { title, amount, url } = location.state;
  console.log(amount);

  return (
    <div className="achat">
      <div className="modalTitle">
        <span>Acheter en ligne</span>
      </div>
      <div className="card">
        <img src={url} alt="produit" />
        <h3>{title}</h3>
        <span>{amount} €</span>
      </div>

      <div className="card">
        <h3>Vos coordonnées bancaires</h3>
        <Elements stripe={stripePromise}>
          <CheckoutForm title={title} amount={amount} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
