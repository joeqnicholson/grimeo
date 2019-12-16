import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logoutUser, openModal }) => {
  // debugger; // check props
  const display = currentUser ? (
    <div class="nav-links">
      
      <div class='left-side'>
        <div>
          <Link to={`/watch`}>
            <button class='logged-in-watch'>
              Watch
            </button>
          </Link>
          </div>
      </div>
      <div class='right-side'>
        <div class='search'><input class='greet-search'type="text" placeholder='Search'/></div>
        <div class="dropdown">
        <div><button class='user-dropdown'><i class="fas fa-skull"></i></button></div>
          <div class="dropdown-content">
            <div class='dropdown-user'>{currentUser.username}</div>
            <a class='dropdown-link' href="#">Videos</a>
            <a class='dropdown-link'href="#" onClick={logoutUser}>Log out</a>
          </div>
        </div>
          
        <div><button class='upload'><i class="fas fa-cloud-upload-alt"></i> 
        <Link to={`/upload`} class='upload-link'> Upload</Link>
        </button></div>
      </div>
    </div>
    
  ) : (
    <div class="nav-links">
      <div class='left-side'>
       <div><button class='signup' onClick={() => openModal('signup')}>Join</button></div>
       <div><button class='login' onClick={() => openModal('login')}>Log in</button></div>
       <div>
        <Link to={`/watch`}>
         <button class='watch'>
           Watch
           </button>
         </Link>
       </div>
      </div>  
       
      <div class='right-side'>
        <div class='search'><input class='greet-search'type="text" placeholder='Search'/></div>
        <div><button class="upload" onClick={() => openModal('signup')}><i class="fas fa-cloud-upload-alt"></i> Upload</button></div>
       </div>
    </div>
  );

  return (
    <div class='greeting'>
      <div>
          <Link class="logo" to={`/`}>grimeo</Link>
      </div>
      {display}
    </div>
  )
};

































// import React from 'react';
// import { Link } from 'react-router-dom';

// export default ({ currentUser, logoutUser, openModal }) => {
//   // debugger; // check props
//   const display = currentUser ? (
//     <div class="nav-links">
      
//       <div class='left-side'>
//         <div><button class='watch'>Watch</button></div>
//       </div>
//       <div class='right-side'>
//         <div class='search'><input type="text" placeholder='Search'/></div>
//         <div><button class='user-dropdown' onClick={logoutUser}><i class="fas fa-skull"></i></button></div>
          
//         <div><button class='upload'><i class="fas fa-cloud-upload-alt"></i> Upload</button></div>
//       </div>
//     </div>
    
//   ) : (
//     <div class="nav-links">
//       <div class='left-side'>
//        <div><button class='signup' onClick={() => openModal('signup')}>Join</button></div>
//        <div><button class='login' onClick={() => openModal('login')}>Log in</button></div>
//        <div><button class='watch'>Watch</button></div>
//       </div>  
       
//       <div class='right-side'>
//         <div class='search'><input type="text" placeholder='Search'/></div>
//         <div><button class="upload" onClick={() => openModal('signup')}><i class="fas fa-cloud-upload-alt"></i> Upload</button></div>
//        </div>
//     </div>
//   );

//   return (
//     <div class='greeting'>
//       <div class="logo">
//           <Link>grimeo</Link>
//       </div>
//       {display}
//     </div>
//   )
// };