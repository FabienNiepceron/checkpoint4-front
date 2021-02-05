import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TresorerieAdmin.css";

const API_URL = process.env.REACT_APP_API_URL;

function TresorerieAdmin() {
  const [money, setMoney] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/tresorerie`).then((res) => {
      setMoney(res.data);
    });
  }, []);
  console.log(money);

  return (
    <div>
      <div className="impot">
        {money.map((tresorie) => (
          <div className="impot-pers" key={tresorie}>
            <p className="impot-p">{tresorie.name} </p>
            <p className="impot-p">{tresorie.type} </p>
            <p className="impot-p"> {tresorie.valeur} Ecu</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TresorerieAdmin;
