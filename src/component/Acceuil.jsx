import React from "react";
import Menu from "./Menu";
import chateau from "../image/pexels-min-an-1006094.jpg";

function Acceuil() {
  return (
    <div className="acceuil">
      <Menu title={chateau} />
    </div>
  );
}

export default Acceuil;
