import React, { useState } from 'react';

import Card from '../Components/Card';
import TextField from '../Components/TextField';
import Button from '../Components/Button';

import '../Styles/Form.scss';

const Form = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const buttonHandler = () => {
        console.log(`Username: ${username}, Password: ${password}`);
    }

    const darkMode = props.darkMode;
    const style = `form-container ${darkMode}`;

    return (
        <div className={style}>
            <Card darkMode={props.darkMode}>
                <h1>Form</h1>
                <TextField label="Username" value={username} onChange={usernameHandler} darkMode={props.darkMode}/>
                <TextField label="Password" value={password} onChange={passwordHandler} darkMode={props.darkMode}/>
                <Button buttonName="Login" onClick={buttonHandler} darkMode={props.darkMode}/>
            </Card>
        </div>
    )
}

export default Form;