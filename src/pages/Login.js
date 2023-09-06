import React, { useEffect, useState } from "react";
import Axios from 'axios';
import '../css/Login.css';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login() {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    function login(e){
        e.preventDefault();

        Axios.post('http://localhost:3001/api/login', {
            username: username,
            password: password
        }).then((res) => {
            if(res.data.code == "NAT"){
                alert(res.data.message);
            }

            if(res.data.code == 'NE'){
                alert(res.data.message);
            }

            if(res.data.result.length > 0){
                setMessage("Welcome, "+res.data.result[0].username);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('username', res.data.result[0].username);
                navigate('/dashboard');
            } 
            
        }).catch((error) =>{
            console.log("Error",error);
        });
    }

    return(
        <>

            <h1 className="mt-5">
                Login
            </h1>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="username">Username</Form.Label>
                    <Form.Control
                        type="text"
                        id="username"
                        onChange={(event) => { setUsername(event.target.value); }}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="password"
                        onChange={(event) => { setPassword(event.target.value); }}
                    />
                    <Button variant="primary" onClick={login}>Login</Button>
                </Form.Group>
                
            </Form>
            

          

        </>
    );
}