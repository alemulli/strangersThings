import React from 'react';
import { LogIn, currentUserInfo } from '../api';
import { useNavigate } from 'react-router-dom';

const Login = (props) =>{
 const navigate = useNavigate()

  async function handleSubmit(event){
    event.preventDefault()
    const username = event.target[0].value
    const password = event.target[1].value
    const loggedIn = await LogIn(username,password)
    const token = await loggedIn.token
    localStorage.removeItem('token')
    localStorage.setItem('token',token)
    props.setIsLoggedIn(token)
    
    const currentUserData = await currentUserInfo(token)
    await props.setCurrentUser(currentUserData)


    navigate("/userHomePage")
}

return ( 
<div className="submissionFormContainer">
    <form className="submissionForm" onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <span>
        <label htmlFor="username">Username: </label>
        <input id="username" type='text' required />
        </span>
        <span>
        <label htmlFor="password">Password: </label>
        <input id="password" type='password' required />
        </span>
        <button className="submitButton" type="submit"> Submit </button>
    </form>
</div>
)}

export default Login