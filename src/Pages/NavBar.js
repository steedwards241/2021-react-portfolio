import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/NavBar.scss';

const NavBar = () => {

    const style= {
        listStyleType: "none" 
    }

    return (
        <div className="navbar-container">
            <ul>
                <Link to="/instagram"><li style={style}>Instagram Mockup</li></Link>
                <Link to="/netflix"><li style={style}>Netflix Mockup</li></Link>
                <Link to="/login"><li style={style}>Login</li></Link>
            </ul>
        </div>
    )
}

export default NavBar;