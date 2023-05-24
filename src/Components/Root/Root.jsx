import { Outlet, Link } from 'react-router-dom'

export const Root = () => {
  return (
    <div>
      <h1>Pocket Counter</h1>
      <h2>Welcome</h2>
      <p>Please<Link to='/login'> Login </Link>to your account!</p>
      <Outlet />
    </div>
  )
}
