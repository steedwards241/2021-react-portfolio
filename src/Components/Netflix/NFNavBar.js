import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../Styles/Netflix.scss';

const NavBar = () => {
    return (
        <div className="netflix-navBar-container">
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"></img>
            <NavLink className="netflix-navBar-link" activeClassName="netflix-navBar-active" to="/netflix" exact>Home</NavLink>
            <NavLink className="netflix-navBar-link" activeClassName="netflix-navBar-active" to="/netflix/series">Series</NavLink>
            <NavLink className="netflix-navBar-link" activeClassName="netflix-navBar-active" to="/netflix/films">Films</NavLink>
            <NavLink className="netflix-navBar-link" activeClassName="netflix-navBar-active" to="/netflix/popular">Popular</NavLink>
            <NavLink className="netflix-navBar-link" activeClassName="netflix-navBar-active" to="/netflix/mylist">My List</NavLink>
        </div>
    )
}

export default NavBar;