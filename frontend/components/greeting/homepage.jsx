import React from 'react'

class HomePage extends React.Component{
    constructor(props){
        super(props)
        this.demoUser = this.demoUser.bind(this)
        
    }
    demoUser(){
        function randomStr(len, arr) { 
          var ans = ''; 
          for (var i = len; i > 0; i--) { 
            ans +=  
            arr[Math.floor(Math.random() * arr.length)]; 
          } 
          return ans; 
        } 
        const str = "1234567890qwertyuiopasdfghjklzxcvbnm"
        this.props.signup({username: 'Ada Lovelace' + randomStr(10, str), password:'password'})
      }
    render(){
        return(
            <div class='main-text'>
                <h1 class='help'>Grimeo can help*.</h1>
                <div class='lil-text'>*with spooky collaboration, viewing ghouls, goblins and everything else.</div>
                {!this.props.currentUser ?
                    <div class='button-container'>
                        <div class='homepage-buttons'>
                            <button class='homepage-button-demo' onClick={this.demoUser}>Demo Login</button>
                            <button class='homepage-button-signup' onClick={this.props.otherForm}>Sign Up</button>
                        </div>
                    </div>
                    :
                    <div></div>
                }    
            </div>
        )
    }
}
export default HomePage;