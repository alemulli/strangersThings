import React from 'react';

const Login = (props) =>{
    return (<form>
    <label for='username'>
    Username:
    </label>
    <input type="text" id="username" name="username" placeholder="Username Here" onChange={setNewUsername} />
    <label for='password'> Password:
    </label>
    <input type='password' id='password' name='password' placeholder="Password Here" onChange={setNewPassword} />
    <button type='submit' onClick={clickRegister}> Submit </button>
  </form>)
}

export default Login