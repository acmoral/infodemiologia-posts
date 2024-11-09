// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MiniPostContainer from '../components/MiniPostContainer';
function Home() {
  // Sample blog posts data
  const posts = [
    { id: 1, title: 'First Post', excerpt: 'This is my first post.' , date: '2021-09-01', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Second Post', excerpt: 'This is my second post.', date: '2021-09-02', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Third Post', excerpt: 'This is my third post.', date: '2021-09-03', image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Fourth Post', excerpt: 'This is my fourth post.', date: '2021-09-04', image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Fifth Post', excerpt: 'This is my fifth post.', date: '2021-09-05', image: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Sixth Post', excerpt: 'This is my sixth post.', date: '2021-09-06', image: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Seventh Post', excerpt: 'This is my seventh post.', date: '2021-09-07', image: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Eighth Post', excerpt: 'This is my eighth post.', date: '2021-09-08', image: 'https://via.placeholder.com/150' },
    { id: 9, title: 'Ninth Post', excerpt: 'This is my ninth post.', date: '2021-09-09', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
        <Navbar />
        <MiniPostContainer posts={posts} />
        <Footer />
    </div>
  );
}

export default Home;
