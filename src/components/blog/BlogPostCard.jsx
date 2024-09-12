import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const BlogPostCard = ({ post }) => {
    return (
        <div className="col s12 m6">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{post.category}</span>
                    <p>{post.article}</p>
                </div>
                <div className="card-action">
                <IconButton  color="primary">
                        <EditIcon />
                    </IconButton>
                    <IconButton   color="secondary">
                        <DeleteIcon />
                    </IconButton>
                    <Link to={`/blog/${post.id}`} className="btn-sm btn-primary">Read More.......</Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPostCard;
