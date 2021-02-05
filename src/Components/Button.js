import React from 'react';

import '../Styles/Button.scss';

const Button = (props) => {

    const darkMode = props.darkMode;
    const style = `button-container ${darkMode}`;

    return (
        <div className={style}>
            <button onClick={props.onClick}>{props.buttonName}</button>
        </div>
    )
}

export default Button;