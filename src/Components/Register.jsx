import React, { Component } from 'react'

export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fname:'',
            lname:'',
             email: '',
             password: '',
             cpassword:'',
        }
    }
    handleFname = (event)=>{
        this.setState({
            fname: event.target.value
        })
    }
    handleLname = (event)=>{
        this.setState({
            lname: event.target.value
        })
    }
    
    handleEmail = (event)=>{
        this.setState({
            email: event.target.value
        })
    }
     
    handlePassword = (event)=> {
        this.setState({
            password: event.target.value
        })
    }
    handleConfimPassword = (event)=>{
        this.setState({
            cpassword: event.target.value
        })
    }
    handleSubmit = event =>{
        alert(`Register Successfully`)
    }
    render() {
        return (
            <div className='col-md-6 col-md-offset-3'>
                <h3>------------Register--------------</h3>
                <p className="janani"> create your account its free and only takes a minute</p>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                  <input type='text' placeholder="First Name"  value={this.state.fname} onChange={this.handleFname}/>
                  <input type='text' placeholder="Last Name"  value={this.state.lname} onChange={this.handleLname}/>
             </div>
              <div className="form-group">
                  <input type='text' placeholder="E-mail address"  value={this.state.email} onChange={this.handleEmail}/>
            </div>
            <div className="form-group"> 
                    <input type='text' placeholder="Password" value={this.state.password} onChange={this.handlePassword}/>
            </div>
            <div className="form-group">    
                    <input type='text' placeholder=" Confirm Password" value={this.state.cpassword} onChange={this.handleConfimPassword}/>
             </div>
             <div className="janani"> 
            <input type="checkbox"/><label>I accept the terms of use and privacy policy</label>
            </div >
                <button type="submit">Register Now</button>
            </form>
            </div>
           
        )
    }
}

export default Register