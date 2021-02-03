import React from 'react';
import { Link } from "react-router-dom";
import chateau from "../image/pexels-min-an-1006094.jpg";
import "./Menu.css";

function Menu () {
    return(
        <div className="menu">
            <h1 className="menu-title">Wild Kingdom</h1>
            <img src={chateau} alt="chateau" className="chateau"/>
            <ul className="menu-ul">
                <li>
                    <Link to="/" >Accueil</Link>
                </li>
                <li>
                    <Link to="/billeterie">Billeterie</Link>
                </li>
                <li>
                    <Link to="/galerie">Galerie</Link>
                </li>
                <li>
                    <Link to="/admin">Administrateur</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;