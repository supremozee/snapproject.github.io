import React, { useState, useEffect, useReducer} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
const emailReducer = (state, actions)=> {
  if(actions.type === "USER_INPUT") {
    return  {
      value: actions.val,
      isValid: actions.val.includes("@")
     }
  }
  if(actions.type === "INPUT_BLUR") {
    console.log(state.value)
    return {value:state.value, isValid: state.value.includes("@")}
  }
  return {value: "", isValid: false}
    }
  

const [emailState, dispatchEmail] = useReducer(emailReducer, {value: "", isValid: null})
const passwordReducer = (state, actions)=> {
  if(actions.type === "INPUT_PASSWORD") {
    return {
      value: actions.val,
      isValid: false
    }
  }
  if(actions.type === "INPUT_BLUR") {
    console.log(state.value)
    return {
      value: state.value,
      isValid: state.value.includes("@")
    }
  }
return {
  value: "",
  isValid: false
}
}
const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: "", isValid: null} )
  useEffect(()=> {
    const identifier = setTimeout(()=> {
      setFormIsValid(emailState.isValid && passwordState.value.trim().length > 6)
      return ()=> {
        clearTimeout(identifier)
      }
    }, 500)
  })
//side effect is used to handle side effect, most importantly http request or side efffects like input validity 

  const emailChangeHandler = (event) => {
    dispatchEmail({type: "USER_INPUT", val: event.target.value})
    // setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: "INPUT_PASSWORD", val: event.target.value})
    // setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: "INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: "INPUT_BLUR"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid=== false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
