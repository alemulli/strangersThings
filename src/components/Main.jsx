import React, { useState, useEffect } from "react";
import { Navbar, Register, fetchPosts, Posts, Login } from './'
import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  redirect,
} from "react-router-dom";

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [getPosts, setGetPosts] = useState([])

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
        <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
          <>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/Posts" element={<Posts getPosts={ getPosts } setGetPosts={ setGetPosts } />} />
            <Route exact path='/' element={<Posts getPosts={ getPosts } setGetPosts={ setGetPosts } />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>} />
          </Routes>
          </>
      </div>
    </Router>
  );
};

export default Main;
