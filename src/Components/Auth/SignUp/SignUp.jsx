import './SignUp.scss';
import { useState } from 'react';
import { auth } from '../../../util/Firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
const signupForm = document.getElementsByTagName('form');

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signup = (submit) => {
    submit.preventDefault();
    setIsLoading(true);
    setError(null);
    signupForm[0].style.pointerEvents = 'none';
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setEmail('');
        setPassword('');
        setError('');
        setIsLoading(false);
        signupForm[0].style.pointerEvents = 'auto';

        return response;
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        const errorOutput = `${errorMessage} ${errorCode}`;
        setError(errorOutput);
        setIsLoading(false);
        signupForm[0].style.pointerEvents = 'auto';
      });
  };

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <>
      <form onSubmit={signup}>
        <fieldset>
          <legend>Create New Account</legend>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter Your Email'
            value={email}
            onChange={changeHandler}
          />

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter Your Password'
            value={password}
            onChange={changeHandler}
          />
          <button type='submit'>SignUp</button>
        </fieldset>
      </form>
      {error && <div className='errorOutput'>{error}</div>}
      {isLoading && <div className='errorOutput'>Loading...</div>}
    </>
  );
};
