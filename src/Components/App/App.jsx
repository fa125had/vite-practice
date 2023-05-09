import './App.scss';
import { SignUp } from '../Auth/SignUp/SignUp';
// import { useState } from 'react';

function App() {
  
  return (
    <div className='app-wrapper'>
      <h1>Pocket Counter</h1>
      <SignUp />
    </div>
  );
}

export default App;
