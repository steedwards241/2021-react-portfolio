import React from 'react';

import '../Styles/NavBar.scss';

const NavBar = (props) => {

    const style= {
        listStyleType: "none" 
    }

    return (
        <div className="navbar-container">
            <ul>
                <li style={style}>{props.item1}</li>
                <li style={style}>{props.item2}</li>
                <li style={style}>{props.item3}</li>
                <li style={style}>{props.item4}</li>
            </ul>
        </div>
    )
}

export default NavBar;