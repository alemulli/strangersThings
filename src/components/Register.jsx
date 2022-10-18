import React, {useState} from "react"



const Register = () => {
const [newUsername, setNewUsername] = {}
const [newPassword, setNewPassword] = {}



const clickRegister = (event) => {
  event.preventDefault();
fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/register', {
 
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: state.newUsername,
      password: state.newPassword
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}

  return <form>
    <label for='username'>
    Username:
    </label>
    <input type="text" id="username" name="username" placeholder="Username Here" onChange={setNewUsername} />
    <label for='password'> Password:
    </label>
    <input type='password' id='password' name='password' placeholder="Password Here" onChange={setNewPassword} />
    <button type='submit' onClick={clickRegister}> Submit </button>
    
  </form>

}






export default Register;