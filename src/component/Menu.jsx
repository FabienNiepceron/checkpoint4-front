import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

function Menu(props) {
  const { title } = props;

  return (
    <div className="menu">
      <h1 className="menu-title">Wild Kingdom</h1>
      <img src={title} alt="chateau" className="chateau" />
      <ul className="menu-ul">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/billeterie">Billeterie</Link>
        </li>
        <li>
          <Link to="/galerie">Galerie</Link>
        </li>
        <li>
          <Link to="/login">Administrateur</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
