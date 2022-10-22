import React from "react"
import {RegisterUser} from "../api"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()

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
        navigate("/login")
    }

    return ( 
        <div className="submissionFormContainer">
            <form className="submissionForm" onSubmit={handleSubmit}>
                <h3>Register an Account</h3>
                <span>
                <label htmlFor="username">Username: </label>
                <input id="username" type='text' required />
                </span>
                <span>
                <label htmlFor="password">Password: </label>
                <input id="password" type='password' required />
                </span>
                <span>
                <label htmlFor="Confirm password">Confirm Password: </label>
                <input id="Confirm password" type='password' required />
                </span>
                <button className="submitButton" type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default Register;