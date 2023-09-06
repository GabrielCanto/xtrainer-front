import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import '../css/Layout.css';


export default function Layout() {
    let auth = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    const navigate = useNavigate();
    
    function Logout(e){
      e.preventDefault();
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      navigate('/login');
    }


    return (
      <div>
          <header className="header-container">
            <nav>
              <ul className="nav-list">
                  

                  {
                    auth ? 
                      <>
                       <p>
                          Hello, {username}
                        </p>
                        <div className="nav-holder">
                          <li>
                            <Link to="/dashboard" className="nav-link">Dashboard</Link>
                          </li>
                          <li>
                            <Link to="/register-pupil" className="nav-link">Register Pupil</Link>
                          </li>
                          <li>
                            <button className="nav-link logout" onClick={Logout}>Logout</button>
                          </li>
                        </div>

                      </>
                     
                    
                    
                    : 
                    <>
                      <div className="nav-holder">
                        <li>
                          <Link to="/login"  className="nav-link">Login</Link>
                        </li>
                        <li>
                          <Link to="/register"  className="nav-link">Register</Link>
                        </li>
                      </div>
                    </>
                     
                    
                  }

                  
              </ul>
            </nav>
        </header>
        
        <Outlet />
  
      </div>
    );
  }