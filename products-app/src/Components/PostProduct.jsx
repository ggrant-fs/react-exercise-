import React from 'react';
import { Link } from 'react-router-dom'

const PostProduct = (props) => {
    console.log(props.data)
    const data = props.data.map((item) => {
        return (
            <React.Fragment>
                <div id="photoContainer" key={item._id}>
                    <Link to={`/product/${item._id}`}><img id="pictures" alt="" src={item.imgURL} /> </Link>
                    <div id="pictures-name">{item.name}</div>
                    <div id="pictures-price">${item.price}</div>
                </div>
            </React.Fragment>
        )
    })
    console.log(data)

    return (
        <div id="container2">
            {data}
        </div>
    );
};

export default PostProduct;