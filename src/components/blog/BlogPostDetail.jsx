import React, {useState}from 'react';
import { useParams } from 'react-router-dom';

const BlogPostDetail = ({ blogs }) => {
    const { id } = useParams();
    // eslint-disable-next-line react/prop-types
    console.log(blogs.blogname);

    const [searchTerm, setSearchTerm] = useState(id);

    // Filter the blogs based on the search term
    // eslint-disable-next-line react/prop-types
    const filteredBlogs = blogs.filter(blog =>
        blog.id===searchTerm.toLowerCase()

    );
    console.log(filteredBlogs.blogname);

    // eslint-disable-next-line react/prop-types
    // blogs.map.find(p =>p.find(p => p.id === parseInt(id)));
    // const post =

    if (!filteredBlogs) {
        return <h2>Post not found</h2>;
    }

    return (
        <div className="container">
            <div className="section">
                <h2>{filteredBlogs.blogname}</h2>
                <p>{filteredBlogs.article}</p>
            </div>
        </div>
    );
};

export default BlogPostDetail;
