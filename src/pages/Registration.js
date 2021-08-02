import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const axios = require('axios');
const { serverLoc } = require('../constants');


function Registration(props) {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const registrationButton = document.getElementsByClassName('registration-button');
    registrationButton.disabled = true;
    
    function registerAccount(e) {
        e.preventDefault();
        axios.post(`${serverLoc}/registration`, {email: email, password: password})
        .then(res => {
            localStorage.setItem('jwt', res.data.token);
            props.toggleLogin();
            return res;
        })
        .catch(err => {
            console.error(err.response);
            return err.response;
        });
    }

    return (
        <Container>
            <form id="registration-form" onSubmit={(e) => registerAccount(e)}>
                <fieldset id="registration-form-fieldset">
                    <legend>Create an account.</legend>
                    <label htmlFor="email">Email</label>
                    <input required type="email" id="registration-form-email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
                    <label htmlFor="password">Password</label>
                    <input required type="text" id="registration-form-password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                    <Button class="registration-button" type="submit">Register</Button>
                </fieldset>
            </form>
            {/* TODO: Add oAuth 2.0 Registration */}
            <div id="oauth-reg-container">

            </div>
        </Container>
    )
}

export default Registration;