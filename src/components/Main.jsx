import React, { useState, useEffect } from "react";
import { Navbar, Register, Posts, Login, NewPost, SendMessage } from './'
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
      const data = await fetchPosts();
      setGetPosts(data);
    }
    fetchData();
  }, [getPosts]);
  


  return (
    <Router>
      <div id="main">
        <Navbar setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn}/>
          <>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/newPost" element={<NewPost setGetPosts={setGetPosts}/>} />
            <Route path="/Posts" element={<Posts currentUser={currentUser} getPosts={ getPosts } setGetPosts={setGetPosts} />} />
            <Route exact path='/' element={<Posts currentUser={currentUser} getPosts={ getPosts } setGetPosts={setGetPosts} />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
            <Route path="/sendMessage" element = {<SendMessage />} />
          </Routes>
          </>
      </div>
    </Router>
  );
};

export default Main;
