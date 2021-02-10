import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/NavBar.scss';

const NavBar = (props) => {

    const style= {
        listStyleType: "none" 
    }

    return (
        <div className="navbar-container">
            <ul>
                <Link to="/login"><li style={style}>{props.item1}</li></Link>
                <Link to="/instagram"><li style={style}>{props.item2}</li></Link>
                <Link to="/contact"><li style={style}>{props.item3}</li></Link>
                <Link to="/socials"><li style={style}>{props.item4}</li></Link>
            </ul>
        </div>
    )
}

export default NavBar;