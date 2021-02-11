import React from 'react';

import '../../Styles/Card.scss';

const Card = (props) => {

    const mode = props.mode;
    const style = `card-container ${mode}`;

    return (
        <div className={style}>
            <div>{props.children}</div>
        </div>
    )
}

export default Card;