import React from 'react';

import '../../Styles/Button.scss';

const Button = (props) => {

    const mode = props.mode;
    const style = `button-container ${mode}`;

    return (
        <div className={style}>
            <button onClick={props.onClick}>{props.buttonName}</button>
        </div>
    )
}

export default Button;