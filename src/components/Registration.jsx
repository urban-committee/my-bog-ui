// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {initializeMaterialize} from "../assets/materialize-init.jsx";

const Registration = () => {
    const navigate = useNavigate();

    // eslint-disable-next-line no-unused-vars
    const handleBackToLogin = () => {
        navigate('/');
    };
    useEffect(() => {
        initializeMaterialize(); // Initialize Materialize components
    }, []);

    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',

    });
    // State to hold error messages
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',

    });

    // Handle input change
    const handleChange = (e) => {
        const {id, value} = e.target;
        console.log(`Field: ${id}, Value: ${value}`);
        setFormValues({
            ...formValues,
            [id]: value,
        });
    };

    // Validate the form
    const validateForm = () => {
        let valid = true;
        let errors = {};

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formValues.email)) {
            errors.email = 'Email id should contain “@” and “.com”';
            valid = false;
        }

        // Password validation
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(formValues.password)) {
            errors.password = 'Password should be alphanumeric and at least 8 characters long';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:8080/api/v1.0/blogsite/user/register', formValues);
                console.log('Form submitted successfully:', response.data);
                setSuccessMessage(response.data.message)
            } catch (error) {
                setErrorMessage(error.response.data.message);
                if (error.response) {
                    console.log(error.response.data.message);
                    setErrors({
                        ...errors,
                        api: error.response.data.message || 'An error occurred while submitting the form.',
                    });
                } else if (error.request) {
                    setErrors({
                        ...errors,
                        api: 'No response received from the server.',
                    });
                } else {
                    setErrors({
                        ...errors,
                        api: 'An unexpected error occurred.',
                    });
                }
            }
        }
    };


    return (
        <div className="row">

            <div className="row ">
                <div className="col s12 center-align">
                    <h2>Registration for Blogging</h2>
                </div>

            </div>
            <div className="col"></div>
            <div className="col">
                {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}
                {successMessage && (
                    <div className="alert alert-success" role="alert">
                        {successMessage}
                    </div>
                )}
                <div className="row">
                    <form className="col s12 reg-form" onSubmit={handleSubmit}>
                        <div className=" row input-field">
                            <input id="username" type="text" className="validate" value={formValues.username}
                                   onChange={handleChange}/>
                            <label htmlFor="name">User Name</label>
                        </div>
                        <div className="row input-field">
                            <input id="email" type="email" className="validate" value={formValues.email}
                                   onChange={handleChange}/>
                            <label htmlFor="email">Email</label>
                            {errors.email && <span className="helper-text red-text">{errors.email}</span>}
                        </div>
                        <div className="row input-field">
                            <input id="password" type="password" className="validate" value={formValues.password}
                                   onChange={handleChange}/>
                            <label htmlFor="password">Create Password</label>
                            {errors.password && <span className="helper-text red-text">{errors.password}</span>}
                        </div>
                        <div className="row">
                            <div className="switch">
                                <label style={{paddingRight:80}}>Two-factor authentication (2FA)</label>
                                <label>
                                    Enable
                                    <input type="checkbox"/>
                                    <span className="lever"></span>
                                    Disable
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn m- waves-effect waves-light" type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col"></div>
        </div>

    );
};

export default Registration;
