import React from 'react';
import Header from './Header'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = (props) => {
    const { search, setSearch } = props
    const searchApi = async () => {
        const searchApi = "https://products-api-01.herokuapp.com/api/products"
        const searchRequest = await axios.get(searchApi)
        const searchResult = searchRequest.data
        // setSeach(searchResult)

    }
    useEffect(() => {
        //   searchApi()
    }, [])



    return (
        <div>
            <Header />
            <div id="search-div">

                <input
                    id="search-input"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(event) => { setSearch(event.target.value) }}
                />


            </div>
        </div>
    );
};

export default Home;