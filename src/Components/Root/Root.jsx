import { Outlet, Link } from 'react-router-dom'
import {useState} from 'react'

export const Root = () => {
  const [loginPrompt, setLoginPrompt] = useState(true)

  const handleLoginClick = () => {
    setLoginPrompt(false);
  }

  return (
    <div>
      <h1>Pocket Counter</h1>
      <h2>Welcome</h2>
      {loginPrompt && 
      <>
        <p>Please<Link to='/login' onClick={handleLoginClick}> Login </Link>to your account!</p>
        <p>Or if you don&apos;t have one,<Link to='/register' onClick={handleLoginClick}> Create one</Link>!</p>
      </>
        
          }
      <Outlet />
    </div>
  )
}
