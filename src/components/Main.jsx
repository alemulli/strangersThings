import React, { useState, useEffect } from "react";
import { Navbar, Register, fetchPosts, Posts, Login } from './'
import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Redirect,
} from "react-router-dom";

const Main = () => {
  const [currentUser, setCurrentUser] = useState()
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
        <Navbar />
        {/* {currentUser ? ( */}
          <>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/Posts" element={<Posts getPosts={ getPosts } setGetPosts={ setGetPosts } />} />
            <Route exact path='/' element={<Posts getPosts={ getPosts } setGetPosts={ setGetPosts } />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          </>
      </div>
    </Router>
  );
};

export default Main;
