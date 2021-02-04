import React from 'react';

import Card from '../Components/Card';
import TextField from '../Components/TextField';
import Button from '../Components/Button';

import '../Styles/Form.scss';

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