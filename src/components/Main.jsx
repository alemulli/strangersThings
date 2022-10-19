import React, { useState, useEffect } from "react";
import { Navbar, Register, Posts, Login, NewPost } from './'
import { 
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { fetchPosts } from "../api";

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [getPosts, setGetPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('token')
    if (loggedInUser) {
        setIsLoggedIn(loggedInUser)
    }
  })
  
  useEffect(()=>{
    const fetchData = async () => {
      const data = await fetchPosts();
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
            <Route path="/newPost" element={<NewPost />} />
            <Route path="/Posts" element={<Posts currentUser={currentUser} getPosts={ getPosts } />} />
            <Route exact path='/' element={<Posts getPosts={ getPosts }  />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          </Routes>
          </>
      </div>
    </Router>
  );
};

export default Main;
