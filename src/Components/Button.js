import React from 'react';

import '../Styles/Button.scss';

const Button = (props) => {
    return (
        <div className="button-container">
            <button onClick={props.onClick}>{props.buttonName}</button>
        </div>
    )
}

export default Button;