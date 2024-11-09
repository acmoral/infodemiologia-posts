// src/pages/Post.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();

  // For now, we'll just show the post ID.
  return (
    <div>
      <h2>Post {id}</h2>
      <p>This is the content of post {id}.</p>
    </div>
  );
}

export default Post;
