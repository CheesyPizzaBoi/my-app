import React from 'react';
import BlogForm from './BlogForm';
import BlogList from './BlogList';
import App from '../App';

export default function Blog({blog}) {
    return (
        <div>
            <input type="checkbox"/>
            <li>{blog.post}</li>
        </div>
        
    )
}