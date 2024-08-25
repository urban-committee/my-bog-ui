// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Login from './components/pages/Login.jsx';
// import ForgotPassword from './components/ForgotPassword';
import Registration from './components/';
import PostBlog from "./components/PostBlog.jsx";
import {initializeMaterialize} from "./components/materialize-init.jsx";
import UserDashBoard from "./components/UserDashBoard.jsx";
import LayoutComponent from "./components/LayoutComponent.jsx";
import LoginForm from "./components/LoginForm.jsx";
import VerticalTabs from "./components/TabPanelProps.jsx";
import Header from "./components/Header.jsx";
import Dashboard from "./components/Dashboard.jsx";
import AdminDashboard from "./components/admin-page/AdminDashboard.jsx";
import DashboardContent from "./components/admin-page/DashboardContent.jsx";
import SettingsContent from "./components/admin-page/SettingsContent.jsx";
import Dashboard1 from "./components/admin-page/Dashboard1.jsx";
import {AuthProvider} from './components/admin-page/AuthContext.jsx';
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Unauthorized from "./components/Unauthorized.jsx";
import {Home} from "@mui/icons-material";
import BLogin from "./components/BLogin.jsx";
import Login from "./components/Login.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import Register from "./components/pages/Register.jsx";

const App = () => {
    useEffect(() => {
        initializeMaterialize(); // Initialize Materialize components
    }, []);
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/blog" element={<BLogin/>}/>
                    {/*<Route path="/bl" element={<Login />} />*/}
                    {/*<Route path="/br" element={<Registration />} />*/}
                    <Route path="/userdashboard/*" element={<Dashboard1 />} />
                    <Route path="/dashboard" element={<DashboardContent/>}/>
                    {/*<Route path="/settings" element={<SettingsContent />} />*/}
                    <Route path="/f" element={<DashboardContent/>}/>
                    <Route path="/a" element={<AdminDashboard/>}/>
                    <Route path="/nav" element={<VerticalTabs/>}/>
                    <Route path="/h" element={<Header/>}/>
                    <Route path="/b" element={<Dashboard/>}/>
                    {/* Protected route with role requirement */}
                    {/*<Route path="/userdashboard/*" element={<Dashboard1/>}/>*/}
                    <Route path="/log" element={<LoginForm/>}/>
                    <Route path="/layout" element={<LayoutComponent/>}/>
                    <Route path="/userdashboard1" element={<UserDashBoard/>}/>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/post" element={<PostBlog/>}/>
                    <Route path="/forgot-password" element={<ForgotPassword/>}/>
                    {/*<Route path="/unauthorized" element={<Unauthorized />} />*/}
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/h" element={<Header/>}/>
                    <Route path="/w" element={<h1 className="center">Welcome! <a href="/login">Login</a></h1>}/>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
