import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logoutUser }) => {
  // debugger; // check props
  const display = currentUser ? (
    
      <button onClick={logoutUser}>Log Out</button>
    
  ) : (
    <div>
      <Link to="/signup">Join</Link>
      <Link to="/login">Log In</Link>
    </div>
  );

  return (
    <div class='greeting'>
      <div class="logo">
          <Link>grimeo</Link>
      </div>
      {/* <ul class='greeting-list'> */}
        {display}
      {/* </ul> */}
    </div>
  )
};