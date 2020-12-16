import "./App.css";
import React from "react";
import axios from "axios";
import Home from "./Components/Home";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import PostProduct from "./Components/PostProduct";

const App = () => {
  const [data, setData] = useState([]);
  const apiCall = async () => {
    const url = "https://products-api-01.herokuapp.com/api/products";
    const apiRequest = await axios.get(url);
    const apiResponse = apiRequest.data;
    setData(apiResponse);
    console.log(apiResponse);
  };
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <React.Fragment>
      <Route exact path="/">
        <Home />
        <PostProduct data={data} />
      </Route>
    </React.Fragment>
  );
};

export default App;
