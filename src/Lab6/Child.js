import React, { Component } from 'react'

export class Child extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             price:0.0
        }
    }
    
    componentWillMount(){
        console.log('component will mount')
 
    }
    componentDidMount(){
        console.log('Component did mount')
        this.setState({name:''})
        this.setState({price:0.0})
    }
    
    render() {
        return (
            <div>
                <h3>child component</h3>
            </div>
        )
    }
}

export default Child
