import React from 'react';

import '../../Styles/Instagram.scss';

const IGStory = (props) => {
    return (
        <div className="story-container">
            <div className="story-image-container">
                <img src={props.image}/>
            </div>
            <h5>{props.user}</h5>
        </div>
    )
}

export default IGStory;