import React from 'react';

import '../../Styles/TextField.scss';

const TextField = (props) => {

    const mode = props.mode;
    const style = `textField-container ${mode}`;

    const placeholder = `Enter ${props.label} here!`;

    return (
        <div className={style}>
            <label>{props.label}</label>
            <input 
                type={props.type}
                placeholder={placeholder}
                value={props.value}
                onChange={props.onChange}
            ></input>
        </div>
    )
}

export default TextField;