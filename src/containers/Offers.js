import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
/* import { useParams } from "react-router-dom"; */

const Offers = () => {
  /* const params = useParams(); */
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/offer/with-count"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <span>Downloading...</span>
  ) : (
    <div>
      <div className="header">
        Logo Déposer une annonce Rechercher Se connecter
      </div>
      <div className="ellipse"></div>
      <div className="breadcrumb">Recherche</div>

      <Link>
        <p>link to selected offer</p>
      </Link>
      {data.offers.map((item) => {
        return (
          <Link key={item._id} to={`/offer/${item._id}`}>
            <div className="item">
              {/* <Link to="link"></Link>; */}
              <figure className="pic">
                <img src={item.picture.secure_url} alt="voiture" />;
              </figure>
              <div className="itemDetail">
                <div className="desc">
                  <span>{item.title}</span>
                  <span>{item.price} €</span>
                </div>

                <span>{item.created}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Offers;
