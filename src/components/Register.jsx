import React from "react"
import {RegisterUser} from "../api"


const Register = (props) => {
   async function handleSubmit(event){
        event.preventDefault()
        const username = event.target[0].value
        const password = event.target[1].value
        const confirmedPassword = event.target[2].value
        if (password === confirmedPassword) {
            const registeredUser = await RegisterUser(username,password)
            const token = registeredUser.token
            localStorage.removeItem('token')
            localStorage.setItem('token',token)
        } else {
            alert("Passwords do not match!")
        }
    
    }

return ( 
    <div className="box">
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input id="username" type='text' required />
            <label htmlFor="password">Password: </label>
            <input id="password" type='password' required />
            <label htmlFor="Confirm password">Confirm Password: </label>
            <input id="Confirm password" type='password' required />
            <button type="submit"> Submit </button>
        </form>
    </div>
)


}

export default Register;