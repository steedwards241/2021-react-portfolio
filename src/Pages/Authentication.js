import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '../Components/Login/Card';
import TextField from '../Components/Login/TextField';
import Button from '../Components/Login/Button';

import '../Styles/Authentication.scss';

const Authentication = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }

    const mode = props.mode;
    const style = `form-container ${mode}`;

    return (
        <div className={style}>
            <Card darkMode={props.mode}>
                <h1>Login</h1>
                <TextField type="text" label="Username" value={username} onChange={usernameHandler} darkMode={props.darkMode}/>
                <TextField type="password" label="Password" value={password} onChange={passwordHandler} darkMode={props.darkMode}/>
                <Link to="/home"><Button buttonName="Login" mode={props.mode}/></Link>
            </Card>
        </div>
    )
}

export default Authentication;