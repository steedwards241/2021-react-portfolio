import React from 'react';

import Card from '../../Components/Card/Card';
import TextField from '../../Components/TextField/TextField';
import Button from '../../Components/Button/Button';

import './Form.scss';

const Form = () => {

    const buttonHandler = () => {
        console.log("Button Press!");
    }

    return (
        <div className="form-container">
            <Card>
                <h1>Form</h1>
                <TextField label="Username"/>
                <TextField label="Password"/>
                <Button buttonName="Login" onClick={buttonHandler}/>
            </Card>
        </div>
    )
}

export default Form;