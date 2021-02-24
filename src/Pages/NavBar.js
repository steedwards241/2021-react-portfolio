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
            <div className="navBar-info">
                <h2>Welcome to my React Portfolio</h2>
                <p>All my 2021 projects will be hosted here.</p>
                <p>Source code and updates can be found at: <a href="https://github.com/steedwards241/2021-react-portfolio">https://github.com/steedwards241/2021-react-portfolio</a></p>
                <p>To return to this navigation page when visiting a mockup, click the corresponding logo e.g. the Instagram/Netflix logo</p>
            </div>
        </div>
    )
}

export default NavBar;