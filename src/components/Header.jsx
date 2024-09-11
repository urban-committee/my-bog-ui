import logo from "../assets/image/logo-no-background.png";
import logoside from "../assets/image/logo-sid.jpg";
import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
//import '../assets/css/login.css';
import axios from "axios";
import {AuthContext} from "../authentication/AuthContext";
//import {AuthContext} from "../authentication/AuthContext.jsx";

const Header = () => {

    const navigate = useNavigate();
    const {updateAuthData,login, logout} = useContext(AuthContext);
    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleForgotPassword = (path) => {
        navigate(path);
    }


    const handleRegistration = () => {
        navigate('/register');
    };


    const handleSubmit = async (e) => {


    };

    return (
        <>
            <div className="LoginForm">
                <div className="row" style={{paddingBottom: 110}}>
                    <nav className="nav-wrapper navbar navbar-expand-sm "
                         style={{position: 'fixed', paddtop: 0, left: 0, height: 60, width: '100%', zIndex: 1000}}>
                        <div className="container-fluid">
                            <a className="navbar-brand"><img src={logo} alt="Logo"
                                                             style={{height: 50, width: '120px'}}/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#mynavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="mynavbar">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" style={{fontSize: 18, color: "wheat"}}
                                           onClick={() => handleNavigation('blogs')}>Blogs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" style={{fontSize: 18, color: "wheat"}}
                                           onClick={() => handleNavigation('postblog')}>Post Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" style={{fontSize: 18, color: "wheat"}}
                                           onClick={() => handleNavigation('userList')}>View User</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" style={{fontSize: 18, color: "wheat"}}
                                           onClick={() => handleNavigation('myProfile')}>Profile</a>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <a className="navbar-brand" style={{fontSize: 18, color: "white"}}
                                       onClick={() => handleNavigation('/login')}>Logout</a>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>


        </>
    )
}
export default Header;