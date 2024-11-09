import React from 'react';
import { Link } from 'react-router-dom';

function MiniPostContainer({posts}){

    return(
        <div className="pt-16">
    <div className="w-full p-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-* gap-3">
        {posts.map((post) => (
            <div key={post.id} className="col-span-1 row-span-1">
                <div className="aspect-square bg-white shadow-md rounded-md p-10">
                    <img src={post.image} alt={post.title} className="w-full h-64 object-cover object-center rounded-md" />
                    <h2 className="text-lg font-semibold mt-4">{post.title}</h2>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                    <p className="mt-4">{post.excerpt}</p>
                    <Link to={`/post/${post.id}`} className="block mt-4 text-blue-600 hover:underline">Read More</Link>
                </div>
            </div>
        ))}
     </div   >
     </div   >)
}
export default MiniPostContainer;