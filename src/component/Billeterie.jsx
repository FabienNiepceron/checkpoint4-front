import React, { useState } from "react";
import Menu from "./Menu";
import axios from "axios";
import "./Billeterie.css";
import billet from "../image/pexels-pixabay-47047.jpg";

const API_URL = process.env.REACT_APP_API_URL;

function Billeterie() {
  const [name, setName] = useState("");
  const [countAdlt, setCountAdlt] = useState(0);
  const [countChld, setCountChld] = useState(0);
  const [quantityOne, setQuantityOne] = useState(0);
  const [quantityTwo, setQuantityTwo] = useState(0);

  const count = countChld + countAdlt;

  const onClickHandle = () => {
    axios
      .post(`${API_URL}/billeterie`, {
        name: name,
        montant: count,
      })
      .then((res) => res.data)
      .then(() => {
        const messageSend = document.getElementById("validate");
        messageSend.innerHTML = "Demande envoyé !";
      })
      .catch(() => {
        const messageSend = document.getElementById("validate");
        messageSend.innerHTML = "Une erreur s'est produite !";
      });
  };

  return (
    <div className="billeterie">
      <Menu title={billet} />
      <h1 className="billeterie-title">Billeterie</h1>
      <div className="billeterie-global">
        <div className="billeterie-container">
          <div className="billeterie-text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam quae nostrum velit accusantium placeat, illo deleniti
              beatae provident eligendi et quasi doloremque optio, expedita
              officiis minus numquam ex quo repellendus! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Fugiat tempore, sapiente atque
              assumenda illum quia quam, repudiandae omnis ratione ipsa aut,
              aspernatur vel eum voluptas fuga consequuntur dignissimos incidunt
              nemo.lorem Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Culpa dignissimos incidunt nobis reprehenderit explicabo
              eveniet tempora laborum. Cupiditate commodi, facilis laudantium
              tenetur voluptatem suscipit architecto eos, culpa sit sequi
              accusantium.
            </p>
          </div>
        </div>
        <div className="billeterie-form">
          <label htmlFor="nom" className="billeterie-name">
            nom:
            <input
              className="input-name"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              require
            />
          </label>
          <div className="billeterie-quantity">
            Adulte:
            <input
              type="button"
              value="-"
              onClickOne={() => setQuantityOne(quantityOne - 1)}
              onClick={() => setCountAdlt(countAdlt - 20)}
            />
            <input
              type="button"
              value="+"
              onClickOne={() => setQuantityOne(quantityOne + 1)}
              onClick={() => setCountAdlt(countAdlt + 20)}
            />
            {quantityOne}
            {countAdlt}
            Enfant:
            <input
              type="button"
              value="-"
              onClick={() => setQuantityTwo(quantityTwo - 1)}
              onClick={() => setCountChld(countChld - 10)}
            />
            <input
              type="button"
              value="+"
              onClick={() => setQuantityTwo(quantityTwo + 1)}
              onClick={() => setCountChld(countChld + 10)}
            />
            {quantityTwo}
            {countChld}
          </div>
          Total : {countAdlt + countChld} Ecu.
          <div className="billeterie-button">
            <button
              className="form-button"
              type="button"
              onClick={onClickHandle}
            >
              Reserver
            </button>
            <p id="validate"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billeterie;
