

function UserStatus({ status, userName = 'User' }) {
  return (
    <div>
      {status === 'loggedIn' ? (
        <h1>Welcome back, {userName}!</h1>
      ) : status === 'guest' ? (
        <h1>Welcome, guest!</h1>
      ) : (
        <h1>Please log in.</h1>
      )}
    </div>
  );
}

export default UserStatus;