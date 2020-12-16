import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <React.Fragment>
            <div>
                <nav>
                   <ul>
                      <Link to="/"><li>ProductApp</li></Link>
                      <Link to="/product"><li>Product</li></Link>
                      <Link to="/addProduct"><li>AddProduct</li></Link>
                   </ul>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default Nav;