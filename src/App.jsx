import React, {useState, useEffect, useContext} from 'react';
import './App.css';
import LoginForm from './components/LoginForm.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ForgotPassword from "./components/ForgotPassword.jsx";
import Registration from "./components/Registration.jsx";
import {AuthContext, AuthProvider} from './authentication/AuthContext.jsx';
import Header from "./components/Header.jsx";
import DashBoard from "./components/DashBoard.jsx";
import BlogPostDetail from "./components/blog/BlogPostDetail.jsx";
import axios from "axios";
import QrCodeDisplay from "./authentication/QrCodeDisplay.jsx";
import OTPInput from "./components/otp/OTPInput.jsx";

function App() {
    const [blogs, setBlogs] = useState([]); // State to store blogs data
    const [loading, setLoading] = useState(true); // State to handle loading status
    const [error, setError] = useState(null); // State to handle errors
    const {authData} = useContext(AuthContext);
    useEffect(() => {
        // Fetch blogs data from the API
        axios.get('http://localhost:8080/api/v1.0/blogsite/blogs/getall')
            .then(response => {
                console.log(response.data);
                setBlogs(response.data); // Update state with fetched data
                // setLoading(false);
            })
            .catch(error => {
                setError('Failed to fetch blogs');
                //setLoading(false);
            });
    }, []);
    // const [blogs, setBlogs] = useState([]);
    //
    // useEffect(() => {
    //     axios.get('http://localhost:8080/api/v1.0/blogsite/blogs/getall')
    //         .then(response => {
    //             setBlogs(response.data);
    //         })
    //         .catch(error => {
    //             console.error('There was an error fetching the data!', error);
    //         });
    // }, []); // Empty dependency array ensures this runs only once on mount
    const handleOTPChange = (otp) => {
        console.log('Entered OTP:', otp);
    };
    return (
        <AuthProvider>
        <div className="App">
                <Router>
                    <Routes>
                        <Route path="/header" element={<Header />} />
                        <Route path="/register" element={<Registration />} />
                        <Route path="/qrcodeAuth" element={<QrCodeDisplay />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/dashboard/*" element={<DashBoard />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/blog/:id" element={<BlogPostDetail blogs={blogs} />} />
                        <Route path="/blog/:id" element={<BlogPostDetail blogs={blogs} />} />
                        <Route path="/blog/:id" element={<BlogPostDetail />} />
                        <Route path="/otp" element={ <OTPInput length={6} onChange={handleOTPChange} uemail={authData.email} type={"exist"} />} />

                    </Routes>
                </Router>
        </div>
        </AuthProvider>
    );
}

export default App;
