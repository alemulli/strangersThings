import React from "react";

const Posts = (props) => {
    const getPosts = props.getPosts
    const currentUser= props.currentUser
 
    return (
        <div id="posts">
            {
            getPosts.map((post, index) => {
                return(currentUser && currentUser.data.username === post.author.username ? 
                <div className='onePost' key={`post-${index}`}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Price: {post.price}</p>
                    <p>Seller: {post.author.username}</p>
                    <p>Location: {post.location}</p>
                    <p>You are the seller of this listing!</p>
                </div> :
                 <div className='onePost' key={`post-${index}`}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Price: {post.price}</p>
                    <p>Seller: {post.author.username}</p>
                    <p>Location: {post.location}</p>
                </div>)
            })
        } </div>
    );
};

export default Posts;
