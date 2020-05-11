import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Publish = ({ userToken }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState();
  const history = useHistory();

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("file", file);
  if (!userToken) {
    history.push("/log_in");
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://leboncoin-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + userToken,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      /* setData(response.data); */

      alert(JSON.stringify(response.data));
    } catch (err) {
      if (err.response.status === 500) {
        console.error("An error occurred");
      } else {
        console.error(err.response.data.msg);
      }
    }
  };

  return (
    <div className="publish">
      <form onSubmit={handleSubmit}>
        <div className="publish-top">
          <span>Déposer une annonce</span>
        </div>

        <span>Titre de l'annonce *</span>
        <div className="title">
          <input
            type="text"
            /* value={title} */
            placeholder="title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <span>Texte de l'annonce *</span>
        <div className="textarea">
          <textarea
            type="text"
            /* value={description} */
            placeholder="description"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <span>Prix *</span>
        <div className="price">
          <input
            type="text"
            /*  value={price} */
            placeholder="price"
            onChange={(event) => setPrice(Number(event.target.value))}
          />
          <span>€</span>
        </div>

        <span>Photo *</span>
        <div className="file">
          <input
            type="file"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          />
        </div>
        <div className="submit">
          <button type="submit">Valider</button>
        </div>
      </form>
      {/* <img src={data.url} alt="" url to image /> */}
    </div>
  );
};
export default Publish;
