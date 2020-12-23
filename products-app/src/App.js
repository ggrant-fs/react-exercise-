import "./App.css";
import React from "react";
import axios from "axios";
import Home from "./Components/Home";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import PostProduct from "./Components/PostProduct";
import Detail from "./Components/Detail";

const App = () => {
  const [data, setData] = useState([]);
  const [search,setSearch]= useState("")
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

  // const searchBar = search.filter((inputItem)=>{
  //   if(inputItem == ""){
  //     return inputItem
  //   }else if()
  // })

  const results = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <React.Fragment>
      <Route exact path="/">
        <Home search={search} setSearch={setSearch}/>
        <PostProduct data={results}/>
      </Route>
      <Route path="/product/:id">
        <Detail />
      </Route>
    </React.Fragment>
  );
};

export default App;
