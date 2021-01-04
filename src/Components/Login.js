import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:'',
        }
    }
    handleUsernameChange=(e)=>{
        this.setState({username:e.target.value})
    }
    handlePasswordChange=(e)=>{
        this.setState({password:e.target.value})
    }
    handleSubmit=e=>{
        alert(`${this.state.username} ${this.state.password}`)
    }
    render() {
        return (
          <div>
            <div className="App">
            
            <h3 className='text-center'>Log-in to your account</h3>
            <div className="card-body">
            <form onSubmit={this.handleSubmit}>
                
            <div className="form-group">
                <label>Username</label>
                <input type='text' class="form-control" value={this.state.username} placeholder="Enter email address"onChange={this.handleUsernameChange}></input>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input class="form-control" value={this.state.password} placeholder="Enter password" onChange={this.handlePasswordChange}></input>
            </div>
            <button type='submit'>Login</button>
            </form>
            </div>
            </div><div className="App">
            <p href='#'>New to use? Sign Up</p>
            </div>
            </div>

            
            
        )
    }
}

export default Login
