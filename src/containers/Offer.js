import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  /* const params = useParams(); */
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  /* params.id = "5eb1a944556ef700172ae925"; */
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://leboncoin-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    getData();
  }, [id]);

  return isLoading ? (
    <span>Downloading article...</span>
  ) : (
    <div>
      <Link to="/">
        <div>Go back to all offers</div>
      </Link>
      <main>
        <div className="offer">
          <div className="detailOffer">
            <img src={data.picture.secure_url} alt="detail offre" />
            <h2>{data.title}</h2>
            <span>{data.price} €</span>
            <p>{data.created}</p>
            <p>{data._id}</p>
          </div>
          <div>
            <h3>Description</h3>
            <p>{data.description}</p>
          </div>
        </div>
        <div className="vendor">
          {data.creator.account.username}
          <button>Achetez</button>
        </div>
      </main>
    </div>
  );
};

export default Offer;
