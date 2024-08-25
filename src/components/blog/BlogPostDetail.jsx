import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const BlogPostDetail = ({ blogs }) => {
    const { id } = useParams();
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        // Fetch blogs data from the API
        axios.get(`http://localhost:8080/api/v1.0/blogsite/blogs/${id}`)
            .then(response => {
                console.log(response.data);
                setBlog(response.data); // Update state with fetched data
                // setLoading(false);
            })
            .catch(error => {
               // setError('Failed to fetch blogs');
                //setLoading(false);
            });
    }, []);

    if (!blog) {
        return <h2>Post not found</h2>;
    }

    return (
        <div className="container">
            <div className="section">
                <h2>{blog.blogname}</h2>
                <p>{blog.article}</p>
            </div>
        </div>
    );
};

export default BlogPostDetail;
