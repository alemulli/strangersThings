import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const BASE_URl = "https://strangers-things.herokuapp.com"
const COHORT = "2209-FTB-ET-WEB-FT"

const Posts = (props) => {
    const getPosts = props.getPosts
    const posts = props.posts
    const currentUser= props.currentUser
    const searchInput = props.searchInput
    const setSearchInput = props.setSearchInput
    const setFilteredPost = props.setFilteredPost
    const filteredPost = props.filteredPost
    const setGetPosts = props.setGetPosts
    


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
      <div className="Content-box">
          <SearchBar getPosts={getPosts} searchInput={searchInput} setSearchInput={setSearchInput} setFilteredPost={setFilteredPost}/>
        <div id="posts">
            {posts.length ?  posts.map((post, index) => {
                return(post.isAuthor ? 
                <div className='onePost' key={`post-${index}`}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p><b>Price: </b>{post.price}</p>
                    {post.author ?
                    <p><b>Seller:</b> {post.author.username}</p>: null}
                    <p><b>Location:</b> {post.location}</p>
                    <button className="deleteButton" onClick={() => handleDelete(post._id)}>Delete Post</button>
                </div> :
                 <div className='onePost' key={`post-${index}`}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p><b>Price:</b> {post.price}</p>
                    {post.author && post.author.username ?
                    <p><b>Seller:</b> {post.author.username}</p>: null}
                    <p><b>Location:</b> {post.location}</p>
                    {props.isLoggedIn ? 
                    <NavLink to ="/sendMessage"><button className="messageButton" onClick={() => {props.setSinglePost(post._id)}}>Message the Seller</button></NavLink> 
                    : <></>}
                    
                </div>)
            })
       : <div> Loading the Posts</div> } </div>
       </div>
    );
};

export default Posts;
