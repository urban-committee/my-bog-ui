// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();

    const handleBackToLogin = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <h4 className="center">Forgot Password</h4>
            <div className="row">
                <form className="col s12">
                    <div className="row input-field">
                        <input id="email" type="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light" type="submit">Reset Password</button>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light red lighten-1" type="button"
                                onClick={handleBackToLogin}>
                            Back to Login
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
