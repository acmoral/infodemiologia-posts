//miniature of post it has an image, title, date, and a button to read more
//src/components/MiniPost.js
import React from 'react';
import { Link } from 'react-router-dom';

function MiniPost({ post }) {
    return (
        <div className="bg-white shadow-md rounded-md p-4">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover object-center rounded-md" />
            <h2 className="text-lg font-semibold mt-4">{post.title}</h2>
            <p className="text-gray-500 text-sm">{post.date}</p>
            <p className="mt-4">{post.excerpt}</p>
            <Link to={`/post/${post.id}`} className="block mt-4 text-blue-600 hover:underline">Read More</Link>
        </div>
    );
}