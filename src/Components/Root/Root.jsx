import { Outlet } from 'react-router-dom'

export const Root = () => {
  return (
    <div>
      <h1>Pocket Counter</h1>
      <h2>Welcome</h2>
      <Outlet />
    </div>
  )
}
