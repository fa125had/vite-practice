import './SignIn.scss';
import { auth } from '../../../util/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => console.log(userCred))
      .catch((err) => console.log(err));
  };

  return (
    <div className='signin-wrapper'>
      <form onSubmit={signin}>
        <h2>Login to your Account</h2>
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
        <button type='submit'>Login</button>
      </form>
      {/* {error && <div className='errorOutput'>{error}</div>} */}
      {/* {isLoading && <div className='errorOutput'>Loading...</div>} */}
    </div>
  );
};
