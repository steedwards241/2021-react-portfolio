import React from 'react';

import '../../../Styles/Components.scss';

const FormButton = (props) => {
    return (
        <div className="form-button">
            <button onClick={props.onClick}>{props.text}</button>
        </div>
    )
}

export default FormButton;