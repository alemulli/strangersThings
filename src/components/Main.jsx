import React, { useState, useEffect } from "react";
import { Navbar, Register, Posts, Login, NewPost, SendMessage, UserHomePage} from './'
import { 
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { fetchPosts, currentUserInfo } from "../api";

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [getPosts, setGetPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(false)
  const [singlePost,setSinglePost] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [filteredPost,setFilteredPost] = useState([])

  async function getCurrentUser () {
    if (isLoggedIn){
      const currentUserData = await currentUserInfo(isLoggedIn)
      setCurrentUser(currentUserData)
    }
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('token')
    if (loggedInUser) {
        setIsLoggedIn(loggedInUser)
        getCurrentUser()
    }
  },[isLoggedIn])
  
  useEffect(()=>{
    const fetchData = async () => {
      const data = await fetchPosts(localStorage.getItem('token'));
  
      setGetPosts(data);
    }
    fetchData();
  }, []);
  
  return (
    <Router>
      <div id="main">
        <Navbar setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn}/>
          <>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/newPost" element={<NewPost isLoggedIn={isLoggedIn} getPosts={getPosts}setGetPosts={setGetPosts}/>} />
            <Route path="/Posts" element={<Posts posts={filteredPost.length ? filteredPost: getPosts}isLoggedIn={isLoggedIn} setFilteredPost={setFilteredPost} getPosts={ getPosts } setGetPosts={setGetPosts} setSinglePost={setSinglePost} searchInput={searchInput} setSearchInput={setSearchInput}/>} />
            <Route exact path='/' element={<Posts posts={filteredPost.length ? filteredPost: getPosts}isLoggedIn={isLoggedIn} setFilteredPost={setFilteredPost} getPosts={ getPosts } setGetPosts={setGetPosts} setSinglePost={setSinglePost} searchInput={searchInput} setSearchInput={setSearchInput} />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser}/>} />
            <Route path="/sendMessage" element = {<SendMessage isLoggedIn={isLoggedIn} singlePost={singlePost}/>} />
            <Route path="/userHomePage" element = {<UserHomePage setGetPosts={setGetPosts} currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
          </Routes>
          </>
      </div>
    </Router>
  );
};

export default Main;
