import './SignIn.scss';
import { auth } from '../../../util/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

export const SignIn = () => {
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
  const signin = (submit) => {
    submit.preventDefault();
    const signinForm = document.getElementById('signin-form');
    setIsLoading(true);
    setError(null);
    signinForm.style.pointerEvents = 'none';

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setEmail('');
        setPassword('');
        setError('');
        setIsLoading(false);
        signinForm.style.pointerEvents = 'auto';

        return response;
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        const errorOutput = `${errorMessage} ${errorCode}}`;
        setError(errorOutput);
        setIsLoading(false);
        signinForm.style.pointerEvents = 'auto';
      });
  };

  return (
    <div className='signin-wrapper'>
      <form
        onSubmit={signin}
        id='signin-form'>
        <h2>Login to your Account</h2>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          id='signin-email'
          placeholder='Enter Your Email'
          value={email}
          onChange={changeHandler}
        />

        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          id='signin-password'
          placeholder='Enter Your Password'
          value={password}
          onChange={changeHandler}
        />
        <button type='submit'>Login</button>
      </form>
      {error && <div className='errorOutput'>{error}</div>}
      {isLoading && <div className='errorOutput'>Loading...</div>}
    </div>
  );
};
