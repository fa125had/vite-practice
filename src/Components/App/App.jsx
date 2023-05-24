import './App.scss'

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { SignUp } from '../Auth/SignUp/SignUp'
import { SignIn } from '../Auth/SignIn/SignIn'
import { Root } from '../Root/Root'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='login' element={<SignIn />} />
      <Route path='register' element={<SignUp />} />
    </Route>,
  ),
)

function App() {
  return (
    <div className='app-wrapper'>
      <RouterProvider router={router}>
        <Root />
      </RouterProvider>
    </div>
  )
}

export default App
