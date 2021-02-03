import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Accueil from "./component/Acceuil";
import Galerie from "./component/Galerie";
import Admin from "./component/Admin";
import Billeterie from "./component/Billeterie";
import Tresorerie from "./component/Tresorerie";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/admin" component={Admin} />
        <Route path="/billeterie" component={Billeterie} />
        <Route path="/galerie" component={Galerie} />
        <Route path="/admin/tresorerie" component={Tresorerie} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
