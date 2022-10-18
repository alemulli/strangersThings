import React, { useState, useEffect } from "react";
import { Navbar } from './'
import { fetchPosts, Posts } from './'

const Main = () => {
  const [getPosts, setGetPosts] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      const data = await fetchPosts();
      setGetPosts(data);
    }
    fetchData();
  }, []);
  
  console.log(getPosts)


  return (
    <div id="main">
      <Navbar />
      <Posts getPosts={ getPosts } setGetPosts={ setGetPosts } />
    </div>
  );
};

export default Main;
