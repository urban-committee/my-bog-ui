import React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import PostBlog from "./PostBlog.jsx";
import Header from "./Header.jsx";
import {AuthContext} from "../authentication/AuthContext.jsx";
import UserTableView from "./UserTableView.jsx";
import BlogPostDetail from "./blog/BlogPostDetail.jsx";
import BlogPostList from "./blog/BlogPostList.jsx";

const DashBoard = () => {
    const navigate = useNavigate();
    const { authData } = useContext(AuthContext);
    const [blogs, setBlogs] = useState([]); // State to store blogs data
    const [loading, setLoading] = useState(true); // State to handle loading status
    const [error, setError] = useState(null); // State to handle errors

    const handleNavigation = (path) => {
        console.log(path);
        navigate(path);
    };

    useEffect(() => {
        // Fetch blogs data from the API
        axios.get('http://localhost:8080/api/v1.0/blogsite/blogs/getall', {headers: {
            Authorization: `Bearer ${authData.accessToken}`,
            'Content-Type': 'application/json'
          }
        })
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
    // const blogs = [];
    //
    // for (let i = 1; i <= 1000; i++) {
    //     blogs.push({
    //         id: i,
    //         title: `Blog ${i}`,
    //         summary: `This is the summary of blog ${i}.`,
    //         content: `Full content of blog ${i}.`
    //     });
    // }

    return (
        <div style={{display: 'flex'}}>
            <Header />
            {/* Main Content */}
            <main style={{flexGrow: 1, padding: '5px', marginLeft: '0px'}}>
                {/*<nav className="nav-wrapper" style={{width: '100%', zIndex: 1000}}>*/}
                {/*    <div className="nav-wrapper">*/}
                {/*        <a style={{marginLeft: '10px'}} href="#!" className="brand-logo">Blog Site</a>*/}
                {/*        <span style={{fontSize: 18, float: 'right', paddingRight: 25}}>*/}
                {/*            Logged in as: {authData.username}*/}
                {/*        </span>*/}
                {/*    </div>*/}
                {/*</nav>*/}
                <div className="containerkk">
                    <Routes>
                        <Route path="/blogs" element={<BlogPostList blogs={blogs} />} />
                        <Route path="blog/:id" element={<BlogPostDetail post={blogs} />} />
                        <Route path="postblog" element={<PostBlog />} />
                        <Route path="userList" element={<UserTableView />} />
                        <Route path="profile" element={<div>Logout</div>} />
                    </Routes>
                </div>
            </main>
        </div>
    );
};

export default DashBoard;
