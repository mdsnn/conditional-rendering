import React from 'react'

const UserStatus = ({isLoggedIn, userName = 'User'}) => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back, {userName}!</h1> : <h1>Please log in.</h1>}
    </div>
  )
}

export default UserStatus
