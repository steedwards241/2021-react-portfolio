import React from 'react';

import './TextField.css';

const TextField = (props) => {

    const placeholder = `Enter ${props.label} here!`;

    return (
        <div className="textField-container">
            <label>{props.label}</label>
            <input type="text" placeholder={placeholder}></input>
        </div>
    )
}

export default TextField;