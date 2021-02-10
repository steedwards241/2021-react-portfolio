import React from 'react';

import IGNavBar from '../Instagram/IGNavBar';
import IGSearchBar from '../Instagram/IGSearchBar';

const IGHeader = () => {
    return (
        <div className="header-container">
            <div className="header-logo-container">
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img>
            </div>
            <IGSearchBar />
            <IGNavBar />
        </div>
    )
}

export default IGHeader;