import "./App.css";
import React from "react";
import Home from "./Home";
import Products from "./Products";
import AddProduct from "./AddProduct";
import { Route } from "react-router-dom";
import { useState, useeffect } from " react";

const App = () => {
  const [item, setItem] = useState([]);

  return (
    <React.Fragment>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/product">
        <Products />
      </Route>
      <Route path="/addProduct">
        <AddProduct />
      </Route>
    </React.Fragment>
  );
};

export default App;
