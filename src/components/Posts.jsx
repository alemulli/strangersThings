import React from "react";
import { deletePost } from "../api";

const BASE_URl = "https://strangers-things.herokuapp.com"
const COHORT = "2209-FTB-ET-WEB-FT"

const Posts = (props) => {
    const getPosts = props.getPosts
    const currentUser= props.currentUser
 
    async function handleDelete(postIdDelete){
      const response = await fetch(`${BASE_URl}/api/${COHORT}/posts/${postIdDelete}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data =  await response.json();
    if (data){
      const filteredPosts = getPosts.filter(post => post._id !== postIdDelete);
      props.setGetPosts(filteredPosts)
    }

    }
    
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
                    <button onClick={() => handleDelete(post._id)}>Delete Post</button>
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
