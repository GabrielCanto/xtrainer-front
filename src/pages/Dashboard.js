import React, {useState, useEffect} from "react";
import Axios from "axios";

export default function Dashboard() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/users', { headers: { authorization: localStorage.getItem('token') }}).then((response) => {
            setUsers(response);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    

    return(
        <div>
            <h1>Dashboard</h1>

              {
                users && users.data ? (users.data.result.map((user) => {
                    return <div key={user.id}>{user.username}</div> 
                })) : <div>Loading...</div>
            }
        </div>

    );
}