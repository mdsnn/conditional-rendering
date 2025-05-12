import { useState } from 'react';
import UserStatus from './UserStatus';
import './App.css';

function App() {
  const [status, setStatus] = useState('loggedOut');

  const toggleStatus = () => {
    if (status === 'loggedOut') {
      setStatus('loggedIn');
    } else if (status === 'loggedIn') {
      setStatus('guest');
    } else {
      setStatus('loggedOut');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      toggleStatus();
    }
  };

  return (
    <div>
      <UserStatus status={status} userName="Alice" />
      <button
        onClick={toggleStatus}
        onKeyDown={handleKeyDown}
        style={{
          backgroundColor:
            status === 'loggedIn' ? 'red' : status === 'guest' ? 'blue' : 'green',
          color: 'white',
          margin: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        {status === 'loggedIn' ? 'Log out' : status === 'guest' ? 'Switch to user' : 'Log in'}
      </button>
    </div>
  );
}

export default App;