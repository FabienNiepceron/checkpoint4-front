import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import axios from "axios";
import "./Galerie.css";
import galerie from "../image/pexels-ivan-bertolazzi-2681405.jpg";
import Footer from "./footer";

const API_URL = process.env.REACT_APP_API_URL;

function Galerie() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/galerie`).then((res) => {
      setPhoto(res.data);
    });
  }, []);
  console.log(photo);

  return (
    <div className="galery">
      <Menu title={galerie} />
      <h1 className="galery-h1">Galerie</h1>
      <div className="galery-global">
        {photo.map((galerie) => (
          <div className="galery-container" key={galerie}>
            <img
              src={`${API_URL}/images/${galerie.image}`}
              alt={galerie.name}
              className="galery-image"
            />
            <p className="galery-name">{galerie.name}</p>
            <p className="galery-titre">{galerie.titre}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Galerie;
