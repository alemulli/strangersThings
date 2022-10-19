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
    // let userName = props.currentUser.data.username
    // localStorage.setItem('username',`${userName}`)


    navigate("/Posts")
}

return ( 
<div className="box">
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input id="username" type='text' required />
        <label htmlFor="password">Password: </label>
        <input id="password" type='password' required />
        <button type="submit"> Submit </button>
    </form>
</div>
)}

export default Login