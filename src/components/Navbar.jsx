import React from "react";
import Register from "./Register";

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
        <Register />
        <button> Sign Up </button>
        <button> Login </button>

  </div>
  );
};

export default Navbar;