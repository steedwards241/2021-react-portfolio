import React from 'react';

import '../Styles/TextField.scss';

const TextField = (props) => {

    const placeholder = `Enter ${props.label} here!`;

    return (
        <div className="textField-container">
            <label>{props.label}</label>
            <input 
                type="text" 
                placeholder={placeholder}
                value={props.value}
                onChange={props.onChange}
            ></input>
        </div>
    )
}

export default TextField;