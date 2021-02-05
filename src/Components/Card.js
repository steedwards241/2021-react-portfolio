import React from 'react';

import '../Styles/Card.scss';

const Card = (props) => {

    const darkMode = props.darkMode;
    const style = `card-container ${darkMode}`;

    return (
        <div className={style}>
            <div>{props.children}</div>
        </div>
    )
}

export default Card;