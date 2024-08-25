import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostCard = ({ post }) => {
    return (
        <div className="col s12 m6">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{post.category}</span>
                    <p>{post.article}</p>
                </div>
                <div className="card-action">
                    <Link to={`/blog/${post.id}`} className="btn btn-primary">More</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPostCard;
