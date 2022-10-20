import React from "react";
import { NavLink } from "react-router-dom";

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
            {getPosts.length ?   getPosts.map((post, index) => {
                return(post.isAuthor ? 
                <div className='onePost' key={`post-${index}`}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Price: {post.price}</p>
                    {post.author ?
                    <p>Seller: {post.author.username}</p>: null}
                    <p>Location: {post.location}</p>
                    <button onClick={() => handleDelete(post._id)}>Delete Post</button>
                </div> :
                 <div className='onePost' key={`post-${index}`}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Price: {post.price}</p>
                    {post.author && post.author.username ?
                    <p>Seller: {post.author.username}</p>: null}
                    <p>Location: {post.location}</p>
                    {props.isLoggedIn ? 
                    <NavLink to ="/sendMessage"><button onClick={() => {props.setSinglePost(post._id)}}>Message the Seller</button></NavLink> 
                    : <></>}
                    
                </div>)
            })
       : <div> Loading the Posts</div> } </div>
    );
};

export default Posts;
