import React from "react";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Pages />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
