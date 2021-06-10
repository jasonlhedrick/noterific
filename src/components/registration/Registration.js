import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

function Registration(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Container>
            <form id="registration-form">
                <fieldset id="registration-form-fieldset">
                    <legend>Create an account.</legend>
                    <label for="username">Username</label>
                    <input required type="text" id="registration-form-username" name="username" onChange={(e) => setUsername(e.target.value)}></input>
                    <label for="email">Email</label>
                    <input required type="email" id="registration-form-email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
                    <label for="password">Password</label>
                    <input required type="text" id="registration-form-password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                    <Button type="submit">Register</Button>
                </fieldset>
            </form>
            {/* TODO: Add oAuth 2.0 Registration */}
            <div id="oauth-reg-container">

            </div>
        </Container>
    )
}

export default Registration;