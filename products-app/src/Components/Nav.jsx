import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <React.Fragment>
            {/* need to do individual padding for eack li */}
            <div>
                <nav>
                    <ul>
                        <Link to="/"><li id="nav-link-one">ProductApp</li></Link>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default Nav;