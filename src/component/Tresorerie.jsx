import React, { useState } from "react";
import Menu from "./Menu";
import axios from "axios";
import Upload from "./Upload";
import GalerieAdmin from "./GalerieAdmin";
import echec from "../image/pexels-pixabay-260024.jpg";
import TresorerieAdmin from "./TresorerieAdmin";
import "./Tresorerie.css";
import Footer from "./footer";

const API_URL = process.env.REACT_APP_API_URL;

function Tresorerie() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const onClick = () => {
    axios
      .post(`${API_URL}/tresorerie`, {
        type: type,
        name: name,
        valeur: value,
      })
      .then((res) => res.data)
      .then(() => {
        console.log(onClick);
        const messageSend = document.getElementById("validate");
        messageSend.innerHTML = "Demande envoyé !";
      })
      .catch(() => {
        const messageSend = document.getElementById("validate");
        messageSend.innerHTML = "Une erreur s'est produite !";
      });
  };

  return (
    <div>
      <Menu title={echec} />
      <div className="tresor">
        <h1 className="tresor-title">Trésorerie</h1>
        <div className="tresor-container">
          <div className="tresor-input">
            <label html="name" className="tresor-name">
              Nom :
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label htmlFor="type" className="tresor-label-select">
              <select
                className="tresor-select"
                name="type"
                id="type"
                value={type}
                onChange={(event) => setType(event.target.value)}
              >
                <option>----Selection----</option>
                <option value="guerre">Guerre</option>
                <option value="impot">Impôt</option>
                <option value="billeterie">Billeterie</option>
                <option value="foncier">Immobilier/Parcel</option>
              </select>
            </label>
            <label htmlFor="value" className="tresor-value">
              Valeur :
              <input
                type="text"
                name="value"
                id="value"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
            </label>
            <button
              type="button"
              className="tresor-button-add"
              onClick={onClick}
            >
              Ajouter
            </button>
          </div>
          <p id="validate"></p>
          {/* <button type="button" className="tresor-button-update" onClick={onClick}>Mettre à jour</button> */}
        </div>
      </div>
      <TresorerieAdmin />
      <div className="tresor-upload">
        <Upload />
      </div>
      <div className="galerie-admin">
        <GalerieAdmin />
      </div>
      <Footer />
    </div>
  );
}

export default Tresorerie;
