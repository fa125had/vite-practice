import './SignUp.scss';
import { useState } from 'react';
import { auth } from '../../../util/Firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const signup = (submit) => {
    submit.preventDefault();
    const signupForm = document.getElementById('signup-form');
    setIsLoading(true);
    setError(null);
    signupForm.style.pointerEvents = 'none';
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setEmail('');
        setPassword('');
        setError('account created!');
        setIsLoading(false);
        signupForm.style.pointerEvents = 'auto';

        return response;
      })
      .catch((err) => {
        const errorCode = err.code;
        // const errorMessage = err.message;
        const errorOutput = ` ${errorCode}`;
        setError(errorOutput);
        setIsLoading(false);
        signupForm.style.pointerEvents = 'auto';
      });
  };

  return (
    <div className='signup-wrapper'>
      <form
        onSubmit={signup}
        id='signup-form'>
        <h2>Create New Account</h2>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          id='signup-email'
          placeholder='Enter Your Email'
          value={email}
          onChange={changeHandler}
        />

        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          id='signup-password'
          placeholder='Enter Your Password'
          value={password}
          onChange={changeHandler}
        />
        <button type='submit'>SignUp</button>
      </form>
      {error && <div className='errorOutput'>{error}</div>}
      {isLoading && <div className='errorOutput'>Loading...</div>}
    </div>
  );
};
