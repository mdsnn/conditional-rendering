
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

      <button onClick={toggleLogin}
       style={{
          backgroundColor: isLoggedIn ? 'red' : 'green',
          color: 'white',
          margin: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '4px'
        }}
      
      >
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
    </div>

    </>
  )
}

export default App
