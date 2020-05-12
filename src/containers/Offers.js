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
  const [page, setPage] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://leboncoin-api.herokuapp.com/offer/with-count?limit=3&page=${page}`
        );
        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [page]);
  const pageNum = [];
  for (let i = 1; i <= data.count / 4; i++) {
    pageNum.push(i);
  }
  return isLoading ? (
    <span>Downloading...</span>
  ) : (
    <div>
      <div className="ellipse"></div>
      <div className="breadcrumb">Recherche</div>
      {/*  <Link>
        <p>link to selected offer</p>
      </Link> */}
      <div> {Math.round(data.count / 4)} pages</div>
      <div className="page">
        {pageNum.map((i, index) => {
          return (
            <button
              key="index"
              onClick={() => {
                setPage(index + 1);
              }}
            >
              {i}
            </button>
          );
        })}
      </div>

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
