import React from "react"; 
import { useNavigate } from 'react-router-dom'; 

const BASE_URl = "https://strangers-things.herokuapp.com"
const COHORT = "2209-FTB-ET-WEB-FT"

const SendMessage = (props) => {
	const navigate = useNavigate()
	const singlePost = props.singlePost

	async function handleMessage (sendMessageID, e) {
		e.preventDefault()
		const content = e.target[0].value
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
        navigate("/Posts")
	}
	
    return (
        <div className="submissionFormContainer">
        {props.isLoggedIn ?
		    <form className="submissionForm" onSubmit={(e) => {handleMessage(singlePost, e)}}>
                <h3>Send a Message</h3>
			    <label htmlFor="messageBox">What would you like to say?</label>
			    <input id="messageBox" type="text" required />
			    <button className="submitButton" type="submit"> Submit </button>
		    </form>
        : <h2>Please log in to send a message.</h2>
        }
        </div>
    )
}

export default SendMessage