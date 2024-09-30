// // src/components/Post.js
// import React from 'react';
// // import './Post.css';


// const Post = ({ post }) => {
//   return (
//     <div className="post">
//       <div className="post-header">
//         <img src={post.profilePic} alt="Profile" className="profile-pic" />
//         <span className="username">{post.username}</span>
//       </div>
//       <div className="post-content">
//         <p>{post.content}</p>
//         {post.image && <img src={post.image} alt="Post" className="post-image" />}
//         {post.video && (
//           <video className="post-video" controls>
//             <source src={post.video} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         )}
//       </div>
//       <div className="post-interactions">
//         <button>👍 {post.likes} Likes</button>
//         <button>💬 {post.comments} Comments</button>
//         <button>🔗 Share</button>
//       </div>
//     </div>
//   );
// };

// export default Post;


import React from 'react';

const Post = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>; // Handle the loading state appropriately
  }

  return (
    <div className="post">
      <div className="post-header">
        <img
          src={post.profilePic || 'https://example.com/default_profile.jpg'}
          alt="Profile"
          className="profile-pic"
        />
        <span className="username">{post.username}</span>
      </div>
      <div className="post-content">
        <p>{post.content}</p>
        {post.image && <img src={post.image} alt="Post" className="post-image" />}
        {post.video && (
          <video className="post-video" controls>
            <source src={post.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="post-interactions">
        <button>👍 {post.likes} Likes</button>
        <button>💬 {post.comments} Comments</button>
        <button>🔗 Share</button>
      </div>
    </div>
  );
};

export default Post;
