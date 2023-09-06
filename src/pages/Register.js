import Axios from "axios";
import React, { useState } from "react";


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
        <div>
            <h1>
                Register
            </h1>

            <form>
                <label>Choose Username</label>
                <input type="text" name="usernameReg" onChange={(e) => {setUsernameReg(e.target.value);}}/>
                <label>Choose Password</label>
                <input type="text" name="passwordReg" onChange={(e) => {setPasswordReg(e.target.value)}}/>

                <button type="submit" onClick={registerUser}>Register</button>
            </form>
        </div>
    )
   
}