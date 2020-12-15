import "./App.css";
import React from "react";
import Home from "./Home";
import Products from "./Products";
import AddProduct from "./AddProduct";
import { Route } from "react-router-dom";

const App = () => {
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
