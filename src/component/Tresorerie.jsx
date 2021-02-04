import React, { useState } from "react";
import Menu from "./Menu";
import axios from "axios";
import or from "../image/pexels-pixabay-47047.jpg"

const API_URL = process.env.REACT_APP_API_URL;

function Tresorerie() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const onClick = () => {
    axios.post(`${API_URL}/tresorerie`, {
      type: type,
      name: name,
      valeur: value
    })
    .then((res) => res.data)
    .then(() => {
      console.log(onClick)
      const messageSend = document.getElementById("validate");
        messageSend.innerHTML = "Demande envoyé !";
      })
      .catch(() => {
        const messageSend = document.getElementById("validate");
        messageSend.innerHTML = "Une erreur s'est produite !";
      });
    }

    // useEffect(() => {
    //   axios.get(`${API_URL}/tresorerie`).then((res) => {
    //     setPhoto(res.data);
    //   });
    // }, []);

  return (
    <div>
      <Menu title={or}/>
      <div className="tresor">
        <h1 className="tresor-tilte">Trésorerie</h1>
        <div className="tresor-container">
          <label htmlFor="type" className="tresor-label-select">
            <select
              className="tresor-select"
              name="type"
              id="type"
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="guerre">Guerre</option>
              <option value="impot">Impôt</option>
              <option value="billeterie">Billeterie</option>
            </select>
          </label>
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
          <label htmlFor="value" className="tresor-value">
            Valeur :
            <input
              type="number"
              name="value"
              id="value"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </label>
          <button type="button" className="tresor-button-add" onClick={onClick}>
            Ajouter
          </button>
          {/* <button type="button" className="tresor-button-update" onClick={onClick}>Mettre à jour</button> */}
        </div>
        <p id="validate"></p>
      </div>
      <div className="tresor-upload">
        
      </div>
    </div>
  );
}

export default Tresorerie;
