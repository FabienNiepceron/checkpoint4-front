import React, { useState } from "react";
import { Link } from "react-router-dom";
import burgerimg from "../image/toppng.com-menu-burger-512x512.png";
import "./Menu.css";

function Menu(props) {
  const [burger, setBurger] = useState(false);
  const { title } = props;

  return (
    <div className="menu">
      <h1 className="menu-title">Wild Castle</h1>
      <img src={title} alt="chateau" className="chateau" />
      <div>
        <button
          type="button"
          className="menu-button"
          id="menu-burger"
          onClick={() => {
            const isFalse = document.getElementById("menu-ul");
            isFalse.style.display = "flex";
            setBurger(true);
          }}
        >
          <img src={burgerimg} alt="Menu" className="menu-burger" />
        </button>
      </div>
      <ul className="menu-ul" id="menu-ul">
        <li className="menu-li">
          <Link to="/">Accueil</Link>
        </li>
        <li className="menu-li">
          <Link to="/billeterie">Billeterie</Link>
        </li>
        <li className="menu-li">
          <Link to="/galerie">Galerie</Link>
        </li>
        <li className="menu-li">
          <Link to="/tresorerie">Administrateur</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
