import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GalerieAdmin.css";

const API_URL = process.env.REACT_APP_API_URL;

function GalerieAdmin() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/galerie`).then((res) => {
      setPhoto(res.data);
    });
  }, []);

  function onClick(id) {
    axios.delete(`${API_URL}/galerie/${id}`).then((res) => {
      console.log(res);
    });
  }
  // console.log(onClick)

  return (
    <div className="trombi">
      <div className="trombi-container">
        {photo.map((galerie) => (
          <div className="trombi-div" key={galerie.idgalerie}>
            <img
              src={`${API_URL}/images/${galerie.image}`}
              alt={galerie.name}
              className="trombi-img"
            />
            <p className="trombi-name">{galerie.name}</p>
            <p className="trombi-titre">{galerie.titre}</p>
            <button type="button" onClick={() => onClick(galerie.idgalerie)}>
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalerieAdmin;
