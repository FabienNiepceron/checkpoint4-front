import React, { useState } from "react";
import Menu from "./Menu";
import axios from "axios";
import "./Billeterie.css";
import billet from "../image/lingot.jpg";
import Footer from "./footer";

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
              eveniet tempora laborum. Cupiditate commodi, facilis laudantium .
              Adulte 20 écu, Enfant (-6ans) 10 écu.
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
            <div className="billet-adlt">
              Adulte:
              <input
                type="button"
                value="-"
                min="0"
                onClick={() => {
                  setCountAdlt(countAdlt - 20);
                  setQuantityOne(quantityOne - 1);
                }}
              />
              <input
                type="button"
                value="+"
                min="0"
                onClick={() => {
                  setCountAdlt(countAdlt + 20);
                  setQuantityOne(quantityOne + 1);
                }}
              />
              <p>x {quantityOne}</p>
              <p>{countAdlt} Ecu</p>
            </div>
            <div className="billet-chld">
              Enfant:
              <input
                type="button"
                value="-"
                onClick={() => {
                  setCountChld(countChld - 10);
                  setQuantityTwo(quantityTwo - 1);
                }}
              />
              <input
                type="button"
                value="+"
                onClick={() => {
                  setCountChld(countChld + 10);
                  setQuantityTwo(quantityTwo + 1);
                }}
              />
              <p>x {quantityTwo}</p>
              <p>{countChld} Ecu</p>
            </div>
          </div>
          <div className="billet-total">
            Total : {countAdlt + countChld} Ecu.
            <div className="billet-button">
              <button
                className="form-button"
                type="button"
                onClick={onClickHandle}
              >
                Reserver
              </button>
            </div>
            <p id="validate"></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Billeterie;
