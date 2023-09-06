import React, { useEffect, useState } from "react";
import Axios from 'axios';
import '../css/Login.css';
import { useNavigate } from "react-router-dom";

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
        <div>
            <h1>
                Login
            </h1>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" onChange={(event) => { setUsername(event.target.value); }}/>
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password" onChange={(event) => { setPassword(event.target.value); }}/>
                <button type="submit" onClick={login}>LOGIN</button>
            </form>

          

        </div>
    );
}