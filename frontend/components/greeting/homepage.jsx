import React from 'react'

class Homepage extends React.Component{
    render(){
        return(
            <div class='main-text'>
                <h1 class='help'>Grimeo can help*.</h1>
                <div class='lil-text'>*with spooky collaboration, viewing ghouls, goblins everything else.</div>
                <div class='button-container'>
                    <div class='homepage-buttons'>
                        <button class='homepage-button-demo'>Demo Login</button>
                        <button class='homepage-button-signup'>Sign Up</button>
                    </div>
                </div>
            </div>
        )
    }

}
export default Homepage;