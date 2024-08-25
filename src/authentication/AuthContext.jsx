// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create the context
export const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// Create a provider component
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState({
        email: localStorage.getItem('email') || '',
        token: localStorage.getItem('accessToken') || '',
        username: localStorage.getItem('username') || '',
        userId: localStorage.getItem('userId') || '',
    });

    const [authState, setAuthState] = useState(() => {
        const savedAuthState = localStorage.getItem('authState');
        return savedAuthState ? JSON.parse(savedAuthState) : { username: '', token: '', roles: [] };
    });



    useEffect(() => {
        localStorage.setItem('authState', JSON.stringify(authState));
    }, [authState]);

    const login = (username, token, roles) => {
        setAuthState({ username, token, roles });
    };

    const logout = () => {
        setAuthState({ username: '', token: '', roles: [] });
        localStorage.removeItem('authState');
    };

    const updateAuthData = (accessToken, email, id, roles, tokenType, username) => {
        const newAuthData = { accessToken, email, id, roles, tokenType, username };
        setAuthData(newAuthData);

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('email', email);
        localStorage.setItem('username', username);
        localStorage.setItem('userId', id);
        localStorage.setItem('roles', JSON.stringify(roles));
        localStorage.setItem('tokenType', tokenType);
    };

    return (
        <AuthContext.Provider value={{ authData, updateAuthData, authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
