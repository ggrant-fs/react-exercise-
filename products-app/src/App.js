import "./App.css";
import React from "react";
import Home from "./Components/Home";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Route exact path="/">
        <Home />
      </Route>
    </React.Fragment>
  );
};

export default App;
