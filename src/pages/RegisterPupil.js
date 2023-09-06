import Axios from "axios";
import React from "react";
import { useState } from "react";


export default function RegisterPupil() {

    const [username, setUsername] = useState('');    
    const [password, setPassword] = useState('');    

    const registerPupil = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3001/api/pupil/register' ,{
            username: username,
            password: password,
            trainer: localStorage.getItem('username')
        }).then((response) => {
            console.log("response", response);
        }).catch((error) => {
            console.log("response", error);
        });
    }

    return(
        <>
            <h1>
                Register Pupil
            </h1>

            <form>
                <labe>Pupil Username</labe>
                <input id="username" onChange={(event) => { setUsername(event.target.value)}} />
                <labe>Pupil Password</labe>
                <input id="password" onChange={(event) => { setPassword(event.target.value)}}/>

                <button onClick={registerPupil}>Register Pupil</button>
            </form>
        </>
    );
}