import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const axios = require('axios');
const { serverLoc } = require('../constants');

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(event) {
        event.preventDefault();
        axios.post(`${serverLoc}/login`, {email: email, password: password})
        .then(res => {
            console.log(res);
            localStorage.setItem('jwt', res.data.token);
            props.toggleLogin()
        })
        .catch(err => {
            console.error(err.response);
        })
    }

    return (
        <form id="login-form" onSubmit={handleLogin}>
            <fieldset id="login-form-fieldset">
                <legend>Login to your account.</legend>
                <label htmlFor="email">Username</label>
                <input required type="text" id="login-form-email" name="email" autoComplete="current-email"
                onChange={(e) => setEmail(e.target.value)}></input>
                <label htmlFor="password">Password</label>
                <input required type="password" id="login-form-password" name="password" autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}></input>
                <Button type="submit">Login</Button>
            </fieldset>
        </form>
    )
}

export default Login;