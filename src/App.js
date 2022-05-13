import React from "react";
import Header from "./common/header/Header";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch></Switch>
      </Router>
    </>
  );
}
