import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassowrd] = useState('');

    return (
        <form id="login-form">
            <fieldset id="login-form-fieldset">
                <legend>Login to your account.</legend>
                <label for="username">Username</label>
                <input required type="text" id="login-form-username" name="username"></input>
                <label for="password">Password</label>
                <input required type="password" id="login-form-password" name="password"></input>
                <Button type="submit">Login</Button>
            </fieldset>
        </form>
    )
}

export default Login;