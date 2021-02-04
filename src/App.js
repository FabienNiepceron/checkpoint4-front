import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Accueil from "./component/Acceuil";
import Galerie from "./component/Galerie";
import Login from "./component/Login";
import Admin from "./component/Admin";
import Billeterie from "./component/Billeterie";
import Tresorerie from "./component/Tresorerie";
import UploadFile from "./component/Upload";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/billeterie" component={Billeterie} />
        <Route path="/galerie" component={Galerie} />
        <Route path="/tresorerie" component={Tresorerie} />
        <Route path="/upload" component={UploadFile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
