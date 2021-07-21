import React from 'react';
import { useState } from "react";
import App from '../App';
import BlogList from './BlogList';
import Blog from './Blog';

const uuid = require('uuid');


export default function BlogForm({ addBlogPost}) {
    
    const [blog, setBlog] = useState({
        id: "",
        post: "",
        completed: false,
    });

    function handleTaskInputChange(e) {
        setBlog({ ...blog, post: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        
        if (blog.post.trim()) {
            addBlogPost({ ...blog, id: uuid.v4()});
            setBlog({ ...blog, post:"" });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="post" type="text" value={blog.post} onChange={handleTaskInputChange} />
            <button type="submit">submit</button>
        </form>
    )
}