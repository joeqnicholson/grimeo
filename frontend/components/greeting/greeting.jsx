import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logoutUser, openModal }) => {
  // debugger; // check props
  const display = currentUser ? (
    
      <button onClick={logoutUser}>Log Out</button>
    
  ) : (
    <div>
       <button onClick={() => openModal('login')}>Login</button>
       <button onClick={() => openModal('signup')}>Signup</button>
    </div>
  );

  return (
    <div class='greeting'>
      <div class="logo">
          <Link>grimeo</Link>
      </div>
        {display}
    </div>
  )
};