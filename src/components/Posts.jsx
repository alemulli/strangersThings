import React from "react";

const Posts = (props) => {
    const getPosts = props.getPosts
    const setGetPosts = props.setGetPosts

  return (
    <div id="posts">
        {getPosts.map((post, index) => {
            return (
                <div className='onePost' key={`post-${index}`}>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <p>Price: {post.price}</p>
                            <p>Seller: {post.author.username}</p>
                            <p> Location: {post.location}</p>
                </div>
            )
        })}

  </div>
  );
};

export default Posts;