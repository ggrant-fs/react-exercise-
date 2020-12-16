import "./App.css";
import React from "react";
import Home from "./Components/Home";
import { Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const App = () => {
  // https://products-api-01.herokuapp.com/api/products
  const [data, setData] = useState([]);
  //api call below
  const apiCall = async () => {
    const url = " https://products-api-01.herokuapp.com/api/products";
    const apiRequest = await axios.get(url);
    console.log(apiRequest.data);
  };
  apiCall();
  return (
    <React.Fragment>
      <Route exact path="/">
        <Home />
      </Route>
    </React.Fragment>
  );
};

export default App;
