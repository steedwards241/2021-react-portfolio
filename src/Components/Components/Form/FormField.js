import React from 'react';

import '../../../Styles/Components.scss';

const FormField = (props) => {
    return (
        <div className="form-field">
            <label>{props.label}</label>
            <textarea rows="1" placeholder={props.placeholder}></textarea>
        </div>
    )
}

export default FormField;