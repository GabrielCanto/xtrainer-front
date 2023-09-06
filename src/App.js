import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";


import "./App.css"

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from './utils/ProtectedRoute';
import RegisterPupil from "./pages/RegisterPupil";

export default function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Layout />} exact>
              <Route element={<ProtectedRoute />}>
                <Route index element={<Home />} />
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="register-pupil" element={<RegisterPupil/>}/>
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
        </Routes>
        
    </div>
  );
};
