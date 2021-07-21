import React from 'react';
import Blog from './Blog';
import BlogForm from './BlogForm';
import App from '../App';

export default function BlogList({ blogs }) {
    return (
        <ul>
            {blogs.map(blog =>(
                <Blog key={blog.id} blog={blog} />
            ))}
        </ul>
    )
}