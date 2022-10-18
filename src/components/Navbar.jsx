import React from "react";
import { NavLink } from 'react-router-dom';

// import  {
//   storeCurrentUser,
//   clearCurrentUser
// } from '../auth';

const Navbar = (
  {currentUser,
  setCurrentUser}) => {

    const handleSubmit = (event) => {
      event.preventDefault();
    }  

  


  return (
    <div id="navbar">
        <h2>Stranger's Things</h2>
        <NavLink to ="/register"><button>Sign Up</button></NavLink>
        <NavLink to ="/login"><button>Login</button></NavLink>
        <NavLink to ="/posts"><button>Posts</button></NavLink>

  </div>
  );
};

export default Navbar;