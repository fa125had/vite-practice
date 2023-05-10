import './App.scss';
import { SignUp } from '../Auth/SignUp/SignUp';
import { SignIn } from '../Auth/SignIn/SignIn';
// import { useState } from 'react';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const checkAuthentication = () => {

  // }
  return (
    <div className='app-wrapper'>
      <h1>Pocket Counter</h1>
      <SignIn />
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
