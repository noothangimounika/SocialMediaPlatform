// import React, { useState } from 'react';

// import Post from './Post';
// import Feed from './Feed';
// import { posts } from '../data'; 
// import Header from './Header';
// import Footer from './Footer';



// const HomePage = () => {
//     const [posts, setPosts] = useState([]);
  
//     const addPost = (newPost) => {
//       setPosts([newPost, ...posts]);
//     };
//   return (
//     <div className='Container'>
//         <Header />
//         <Post />

//        <Feed />
//        <Footer />
//     </div>
//   )
// }

// export default HomePage


import React, { useState } from 'react';

import Post from './Post';
import Feed from './Feed';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className='Container'>
      <Header />
      <Post />
      <Feed />
      <Footer />
    </div>
  );
};

export default HomePage;
