import React from 'react';
import axios from 'axios'
import Header from './Header'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [productDetail, setProductDetail] = useState([])
    const { id } = useParams()

    const productApi = async () => {
        const url = "https://products-api-01.herokuapp.com/api/products/" + id
        const productRequest = await axios.get(url)
        const productResponse = productRequest.data
        setProductDetail(productResponse)
    }
    useEffect(() => {
        productApi()
    }, [])
    return (
        <React.Fragment>
            <Header />
            <div id="deatil-container">
                <div>
                    <img id="detail-image" alt="" src={productDetail.imgURL} />
                </div>
                <div>
                    <div id="detail-title">{productDetail.name}</div>
                    <div id="detail-price">${productDetail.price}</div>
                    <div id="detail-description">{productDetail.description}</div>
                </div>
            </div>
        </React.Fragment>

    );
};

export default Detail;