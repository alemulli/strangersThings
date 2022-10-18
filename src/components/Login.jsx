import React from 'react';
import { LogIn } from '../api';
import { useNavigate } from 'react-router-dom';

const Login = (props) =>{
 const navigate = useNavigate()

  async function handleSubmit(event){
    event.preventDefault()
    const username = event.target[0].value
    const password = event.target[1].value
    const loggedIn = await LogIn(username,password)
    const token = loggedIn.token
    localStorage.removeItem('token')
    localStorage.setItem('token',token)
    props.setIsLoggedIn(token)
     console.log(props.isLoggedIn)

    navigate("./Posts",{replace:true})
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