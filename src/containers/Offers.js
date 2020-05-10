import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import fr from "date-fns/locale/fr";
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
      <div className="ellipse"></div>
      <div className="breadcrumb">Recherche</div>
      {/*  <Link>
        <p>link to selected offer</p>
      </Link> */}
      <div>Pages : {data.count / 3}</div>
      {data.offers.map((item) => {
        return (
          <Link
            key={item._id}
            to={`/offer/${item._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="item">
              {/* <Link to="link"></Link>; */}
              <figure className="pic">
                <img src={item.picture.secure_url} alt="voiture" />
              </figure>
              <div className="itemDetail">
                <div className="desc">
                  <span>{item.title}</span>
                  <span>{item.price} €</span>
                </div>

                <span>
                  {format(new Date(item.created), "eeee, d MMMM yyyy à H:mm", {
                    locale: fr,
                  })}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Offers;
