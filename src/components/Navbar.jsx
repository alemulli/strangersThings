import React from "react";
import { NavLink,useNavigate } from 'react-router-dom';


const Navbar = (props) => {

  const navigate = useNavigate()


  function logout() {

    localStorage.removeItem("token")
    props.setIsLoggedIn(false)
    props.setCurrentUser(false)
 
    navigate("/Posts")

}


  return (
    <div id="navbar">
        <h2>Stranger's Things</h2>
        {props.isLoggedIn ? <> 
        <NavLink to ="/userHomePage"><button>Home</button></NavLink>
        <NavLink to ="/newPost"><button>New Post</button></NavLink>
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