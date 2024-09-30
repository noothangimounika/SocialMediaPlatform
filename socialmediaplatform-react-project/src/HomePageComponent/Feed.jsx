// // src/components/Feed.js
// import React from 'react';
// import Post from './Post';
// import { posts } from '../data'; // Importing mock data

// const Feed = () => {
//   return (
//     <div className="feed">
//       {posts.map((post) => (
//         <Post key={post.id} post={post} />
//       ))}
//     </div>
//   );
// };

// export default Feed;


import React from 'react';
import Post from './Post';
import { posts } from '../data'; // Ensure this path is correct

const Feed = () => {
  return (
    <div className="feed">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
