import React from "react"; 
import { useNavigate } from 'react-router-dom'; 

const SendMessage = (props) => {
	const navigate = useNavigate()

	// async function handleSubmit (submit) {
	// submit.preventDefault();
	// const message = submit.target[0].value
	// const sendTheMessage = await @@@@@@(message)
	// navigate("/Posts")
	// }

    //Need to make a post function in the api/index.js that posts the message to the /me api? call on it where the @@@@@ symbols are.


    //Temporary handleSubmit function below
    async function handleSubmit (submit) {
        submit.preventDefault();
        console.log("the message form has been submitted")
    }

	return (
		<form className="sendMessage" onSubmit={handleSubmit}>
			<label htmlFor="messageBox">What would you like to say?</label>
			<input id="messageBox" type="text" required />
			<button type="submit"> Submit </button>
		</form>
	)

}

export default SendMessage