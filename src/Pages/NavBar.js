import React from 'react';
import { NavLink } from 'react-router-dom';

import '../Styles/NavBar.scss';

const NavBar = () => {
    return (
        <div className="navBar-wrapper">
            <div className="navBar-header">
                <h1>Stephen Edwards</h1>
                <h2>React Portfolio</h2>
                <h4>[React, SCSS]</h4>
            </div>
            <div className="navBar-navigation">
                <div className="navBar-container">
                    <h1>Mockups</h1>
                    <div className="navBar-links">
                        <div><NavLink className="navBar-link" id="ig" to="/instagram">Instagram</NavLink></div>
                        <NavLink className="navBar-link" id="nf" to="/netflix">Netflix</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;