import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import '../../Styles/Netflix.scss';

const NavBar = () => {

    const [scroll, setScroll] = useState(0);
    const [navClass, setNavClass] = useState("netflix-navBar-container");

    let scrollVal = 70;

    const scrollHandler = () => {
        setScroll(window.pageYOffset);
        if(scroll >= scrollVal){
            setNavClass("netflix-navBar-container__scroll");
        } else if(scroll < scrollVal) {
            setNavClass("netflix-navBar-container");
        }
    }

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener("scroll", scrollHandler);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    })

    return (
        <div className={navClass}>
            <div className="netflix-navBar-left">
                <a href="https://reactportfoliostephenedwards.web.app/" id="nav-link"><img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix"></img></a>
                <NavLink className="netflix-navBar-link" activeClassName="netflix-navBar-active" to="/netflix" exact>Home</NavLink>
                <NavLink className="netflix-navBar-link" activeClassName="netflix-navBar-active" to="/netflix/series">Series</NavLink>
                <NavLink className="netflix-navBar-link" activeClassName="netflix-navBar-active" to="/netflix/films">Films</NavLink>
                <NavLink className="netflix-navBar-link" activeClassName="netflix-navBar-active" to="/netflix/popular">New & Popular</NavLink>
                <NavLink className="netflix-navBar-link" activeClassName="netflix-navBar-active" to="/netflix/mylist">My List</NavLink>
            </div>
            <div className="netflix-navBar-right">
                <img src="https://pbs.twimg.com/media/Euga8MPWYAEcCV5?format=png&name=240x240" alt=""></img>
                <p>CHILDREN</p>
                <img src="https://pbs.twimg.com/media/Euga8MTWgAElKPE?format=png&name=240x240" alt=""></img>
                <img src="https://pbs.twimg.com/media/Euga8MUWQAAHDK5?format=png&name=medium" alt=""></img>
                <div className="netflix-navBar-profile">
                    <img src="https://i.imgur.com/fXJosY6.jpg" alt="" id="profile_image"></img>
                    <img src="https://pbs.twimg.com/media/EugbcUUXIAI9cCb?format=png&name=240x240" alt="" id="profile_arrow"></img>
                </div>
            </div>
        </div>
    )
}

export default NavBar;