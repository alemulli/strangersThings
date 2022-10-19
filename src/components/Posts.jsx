import React from "react";

const Posts = (props) => {
    const getPosts = props.getPosts
 
    return (
        <div id="posts">
            {
            getPosts.map((post, index) => {
                return(post.isAuthor ? 
                <div className='onePost' key={`post-${index}`}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Price: {post.price}</p>
                    <p>Seller: {post.author.username}</p>
                    <p>Location: {post.location}</p>
                    {console.log(post, "to test if isAuthor is true")}
                </div> :
                 <div className='onePost' key={`post-${index}`}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Price: {post.price}</p>
                    <p>Seller: {post.author.username}</p>
                    <p>Location: {post.location}</p>
                   {console.log(post, "to test if isAuthor is true")}
                </div>)
            })
        } </div>
    );
};

export default Posts;
