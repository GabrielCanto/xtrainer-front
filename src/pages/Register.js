import Axios from "axios";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Register() {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');


    function registerUser(e){
        e.preventDefault();

        Axios.post('http://localhost:3001/api/register', {username: usernameReg, password: passwordReg}).then(response => {
            console.log(response);
            alert(response.data.message);
            if(response.data.status == 'true'){
                window.location.href = "/dashboard";
            }
        }).catch(err => {
            console.log(err);
        });
    }


    return (
        <>
            <h1 className="mt-5">
                Register
            </h1>
            <Form>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="usernameReg">Choose Username</Form.Label>
                        <Form.Control
                            type="text"
                            id="usernameReg"
                            onChange={(event) => { setUsernameReg(event.target.value); }}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="passwordReg">Choose Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="passwordReg"
                            onChange={(event) => { setPasswordReg(event.target.value); }}
                        />
                        <Button variant="primary" onClick={registerUser}>Register</Button>
                    </Form.Group>
                
            </Form>
        </>
    )
   
}