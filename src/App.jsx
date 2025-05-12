
import { useState } from 'react';
import './App.css'
import UserStatus from './UserStatus'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
    <div>
      
      <UserStatus isLoggedIn={isLoggedIn} userName="Mwiko" />

      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </div>

    </>
  )
}

export default App
