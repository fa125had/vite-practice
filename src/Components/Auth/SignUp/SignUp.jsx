import './SignUp.scss';
import { useState } from 'react';
import {auth} from '../../../util/Firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signup = submit => {
    submit.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCred => {
      console.log(userCred);
    }).catch(err => {
      const errorCode = err.code;
      const errorMessage = err.message;
      const errorOutput = `${errorMessage} ${errorCode}`;
      setError(errorOutput);
    })
  }

  const changeHandler = ({target}) => {
    const {name, value} = target;
    if(name === 'email') {
      setEmail(value);
    } else if(name === 'password') {
      setPassword(value);
    }
  }

  return (
    <>
      <form onSubmit={signup}>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Enter Your Email'
          value={email}
          onChange={changeHandler}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Enter Your Password'
          value={password}
          onChange={changeHandler}
        />
        <button type="submit">Login</button>
      </form>
      {error && <div className="errorOutput">{error}</div>}
    </>
  );
};
