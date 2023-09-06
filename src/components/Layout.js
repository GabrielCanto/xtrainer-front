import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import '../css/Layout.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


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
      <>
        <Navbar expand='lg' className="bg-dark">
          <Container className='justify-content-between'>
            <Navbar.Brand href="#" className="text-white">Xtrainer</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="justify-content-end">
                  {
                    auth ? 
                      <>
                            <Link to="/dashboard" className="nav-link color-black">Dashboard</Link>
                            <Link to="/register-pupil" className="nav-link">Register Pupil</Link>
                            <button className="nav-link logout" onClick={Logout}>Logout</button>
                      </>
                     
                    
                    
                    : 
                    <>
                          <Link to="/login"  className="nav-link">Login</Link>
                          <Link to="/register"  className="nav-link">Register</Link>
                    </>
                  }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        <Outlet />
      </>
    );
  }