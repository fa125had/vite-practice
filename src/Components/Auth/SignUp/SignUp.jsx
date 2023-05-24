import styles from '../styles/authenticationForms.module.scss'
import { useState } from 'react'
import { auth } from '../../../util/Firebase'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { Link } from 'react-router-dom'

export const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const changeHandler = ({ target }) => {
    const { name, value } = target
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const signUp = submit => {
    submit.preventDefault()
    const signupForm = document.getElementById('signUp__form')
    setIsLoading(true)
    setError(null)
    signupForm.style.pointerEvents = 'none'
    createUserWithEmailAndPassword(auth, email, password)
      .then(response => {
        setEmail('')
        setPassword('')
        setError('account created!')
        setIsLoading(false)
        signupForm.style.pointerEvents = 'auto'

        return response
      })
      .catch(err => {
        const errorCode = err.code
        // const errorMessage = err.message;
        const errorOutput = ` ${errorCode}`
        setError(errorOutput)
        setIsLoading(false)
        signupForm.style.pointerEvents = 'auto'
      })
  }

  return (
    <div className={styles.authenticationForm__wrapper}>
      <form
        onSubmit={signUp}
        id='signUp__form'
        className={styles.authenticationForm__form}>
        <h2 className={styles.authenticationForm__header}>
          Create New Account
        </h2>
        <label className={styles.authenticationForm__label} htmlFor='email'>
          Email:
        </label>
        <input
          type='email'
          name='email'
          id='signUp__email'
          className={styles.authenticationForm__input}
          placeholder='Enter Your Email'
          value={email}
          onChange={changeHandler}
        />

        <label className={styles.authenticationForm__label} htmlFor='password'>
          Password:
        </label>
        <input
          type='password'
          name='password'
          id='signUp__password'
          className={styles.authenticationForm__input}
          placeholder='Enter Your Password'
          value={password}
          onChange={changeHandler}
        />
        <button className={styles.authenticationForm__button} type='submit'>
          Sign Up
        </button>
      </form>
      {error && (
        <div className={styles.authenticationForm__errorOutput}>{error}</div>
      )}
      {isLoading && (
        <div className={styles.authenticationForm__errorOutput}>Loading...</div>
      )}
      <div>
        <p>
          Already have an account? <Link to='/login'>Login</Link> here.
        </p>
      </div>
    </div>
  )
}
