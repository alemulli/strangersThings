import React,{useState} from "react"



const Register = () => {
const [newUser,setNewUser] = useState(null)


fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/users/register', {
 
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: "batman34",
      password: 'theDarkestKnight'
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);

  return <form>
    <label>
    Username:
    </label>
    <input type="text" id="name" name="name" placeholder="Username Here"></input>
    
  </form>


}

export default Register;