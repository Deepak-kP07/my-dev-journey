
import { useState } from "react";

export default function Login() {
  // const[email , setEmail] = useState('');
  // const[pass , setPass] = useState('');
  const [enteredValue , setEnteredValue] = useState({
    email : '',
    pass : ''
  })
  function handleChange (identifer,event){
      setEnteredValue (preValues => ({
      ...preValues,
      [identifer] : event.target.value
     }))
    }
 

  function handleSubmit(e){
      e.preventDefault();
      console.log('submited')
      console.log(`emial : ${enteredValue.email} password : ${enteredValue.pass}`);
    }
  
  
 
  return (
    
    <form  onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" value={enteredValue.email} onChange={(event)=>{handleChange('email' ,event)}} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" value={enteredValue.pass} onChange={(event)=>{handleChange('pass' ,event)}} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
