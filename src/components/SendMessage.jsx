import React from "react"; 
import { useNavigate } from 'react-router-dom'; 
import { messagePost } from "../api";
import Posts from "./Posts";
const BASE_URl = "https://strangers-things.herokuapp.com"
const COHORT = "2209-FTB-ET-WEB-FT"

const SendMessage = (props) => {
	const navigate = useNavigate()
	const singlePost = props.singlePost
	console.log(singlePost)
	async function handleMessage (sendMessageID, e) {
		e.preventDefault()
		const content = e.target[0].value
		console.log(content)
		const response = await fetch(`${BASE_URl}/api/${COHORT}/posts/${sendMessageID}/messages`, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('token')}`
			},body: JSON.stringify({
				message: {
					content
				}
			})
		})
		const data = await response.json();
		console.log(data)
	}
	
    return (
        <>
        {props.isLoggedIn ?
		    <form className="sendMessage" onSubmit={(e) => {handleMessage(singlePost, e)}}>
			    <label htmlFor="messageBox">What would you like to say?</label>
			    <input id="messageBox" type="text" required />
			    <button type="submit"> Submit </button>
		    </form>
        : <h2>Please log in to send a message.</h2>
        }

</>
)
}

export default SendMessage