import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logoutUser, openModal }) => {
  // debugger; // check props
  const display = currentUser ? (
    <div class="nav-links">
      <div class='left-side'>
        <div><button class='watch'>Watch</button></div>
      </div>
      <div class='right-side'>
        <div class='search'><input type="text" placeholder='Search'/></div>
        <div><button class='user-dropdown' onClick={logoutUser}>O</button></div>
        <div><button class='upload'>Upload</button></div>
      </div>
    </div>
    
  ) : (
    <div class="nav-links">
      <div class='left-side'>
       <div><button class='signup' onClick={() => openModal('signup')}>Signup</button></div>
       <div><button class='login' onClick={() => openModal('login')}>Login</button></div>
       <div><button class='watch'>Watch</button></div>
      </div>  
       
      <div class='right-side'>
        <div class='search'><input type="text" placeholder='Search'/></div>
        <div><button class="upload" onClick={() => openModal('signup')}>Upload</button></div>
       </div>
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