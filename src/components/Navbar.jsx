import React from "react";
import { NavLink,redirect } from 'react-router-dom';
import { isLoggedIn } from "../api";

// import  {
//   storeCurrentUser,
//   clearCurrentUser
// } from '../auth';

const Navbar = (props) => {



  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //   }  

  function logout(event) {
  console.log("logged out!")
  localStorage.removeItem("token")
  props.setIsLoggedIn(false)
 
}


  return (
    <div id="navbar">
        <h2>Stranger's Things</h2>
        {props.isLoggedIn ? <> 
        <NavLink to ="/posts"><button>Posts</button></NavLink>
        <button onClick={logout}>Logout</button>
        </> : 
         <>
         <NavLink to ="/register"><button>Sign Up</button></NavLink>
         <NavLink to ="/login"><button>Login</button></NavLink>
         <NavLink to ="/posts"><button>Posts</button></NavLink>

         </>
        }
       
        

  </div>
  );
};

export default Navbar;