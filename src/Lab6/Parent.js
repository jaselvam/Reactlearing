import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
            price:0.0
        }
    }
    componentWillMount(){
        console.log('component loaded')
        this.setState({name:'TV'})
        this.setState({price:30000})
    }
    componentDidMount(){
        console.log('Component mounted')
        console.log(this.state.name)
        console.log(this.state.price)
    }
    
    render() {
        return (
            <div>
                <h3>Lab6</h3>
                <p>Name:<b>{this.state.name}</b></p>
                <p>Price:<b>{this.state.price}</b></p>
                <Child/>
            </div>
        )
    }
}

export default Parent
