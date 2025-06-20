import classes from './Auth.module.css';
import {useDispatch } from 'react-redux';
import { authActions } from './Store/index';
const Auth = () => {
  const dispatch = useDispatch();
  function loginHandler(){
    dispatch(authActions.login());
    console.log('user Login !');
  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button type='button' onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
