import React, { useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Login() {
  const [name, SetName] = useState("");
  const [password, SetPassword] = useState("");

  return (
    <div>
      <Menu />
      <div className="login">
        <label htmlFor="name">
          Utilisateur :
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            // onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label htmlFor="password">
          Mot de passe
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            // onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        {/* <button type="button" className="login-button" onClick={onClickHandle} >Se connecter</button> */}
      </div>
    </div>
  );
}

export default Login;
