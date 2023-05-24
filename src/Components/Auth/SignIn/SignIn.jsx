import styles from '../styles/authenticationForms.module.scss'
import { auth } from '../../../util/Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const SignIn = () => {
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
  const signIn = submit => {
    submit.preventDefault()
    const signInForm = document.getElementById('signIn__form')
    setIsLoading(true)
    setError(null)
    signInForm.style.pointerEvents = 'none'

    signInWithEmailAndPassword(auth, email, password)
      .then(response => {
        setEmail('')
        setPassword('')
        setError('Login Successful!')
        setIsLoading(false)

        signInForm.style.pointerEvents = 'auto'

        return response
      })
      .catch(err => {
        const errorCode = err.code
        // const errorMessage = err.message;
        const errorOutput = `${errorCode}`
        setError(errorOutput)
        setIsLoading(false)
        signInForm.style.pointerEvents = 'auto'
      })
  }

  return (
    <div className={styles.authenticationForm__wrapper}>
      <form
        onSubmit={signIn}
        id='signIn__form'
        className={styles.authenticationForm__form}>
        <h2 className={styles.authenticationForm__header}>
          Login To Your Account!
        </h2>
        <label className={styles.authenticationForm__label} htmlFor='email'>
          Email:
        </label>
        <input
          type='email'
          name='email'
          id='signIn__email'
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
          id='signIn__password'
          className={styles.authenticationForm__input}
          placeholder='Enter Your Password'
          value={password}
          onChange={changeHandler}
        />
        <button className={styles.authenticationForm__button} type='submit'>
          Sign In
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
          Or <Link to='/register'>Register</Link> if you do not have an account.
        </p>
      </div>
    </div>
  )
}
