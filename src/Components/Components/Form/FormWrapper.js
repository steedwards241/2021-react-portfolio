import React from 'react';

import '../../../Styles/Components.scss';

const FormWrapper = (props) => {
    return (
        <div className="form-wrapper">
            <div className="form-container">
                <h1>{props.title}</h1>
                {props.children}
            </div>
        </div>
    )
}

export default FormWrapper;