
import { useState ,useRef } from "react";

export default function Login() {
  const [enteredValue , setEnteredValue] = useState({
    email : '',
    pass : ''
  });
  const email = useRef();
  const pass = useRef();
  function handleSubmit(event){
    event.preventDefault()
    setEnteredValue( prev => ({
      ...prev ,
      email : email.current.value ,
      pass : pass.current.value
    }))

    console.log('submited');
   
  }
  
   console.log(`emial : ${enteredValue.email} password : ${enteredValue.pass}`);
  return (
    
    <form  onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email"  ref={email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"  ref={pass}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
