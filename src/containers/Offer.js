import React, { useState, useEffect } from "react";

import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import format from "date-fns/format";
import fr from "date-fns/locale/fr";

const Offer = () => {
  /* const params = useParams(); */
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();
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
      <main>
        <div className="offer">
          <div className="detailOffer">
            <img src={data.picture.secure_url} alt="detail offre" />
            <h2>{data.title}</h2>
            <span>{data.price} €</span>

            <p>
              {format(new Date(data.created), "eeee, d MMMM yyyy à H:mm", {
                locale: fr,
              })}
            </p>
          </div>
          <div className="detaildesc">
            <h3>Description</h3>
            <p>{data.description}</p>
          </div>
        </div>
        <div className="vendor">
          {data.creator.account.username}
          <button
            onClick={() => {
              history.push("/payment", {
                title: data.title,
                amount: data.price,
                picture: data.picture.secure_url,
              });
            }}
          >
            Achetez
          </button>
        </div>
      </main>
    </div>
  );
};

export default Offer;
